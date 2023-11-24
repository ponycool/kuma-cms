<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 15:33
 */
declare(strict_types=1);

namespace App\Controllers;

use App\Enums\Setting;
use App\Traits\TemplateTrait;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;
use Psr\Log\LoggerInterface;

class Web extends Base
{
    use TemplateTrait;

    // 模版
    protected string $template;

    // 主题
    protected ?string $theme;

    // 全局数据
    protected array $data;

    // 页面标题
    protected string $title;
    // 页面描述
    protected string $description;
    // 关键词
    protected string $keywords;

    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger): void
    {
        parent::initController($request, $response, $logger);

        // 设置默认模版
        $this->setTemplate('Home');

        // 设置默认主题
        $this->setTheme(self::getSettings()[Setting::theme->value] ?? 'default');

        // 设置全局数据
        $this->setData([]);

        // 初始化页面数据
        $this->setTitle('')
            ->setDescription('')
            ->setKeywords('');

        // 开发环境下需热同步静态资源
        if ('development' === ENVIRONMENT) {
            $this->syncStaticAssets($this->getTheme());
        }
    }

    public function getTemplate(): string
    {
        return $this->template;
    }

    public function setTemplate(string $template): Web
    {
        $this->template = $template;
        return $this;
    }

    public function getTheme(): ?string
    {
        return $this->theme;
    }

    public function setTheme(?string $theme): Web
    {
        $this->theme = $theme;
        return $this;
    }

    public function getData(): array
    {
        return $this->data;
    }

    public function setData(array $data): Web
    {
        $this->data = $data;
        return $this;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title): Web
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $description): Web
    {
        $this->description = $description;
        return $this;
    }

    public function getKeywords(): string
    {
        return $this->keywords;
    }

    public function setKeywords(string $keywords): Web
    {
        $this->keywords = $keywords;
        return $this;
    }

    /**
     * 渲染模版
     * @param array $data
     */
    protected function render(array $data = []): void
    {
        try {
            if (is_null($this->getTemplate())) {
                throw new Exception('未正确设置模版');
            }

            $viewPath = $this->themePath . $this->getTheme();

            // 检查模版是否存在
            if (!self::templateExists($viewPath, $this->getTemplate())) {
                throw new Exception('未找到模版文件');
            }

            $pageData = [
                'title' => $this->getTitle(),
                'description' => $this->getDescription(),
                'keywords' => $this->getKeywords()
            ];
            $data = array_merge(self::getData(), $pageData, $data);
            $this->templateRender($viewPath, $this->getTemplate(), $data, true);
        } catch (Exception $e) {
            log_message('error', 'error: {exception}',
                ['exception' => $e]
            );
            $this->error(500, $e->getMessage());
        }
    }

    /**
     * 渲染错误页面
     * @param int $code 错误代码
     * @param string|null $content 错误内容
     * @return never
     */
    protected function error(int $code = 404, ?string $content = null): never
    {
        // 记录系统异常
        log_message('error', '系统异常，code：{code},content：{content}；', [
            'code' => $code,
            'content' => $content
        ]);

        $this->setTitle((string)$code)
            ->setDescription('')
            ->setKeywords('');

        $template = match ($code) {
            403 => '403',
            404 => '404',
            500 => '500'
        };
        $template = 'errors/' . $template;
        $data = array_merge($this->data, [
            'content' => $content
        ]);
        $viewPath = APPPATH . 'Views';
        $this->templateRender($viewPath, $template, $data, true);
        exit();
    }
}