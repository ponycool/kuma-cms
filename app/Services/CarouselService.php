<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/16
 * Time: 02:30 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Carousel;
use App\Enums\DeletedStatus;

class CarouselService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'image' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数轮播图片[image]无效，字符长度不能超过100个字符',
                ]
            ],
            'link' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数轮播图片链接地址[link]无效，字符长度不能超过100个字符',
                ]
            ],
            'target' => [
                'rules' => 'if_exist|in_list[_self,_blank,_parent,_top]',
                'errors' => [
                    'valid_date' => '参数链接打开方式[target]无效，必须是_self,_blank,_parent,_top',
                ]
            ],
            'title' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数轮播标题[title]无效，字符长度不能超过200个字符',
                ]
            ],
            'description' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数轮播描述[description]无效，字符长度不能超过200个字符',
                ]
            ],
            'sortIndex' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数排序索引[sortIndex]无效，必须为非零自然数',
                ]
            ],
            'status' => [
                'rules' => 'if_exist|in_list[true,false]',
                'errors' => [
                    'in_list' => '参数轮播状态[status]无效，必须为"true"或"false"',
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
        return array_merge($this->getBaseRules(), [
                'image' => [
                    'rules' => 'required|max_length[100]',
                    'errors' => [
                        'required' => '参数轮播图片[image]不能为空',
                        'max_length' => '参数轮播图片[image]无效，字符长度不能超过100个字符',
                    ]
                ]
            ]
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
                    'required' => '参数轮播UUID[uuid]为必填项',
                    'min_length' => '参数轮播UUID[uuid]无效',
                    'max_length' => '参数轮播UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 创建文章
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

        $article = new Carousel();
        $article->fill($data)
            ->filterInvalidProperties();
        if (!is_null($data['image'] ?? null)) {
            $article->setImage($data['image']);
        }

        $res = $this->insert($article);
        if ($res !== true) {
            return '创建轮播失败';
        }
        return true;
    }

    /**
     * 获取轮播列表
     * @return array
     */
    public function getList(): array
    {
        $sql = [
            'SELECT id,uuid,image,link,target,title,description,status,sort_index,created_at,updated_at ',
            'FROM swap_carousel ',
            'WHERE deleted_at IS NULL ',
            'AND deleted = ? ',
            'ORDER BY sort_index ASC, id DESC ',
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
        ];

        $sql = $this->assembleSql($sql);
        $this->setResultType('array');
        $res = $this->query($sql, $sqlParams);
        if (count($res) > 0) {
            $res = self::mergeMedia($res);
        }
        return $res;
    }

    /**
     * 获取启用的轮播列表
     * @return array
     */
    public function getEnableList(): array
    {
        $sql = [
            'SELECT id,uuid,image,link,target,title,description,status,sort_index,created_at,updated_at ',
            'FROM swap_carousel ',
            'WHERE status = 1 ',
            'AND deleted_at IS NULL ',
            'AND deleted = ? ',
            'ORDER BY sort_index ASC, id DESC ',
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
        ];

        $sql = $this->assembleSql($sql);
        $this->setResultType('array');
        $res = $this->query($sql, $sqlParams);
        if (count($res) > 0) {
            $res = self::mergeMedia($res);
        }
        return $res;
    }

    /**
     * 根据UUID获取轮播
     * @param string $uuid
     * @return array|null
     */
    public function getCarouselByUUID(string $uuid): ?array
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
     * 更新轮播
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
            return '轮播UUID不存在';
        }

        $carousel = new Carousel();
        $carousel->fillData($data)
            ->filterInvalidProperties();
        if (!is_null($data['image'] ?? null)) {
            $carousel->setImage($data['image']);
        }

        $res = $this->updateByUuid($carousel);
        if ($res !== true) {
            return '更新轮播失败';
        }
        return true;
    }

    /**
     * 删除轮播
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $carousel = $this->getFirstByUuid($uuid);
        if (empty($carousel)) {
            return '轮播UUID不存在';
        }
        $id = (int)$carousel['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除轮播失败';
        }
        return true;
    }

    /**
     * 准备数据以供保存和更新，返回处理后的数据或错误消息
     * @param array $data
     * @return string|array 处理后的数据或错误消息
     */
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);

        // 校验图片
        $mediaSvc = new MediaService();
        $image = $data['image'] ?? null;
        if (!is_null($image)) {
            $media = $mediaSvc->getByMediaName($image);
            if (empty($media)) {
                return '无效的轮播图片';
            }
            $data['image'] = (int)$media['id'];
        }

        // 处理轮播状态
        if (!is_null($data['status'] ?? null)) {
            $data['status'] = (int)($data['status'] === 'true');
        }

        return $data;
    }

    /**
     * 合并图片
     * @param array $list
     * @return array
     */
    private function mergeMedia(array $list): array
    {
        $imageIds = [];
        foreach ($list as $item) {
            if (!is_null($item['image'])) {
                $imageIds[] = $item['image'];
            }
        }
        $mediaSvc = new MediaService();
        if (!empty($imageIds)) {
            $imageList = $mediaSvc->getMedia($imageIds);
            foreach ($imageList as $img) {
                foreach ($list as &$item) {
                    if ($img['id'] === $item['image']) {
                        $item['image'] = $img['file_url'];
                    }
                }
            }
        }

        return $list;
    }
}
