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
use App\Enums\LogCategory;
use App\Enums\LogLevel;
use Carbon\Carbon;

class LogService extends BaseService
{
    /**
     * DEBUG级别日志
     * @param string $message
     * @param string $category
     * @param int|null $uid
     * @return void
     */
    public function debug(string $message, string $category = LogCategory::SYSTEM->value, ?int $uid = null): void
    {
        $this->saveLog($message, level: LogLevel::DEBUG->value, category: $category, uid: $uid);
    }

    /**
     * INFO级别日志
     * @param string $message
     * @param string $category
     * @param int|null $uid
     * @return void
     */
    public function info(string $message, string $category = LogCategory::SYSTEM->value, ?int $uid = null): void
    {
        $this->saveLog($message, category: $category, uid: $uid);
    }

    /**
     * WARN级别日志
     * @param string $message
     * @param string $category
     * @param int|null $uid
     * @return void
     */
    public function warn(string $message, string $category = LogCategory::SYSTEM->value, ?int $uid = null): void
    {
        $this->saveLog($message, level: LogLevel::WARN->value, category: $category, uid: $uid);
    }

    /**
     * ERROR级别日志
     * @param string $message
     * @param string $category
     * @param int|null $uid
     * @return void
     */
    public function error(string $message, string $category = LogCategory::SYSTEM->value, ?int $uid = null): void
    {
        $this->saveLog($message, LogLevel::ERROR->value, category: $category, uid: $uid);
    }

    /**
     * 保存日志
     * @param string $message
     * @param string $level
     * @param string $category
     * @param int|null $uid
     * @return void
     */
    private function saveLog(string $message, string $level = LogLevel::INFO->value,
                             string $category = LogCategory::SYSTEM->value, ?int $uid = null): void
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
        $ip = $request->getIPAddress();;
        $agent = $request->getUserAgent();
        $timestamp = Carbon::now()->getTimestamp();
        $log = new Log();
        $log->setLevel($level)
            ->setCategory($category)
            ->setMessage($message)
            ->setIpAddress($ip)
            ->setUserAgent($agent->getAgentString())
            ->setTimestamp((string)$timestamp);
        if (!is_null($uid)) {
            $log->setUid($uid);
        }
        $this->insert($log);
    }
}
