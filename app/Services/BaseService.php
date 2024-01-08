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
use Config\Services;
use Exception;

class BaseService
{
    protected BaseConnection $db;
    // 表
    protected string $table;
    // 表前缀
    protected string $tablePrefix;
    // 数据模型
    protected object $model;

    public function __construct()
    {
        $config = [
            'database' => WRITEPATH . 'data/cms.db',
            'DBDriver' => 'SQLite3',
            'DBPrefix' => 'm_'
        ];

        $this->setDb(Database::connect($config));

        //初始化表名
        $class = get_class($this);
        $tmpArr = explode('\\', $class);
        $tableName = str_replace('Service', '', $tmpArr[count($tmpArr) - 1]);
        $table = function () use ($tableName) {
            $t = '';
            for ($i = 0; $i < strlen($tableName); $i++) {
                if ($i === 0) {
                    $t .= $tableName[$i];
                    continue;
                }
                if (ord($tableName[$i]) >= ord('A') && ord($tableName[$i]) <= ord('Z')) {
                    $t .= '_';
                }
                $t .= $tableName[$i];
            }
            return $t;
        };
        $table = strtolower($table());
        $this->setTable($table);

        // 初始化模型
        $modelName = $tableName . 'Model';
        $db = $this->getDb();
        if (class_exists('App\\Models\\' . $modelName)) {
            $model = model('App\\Models\\' . $modelName, true, $db);
            $this->setModel($model);
        }

        // 初始化表前缀
        $dbPrefix = $db->getPrefix();
        $this->setTablePrefix($dbPrefix);
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

    public function getModel(): object
    {
        return $this->model;
    }

    public function setModel(object $model): void
    {
        $this->model = $model;
    }

    /**
     * 校验数据
     * @param object $model
     * @param object $entity
     * @return array|null
     */
    public function verificationData(object $model, object $entity): ?array
    {
        $validation = Services::validation();
        $validation->setRules($model->getValidationRules(), $model->getValidationMessages());
        $validation->run($entity->toRawArray());
        $errors = $validation->getErrors();
        if (count($errors) !== 0) {
            return $errors;
        }
        return null;
    }

    /**
     * 获取查询字段
     * @return array
     */
    public function getSelectFields(): array
    {
        $selectFields = [];
        if ($this->table !== 'setting') {
            $selectFields[] = 'id';
        }
        $model = $this->getModel();
        return array_merge_recursive(
            $selectFields,
            $model->allowedFields,
            [
                'created_at',
                'updated_at',
            ]
        );
    }

    /**
     * 获取所有数据
     * @return array
     */
    public function get(): array
    {
        $model = $this->getModel();
        $res = $model->asArray()
            ->select($this->getSelectFields())
            ->findAll();
        return (array)$res;
    }

    /**
     * 根据查询条件获取所有符合条件的数据
     * @param array $cond
     * @param string|null $orderField
     * @param string $order
     * @return array
     */
    public function getByCond(array $cond, ?string $orderField = null, string $order = 'DESC'): array
    {
        $model = $this->getModel();
        $builder = $model->asArray();
        foreach ($cond as $k => $v) {
            if (is_object($v)) {
                break;
            }
            if (is_array($v)) {
                $builder->whereIn($k, $v);
                continue;
            }
            $builder->where($k, $v);
        }
        if (is_null($orderField)) {
            $orderField = 'created_at';
        }
        $res = $builder->orderBy($orderField, $order)
            ->findAll();
        return (array)$res;
    }

    /**
     * 根据查询条件获取一条符合条件的数据
     * @param array $cond
     * @param string|null $orderField 排序字段
     * @param string $order
     * @return array
     */
    public function getFirstByCond(array $cond, ?string $orderField = null, string $order = 'DESC'): array
    {
        $model = $this->getModel();
        $builder = $model->asArray()
            ->select($this->getSelectFields());
        foreach ($cond as $k => $v) {
            if (is_null($v)) {
                continue;
            }
            if (is_object($v)) {
                break;
            }
            if (is_array($v)) {
                $builder->whereIn($k, $v);
                continue;
            }
            $builder->where($k, $v);
        }

        if (!is_null($orderField)) {
            $builder->orderBy($orderField, $order);
        }

        $res = $builder->limit(1)
            ->first();
        return (array)$res;
    }

    /**
     * 插入一条数据
     * @param object $entity 实体
     * @return bool
     */
    public function insert(object $entity): bool
    {
        $table = $this->getTable();
        $model = $this->getModel();
        try {
            $verificationRes = $this->verificationData($model, $entity);
            if (!is_null($verificationRes)) {
                throw new Exception('属性无效，未通过验证策略校验。');
            }

            $res = $model->insert($entity);
            if ($res === false) {
                throw new Exception('执行SQL失败');
            }
            return (bool)$res;
        } catch (Exception $e) {
            log_message(
                'error',
                '{table} reset record insert failed, err: {msg}',
                [
                    'table' => $table,
                    'msg' => $e->getMessage()
                ]
            );
            return false;
        }
    }
}