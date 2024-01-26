<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 13:59
 */
declare(strict_types=1);

namespace App\Enums;

/**
 * 错误代码命名规则
 * 0 成功
 * -1 未知异常，作为兜底错误码
 * 4**** 客户端异常
 * 5**** 第三方业务系统异常
 * 6**** 基础中间件异常
 * 7**** 数据异常，例如数据不存在，数据不一致，主键冲突
 */
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