<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/23
 * Time: 10:52
 */
declare(strict_types=1);

namespace App\Controllers\Api;

use App\Enums\Code;
use App\Enums\Setting as SettingEnum;
use App\Services\SettingService;

class Setting extends Base
{
    /**
     * 获取配置
     * @return void
     */
    public function index(): void
    {
        $svc = new SettingService();
        $settings = $svc->get();
        $settingItems = SettingEnum::cases();
        $data = [
            'code' => Code::OK,
            'message' => '获取系统配置成功'
        ];
        if (!empty($settings)) {
            foreach ($settingItems as $item) {
                foreach ($settings as $setting) {
                    if ($item->value === $setting['key']) {
                        $data[$setting['key']] = $setting['value'];
                    }
                }
            }
        }
        $this->render($data);
    }

    public function update(): void
    {

    }
}