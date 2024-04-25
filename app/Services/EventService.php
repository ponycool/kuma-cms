<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/23
 * Time: 07:46 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Event;
use App\Enums\DeletedStatus;

class EventService extends BaseService
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
                    'max_length' => '参数事件标题[title]无效，字符长度不能超过200个字符',
                ]
            ],
            'image' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数事件图片[image]无效，字符长度不能超过50个字符',
                ]
            ],
            'description' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数事件描述[description]无效，字符长度不能超过1000个字符',
                ]
            ],
            'eventDate' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数事件日期[eventDate]无效，必须为有效的日期',
                ]
            ],
            'group' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数分组名称[group]无效，字符长度不能超过50个字符',
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
                'rules' => 'required|max_length[200]',
                'errors' => [
                    'required' => '参数事件标题[title]无效，事件标题为必填项',
                    'max_length' => '参数事件标题[title]无效，字符长度不能超过200个字符',
                ]
            ],
            'eventDate' => [
                'rules' => 'required|valid_date[Y-m-d]',
                'errors' => [
                    'required' => '参数事件日期[eventDate]无效，事件日期为必填项',
                    'valid_date' => '参数事件日期[eventDate]无效，必须为有效的日期',
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
                    'required' => '参数事件UUID[uuid]为必填项',
                    'min_length' => '参数事件UUID[uuid]无效',
                    'max_length' => '参数事件UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取事件列表
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $page = (int)($params['page'] ?? 1);
        $pageSize = (int)($params['pageSize'] ?? 10);
        $title = $params['title'] ?? null;
        $group = $params['group'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $sql = [
            'SELECT e.id,e.uuid,e.title,e.image,e.description,e.event_date,e.`group`,',
            'e.created_at,e.updated_at ',
            'FROM swap_event AS e ',
            'WHERE e.deleted_at IS NULL ',
            'AND e.deleted = ? '
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value
        ];

        if (!is_null($title)) {
            $sql[] = 'AND e.title = ? ';
            $sqlParams[] = $title;
        }
        if (!is_null($group)) {
            $sql[] = 'AND e.`group` = ? ';
            $sqlParams[] = $group;
        }
        if (!is_null($keyword)) {
            $sql[] = 'AND e.title LIKE ? ';
            $sqlParams[] = '%' . $keyword . '%';
        }
        $sql[] = 'ORDER BY e.event_date DESC';
        $sql = $this->assembleSql($sql);
        $res = $this->getPageByQuery($sql, $sqlParams, $page, $pageSize);
        if ($res['total'] > 0 && is_array($res['pageData'])) {
            $res['pageData'] = self::mergeMedia($res['pageData']);
        }
        return $res;
    }

    /**
     * 根据UUID获取事件
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
     * 获取分组列表
     * @return array
     */
    public function getGroup(): array
    {
        $sql = [
            'SELECT `group` ',
            'FROM swap_event ',
            'WHERE deleted_at IS NULL ',
            'AND deleted = ? ',
            'GROUP BY `group` ',
            'ORDER BY `group` ASC'
        ];
        $params = [
            DeletedStatus::UNDELETED->value
        ];
        $sql = $this->assembleSql($sql);
        $this->setResultType('array');
        $res = $this->query($sql, $params);
        $list = [];
        foreach ($res as $item) {
            if (!is_null($item['group'])) {
                $list[] = $item['group'];
            }
        }
        return $list;
    }

    /**
     * 创建事件
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

        $event = new Event();
        $event->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($event);
        if ($res !== true) {
            return '创建事件失败';
        }
        return true;
    }

    /**
     * 更新事件
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
            return '事件UUID不存在';
        }

        $event = new Event();
        $event->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($event);
        if ($res !== true) {
            return '更新事件失败';
        }
        return true;
    }

    /**
     * 删除事件
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '事件UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除事件失败';
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
                return '无效的事件图标';
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
