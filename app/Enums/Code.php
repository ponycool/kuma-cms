<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 13:59
 */
declare(strict_types=1);

namespace App\Enums;

enum Code: int
{
    // 成功
    case OK = 0;
    // 通用错误
    case FAIL = 1;
    // 系统错误
    case SYSTEM_ERROR = 2;
    // 请求方法不支持
    case METHOD_NOT_SUPPORTED = 3;
    // 无效的Content-Type
    case INVALID_HTTP_CONTENT_TYPE = 4;
    // 无效的JSON格式
    case INVALID_JSON_FORMAT = 5;
    // 未授权
    case UNAUTHORIZED = 6;
    // 无效的令牌
    case INVALID_TOKEN = 7;
    // 未配置JWR密钥
    case JWT_SECRET_NOT_EXISTS = 8;
    // 无效的JWT密钥
    case INVALID_JWT_SECRET = 9;
}