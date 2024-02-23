<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:49 上午
 */
declare(strict_types=1);

namespace App\Services;


use App\Entities\Setting;
use App\Enums\Setting as settingEnum;

class SettingService extends BaseService
{
    /**
     * 获取更新规则
     * @return array
     */
    public function getUpdateRules(): array
    {
        return [
            'theme' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数主题[theme]无效，字符长度不能超过20个字符',
                ]
            ],
        ];
    }

    /**
     * 更新设置
     * @param array $settings
     * @return bool|string
     */
    public function updateSetting(array $settings): bool|string
    {
        $settings = $this->prepareData($settings);
        $updateList = [];
        $insertList = [];
        $keyList = [];
        $rawData = $this->get();
        if (!empty($rawData)) {
            foreach ($rawData as $item) {
                $keyList[] = $item['key'];
            }
        }
        foreach (settingEnum::cases() as $case) {
            foreach ($settings as $key => $value) {
                if ($case->value === $key) {
                    $setting = new Setting();
                    $setting->setKey($key)
                        ->setValue($value);
                    $updateList[] = $setting;
                }
            }
            if (!in_array($case->value, $keyList, true)) {
                $setting = new Setting();
                $setting->setKey($case->value);
                $insertList[] = $setting;
            }
        }
        if (!empty($insertList)) {
            $res = $this->insertBatch($insertList);
            if ($res !== true) {
                return '批量新增系统设置失败';
            }
        }
        $res = $this->updateBatch($updateList, 'key');
        if ($res !== true) {
            return '批量更新系统设置失败';
        }
        return true;
    }

    /**
     * 预处理数据
     * @param array $data
     * @return string|array
     */
    public function prepareData(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);
        // 如果存在版本则移除，防止篡改
        if (!is_null($data['version'] ?? null)) {
            unset($data['version']);
        }
        return $data;
    }
}
