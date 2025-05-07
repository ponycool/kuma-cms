<?php
declare(strict_types=1);

namespace App\Events;

use CodeIgniter\Database\Query;

/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/7
 * Time: 14:39
 */
class DBQuery
{
    public static function durable(Query $query): void
    {
        if (ENVIRONMENT !== 'development') {
            return;
        }
        $info = [
            'sql' => str_replace("\n", "", $query->getQuery()),
            'duration' => $query->getDuration(),
        ];
        log_message('info', '执行SQL命令："{sql}", 耗时{duration}', $info);
    }
}