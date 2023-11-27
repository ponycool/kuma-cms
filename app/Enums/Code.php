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
    // 请求方法不支持
    case METHOD_NOT_SUPPORTED = 2;
}