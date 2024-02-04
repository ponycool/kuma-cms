<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/4
 * Time: 16:06
 */
declare(strict_types=1);

namespace App\Enums;

enum PublishStatus: int
{
    case UNPUBLISHED = 0;
    case PUBLISHED = 1;
}
