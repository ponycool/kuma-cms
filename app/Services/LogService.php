<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/03/15
 * Time: 01:58 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Log;
use App\Enums\DeletedStatus;
use App\Enums\LogCategory;
use App\Enums\LogLevel;
use App\Traits\NetworkTrait;
use Carbon\Carbon;

class LogService extends BaseService
{
    use NetworkTrait;
    /**
     * DEBUG级别日志
     * @param string $message
     * @param LogCategory $category
     * @param int|null $uid
     * @return void
     */
    public function debug(string $message, LogCategory $category = LogCategory::SYSTEM, ?int $uid = null): void
    {
        $this->saveLog($message, level: LogLevel::DEBUG, category: $category, uid: $uid);
    }

    /**
     * INFO级别日志
     * @param string $message
     * @param LogCategory $category
     * @param int|null $uid
     * @return void
     */
    public function info(string $message, LogCategory $category = LogCategory::SYSTEM, ?int $uid = null): void
    {
        $this->saveLog($message, category: $category, uid: $uid);
    }

    /**
     * WARN级别日志
     * @param string $message
     * @param LogCategory $category
     * @param int|null $uid
     * @return void
     */
    public function warn(string $message, LogCategory $category = LogCategory::SYSTEM, ?int $uid = null): void
    {
        $this->saveLog($message, level: LogLevel::WARN, category: $category, uid: $uid);
    }

    /**
     * ERROR级别日志
     * @param string $message
     * @param LogCategory $category
     * @param int|null $uid
     * @return void
     */
    public function error(string $message, LogCategory $category = LogCategory::SYSTEM, ?int $uid = null): void
    {
        $this->saveLog($message, LogLevel::ERROR, category: $category, uid: $uid);
    }

    /**
     * 获取
     * @return array
     */
    public function getQueryRules(): array
    {
        return [
            'username' => [
                'rules' => 'if_exist|min_length[2]|max_length[20]',
                'errors' => [
                    'min_length' => '参数用户名称[username]无效，字符长度不能少于2个字符',
                    'max_length' => '参数用户名称称[username]无效，字符长度不能超过20个字符',
                ]
            ],
            'level' => [
                'rules' => 'if_exist|in_list[DEBUG,INFO,WARN,ERROR]',
                'errors' => [
                    'in_list' => '参数日志级别[level]无效，必须为"DEBUG","INFO","WARN","ERROR"',
                ]
            ],
            'category' => [
                'rules' => 'if_exist|in_list[SYSTEM,APPLICATION,USER]',
                'errors' => [
                    'in_list' => '参数日志类别[category]无效，必须为"SYSTEM","APPLICATION","USER""',
                ]
            ],
            'startTime' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数查询开始时间[startTime]无效，必须为"Y-m-d"格式的字符串',
                ]
            ],
            'endTime' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数查询结束时间[endTime]无效，必须为"Y-m-d"格式的字符串',
                ]
            ],
            'keyword' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数搜索关键词[keyword]无效，字符长度不能超过20个字符',
                ]
            ],
        ];
    }

    /**
     * 获取系统日志分页数据
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $data = self::prepare($params);
        $page = $data['page'] ?? 1;
        $pageSize = $data['pageSize'] ?? 10;
        $username = $data['username'] ?? null;
        $level = $data['level'] ?? null;
        $category = $data['category'] ?? null;
        $startTime = $data['start_time'] ?? null;
        $endTime = $data['end_time'] ?? null;
        $keyword = $data['keyword'] ?? null;
        $sql = [
            'SELECT log.id,log.uid,log.level,log.category,log.message,log.ip_address,log.user_agent,log.timestamp,',
            'user.nickname, ',
            'log.created_at,log.updated_at ',
            'FROM swap_log as log ',
            'LEFT JOIN swap_user AS user ON log.uid=user.id ',
            'WHERE log.deleted_at IS NULL ',
            'AND log.deleted=? ',
            'AND user.deleted_at IS NULL ',
            'AND user.deleted=? '
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
            DeletedStatus::UNDELETED->value,
        ];

        if (!is_null($level)) {
            $sql[] = 'AND log.level=? ';
            $sqlParams[] = $level;
        }
        if (!is_null($category)) {
            $sql[] = 'AND log.category=? ';
            $sqlParams[] = $category;
        }
        if (!is_null($username)) {
            $sql[] = 'AND user.nickname=? ';
            $sqlParams[] = $username;
        }
        if (!is_null($startTime)) {
            $sql[] = "AND DATE(log.created_at) >= ? ";
            $sqlParams[] = $startTime;
        }
        if (!is_null($endTime)) {
            $sql[] = "AND DATE(log.created_at) <= ? ";
            $sqlParams[] = $endTime;
        }
        if (!is_null($keyword)) {
            $sql = array_merge($sql, [
                'AND ( ',
                'log.message like ? ',
                'OR log.ip_address like ? ',
                'OR user.nickname like ? ',
                ') '
            ]);
            $sqlParams = array_merge($sqlParams, [
                '%' . $keyword . '%',
                '%' . $keyword . '%',
                '%' . $keyword . '%',
            ]);
        }

        $sql[] = 'ORDER BY log.created_at DESC';
        $sql = $this->assembleSql($sql);
        return $this->getPageByQuery($sql, $sqlParams, page: $page, pageSize: $pageSize);
    }

    /**
     * 保存日志
     * @param string $message
     * @param LogLevel $level
     * @param LogCategory $category
     * @param int|null $uid
     * @return void
     */
    private function saveLog(string      $message, LogLevel $level = LogLevel::INFO,
                             LogCategory $category = LogCategory::SYSTEM, ?int $uid = null): void
    {
        if (is_null($uid)) {
            $accountId = $this->getLoginAccountID();
            $userSvc = new UserService();
            $cond = [
                'account_id' => $accountId
            ];
            $user = $userSvc->getFirstByCond($cond);
            $uid = $user['id'] ?? null;
        }
        $request = service('request');
        $agent = $request->getUserAgent();
        $ip = $this->getClientIp();
        $timestamp = Carbon::now()->getTimestamp();
        $log = new Log();
        $log->setLevel($level->name)
            ->setCategory($category->name)
            ->setMessage($message)
            ->setIpAddress($ip)
            ->setUserAgent($agent->getAgentString())
            ->setTimestamp((string)$timestamp);
        if (!is_null($uid)) {
            $log->setUid($uid);
        }
        $this->insert($log);
    }

    /**
     * 准备数据以供保存和更新，返回处理后的数据或错误消息
     * @param array $data
     * @return string|array 处理后的数据或错误消息
     */
    private function prepare(array $data): string|array
    {
        return $this->convertParamsToSnakeCase($data);
    }
}
