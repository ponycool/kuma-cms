<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/1
 * Time: 15:50
 */
declare(strict_types=1);

namespace App\Enums;

enum LockStatus: int
{
    case UNLOCKED = 0;
    case LOCKED = 1;
}