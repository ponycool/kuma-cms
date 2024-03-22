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
            'siteName' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数站点名称[siteName]无效，字符长度不能超过50个字符',
                ]
            ],
            'siteUrl' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数站点地址[siteUrl]无效，字符长度不能超过50个字符',
                ]
            ],
            'siteDescription' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数站点描述[siteDescription]无效，字符长度不能超过1000个字符',
                ]
            ],
            'siteKeywords' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数站点关键词[siteKeywords]无效，字符长度不能超过200个字符',
                ]
            ],
            'servicePhone' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数服务热线[servicePhone]无效，字符长度不能超过20个字符',
                ]
            ],
            'serviceEmail' => [
                'rules' => 'if_exist|valid_email',
                'errors' => [
                    'valid_email' => '参数服务邮箱[serviceEmail]无效，必须是有效的邮箱',
                ]
            ],
            'copyright' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数版权信息[copyright]无效，字符长度不能超过100个字符',
                ]
            ],
            'icp' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数ICP备案信息[icp]无效，字符长度不能超过100个字符',
                ]
            ],
            'policeRecord' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数公安备案信息[policeRecord]无效，字符长度不能超过100个字符',
                ]
            ],
            'statisticalScript' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数统计脚本[statisticalScript]无效，字符长度不能超过1000个字符',
                ]
            ],
            'serviceScript' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数服务脚本[serviceScript]无效，字符长度不能超过1000个字符',
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
        $settings = self::prepare($settings);
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
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);
        // 如果存在版本则移除，防止篡改
        if (!is_null($data['version'] ?? null)) {
            unset($data['version']);
        }
        return $data;
    }
}
