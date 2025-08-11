<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/8
 * Time: 15:15
 */
declare(strict_types=1);

namespace App\Enums;

enum MenuType: string
{
    // 链接
    case LINK = 'link';
    // 单页
    case SINGLE_PAGE = 'single_page';
    // 模块
    case MODULE = 'module';
}
