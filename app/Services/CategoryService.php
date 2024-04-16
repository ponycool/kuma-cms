<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午4:52
 */
declare(strict_types=1);

namespace App\Services;

class CategoryService extends BaseService
{
    /**
     * 获取验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'pid' => [
                'rules' => 'required|is_natural',
                'errors' => [
                    'required' => '参数父级ID[pid]无效,父级ID为必填项',
                    'is_natural' => '参数父级ID[pid]无效,父级ID必须为自然数',
                ]
            ],
            'name' => [
                'rules' => 'required|max_length[20]',
                'errors' => [
                    'required' => '参数分类名称[name]无效，分类名称为必填项',
                    'max_length' => '参数分类名称[name]无效，字符长度不能超过20个字符',
                ]
            ],
            'icon' => [
                'rules' => 'if_exist|is_natural',
                'errors' => [
                    'is_natural' => '参数分类图标[icon]无效,必须为数字类型',
                ]
            ],
            'code' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数分类编码[code]无效，字符长度不能超过20个字符',
                ]
            ],
            'level' => [
                'rules' => 'required|is_natural_no_zero',
                'errors' => [
                    'required' => '参数分类层级[level]无效，分类层级为必填项',
                    'is_natural_no_zero' => '参数分类层级[level]无效，必须为非零自然数',
                ]
            ],
            'sortIndex' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数排序索引[sortIndex]无效，必须为非零自然数',
                ]
            ],
        ];
    }
}