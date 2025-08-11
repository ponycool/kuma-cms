<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/8
 * Time: 15:19
 */
declare(strict_types=1);

namespace App\Enums;

enum ModuleLink: string
{
    case PRODUCT = '/product';
    case ARTICLE = '/article';
    case GOODS = '/goods';
    case PARTNER = '/partner';
}
