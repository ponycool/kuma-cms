<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/21
 * Time: 15:57 下午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\MarketingPlan;
use App\Enums\DeletedStatus;
use App\Enums\MarketingPlanStatus;

class MarketingPlanService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'name' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数营销计划名称[name]无效，字符长度不能超过200个字符',
                ]
            ],
            'coverImage' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数封面图片[coverImage]无效，字符长度不能超过50个字符',
                ]
            ],
            'summary' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数营销计划摘要[summary]无效，字符长度不能超过1000个字符',
                ]
            ],
            'content' => [
                'rules' => 'if_exist|max_length[10000]',
                'errors' => [
                    'max_length' => '参数营销计划内容[content]无效，字符长度不能超过1万个字符',
                ]
            ],
            'location' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数活动地点[location]无效，字符长度不能超过50个字符',
                ]
            ],
            'posterImage' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数海报图片[posterImage]无效，字符长度不能超过50个字符',
                ]
            ],
            'posterContent' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数营销计划海报内容[posterContent]无效，字符长度不能超过1000个字符',
                ]
            ],
            'startDatetime' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数营销计划开始时间[startDatetime]无效，必须是有效的日期，格式：Y-m-d H:i:s',
                ]
            ],
            'endDatetime' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数营销计划开始时间[startDatetime]无效，必须是有效的日期，格式：Y-m-d H:i:s',
                ]
            ],
            'isActive' => [
                'rules' => 'if_exist|in_list[true,false]',
                'errors' => [
                    'in_list' => '参数是否激活[isActive]无效，必须为"true"或"false"',
                ]
            ],
            'status' => [
                'rules' => 'if_exist|in_list[PLANNING,ACTIVE,PAUSED,COMPLETED]',
                'errors' => [
                    'in_list' => '参数营销计划状态[status]无效，必须为"PLANNING"、"ACTIVE"、"PAUSED"、"COMPLETED',
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
                'rules' => 'required|max_length[200]',
                'errors' => [
                    'required' => '参数营销计划名称[name]无效，营销计划名称为必填项',
                    'max_length' => '参数营销计划名称[name]无效，字符长度不能超过200个字符',
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
                    'required' => '参数营销计划UUID[uuid]为必填项',
                    'min_length' => '参数营销计划UUID[uuid]无效',
                    'max_length' => '参数营销计划UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取列表
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $page = (int)($params['page'] ?? 1);
        $pageSize = (int)($params['pageSize'] ?? 10);
        $name = $params['name'] ?? null;
        $startDatetime = $params['startDatetime'] ?? null;
        $endDatetime = $params['endDatetime'] ?? null;
        $isActive = $params['isActive'] ?? null;
        $status = $params['status'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $sortField = $params['sortField'] ?? null;
        $sortType = $params['sortType'] ?? 'ASC';
        $isPage = $params['isPage'] ?? true;
        $limit = $params['limit'] ?? null;
        $sql = [
            'SELECT p.id,p.uuid,p.name,p.content,p.summary,p.cover_image,p.location,p.poster_image,p.poster_content,',
            'p.start_datetime,p.end_datetime,p.is_active,p.view_count,p.status,p.sort_index,p.created_at,p.updated_at ',
            'FROM swap_marketing_plan AS p ',
            'WHERE p.deleted_at IS NULL ',
            'AND p.deleted = ? ',
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
        ];
        if (!is_null($name)) {
            $sql[] = 'AND p.name = ? ';
            $sqlParams[] = $name;
        }
        if (!is_null($startDatetime)) {
            $sql[] = 'AND p.start_datetime >= ? ';
            $sqlParams[] = $startDatetime;
        }
        if (!is_null($endDatetime)) {
            $sql[] = 'AND p.end_datetime <= ? ';
            $sqlParams[] = $endDatetime;
        }
        if (!is_null($isActive)) {
            $sql[] = 'AND p.is_active = ? ';
            $sqlParams[] = $isActive;
        }
        if (!is_null($status)) {
            $sql[] = 'AND p.status = ? ';
            $sqlParams[] = $status;
        }
        if (!is_null($keyword) && is_null($name)) {
            $sql = array_merge($sql, [
                'AND ( ',
                'p.name LIKE ? ',
                'OR p.content LIKE ? ',
                'OR p.location LIKE ? ',
                ') ',
            ]);
            $sqlParams = array_merge($sqlParams, [
                '%' . $keyword . '%',
                '%' . $keyword . '%',
                '%' . $keyword . '%',
            ]);
        }
        if (is_null($sortField)) {
            $sql[] = 'ORDER BY p.sort_index DESC,p.id DESC';
        } else {
            $sql[] = 'ORDER BY p.' . $sortField . ' ' . $sortType;
        }
        if (!$isPage && !is_null($limit)) {
            $sql[] = ' LIMIT ' . $limit;
        }
        $sql = $this->assembleSql($sql);
        if ($isPage) {
            $res = $this->getPageByQuery($sql, $sqlParams, $page, $pageSize);
            if ($res['total'] > 0) {
                if (is_array($res['pageData'])) {
                    $res['pageData'] = self::mergeMedia($res['pageData']);
                }
            }
        } else {
            $this->setResultType('array');
            $res = $this->query($sql, $sqlParams);
            if (count($res) > 0) {
                $res = self::mergeMedia($res);
            }
        }
        return $res;
    }

    /**
     * 根据UUID获取营销计划
     * @param string $uuid
     * @return array|null
     */
    public function getPlanByUuid(string $uuid): ?array
    {
        if ($this->validateUUID($uuid) !== true) {
            return null;
        }
        $res = $this->getFirstByUuid($uuid);
        if (count($res) > 0) {
            $res = $this->mergeMedia([$res])[0];
        }
        return $res;
    }

    /**
     * 创建营销计划
     * @param array $params
     * @return bool|string
     */
    public function create(array $params): bool|string
    {
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $plan = new MarketingPlan();
        $plan->fill($data)
            ->filterInvalidProperties();
        $res = $this->insert($plan);
        if ($res !== true) {
            return '创建营销计划失败';
        }
        return true;
    }

    /**
     * 更新营销计划
     * @param array $params
     * @return bool|string
     */
    public function update(array $params): bool|string
    {
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $raw = $this->getFirstByUuid($data['uuid']);
        if (empty($raw)) {
            return '营销计划UUID不存在';
        }

        $plan = new MarketingPlan();
        $plan->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($plan);
        if ($res !== true) {
            return '更新营销计划失败';
        }
        return true;
    }

    /**
     * 更新营销计划激活状态
     * @param string $uuid
     * @param int $status
     * @return true|string
     */
    public function updateActiveStatus(string $uuid, int $status): true|string
    {
        $plan = new MarketingPlan();
        $plan->setIsActive($status);
        $res = $this->updateByUuid($plan, $uuid);
        if ($res !== true) {
            return '更新营销计划激活状态失败';
        }
        return true;
    }

    /**
     * 删除营销计划
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $plan = $this->getFirstByUuid($uuid);
        if (empty($plan)) {
            return '营销计划UUID不存在';
        }
        $id = (int)$plan['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除营销计划失败';
        }
        return true;
    }

    /**
     * 预处理数据
     * @param array $data
     * @return string|array
     */
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);
        // 校验图片
        $mediaSvc = new MediaService();
        $coverImageName = $data['cover_image'] ?? null;
        if (!is_null($coverImageName)) {
            $media = $mediaSvc->getByMediaName($coverImageName);
            if (empty($media)) {
                return '无效的封面图';
            }
            $data['cover_image'] = (int)$media['id'];
        }
        $posterImageName = $data['poster_image'] ?? null;
        if (!is_null($posterImageName)) {
            $media = $mediaSvc->getByMediaName($posterImageName);
            if (empty($media)) {
                return '无效的海报图';
            }
            $data['poster_image'] = (int)$media['id'];
        }
        if (!is_null($data['start_datetime'] ?? null)) {
            if (!$this->validateDate($data['start_datetime'])) {
                return '无效的开始时间';
            }
        }

        if (!is_null($data['end_datetime'] ?? null)) {
            if (!$this->validateDate($data['end_datetime'])) {
                return '无效的结束时间';
            }
        }

        if (!is_null($data['is_active'] ?? null)) {
            $data['is_active'] = (int)($data['is_active'] === 'true');
        }

        $status = $data['status'] ?? null;
        if (!is_null($status)) {
            $statusList = [];
            foreach (MarketingPlanStatus::cases() as $case) {
                $statusList[] = $case->name;
            }
            if (!in_array($status, $statusList, true)) {
                return '无效的营销计划状态';
            }
        }
        $data['status'] = $status ?? MarketingPlanStatus::PLANNING->name;

        // 如果存在浏览次数则移除，防止篡改
        if (!is_null($data['view_count'] ?? null)) {
            unset($data['view_count']);
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
        $mediaSvc = new MediaService();
        $coverList = [];
        foreach ($list as $item) {
            if (!is_null($item['cover_image'])) {
                $coverList[] = $item['cover_image'];
            }
        }
        if (!empty($coverList)) {
            $imageList = $mediaSvc->getMedia($coverList);
            foreach ($imageList as $img) {
                foreach ($list as &$item) {
                    if ($img['id'] === $item['cover_image']) {
                        $item['cover_image'] = $img['file_url'];
                    }
                }
            }
        }
        $posterList = [];
        foreach ($list as $item) {
            if (!is_null($item['poster_image'])) {
                $posterList[] = $item['poster_image'];
            }
        }
        if (!empty($posterList)) {
            $imageList = $mediaSvc->getMedia($posterList);
            foreach ($imageList as $img) {
                foreach ($list as &$item) {
                    if ($img['id'] === $item['poster_image']) {
                        $item['poster_image'] = $img['file_url'];
                    }
                }
            }
        }

        return $list;
    }
}
