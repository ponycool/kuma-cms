<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/16
 * Time: 08:37 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\ProductCategory;

class ProductCategoryService extends BaseService
{
    /**
     * 获取验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        $svc = new CategoryService();
        return $svc->getBaseRules();
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
                    'required' => '参数产品分类UUID[uuid]为必填项',
                    'min_length' => '参数产品分类UUID[uuid]无效',
                    'max_length' => '参数产品分类UUID[uuid]无效',
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
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 创建产品分类
     * @param array $params
     * @return bool|string
     */
    public function create(array $params): bool|string
    {
        // 准备数据
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $category = new ProductCategory();
        $category->fill($data);
        $res = $this->insert($category);
        if ($res !== true) {
            return '创建产品分类失败';
        }
        return true;
    }

    /**
     * 更新分类
     * @param array $params
     * @return bool|string
     */
    public function update(array $params): bool|string
    {
        // 准备数据
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $raw = $this->getFirstByUuid($data['uuid']);
        if (empty($raw)) {
            return '产品分类UUID不存在';
        }

        $category = new ProductCategory();
        $category->fillData($data)
            ->filterInvalidProperties();
        $res = $this->updateByUuid($category);
        if ($res !== true) {
            return '更新产品分类失败';
        }
        return true;
    }

    /**
     * 删除产品分类
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $category = $this->getFirstByUuid($uuid);
        if (empty($category)) {
            return '产品分类UUID不存在';
        }

        $cond = [
            'id' => $category['id'],
            'pid' => $category['id']
        ];
        $list = $this->getOrWhere($cond);
        $ids = [];
        foreach ($list as $item) {
            $ids[] = $item['id'];
        }

        $res = $this->batchDelByIds($ids);
        if ($res !== true) {
            return '删除产品分类失败';
        }
        return true;
    }

    /**
     * 准备数据以供保存和更新，返回处理后的数据或错误消息
     * @param array $data
     * @return string|array 处理后的数据或错误消息
     */
    public function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);

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
