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
    // 服务热线
    case SERVICE_PHONE = 'service_phone';
    // 服务邮箱
    case SERVICE_EMAIL = 'service_email';
    // 版权
    case COPYRIGHT = 'copyright';
    // ICP 备案
    case ICP = 'icp';
    // 公安备案
    case POLICE_RECORD = 'police_record';
    // 统计脚本
    case STATISTICAL_SCRIPT = 'statistical_script';
    // 客服脚本
    case SERVICE_SCRIPT = 'service_script';
}