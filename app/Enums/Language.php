<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/3
 * Time: 17:07
 */
declare(strict_types=1);

namespace App\Enums;

enum Language: string
{
    // 中文简体
    case SIMPLIFIED_CHINESE = 'zh-CN';
    // 英文
    case ENGLISH = 'en-US';
    // 俄文
    case RUSSIAN = 'ru-RU';
}