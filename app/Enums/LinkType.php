<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/13
 * Time: 16:08
 */
declare(strict_types=1);

namespace App\Enums;

enum LinkType: int
{
    // 站内
    case INTERNAL = 0;
    // 站外
    case EXTERNAL = 1;
}
