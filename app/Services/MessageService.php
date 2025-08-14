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
use App\Entities\Message;
use App\Enums\DeletedStatus;
use App\Enums\MessageStatus;

class MessageService extends BaseService
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
            'subject' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数留言主题[subject]无效，字符长度不能超过200个字符',
                ]
            ],
            'content' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数留言正文[content]无效，字符长度不能超过1000个字符',
                ]
            ],
            'registrationSource' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数注册来源[registrationSource]无效，字符长度不能超过100个字符',
                ]
            ],
            'registrationEntry' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数注册入口[registrationEntry]无效，字符长度不能超过100个字符',
                ]
            ],
            'trafficSource' => [
                'rules' => 'if_exist|max_length[100]',
                'errors' => [
                    'max_length' => '参数流量来源[trafficSource]无效，字符长度不能超过100个字符',
                ]
            ],
            'status' => [
                'rules' => 'if_exist|in_list[pending,sent,delivered,read,withdrawn,deleted,expired,failed,blocked,queued,draft,rejected]',
                'errors' => [
                    'in_list' => '参数消息状态[status]无效，允许的值为：pending,sent,delivered,read,withdrawn,deleted,expired,failed,blocked,queued,draft,rejected',
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
            'subject' => [
                'rules' => 'required|max_length[200]',
                'errors' => [
                    'required' => '参数留言主题[subject]无效，留言主题为必填项',
                    'max_length' => '参数留言主题[subject]无效，字符长度不能超过200个字符',
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
        $name = $params['name'] ?? null;
        $email = $params['email'] ?? null;
        $phone = $params['phone'] ?? null;
        $company = $params['company'] ?? null;
        $registrationSource = $params['registrationSource'] ?? null;
        $status = $params['status'] ?? null;
        $leads = $params['leads'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $cond = [];
        if (!is_null($name)) {
            $cond['name'] = $name;
        }
        if ($leads === 'true') {
            $cond['orLike'] = [
                'email' => $email,
                'phone' => $phone,
                'company' => $company
            ];
        } else {
            if (!is_null($email)) {
                $cond['email'] = $email;
            }
            if (!is_null($phone)) {
                $cond['phone'] = $phone;
            }
            if (!is_null($company)) {
                $cond['company'] = $company;
            }
        }
        if (!is_null($registrationSource)) {
            $cond['registration_source'] = $registrationSource;
        }
        if (!is_null($status)) {
            $cond['status'] = $status;
        }
        if (!is_null($keyword)) {
            $cond['orLike'] = [
                'subject' => $keyword
            ];
        }
        return $this->getPage($page, $pageSize, $cond, 'created_at');
    }

    /**
     * 根据UUID获取消息
     * @param string $uuid
     * @return array|null
     */
    public function getByUUID(string $uuid): ?array
    {
        if ($this->validateUuid($uuid) !== true) {
            return null;
        }
        $message = $this->getFirstByUuid($uuid);
        if ($message['status'] === MessageStatus::PENDING->value) {
            $data = [
                'status' => MessageStatus::READ->value
            ];
            $cond = [
                'id' => $message['id']
            ];
            $this->updateByCond($data, $cond);
        }
        return $message;
    }

    /**
     * 创建消息
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
        if (empty($email) && empty($phone)) {
            return '联系方式无效，请填写邮箱或电话';
        }

        $message = new Message();
        $message->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($message);
        if ($res !== true) {
            return '创建消息失败';
        }

        $leadsSvc = new LeadsService();
        $leads = new Leads();
        $name = $data['name'] ?? null;
        $company = $data['company'] ?? null;
        $registrationSource = $data['registration_source'] ?? null;
        $registrationEntry = $data['registration_entry'] ?? null;
        $trafficSvc = new TrafficService();
        $trafficSource = $trafficSvc->getTrafficSource();

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
        if (!empty($cond)) {
            $res = $leadsSvc->getOrWhere($cond);
            if (count($res) > 0) {
                $leads->setId($res[0]['id']);
                if (empty($res[0]['name']) && !is_null($name)) {
                    $leads->setName($name);
                }
                if (empty($res[0]['email']) && !is_null($email)) {
                    $leads->setEmail($email);
                }
                if (empty($res[0]['phone']) && !is_null($phone)) {
                    $leads->setPhone($phone);
                }
                if (empty($res[0]['company']) && !is_null($company)) {
                    $leads->setCompany($company);
                }
                $leadsSvc->updateById($leads);
            } else {
                if (!is_null($name)) {
                    $leads->setName($name);
                }
                if (!is_null($email)) {
                    $leads->setEmail($email);
                }
                if (!is_null($phone)) {
                    $leads->setPhone($phone);
                }
                if (!is_null($company)) {
                    $leads->setCompany($company);
                }
                if (!is_null($registrationSource)) {
                    $leads->setRegistrationSource($registrationSource);
                }
                if (!is_null($registrationEntry)) {
                    $leads->setRegistrationEntry($registrationEntry);
                }
                if (!is_null($trafficSource)) {
                    $leads->setTrafficSource($trafficSource);
                }
                $leadsSvc->insert($leads);
            }
        }
        return true;
    }

    /**
     * 删除消息
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '消息UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除消息失败';
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
        $data['status'] = MessageStatus::PENDING->value;
        return $data;
    }
}
