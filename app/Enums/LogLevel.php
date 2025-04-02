<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/15
 * Time: 10:02
 */
declare(strict_types=1);

namespace App\Enums;

/**
 * 日志级别
 */
enum LogLevel: string
{
    case DEBUG = '调试';
    case INFO = '信息';
    case WARN = '警告';
    case ERROR = '错误';
}
