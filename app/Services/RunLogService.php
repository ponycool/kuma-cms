<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/22
 * Time: 15:59
 */
declare(strict_types=1);

namespace App\Services;

class RunLogService extends BaseService
{
    /**
     * 获取更新规则
     * @return array
     */
    public function getBaseRules(): array
    {
        return [
            'line' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数日志行数[line]无效，必须为非零自然数',
                ]
            ]
        ];
    }
}