<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/23
 * Time: 15:46
 */
declare(strict_types=1);

namespace App\Enums;
enum Setting: string
{
    // 默认主题
    case THEME = 'theme';
    case SITE_URL = 'site_url';
    // 系统版本
    case VERSION = 'version';
    // ICP 备案
    case ICP = 'icp';
}