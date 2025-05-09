<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/9
 * Time: 15:51
 */
declare(strict_types=1);

namespace App\Enums;

enum TrafficSource: string
{
    case DIRECT = '直接访问';
    case GOOGLE = 'google';
    case BING = 'bing';
    case YOUTUBE = 'youtube';
    case FACEBOOK = 'facebook';
    case TWITTER = 'twitter';
    case BAIDU = '百度';
    case UNKNOWN = '未知';
    case YANDEX = 'yandex';
}
