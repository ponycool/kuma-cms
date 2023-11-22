<?php

/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 14:36
 */
declare(strict_types=1);

namespace App\Services;

use CodeIgniter\Database\BaseConnection;
use CodeIgniter\Database\ConnectionInterface;
use Config\Database;

class BaseService
{
    protected BaseConnection $db;
    protected string $table;
    // 表前缀
    protected string $tablePrefix;

    public function __construct()
    {
        $config = [
            'database' => WRITEPATH . 'data/cms.db',
            'DBDriver' => 'SQLite3',
            'DBPrefix' => 'm_'
        ];

        $this->setDb(Database::connect($config));
    }

    public function getDb(): ConnectionInterface
    {
        return $this->db;
    }

    public function setDb(BaseConnection $db): BaseService
    {
        $this->db = $db;
        return $this;
    }

    public function getTable(): string
    {
        return $this->table;
    }

    public function setTable(string $table): void
    {
        $this->table = $table;
    }

    public function getTablePrefix(): string
    {
        return $this->tablePrefix;
    }

    public function setTablePrefix(string $tablePrefix): void
    {
        $this->tablePrefix = $tablePrefix;
    }
}