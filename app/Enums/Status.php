<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/1/8
 * Time: 11:22
 */
declare(strict_types=1);

namespace App\Enums;

enum Status: int
{
    case FAILED = 0;
    case SUCCESS = 1;
}