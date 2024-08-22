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
use App\Enums\MarketingPlanStatus;
use Carbon\Carbon;

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
}
