<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/16
 * Time: 15:23
 */
declare(strict_types=1);

namespace App\Traits;

trait ValidationRuleTrait
{
    /**
     * 获取基础参数验证规则
     * @return array[]
     */
    protected function getBaseRules(): array
    {
        return [
            'uuid' => [
                'rules' => 'if_exist|uuid',
            ],
            'page' => [
                'rules' => 'if_exist|page',
            ],
            'pageSize' => [
                'rules' => 'if_exist|page_size',
            ],
            'isPage' => [
                'rules' => 'if_exist|is_bool',
            ],
            'limit' => [
                'rules' => 'if_exist|limit',
            ],
            'count' => [
                'rules' => 'if_exist|count',
            ],
            'keyword' => [
                'rules' => 'if_exist|keyword',
            ],
            'language' => [
                'rules' => 'if_exist|language',
            ],
            'lang' => [
                'rules' => 'if_exist|language',
            ],
            'status' => [
                'rules' => 'if_exist|is_bool',
            ],
            'sortIndex' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数排序索引[sortIndex]无效，必须为非零自然数',
                ]
            ],
            'startTime' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数开始时间[startTime]无效，必须为"Y-m-d H:i:s"格式的字符串',
                ]
            ],
            'beginTime' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数开始时间[beginTime]无效，必须为"Y-m-d H:i:s"格式的字符串',
                ]
            ],
            'endTime' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数结束时间[endTime]无效，必须为"Y-m-d H:i:s"格式的字符串',
                ]
            ],
            'startDate' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数开始日期[startDate]无效，必须为"Y-m-d"格式的日期字符串',
                ]
            ],
            'beginDate' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数开始日期[beginDate]无效，必须为"Y-m-d"格式的日期字符串',
                ]
            ],
            'endDate' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数结束日期[endDate]无效，必须为"Y-m-d"格式的日期字符串',
                ]
            ]
        ];
    }

    protected function getUuidRule(): array
    {
        return [
            'uuid' => [
                'rules' => 'required|uuid',
                'errors' => [
                    'required' => '参数[uuid]为必填项',
                    'uuid' => '参数[uuid]无效'
                ]
            ]
        ];
    }
}