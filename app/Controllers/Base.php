<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 14:26
 */

namespace App\Controllers;

use App\Services\SettingService;
use CodeIgniter\Files\FileCollection;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;
use Psr\Log\LoggerInterface;

class Base extends BaseController
{
    protected readonly string $version;
    protected array $settings;

    // 主题路径
    protected readonly string $themePath;

    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger): void
    {
        parent::initController($request, $response, $logger);
        $this->version = 'v1.0.0';
        // 主题路径
        $this->themePath = APPPATH . 'Views/themes/';

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
                'js'
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

    private function register()
    {
        // todo 注册到云平台
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
}