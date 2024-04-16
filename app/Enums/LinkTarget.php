<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午2:24
 */
declare(strict_types=1);

namespace App\Enums;

enum LinkTarget:string
{
    case BLANK = '_blank';
    case SELF = '_self';
    case PARENT = '_parent';
    case TOP = '_top';
}