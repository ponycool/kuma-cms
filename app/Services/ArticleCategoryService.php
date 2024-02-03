<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:49 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\ArticleCategory;

class ArticleCategoryService extends BaseService
{
    /**
     * 获取验证规则
     * @return array[]
     */
    public function getValidationRules(): array
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

    /**
     * 获取更新验证规则
     * @return array
     */
    public function getUpdateRules(): array
    {
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数文章分类UUID[uuid]为必填项',
                    'min_length' => '参数文章分类UUID[uuid]无效',
                    'max_length' => '参数文章分类UUID[uuid]无效',
                ]
            ],
            'pid' => [
                'rules' => 'if_exist|is_natural',
                'errors' => [
                    'is_natural' => '参数父级ID[pid]无效,父级ID必须为自然数',
                ]
            ],
            'name' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数分类名称[name]无效，字符长度不能超过20个字符',
                ]
            ],
            'level' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数分类层级[level]无效，必须为非零自然数',
                ]
            ],
        ];
        return array_merge(
            $this->getValidationRules(),
            $rules
        );
    }

    /**
     * 创建文章分类
     * @param array $params
     * @return bool|string
     */
    public function createCategory(array $params): bool|string
    {
        $data = $this->convertParamsToSnakeCase($params);
        // 准备数据
        $data = $this->prepareData($data);
        if (is_string($data)) {
            return $data;
        }

        $articleCategory = new ArticleCategory();
        $articleCategory->fill($data);
        $res = $this->insert($articleCategory);
        if ($res !== true) {
            return '创建文章分类失败';
        }
        return true;
    }

    /**
     * 准备数据以供保存和更新，返回处理后的数据或错误消息
     * @param array $data
     * @return string|array 处理后的数据或错误消息
     */
    public function prepareData(array $data): string|array
    {
        // 校验图片
        $mediaSvc = new MediaService();
        $iconName = $data['icon'] ?? null;
        if (!is_null($iconName)) {
            $media = $mediaSvc->getByMediaName($iconName);
            if (empty($media)) {
                return '无效的分类图标';
            }
            $data['icon'] = (int)$media['gid'];
        }
        return $data;
    }
}
