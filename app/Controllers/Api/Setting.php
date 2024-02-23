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
use Exception;

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
        foreach ($settingItems as $item) {
            $data[$item->value] = null;
        }
        if (!empty($settings)) {
            foreach ($settings as $setting) {
                $data[$setting['key']] = $setting['value'];
            }
        }
        $this->render($data);
    }

    /**
     * 更新系统配置
     * @return void
     */
    public function update(): void
    {
        $this->postFilter();
        $svc = new SettingService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        $params = $this->getJsonInputParams();
        try {
            $res = $svc->updateSetting($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新系统配置成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新系统配置失败'
            ];
        }
        $this->render($data);
    }
}