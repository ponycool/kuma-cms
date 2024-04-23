<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/23
 * Time: 06:52 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Honor;
use App\Enums\DeletedStatus;

class HonorService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'title' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数荣誉资质名称[title]无效，字符长度不能超过200个字符',
                ]
            ],
            'image' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数荣誉资质图片[image]无效，字符长度不能超过50个字符',
                ]
            ],
            'awardOrganization' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数颁发组织[awardOrganization]无效，字符长度不能超过100个字符',
                ]
            ],
            'awardDate' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数颁发日期[awardDate]无效，必须为有效的日期',
                ]
            ],
            'description' => [
                'rules' => 'if_exist|max_length[500]',
                'errors' => [
                    'max_length' => '参数荣誉资质描述[description]无效，字符长度不能超过500个字符',
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
            'title' => [
                'rules' => 'required|max_length[50]',
                'errors' => [
                    'required' => '参数荣誉资质名称[title]无效，荣誉资质名称为必填项',
                    'max_length' => '参数荣誉资质名称[title]无效，字符长度不能超过50个字符',
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
                    'required' => '参数荣誉资质UUID[uuid]为必填项',
                    'min_length' => '参数荣誉资质UUID[uuid]无效',
                    'max_length' => '参数荣誉资质UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取团队列表
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $page = (int)($params['page'] ?? 1);
        $pageSize = (int)($params['pageSize'] ?? 10);
        $title = $params['title'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $sql = [
            'SELECT h.id,h.uuid,h.title,h.image,h.award_organization,h.award_date,h.description,',
            'h.created_at,h.updated_at ',
            'FROM swap_honor AS h ',
            'WHERE h.deleted_at IS NULL ',
            'AND h.deleted = ? '
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value
        ];

        if (!is_null($title)) {
            $sql[] = 'AND h.title = ? ';
            $sqlParams[] = $title;
        }
        if (!is_null($keyword)) {
            $sql[] = 'AND h.title LIKE ? ';
            $sqlParams[] = '%' . $keyword . '%';
        }
        $sql[] = 'ORDER BY h.created_at DESC';
        $sql = $this->assembleSql($sql);
        $res = $this->getPageByQuery($sql, $sqlParams, $page, $pageSize);
        if ($res['total'] > 0 && is_array($res['pageData'])) {
            $res['pageData'] = self::mergeMedia($res['pageData']);
        }
        return $res;
    }

    /**
     * 根据UUID获取荣誉资质
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
     * 创建荣誉资质
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

        $honor = new Honor();
        $honor->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($honor);
        if ($res !== true) {
            return '创建荣誉资质失败';
        }
        return true;
    }

    /**
     * 更新荣誉资质
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
            return '荣誉资质UUID不存在';
        }

        $honor = new Honor();
        $honor->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($honor);
        if ($res !== true) {
            return '更新荣誉资质失败';
        }
        return true;
    }

    /**
     * 删除荣誉资质
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '荣誉资质UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除荣誉资质失败';
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
        $image = $data['image'] ?? null;
        if (!is_null($image)) {
            $media = $mediaSvc->getByMediaName($image);
            if (empty($media)) {
                return '无效的荣誉资质图片';
            }
            $data['image'] = (int)$media['id'];
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
            if (!is_null($item['image'])) {
                $imageList[] = $item['image'];
            }
        }

        $mediaSvc = new MediaService();
        if (!empty($imageList)) {
            $mediaList = $mediaSvc->getMedia($imageList);
            foreach ($mediaList as $img) {
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
