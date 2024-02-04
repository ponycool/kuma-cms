<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 14:26
 */

namespace App\Controllers;

use App\Enums\Code;
use App\Services\SettingService;
use App\Traits\CoreTrait;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Files\FileCollection;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Config\Services;
use Exception;
use OutOfRangeException;
use Psr\Log\LoggerInterface;

class Base extends BaseController
{
    use CoreTrait, ResponseTrait;

    protected readonly string $version;
    protected array $settings;

    // 主题路径
    protected readonly string $themePath;

    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger): void
    {
        parent::initController($request, $response, $logger);
        $this->version = 'v1.0.0';
        // 主题路径
        $this->themePath = APPPATH . 'Views/theme/';

        // 初始化配置
        self::initSettings();
    }

    public function getSettings(): array
    {
        return $this->settings;
    }

    public function setSettings(array $settings): Base
    {
        $this->settings = $settings;
        return $this;
    }

    /**
     * 同步静态资源
     * @param string $theme
     * @return void
     */
    protected function syncStaticAssets(string $theme): void
    {
        try {
            $themePath = $this->themePath . $theme;
            if (!file_exists($themePath)) {
                throw new Exception('主题目录不存在');
            }
            $staticDirList = [
                'css',
                'js',
                'img',
                'font'
            ];
            $files = new FileCollection();
            foreach ($staticDirList as $item) {
                $dir = FCPATH . $item;
                if (file_exists($dir) && is_dir($dir)) {
                    if (!is_writable($dir)) {
                        throw new Exception(sprintf('目录%s没有删除权限', $item));
                    }
                    $files->add($dir);
                }
            }
            // 清空静态文件目录
            foreach ($files as $file) {
                if ($file->getBasename() !== '.gitkeep') {
                    if (!unlink($file->getPathname())) {
                        throw new Exception(sprintf('删除文件%s失败', $file->getBasename()));
                    }
                }
            }
            // 复制静态文件到公共目录
            foreach ($staticDirList as $item) {
                $source = $themePath . DIRECTORY_SEPARATOR . $item;
                $dest = FCPATH . $item;
                if (file_exists($dest) && is_dir($dest)) {
                    $this->copyDirectory($source, $dest);
                }
            }
        } catch (Exception $e) {
            log_message('error', '同步静态资源失败，error：{err}', [
                'err' => $e->getMessage()
            ]);
        }
    }

    /**
     * 拷贝目录
     * @param $source
     * @param $destination
     * @return void
     */
    protected function copyDirectory($source, $destination): void
    {
        if (!is_dir($destination)) {
            mkdir($destination, 0755, true);
        }

        $dir = opendir($source);
        while (($file = readdir($dir)) !== false) {
            if ($file == '.' || $file == '..') {
                continue;
            }

            $sourceFile = $source . '/' . $file;
            $destinationFile = $destination . '/' . $file;

            if (is_dir($sourceFile)) {
                $this->copyDirectory($sourceFile, $destinationFile);
            } else {
                copy($sourceFile, $destinationFile);
            }
        }

        closedir($dir);
    }

    /**
     * 渲染数据
     * @param array|string $data
     * @return never
     */
    protected function render(array|string $data = []): never
    {
        $resp = [
            'OK' => 'OK',
            'code' => Code::OK,
            'message' => '',
            'data' => []
        ];
        if (is_string($data)) {
            $resp['message'] = $data;
        }
        if (is_array($data)) {
            $code = $data['code'] ?? Code::FAIL;
            try {
                if (!is_object($code)) {
                    throw new OutOfRangeException();
                }
                $resp['code'] = $code->value;
            } catch (OutOfRangeException $exc) {
                log_message('error', $exc->getMessage());
                $resp['code'] = Code::FAIL->value;
            }
            if ($resp['code']) {
                unset($resp['OK']);
            }
            $resp['message'] = $data['message'] ?? ($data['code'] ?? Code::FAIL)->name;
            unset($data['code']);
            unset($data['message']);
            if (!empty($data)) {
                $resp['data'] = $data;
            } else {
                unset($resp['data']);
            }
        }
        $this->respond($resp, 200)
            ->send();
        exit(Code::OK->value);
    }

    /**
     * POST过滤器
     */
    protected function postFilter(): void
    {
        $method = $this->request->getMethod();
        try {
            if ('POST' !== strtoupper($method)) {
                throw new Exception('请求方法受限，请使用POST方法提交请求', Code::METHOD_NOT_SUPPORTED->value);
            }
        } catch (Exception $exception) {
            $data = [
                'code' => Code::METHOD_NOT_SUPPORTED,
                'message' => $exception->getMessage(),
            ];
            $this->render($data);
        }
    }

    /**
     * 有效输入验证
     * @param array $rules
     */
    protected function validInput(array $rules): void
    {
        if ($this->isJsonRequest()) {
            $this->verifyJsonInputByRules($rules);
        } else {
            $this->verifyInputByRules($rules);
        }
    }

    /**
     * 是否为JSON请求
     * @return bool
     */
    protected function isJsonRequest(): bool
    {
        $contentType = $this->request->getHeaderLine('Content-Type');
        $validContentTypes = [
            'application/json',
            'application/json;charset=utf-8',
            'application/json;charset=UTF-8'
        ];
        if (in_array($contentType, $validContentTypes, true)) {
            return true;
        }
        return false;
    }

    /**
     * 判断是否是JSON
     * @param $str
     * @return bool
     */
    protected function isJsonStr($str): bool
    {
        if (is_string($str)) {
            @json_decode($str);
            return (json_last_error() === JSON_ERROR_NONE);
        }
        return false;
    }

    /**
     * 校验JSON输入
     * @param array $data
     */
    protected function verifyJsonInputByRules(array $data): void
    {
        try {
            if (!$this->isJsonRequest()) {
                throw new Exception('无效的Content-Type', Code::INVALID_HTTP_CONTENT_TYPE->value);
            }
            $rawInput = file_get_contents('php://input');
            if (strlen($rawInput) === 0) {
                throw new Exception('无效的JSON格式', Code::INVALID_JSON_FORMAT->value);
            }
            if (!$this->isJsonStr($rawInput)) {
                throw new Exception('无效的JSON格式', Code::INVALID_JSON_FORMAT->value);
            }
            $params = $this->request->getJSON(true);
            $validation = Services::validation();
            $errors = [];

            foreach ($data as $k => $v) {
                $param = $params[$k] ?? '';
                $rules = explode('|', $v['rules']);
                if (in_array('if_exist', $rules, true)) {
                    if (!key_exists($k, $params)) {
                        continue;
                    }
                }
                foreach ($rules as $rule) {
                    if (!str_contains($rule, '[')) {
                        $error = [
                            $rule => $rule !== 'if_exist' ? $v['errors'][$rule] : ''
                        ];
                    } else {
                        $error = [
                            strchr($rule, '[', true) => $v['errors'][strchr($rule, '[', true)]
                        ];
                    }
                    $validation->check($param, $rule, $error);
                    if ($validation->hasError('check')) {
                        $errors = array_merge(
                            $errors,
                            [
                                $k => $validation->getError('check'),
                            ]
                        );
                    }
                }
            }
            if (count($errors) !== 0) {
                $data = [
                    'code' => Code::FAIL,
                    'message' => '输入参数无效',
                    'errors' => $errors,
                ];
                $this->render($data);
            }
        } catch (Exception $e) {
            $msg = '校验JSON输入，校验规则无效。error: ' . $e->getMessage();
            $data = [
                'code' => Code::SYSTEM_ERROR,
                'message' => '服务器异常，请稍后再试',
            ];
            if ($e->getCode() !== 0) {
                $msg = $e->getMessage();
                $data = [
                    'code' => Code::tryFrom($e->getCode()),
                    'message' => $e->getMessage(),
                ];
            }
            log_message('error', $msg);
            $this->render($data);
        }
    }

    /**
     * 根据规则验证输入
     * @param array $rules
     */
    protected function verifyInputByRules(array $rules): void
    {
        $data = [
            'type' => 'rules',
            'rules' => $rules
        ];
        $this->validation($data);
    }

    /**
     * 输入验证
     * @param array $data
     */
    protected function validation(array $data): void
    {
        $type = $data['type'] ?? 'rules';
        if ('ruleGroup' === $type) {
            $rules = $data['rules'] ?? '';
        } else {
            $rules = $data['rules'] ?? [];
        }
        $validation = Services::validation();
        switch ($type) {
            case 'rules':
                $validation->setRules($rules);
                break;
            case 'ruleGroup':
                $validation->setRuleGroup($rules);
                break;
        }
        $verifyRes = $validation->withRequest($this->request)->run();
        if (!$verifyRes) {
            $errors = $validation->getErrors();
            $data = [
                'code' => Code::FAIL,
                'message' => '输入参数无效',
                'errors' => $errors,
            ];
            $this->render($data);
        }
    }

    /**
     * 获取参数
     * @param string $key
     * @return string|null
     */
    protected function getParam(string $key): ?string
    {
        if ($this->isJsonRequest()) {
            return $this->getJsonInputParam($key);
        }
        $param = $this->request->getGetPost($key);
        if (!is_null($param)) {
            return $param;
        }
        // 尝试从原始输入用获取Token
        $rawInput = $this->request->getRawInput();
        if (!is_null($rawInput) && key_exists($key, $rawInput)) {
            return $rawInput[$key];
        }
        return $this->request->getVar($key);
    }

    /**
     * 获取输入的JSON数据的全部参数
     * @return array
     */
    protected function getJsonInputParams(): array
    {
        return $this->request->getJSON(true);
    }

    /**
     * 获取输入的JSON数据的参数的值
     * @param string $key
     * @return string|null
     */
    protected function getJsonInputParam(string $key): ?string
    {
        $params = $this->getJsonInputParams();
        if (key_exists($key, $params)) {
            return (string)$params[$key];
        }
        return null;
    }

    /**
     * 是否是API请求
     * @return bool
     */
    protected function isApiRequest(): bool
    {
        $uri = service('uri');
        $segments = $uri->getSegments();
        $firstSegment = $segments[0] ?? null;
        return $firstSegment === 'api';
    }

    /**
     * 是否是开放API请求
     * @return bool
     */
    protected function isOpenApiRequest(): bool
    {
        if (!$this->isApiRequest()) {
            return false;
        }

        $uri = service('uri');
        $segments = $uri->getSegments();
        $secondSegment = $segments[1] ?? null;
        return $secondSegment === 'open';
    }

    /**
     * 获取查询校验规则
     * @return array[]
     */
    protected function getPageValidationRules(): array
    {
        return [
            'page' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数当前页数[page]无效，必须是非零自然数',
                ]
            ],
            'pageSize' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数分页条数[pageSize]无效，必须是非零自然数',
                ]
            ],
        ];
    }

    /**
     * 验证JSON输入的分页参数
     * @return void
     */
    protected function validatePageParamsFromJsonInput(): void
    {
        $rules = $this->getPageValidationRules();
        $this->verifyJsonInputByRules($rules);
    }

    /**
     * 初始化配置
     * @return void
     */
    private function initSettings(): void
    {
        $settingSvc = new SettingService();
        $data = $settingSvc->get();
        $settings = [];
        foreach ($data as $item) {
            $settings[$item['key']] = $item['value'];
        }
        $this->setSettings($settings);
    }


    private function register()
    {
        // todo 注册到云平台
    }
}