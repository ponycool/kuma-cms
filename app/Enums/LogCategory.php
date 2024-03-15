<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/15
 * Time: 10:04
 */
declare(strict_types=1);

namespace App\Enums;

/**
 * 日志类别
 */
enum LogCategory: string
{
    // 系统
    case SYSTEM = 'SYSTEM';
    // 应用程序
    case APPLICATION = 'APPLICATION';
    // 用户
    case USER = 'USER';
}
