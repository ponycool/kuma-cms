<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:49 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Link;

class LinkService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'name' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数友情链接名称[name]无效，字符长度不能超过50个字符',
                ]
            ],
            'url' => [
                'rules' => 'if_exist|valid_url_strict|max_length[200]',
                'errors' => [
                    'valid_url_strict' => '参数友情链接URL[url]无效，必须为有效的URL地址',
                    'max_length' => '参数友情链接URL[url]无效，字符长度不能超过200个字符',
                ]
            ],
            'icon' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数友情链接名称图标[icon]无效，字符长度不能超过50个字符',
                ]
            ],
            'description' => [
                'rules' => 'if_exist|max_length[500]',
                'errors' => [
                    'max_length' => '参数友情链接描述[description]无效，字符长度不能超过500个字符',
                ]
            ],
            'target' => [
                'rules' => 'if_exist|in_list[_self,_blank,_parent,_top]',
                'errors' => [
                    'in_list' => '参数链接打开方式[target]无效，必须是_self,_blank,_parent,_top',
                ]
            ],
            'group' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数分组名称[group]无效，字符长度不能超过50个字符',
                ]
            ],
            'status' => [
                'rules' => 'if_exist|in_list[true,false]',
                'errors' => [
                    'in_list' => '参数友情链接状态[status]无效，必须为"true"或"false"',
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
     * 获取创建验证规则
     * @return array
     */
    public function getCreateRules(): array
    {
        $rules = [
            'name' => [
                'rules' => 'required|max_length[50]',
                'errors' => [
                    'required' => '参数友情链接名称[name]无效，友情链接名称为必填项',
                    'max_length' => '参数友情链接名称[name]无效，字符长度不能超过50个字符',
                ]
            ],
            'url' => [
                'rules' => 'required|valid_url_strict|max_length[200]',
                'errors' => [
                    'required' => '参数友情链接URL[url]无效，友情链接URL为必填项',
                    'valid_url_strict' => '参数友情链接URL[url]无效，必须为有效的URL地址',
                    'max_length' => '参数友情链接URL[url]无效，字符长度不能超过200个字符',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
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
                    'required' => '参数友情链接UUID[uuid]为必填项',
                    'min_length' => '参数友情链接UUID[uuid]无效',
                    'max_length' => '参数友情链接UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 根据UUID获取友情链接
     * @param string $uuid
     * @return array|null
     */
    public function getByUUID(string $uuid): ?array
    {
        if ($this->validateUUID($uuid) !== true) {
            return null;
        }
        $res = $this->getFirstByUuid($uuid);
        if (count($res) > 0) {
            $res = self::mergeMedia([$res])[0];
        }
        return $res;
    }

    /**
     * 创建友情链接
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

        $link = new Link();
        $link->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($link);
        if ($res !== true) {
            return '创建友情链接失败';
        }
        return true;
    }

    /**
     * 更新友情链接
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
            return '友情链接UUID不存在';
        }

        $link = new Link();
        $link->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($link);
        if ($res !== true) {
            return '更新友情链接失败';
        }
        return true;
    }

    /**
     * 删除友情链接
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '友情链接UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除友情链接失败';
        }
        return true;
    }

    /**
     * 准备数据
     * @param array $data
     * @return string|array
     */
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);

        // 校验图片
        $mediaSvc = new MediaService();
        $profileImage = $data['icon'] ?? null;
        if (!is_null($profileImage)) {
            $media = $mediaSvc->getByMediaName($profileImage);
            if (empty($media)) {
                return '无效的友情链接图标';
            }
            $data['icon'] = (int)$media['id'];
        }

        if (!is_null($data['status'] ?? null)) {
            $data['status'] = (int)($data['status'] === 'true');
        }

        return $data;
    }

    /**
     * 合并媒体
     * @param array $list
     * @return array
     */
    private function mergeMedia(array $list): array
    {
        $imageList = [];
        foreach ($list as $item) {
            if (!is_null($item['icon'])) {
                $imageList[] = $item['icon'];
            }
        }

        $mediaSvc = new MediaService();
        if (!empty($imageList)) {
            $mediaList = $mediaSvc->getMedia($imageList);
            foreach ($mediaList as $img) {
                foreach ($list as &$item) {
                    if ($img['id'] === $item['icon']) {
                        $item['icon'] = $img['file_url'];
                    }
                }
            }
        }

        return $list;
    }
}
