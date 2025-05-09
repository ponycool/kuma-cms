<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/9
 * Time: 15:59
 */
declare(strict_types=1);

namespace App\Enums;

enum SearchEngine: string
{
    case BAIDU = 'baidu.com';
    case BING = 'bing.com';
    case GOOGLE = 'google.com';
    case YANDEX = 'yandex.com';
    case YAHOO = 'yahoo.com';
}
