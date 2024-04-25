<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/24
 * Time: 01:10 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Leads;
use App\Enums\DeletedStatus;

class LeadsService extends BaseService
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
                    'max_length' => '参数客户名称[name]无效，字符长度不能超过50个字符',
                ]
            ],
            'email' => [
                'rules' => 'if_exist|valid_email|max_length[50]',
                'errors' => [
                    'valid_email' => '参数电子邮箱[email]无效，必须是有效的电子邮箱地址',
                    'max_length' => '参数电子邮箱[email]无效，字符长度不能超过50个字符',
                ]
            ],
            'phone' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数电话号码[phone]无效，字符长度不能超过50个字符',
                ]
            ],
            'company' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数公司名称[company]无效，字符长度不能超过100个字符',
                ]
            ],
            'additionalContacts' => [
                'rules' => 'if_exist|valid_json|max_length[1000]',
                'errors' => [
                    'valid_json' => '参数附加联系方式[additionalContacts]无效，必须是有效的JSON字符串',
                    'max_length' => '参数附加联系方式[additionalContacts]无效，字符长度不能超过1000个字符',
                ]
            ],
            'assignedTo' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数负责人[assignedTo]无效，字符长度不能超过50个字符',
                ]
            ],
            'assignedAt' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数分配时间[assignedAt]无效，必须是有效的日期格式',
                ]
            ],
            'source' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数来源[source]无效，字符长度不能超过100个字符',
                ]
            ],
            'registrationEntry' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数注册入口[registrationEntry]无效，字符长度不能超过100个字符',
                ]
            ],
            'group' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数分组名称[group]无效，字符长度不能超过50个字符',
                ]
            ],
            'tags' => [
                'rules' => 'if_exist|valid_json|max_length[200]',
                'errors' => [
                    'valid_json' => '参数标签[tags]无效，必须是有效的JSON字符串',
                    'max_length' => '参数标签[tags]无效，字符长度不能超过200个字符',
                ]
            ],
            'remark' => [
                'rules' => 'if_exist|max_length[500]',
                'errors' => [
                    'max_length' => '参数备注[remark]无效，字符长度不能超过500个字符',
                ]
            ],
            'status' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数状态[status]无效，字符长度不能超过50个字符',
                ]
            ],
            'orderType' => [
                'rules' => 'if_exist|in_list[ASC,DESC]',
                'errors' => [
                    'in_list' => '参数排序类型[orderType]无效，必须是ASC或DESC',
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
        return $this->getBaseRules();
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
                    'required' => '参数线索UUID[uuid]为必填项',
                    'min_length' => '参数线索UUID[uuid]无效',
                    'max_length' => '参数线索UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取查询验证规则
     * @return array[]
     */
    public function getQueryRules(): array
    {
        return $this->getBaseRules();
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
        $company = $params['company'] ?? null;
        $name = $params['name'] ?? null;
        $email = $params['email'] ?? null;
        $phone = $params['phone'] ?? null;
        $assignedTo = $params['assignedTo'] ?? null;
        $source = $params['source'] ?? null;
        $registrationEntry = $params['registrationEntry'] ?? null;
        $group = $params['group'] ?? null;
        $status = $params['status'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $orderField = $params['orderField'] ?? 'created_at';
        $orderType = $params['orderType'] ?? 'DESC';
        $sql = [
            'SELECT l.id,l.uuid,l.company,l.name,l.email,l.phone,l.additional_contacts,l.assigned_to,l.assigned_at,',
            'l.source,l.registration_entry,l.`group`,l.tags,l.remark,l.status,l.created_at,l.updated_at ',
            'FROM swap_leads AS l ',
            'WHERE l.deleted_at IS NULL ',
            'AND l.deleted = ? '
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value
        ];

        if (!is_null($company)) {
            $sql[] = 'AND l.company = ? ';
            $sqlParams[] = $company;
        }
        if (!is_null($name)) {
            $sql[] = 'AND l.name = ? ';
            $sqlParams[] = $name;
        }
        if (!is_null($email)) {
            $sql[] = 'AND l.email = ? ';
            $sqlParams[] = $email;
        }
        if (!is_null($phone)) {
            $sql[] = 'AND l.phone = ? ';
            $sqlParams[] = $phone;
        }
        if (!is_null($assignedTo)) {
            $sql[] = 'AND l.assigned_to = ? ';
            $sqlParams[] = $assignedTo;
        }
        if (!is_null($source)) {
            $sql[] = 'AND l.source = ? ';
            $sqlParams[] = $source;
        }
        if (!is_null($registrationEntry)) {
            $sql[] = 'AND l.registration_entry = ? ';
            $sqlParams[] = $registrationEntry;
        }
        if (!is_null($group)) {
            $sql[] = 'AND l.`group` = ? ';
            $sqlParams[] = $group;
        }
        if (!is_null($status)) {
            $sql[] = 'AND l.status = ? ';
            $sqlParams[] = $status;
        }
        if (!is_null($keyword)) {
            $sql = array_merge($sql, [
                'AND ( ',
                'l.name LIKE ? ',
                'l.email LIKE ? ',
                'l.phone LIKE ? ',
                'l.company LIKE ? ',
                'l.additional_contacts LIKE ? ',
                ')'
            ]);
            $sqlParams = array_merge($sqlParams, [
                '%' . $keyword . '%',
                '%' . $keyword . '%',
                '%' . $keyword . '%',
                '%' . $keyword . '%',
                '%' . $keyword . '%',
            ]);
        }
        $sql[] = sprintf('ORDER BY %s %s', $orderField, $orderType);
        $sql = $this->assembleSql($sql);
        return $this->getPageByQuery($sql, $sqlParams, $page, $pageSize);
    }

    /**
     * 根据UUID获取线索
     * @param string $uuid
     * @return array|null
     */
    public function getByUUID(string $uuid): ?array
    {
        if ($this->validateUUID($uuid) !== true) {
            return null;
        }
        return $this->getFirstByUuid($uuid);
    }

    /**
     * 获取分组列表
     * @return array
     */
    public function getGroup(): array
    {
        $sql = [
            'SELECT `group` ',
            'FROM swap_leads ',
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
     * 获取状态列表
     * @return array
     */
    public function getStatus(): array
    {
        $sql = [
            'SELECT status ',
            'FROM swap_leads ',
            'WHERE deleted_at IS NULL ',
            'AND deleted = ? ',
            'GROUP BY status ',
            'ORDER BY status ASC'
        ];
        $params = [
            DeletedStatus::UNDELETED->value
        ];
        $sql = $this->assembleSql($sql);
        $this->setResultType('array');
        $res = $this->query($sql, $params);
        $list = [];
        foreach ($res as $item) {
            if (!is_null($item['status'])) {
                $list[] = $item['status'];
            }
        }
        return $list;
    }

    /**
     * 创建线索
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

        $email = $data['email'] ?? null;
        $phone = $data['phone'] ?? null;
        $company = $data['company'] ?? null;
        if (is_null($email) && is_null($phone)) {
            return '电话号码和电子邮箱不能同时为空，必须提供一个有效的联系方式';
        }

        $cond = [
            'email' => $email,
            'phone' => $phone,
            'company' => $company,
        ];
        $res = $this->getOrWhere($cond);
        if (count($res) > 0) {
            return '线索已存在';
        }

        $leads = new Leads();
        $leads->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($leads);
        if ($res !== true) {
            return '创建线索失败';
        }
        return true;
    }

    /**
     * 更新线索
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
            return '线索UUID不存在';
        }

        $email = $data['email'] ?? null;
        $phone = $data['phone'] ?? null;
        $company = $data['company'] ?? null;
        $cond = [];
        if (!is_null($email)) {
            $cond['email'] = $email;
        }
        if (!is_null($phone)) {
            $cond['phone'] = $phone;
        }
        if (!is_null($company)) {
            $cond['company'] = $company;
        }
        if (count($cond) > 0) {
            $res = $this->getOrWhere($cond);
            if (count($res) === 1 && $raw['id'] !== $res[0]['id']) {
                return '线索已存在，请检查线索信息';
            } elseif (count($res) > 1) {
                return '线索已存在，请检查线索信息';
            }
        }

        $leads = new Leads();
        $leads->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($leads);
        if ($res !== true) {
            return '更新线索失败';
        }
        return true;
    }

    /**
     * 删除线索
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '线索UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除线索失败';
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
        return $this->convertParamsToSnakeCase($data);
    }
}
