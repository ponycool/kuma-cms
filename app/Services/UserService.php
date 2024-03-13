<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:49 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Account;
use App\Entities\User;
use App\Entities\UserMeta;
use App\Enums\DeletedStatus;
use App\Enums\LockStatus;
use Carbon\Carbon;

class UserService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'accountName' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数账户名称[accountName]无效，字符长度不能超过20个字符',
                ]
            ],
            'password' => [
                'rules' => 'if_exist|min_length[6]|max_length[20]',
                'errors' => [
                    'min_length' => '参数密码[password]无效，字符长度不能少于6个字符',
                    'max_length' => '参数密码[password]无效，字符长度不能超过20个字符',
                ]
            ],
            'email' => [
                'rules' => 'if_exist|valid_email',
                'errors' => [
                    'valid_email' => '参数邮箱[email]无效，必须是有效的电子邮箱',
                ]
            ],
            'nickname' => [
                'rules' => 'if_exist|min_length[2]|max_length[20]',
                'errors' => [
                    'min_length' => '参数用户昵称[nickname]无效，字符长度不能少于2个字符',
                    'max_length' => '参数用户昵称[nickname]无效，字符长度不能超过20个字符',
                ]
            ],
        ];
    }

    /**
     * 获取创建规则
     * @return array
     */
    public function getCreateRules(): array
    {
        $rules = [
            'accountName' => [
                'rules' => 'required|max_length[20]',
                'errors' => [
                    'required' => '参数账户名称[accountName]无效，密码为必填项',
                    'max_length' => '参数账户名称[accountName]无效，字符长度不能超过20个字符',
                ]
            ],
            'password' => [
                'rules' => 'required|min_length[6]|max_length[20]',
                'errors' => [
                    'required' => '参数密码[password]无效，密码为必填项',
                    'min_length' => '参数密码[password]无效，字符长度不能少于6个字符',
                    'max_length' => '参数密码[password]无效，字符长度不能超过20个字符',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取更新规则
     * @return array
     */
    public function getUpdateRules(): array
    {
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数用户UUID[uuid]为必填项',
                    'min_length' => '参数用户UUID[uuid]无效',
                    'max_length' => '参数用户UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 根据账户ID获取用户
     * @param int $id
     * @return array
     */
    public function getByAccountID(int $id): array
    {
        $cond = [
            'account_id' => $id
        ];
        return $this->getFirstByCond($cond);
    }

    /**
     * 获取用户列表
     * @param string|null $keyword
     * @param int $page
     * @param int $pageSize
     * @return array
     */
    public function getList(?string $keyword = null, int $page = 1, int $pageSize = 10): array
    {
        $sql = [
            'SELECT user.id,user.uuid,user.account_id,user.nickname,user.created_at,user.updated_at,',
            'account.uuid AS account_uuid,account.account_name,account.email,account.locked,account.locked_at ',
            'FROM swap_user AS user ',
            'LEFT JOIN swap_account AS account on account.id=user.account_id ',
            'WHERE user.deleted_at IS NULL ',
            'AND user.deleted=? ',
            'AND account.deleted_at IS NULL ',
            'AND account.deleted=? ',
            'AND account.id <> 1 '
        ];
        if (!is_null($keyword)) {
            $sql[] = 'AND account.account_name like ? ';
        }
        $sql[] = 'ORDER BY account.created_at DESC';
        $sql = $this->assembleSql($sql);
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
            DeletedStatus::UNDELETED->value,
        ];
        if (!is_null($keyword)) {
            $sqlParams[] = '%' . $keyword . '%';
        }
        return $this->getPageByQuery($sql, $sqlParams, page: $page, pageSize: $pageSize);
    }

    /**
     * 获取用户档案
     * @param string|null $uuid
     * @return array|null
     */
    public function getUserProfile(?string $uuid): ?array
    {
        if (!is_null($uuid) && !$this->validateUUID($uuid)) {
            return null;
        }
        if (is_null($uuid)) {
            $accountId = $this->getLoginAccountID();
        }
        $sql = [
            'SELECT user.id,user.uuid,user.account_id,user.nickname,user.created_at,user.updated_at,',
            'account.uuid AS account_uuid,account.account_name,account.email,account.locked,account.locked_at ',
            'FROM swap_user AS user ',
            'LEFT JOIN swap_account AS account on account.id=user.account_id ',
            'WHERE user.deleted_at IS NULL ',
            'AND user.deleted=? ',
            'AND account.deleted_at IS NULL ',
            'AND account.deleted=? ',
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
            DeletedStatus::UNDELETED->value,
        ];

        if (is_null($uuid)) {
            $sql[] = 'AND account.id = ?';
            $sqlParams[] = $accountId;
        } else {
            $sql[] = 'AND user.uuid = ?';
            $sqlParams[] = $uuid;
        }

        $sql = $this->assembleSql($sql);
        $res = $this->query($sql, $sqlParams);
        if (count($res) === 0) {
            return null;
        }
        $uid = $res['id'] ?? null;
        if (!is_null($uid)) {
            $userMetaSvc = new UserMetaService();
            $cond = [
                'user_id' => $uid
            ];
            $meta = $userMetaSvc->getByCond($cond);
            if (count($meta) > 0) {
                foreach ($meta as $item) {
                    $res[$item['meta_key']] = $item['meta_value'];
                }
            }
        }
        return $res;
    }

    /**
     * 创建用户
     * @param array $params
     * @return bool|string
     */
    public function createUser(array $params): bool|string
    {
        // 准备数据
        $data = $this->prepareData($params);
        if (is_string($data)) {
            return $data;
        }
        // 校验密码
        $password = $data['password'] ?? '';
        if ($this->validatePassword($password) !== true) {
            return '无效的密码,密码长度不能小于6位，且必须包含大小写字母、数字、特殊字符其中的任意三种组合';
        }

        $accountName = $data['account_name'];
        $password = $data['password'];
        $salt = $this->generateSalt(16);
        if ($salt === false) {
            return '生成盐值失败';
        }
        $password = hash_hmac('sha256', $password, $salt);
        $email = $data['email'] ?? null;
        // 判断账户是否已经存在
        $accountSvc = new AccountService();
        $cond = [
            'account_name' => $accountName,
        ];
        $res = $accountSvc->getByCond($cond);
        if (!empty($res)) {
            return '账户名已存在';
        }

        $account = new Account();
        $account->setAccountName($accountName)
            ->setPassword($password)
            ->setSalt($salt);
        if (!is_null($email)) {
            $cond = [
                'email' => $email,
            ];
            $res = $accountSvc->getByCond($cond);
            if (!empty($res)) {
                return '邮箱已被注册';
            }
            $account->setEmail($email);
        }

        // 开始执行事务
        $this->db->transStart();
        $accountSvc->insert($account);
        $accountID = $this->getInsertId();
        $nickname = $data['nickname'] ?? $accountName;
        $user = new User();
        $user->setAccountId($accountID)
            ->setNickname($nickname);
        $this->insert($user);
        $uid = $this->getInsertId();

        $userMetaSvc = new UserMetaService();
        $userMeta = new UserMeta();
        if (!is_null($data['avatar'] ?? null)) {
            $userMeta->setUserId($uid)
                ->setMetaKey('avatar')
                ->setMetaValue($data['avatar']);
            $userMetaSvc->insert($userMeta);
        }

        $this->db->transComplete();
        return true;
    }

    /**
     * 准备数据以供保存和更新，返回处理后的数据或错误消息
     * @param array $data
     * @return string|array 处理后的数据或错误消息
     */
    public function prepareData(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);

        // 校验用户头像
        $mediaSvc = new MediaService();
        $avatar = $data['avatar'] ?? null;
        if (!is_null($avatar)) {
            $media = $mediaSvc->getByMediaName($avatar);
            if (empty($media)) {
                return '无效的用户头像';
            }
            $data['avatar'] = (int)$media['id'];
        }

        return $data;
    }

    /**
     * 更新用户
     * @param array $params
     * @return bool|string
     */
    public function updateUser(array $params): bool|string
    {
        $data = $this->prepareData($params);

        $rawUser = $this->getFirstByUuid($data['uuid']);
        if (empty($rawUser)) {
            return '用户UUID不存在';
        }

        $accountName = $data['account_name'] ?? null;
        $email = $data['email'] ?? null;
        $nickname = $data['nickname'] ?? null;
        $account = new Account();
        $accountSvc = new AccountService();
        // 开始执行事务
        $this->db->transStart();
        if (!is_null($accountName)) {
            $cond = [
                'account_name' => $accountName
            ];
            $rawAccount = $accountSvc->getFirstByCond($cond);
            if (empty($rawAccount)) {
                $account->setAccountName($accountName);
            }
        }
        if (!is_null($email)) {
            $account->setEmail($email);
        }

        if (!is_null($accountName) || !is_null($email)) {
            $accountSvc->updateById($account, $rawUser['account_id']);
        }

        if (!is_null($nickname)) {
            $user = new User();
            $user->setNickname($nickname);
            $this->updateById($user, $rawUser['id']);
        }
        $this->db->transComplete();
        return true;
    }

    /**
     * 删除用户
     * @param string $uuid
     * @return bool|string
     */
    public function deleteUser(string $uuid): bool|string
    {
        $user = $this->getFirstByUuid($uuid);
        if (empty($user)) {
            return '用户UUID不存在';
        }
        if ($user['account_id'] === 1) {
            return '超级管理员不允许删除';
        }

        $id = (int)$user['id'];
        $accountID = (int)$user['account_id'];
        $accountSvc = new AccountService();
        // 开始执行事务
        $this->db->transStart();
        $this->delete($id);
        $accountSvc->delete($accountID);
        $this->db->transComplete();
        return true;
    }

    /**
     * 冻结用户
     * @param string $uuid
     * @return bool|string
     */
    public function lockUser(string $uuid): bool|string
    {
        $user = $this->getFirstByUuid($uuid);
        if (empty($user)) {
            return '用户UUID不存在';
        }
        if ($user['account_id'] === 1) {
            return '超级管理员不允许冻结';
        }

        $account = new Account();
        $account->setLocked(LockStatus::LOCKED->value)
            ->setLockedAt(Carbon::now()->toDateTimeString());
        $svc = new AccountService();
        $res = $svc->updateById($account, $user['account_id']);
        if ($res !== true) {
            return '账户冻结失败';
        }
        return true;
    }

    /**
     * 解冻用户
     * @param string $uuid
     * @return bool|string
     */
    public function unlockUser(string $uuid): bool|string
    {
        $user = $this->getFirstByUuid($uuid);
        if (empty($user)) {
            return '用户UUID不存在';
        }

        $account = new Account();
        $account->setLocked(LockStatus::UNLOCKED->value);
        $svc = new AccountService();
        $res = $svc->updateById($account, $user['account_id']);
        if ($res !== true) {
            return '账户解冻失败';
        }
        return true;
    }
}
