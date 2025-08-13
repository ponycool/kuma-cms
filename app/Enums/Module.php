<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/13
 * Time: 14:45
 */
declare(strict_types=1);

namespace App\Enums;

enum Module: string
{
    case PRODUCT = '产品';
    case ARTICLE = '文章';
    case GOODS = '商品';
    case PARTNER = '合作伙伴';

}