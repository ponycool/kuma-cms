<?php

/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 09:50
 */
declare(strict_types=1);

namespace App\Traits;

use Generator;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Loader\FilesystemLoader;
use Twig\Extension\DebugExtension;
use Twig\Node\Expression\AssignNameExpression;
use Twig\Node\Expression\NameExpression;
use Twig\Node\ForNode;
use Twig\Node\IfNode;
use Twig\Node\IncludeNode;
use Twig\Node\ModuleNode;
use Twig\Node\Node;
use Twig\Source;

trait TemplateTrait
{
    // 模版前缀
    protected string $templateSuffix = '.twig';

    /**
     * 渲染模板
     * @param string $viewPath 模板路径
     * @param string $view 模板文件
     * @param array $data 渲染数据
     * @param bool $display 是否显示到页面
     * @return string|void
     */
    public function templateRender(string $viewPath, string $view, array $data = [], bool $display = false)
    {
        $twig = $this->getTemplateEnvironment($viewPath);
        if ('production' !== \ENVIRONMENT) {
            $twig->addExtension(new DebugExtension());
        }
        try {
            $template = $twig->load($view . $this->templateSuffix);
            if ($display) {
                $template->display($data);
            } else {
                return $template->render($data);
            }
        } catch (LoaderError $e) {
            $this->templateError($e->getCode(), $view, '模板加载错误');
        } catch (RuntimeError $e) {
            $this->templateError($e->getCode(), $view, '模板运行错误');
        } catch (SyntaxError $e) {
            $this->templateError($e->getCode(), $view, '模板语法错误');
        }

        // 如果未退出则会渲染DebugBar
        if (!CI_DEBUG) {
            exit();
        }
    }

    /**
     * 获取模版中的变量
     * @param string|null $viewPath 模版路径
     * @param string|null $view 模版
     * @return array
     */
    public function getTemplateVariables(?string $viewPath = null, ?string $view = null): array
    {
        if (is_null($viewPath)) {
            $viewPath = APPPATH . 'Views';
        }
        if (is_null($view)) {
            $view = $this->getTemplate();
        }
        $twig = $this->getTemplateEnvironment($viewPath);
        if ('production' !== \ENVIRONMENT) {
            $twig->addExtension(new DebugExtension());
        }
        $viewSuffix = getenv('template.suffix') ?: '.twig';
        $variables = [];
        try {
            $source = $twig->getLoader()->getSourceContext($view . $viewSuffix);
            $tokens = $twig->tokenize($source);
            $ast = $twig->parse($tokens);
            // 从模版中推断变量树
            $variableTree = $this->inferTemplateVariablesFromAst($ast);
            foreach ($variableTree as $key => $value) {
                $variables[] = $key;
            }
            $incVariables = $this->getIncludeVariables($source, $twig);
            $variables = array_unique(array_merge($variables, $incVariables));
        } catch (LoaderError|SyntaxError $e) {
            log_message('error', '推断模版{template}变量时发生异常；error：{error}', [
                'template' => $view,
                'error' => json_encode($e)
            ]);
        }
        return $variables;
    }

    /**
     * 获取Include文件变量
     * @param Source $source
     * @param Environment $env
     * @return array
     */
    private function getIncludeVariables(Source $source, Environment $env): array
    {
        $incTemplates = $this->getIncludeTemplates($source, $env);
        $variables = [];
        foreach ($incTemplates as $tpl) {
            try {
                $incSource = $env->getLoader()->getSourceContext($tpl);
                $tokens = $env->tokenize($incSource);
                $ast = $env->parse($tokens);
                // 从模版中推断变量树
                $variableTree = $this->inferTemplateVariablesFromAst($ast);
                foreach ($variableTree as $key => $value) {
                    if (!in_array($key, $variables, true)) {
                        $variables[] = $key;
                    }
                }
            } catch (SyntaxError|LoaderError $e) {
                log_message('error', '推断模版{template}变量时发生异常；error：{error}', [
                    'template' => $tpl,
                    'error' => json_encode($e)
                ]);
            }

        }
        return $variables;
    }

    /**
     * 获取Include模版列表
     * @param Source $source
     * @param Environment $env
     * @return Generator
     */
    private function getIncludeTemplates(Source $source, Environment $env): Generator
    {
        // 定义一个空数组，用来存储变量
        $includeFiles = [];

        try {
            // 调用parse函数，获取模板的抽象语法树（AST）
            $ast = $env->parse($env->tokenize($source));
            $templates = self::findIncludeNodes($ast);

            if (count($templates) > 0) {
                // 遍历所有的include的文件名称
                foreach ($templates as $tpl) {
                    if (!in_array($tpl, $includeFiles, true)) {
                        $includeFiles[] = $tpl;
                        // 获取一个include的文件对象
                        // 使用resolveTemplate方法时，在linux和其他系统表现不一致，linux下无法获取到递归的模版列表
                        // $inc = $env->resolveTemplate($tpl);
                        $inc = $env->getLoader()->getSourceContext($tpl);
                        // 递归地调用自身，获取更深层次的include文件，并使用yield返回
                        yield from self::getIncludeTemplates($inc, $env);
                        yield $tpl;
                    }
                }
            }
        } catch (LoaderError|SyntaxError $e) {
            $this->templateError($e->getCode(), $tpl ?? null,
                is_null($tpl ?? null) ? '获取模板的抽象语法树时发生异常' : '模板加载错误');
        }
    }

    /**
     * 定义一个递归函数，遍历AST，找到include节点，并返回模版列表
     * @param $node
     * @return array
     */
    private function findIncludeNodes($node): array
    {
        $templates = [];
        // 如果节点是include节点，打印文件名
        if ($node instanceof IncludeNode) {
            $templates[] = $node->getNode('expr')->getAttribute('value');
        }
        // 如果节点有子节点，递归遍历子节点
        if ($node instanceof Node) {
            foreach ($node as $child) {
                $templates = array_merge($templates, self::findIncludeNodes($child));
            }
        }
        return $templates;
    }

    /**
     * 从AST中推断模版变量
     * @param ModuleNode $ast - An abstract syntax tree parsed from Twig
     * @return array - The variables used in the Twig template
     */
    private function inferTemplateVariablesFromAst(ModuleNode $ast): array
    {
        $keys = $this->visitTemplate($ast);
        foreach ($keys as $key => $value) {
            if ($value['always_defined'] || $key === '_self') {
                unset($keys[$key]);
            }
        }
        return $keys;
    }

    /**
     * 提取模版的变量树
     * @param Node $ast - The tree to traverse and extract variables
     * @return array - The variables found in this tree
     */
    private function visitTemplate(Node $ast): array
    {
        $vars = [];
        switch (get_class($ast)) {
            case AssignNameExpression::class:
            case NameExpression::class:
                $vars[$ast->getAttribute('name')] = [
                    'type' => get_class($ast),
                    'always_defined' => $ast->getAttribute('always_defined'),
                    'is_defined_test' => $ast->getAttribute('is_defined_test'),
                    'ignore_strict_check' => $ast->getAttribute('ignore_strict_check')
                ];
                break;
            case ForNode::class:
                foreach ($ast as $key => $node) {
                    switch ($key) {
                        case 'value_target':
                            $vars[$node->getAttribute('name')] = [
                                'for_loop_target' => true,
                                'always_defined' => $node->getAttribute('always_defined')
                            ];
                            break;
                        case 'body':
                            $vars = array_merge($vars, $this->visitTemplate($node));
                            break;
                        default:
                            break;
                    }
                }
                break;
            case IfNode::class:
                foreach ($ast->getNode('tests') as $test) {
                    $vars = array_merge($vars, $this->visitTemplate($test));
                }
                if ($ast->hasNode('else')) {
                    foreach ($ast->getNode('else') as $else) {
                        $vars = array_merge($vars, $this->visitTemplate($else));
                    }
                }
                break;
            default:
                if ($ast->count()) {
                    foreach ($ast as $node) {
                        $vars = array_merge($vars, $this->visitTemplate($node));
                    }
                }
                break;
        }
        return $vars;
    }

    /**
     * 判断模版文件是否存在
     * @param string $viewPath 模版路径
     * @param string $view 模版文件
     * @return bool
     */
    private function templateExists(string $viewPath, string $view): bool
    {
        $template = $viewPath . DIRECTORY_SEPARATOR . $view . $this->templateSuffix;
        return file_exists($template);
    }

    /**
     * 获取模版配置环境
     * @param string $viewPath
     * @return Environment
     */
    public function getTemplateEnvironment(string $viewPath): Environment
    {
        $loader = new FilesystemLoader($viewPath);
        $conf = [
            'cache' => WRITEPATH . 'cache/template',
            'debug' => false
        ];
        if ('production' !== \ENVIRONMENT) {
            $conf['debug'] = true;
        }
        return new Environment($loader, $conf);
    }

    /**
     * 渲染模版错误页面
     * @param int $code 错误代码
     * @param string|null $template 模版
     * @param string|null $content 错误内容
     */
    protected function templateError(int $code, ?string $template, ?string $content = null): void
    {
        // 记录系统异常
        log_message('error', '系统异常，code：{code},content：{content}；', [
            'code' => $code,
            'template' => $template,
            'content' => $content
        ]);

        $view = 'Error/Html/500';
        $data = [
            'content' => $content
        ];
        $viewPath = APPPATH . 'Views';
        $twig = $this->getTemplateEnvironment($viewPath);
        if ('production' !== \ENVIRONMENT) {
            $twig->addExtension(new DebugExtension());
        }
        try {
            $template = $twig->load($view . $this->templateSuffix);
            $template->display($data);
        } catch (LoaderError|RuntimeError|SyntaxError) {
            $response = [
                'message' => '系统异常，请联系系统管理员进行反馈'
            ];
            log_message('error', json_encode($response, 320));
            exit(json_encode($response, 320));
        }
    }
}