<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/7
 * Time: 15:39
 */

declare(strict_types=1);

namespace App\Traits;

trait NetworkTrait
{
    /**
     * 获取客户端IP
     * @return string
     */
    public function getClientIp(): string
    {
        // 检查 HTTP_X_FORWARDED_FOR 头部
        if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ips = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
            // 取第一个非私有 IP 地址
            foreach ($ips as $ip) {
                $trimmedIp = trim($ip);
                if (filter_var($trimmedIp, FILTER_VALIDATE_IP,
                    FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                    return $trimmedIp;
                }
            }
        }

        // 检查 HTTP_CLIENT_IP 头部
        if (isset($_SERVER['HTTP_CLIENT_IP'])
            && filter_var($_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP)) {
            return $_SERVER['HTTP_CLIENT_IP'];
        }

        // 使用 REMOTE_ADDR
        if (isset($_SERVER['REMOTE_ADDR'])
            && filter_var($_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP)) {
            return $_SERVER['REMOTE_ADDR'];
        }

        // 默认返回未知
        return '0.0.0.0';
    }
}
