<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/05/12
 * Time: 14:23 下午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\MarketingChannel;
use App\Enums\DeletedStatus;
use App\Enums\MarketingChannelType;

class MarketingChannelService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'channelName' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数营销渠道名称[channelName]无效，字符长度不能超过200个字符',
                ]
            ],
            'channelType' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数营销渠道类型[channelType]无效，字符长度不能超过50个字符',
                ]
            ],
            'description' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数营销渠道描述[description]无效，字符长度不能超过1000个字符',
                ]
            ],
            'sourceCode' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数营销渠道来源代码[sourceCode]无效，字符长度不能超过50个字符',
                ]
            ],
            'startDatetime' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数营销渠道开始时间[startDatetime]无效，必须是有效的日期，格式：Y-m-d H:i:s',
                ]
            ],
            'endDatetime' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数营销渠道结束时间[endDatetime]无效，必须是有效的日期，格式：Y-m-d H:i:s',
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
            'channelName' => [
                'rules' => 'required|max_length[200]',
                'errors' => [
                    'required' => '参数营销渠道名称[channelName]为必填项',
                    'max_length' => '参数营销渠道名称[channelName]无效，字符长度不能超过200个字符',
                ]
            ],
            'channelType' => [
                'rules' => 'required|max_length[50]',
                'errors' => [
                    'required' => '参数营销渠道类型[channelType]为必填项',
                    'max_length' => '参数营销渠道类型[channelType]无效，字符长度不能超过50个字符',
                ]
            ],
            'sourceCode' => [
                'rules' => 'required|max_length[50]',
                'errors' => [
                    'required' => '参数营销渠道来源代码[sourceCode]为必填项',
                    'max_length' => '参数营销渠道来源代码[sourceCode]无效，字符长度不能超过50个字符',
                ]
            ]
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
                    'required' => '参数营销渠道唯一标识[uuid]为必填项',
                    'min_length' => '参数营销渠道唯一标识[uuid]无效，字符长度不能小于35个字符',
                    'max_length' => '参数营销渠道唯一标识[uuid]无效，字符长度不能超过37个字符',
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
        $channelName = $params['channelName'] ?? null;
        $channelType = $params['channelType'] ?? null;
        $sourceCode = $params['sourceCode'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $sortField = $params['sortField'] ?? null;
        $sortType = $params['sortType'] ?? 'ASC';
        $isPage = $params['isPage'] ?? true;
        $limit = $params['limit'] ?? null;
        $cond = [];
        if (!is_null($channelName)) {
            $cond['channel_name'] = $channelName;
        }
        if (!is_null($channelType)) {
            $cond['channel_type'] = $channelType;
        }
        if (!is_null($sourceCode)) {
            $cond['source_code'] = $sourceCode;
        }
        if (!is_null($keyword)) {
            $cond['orLike'] = [
                'channel_name' => $keyword,
                'channel_type' => $keyword,
                'source_code' => $keyword,
            ];
        }
        if (!$isPage && !is_null($limit)) {
            return $this->getByCond($cond, $sortField, $sortType, (int)$limit);
        }
        return $this->getPage($page, $pageSize, $cond, $sortField, $sortType);
    }

    /**
     * 根据UUID获取营销渠道
     * @param string $uuid
     * @return array|null
     */
    public function getChannelByUuid(string $uuid): ?array
    {
        if ($this->validateUUID($uuid) !== true) {
            return null;
        }
        return $this->getFirstByUuid($uuid);
    }

    /**
     * 创建营销渠道
     * @param array $data
     * @return bool|string
     */
    public function create(array $data): bool|string
    {
        $data = self::prepare($data);
        if (is_string($data)) {
            return $data;
        }

        $channel = new MarketingChannel();
        $channel->fill($data)
            ->filterInvalidProperties();
        $res = $this->insert($channel);
        if ($res !== true) {
            return '创建营销渠道失败';
        }
        return true;
    }

    /**
     * 更新营销渠道
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
            return '营销渠道UUID不存在';
        }

        $channel = new MarketingChannel();
        $channel->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($channel);
        if ($res !== true) {
            return '更新营销渠道失败';
        }
        return true;
    }

    /**
     * 删除营销渠道
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $channel = $this->getFirstByUuid($uuid);
        if (empty($channel)) {
            return '营销渠道UUID不存在';
        }
        $id = (int)$channel['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除营销渠道失败';
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

        $channelType = $data['channel_type'] ?? null;
        if (!is_null($channelType)) {
            $typeList = [];
            foreach (MarketingChannelType::cases() as $case) {
                $typeList[] = $case->name;
            }
            if (!in_array($channelType, $typeList, true)) {
                return '无效的营销渠道类型';
            }
        }
        $data['channel_type'] = $channelType ?? MarketingChannelType::OTHER->name;

        return $data;
    }
}
