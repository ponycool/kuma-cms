<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/3
 * Time: 16:10
 */
declare(strict_types=1);

namespace App\Enums;

enum DeletedStatus: int
{
    // 已删除状态
    case DELETED = 1;
    // 未删除状态
    case UNDELETED = 0;

}