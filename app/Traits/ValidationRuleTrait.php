<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/16
 * Time: 16:04
 */
declare(strict_types=1);

namespace App\Traits;

trait ValidationRuleTrait
{
    public function getBaseRules(): array
    {
        return [
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
        ];
    }

    public function getUuidRule(): array
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