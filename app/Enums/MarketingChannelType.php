<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/12
 * Time: 14:44
 */
declare(strict_types=1);

namespace App\Enums;

enum MarketingChannelType: string
{
    case EMAIL = '邮件营销';
    case SMS = '短信营销';
    case SOCIAL_MEDIA = '社交营销';
    case PAID_ADVERTISING = '付费广告';
    case CONTENT_MARKETING = '内容营销';
    case AFFILIATE = '联盟营销';
    case OTHER = '其他';
}