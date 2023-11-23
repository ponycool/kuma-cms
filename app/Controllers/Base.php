<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 14:26
 */

namespace App\Controllers;

use App\Services\SettingService;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;

class Base extends BaseController
{
    protected readonly string $version;
    protected array $settings;

    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger): void
    {
        parent::initController($request, $response, $logger);
        $this->version = 'v1.0.0';

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

    private function register()
    {
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