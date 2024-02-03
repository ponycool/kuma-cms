<?php

/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 14:36
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\DeletedStatus;
use App\Traits\CoreTrait;
use CodeIgniter\Database\BaseConnection;
use CodeIgniter\Database\ConnectionInterface;
use CodeIgniter\I18n\Time;
use Config\Database;
use Config\Services;
use Exception;
use Ramsey\Uuid\Uuid;

class BaseService
{
    protected BaseConnection $db;
    // 表
    protected string $table;
    // 表前缀
    protected string $tablePrefix;
    // 数据模型
    protected object $model;

    use CoreTrait;

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
     * 计算总页数
     * @param int $total 总数据条数
     * @param int $pageSize 每页分页条数
     * @return int
     */
    public function totalPages(int $total, int $pageSize = 10): int
    {
        $totalPages = bcdiv(bcadd((string)$total, (string)($pageSize - 1)), (string)$pageSize);
        return (int)$totalPages;
    }

    /**
     * 计算分页偏移量
     * @param int $page
     * @param int $pageSize
     * @return int
     */
    public function pageOffset(int $page = 1, int $pageSize = 10): int
    {
        $offset = bcmul(bcsub((string)$page, '1'), (string)$pageSize);
        return (int)$offset;
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
     * 根据UUID获取一条数据
     * @param string $uuid
     * @return array
     */
    public function getFirstByUuid(string $uuid): array
    {
        $model = $this->getModel();
        $res = $model->asArray()
            ->select($this->getSelectFields())
            ->where('uuid', $uuid)
            ->first();
        return (array)$res;
    }

    /**
     * 获取分页数据
     * @param int $page 当前页
     * @param int $pageSize 每页条数
     * @param array|null $cond 查询条件
     * @param string|null $orderField 排序字段
     * @param string $order 排序
     * @return array
     */
    public function getPage(int $page = 1, int $pageSize = 10, ?array $cond = null, ?string $orderField = null, string $order = 'DESC'): array
    {
        $db = $this->getDb();
        $table = $this->getTable();
        $builder = $db->table($table);
        $pageData = [
            'page' => $page,
            'pageSize' => $pageSize,
            'total' => 0,
            'totalPage' => 0,
            'pageData' => []
        ];
        $builder->select($this->getSelectFields());
        if (!is_null($cond)) {
            foreach ($cond as $k => $v) {
                if (is_null($v)) {
                    continue;
                }
                if (is_object($v)) {
                    break;
                }
                if (is_array($v)) {
                    // 如果条件是而多维数组，则直接跳过
                    if (count($v) !== count($v, 1)) {
                        continue;
                    }
                    $opts = [
                        'orWhere',
                        'like',
                        'orLike',
                        'notLike',
                        'orNotLike'
                    ];
                    if (in_array($k, $opts, true)) {
                        foreach ($v as $field => $value) {
                            switch ($k) {
                                case 'orWhere':
                                    $builder->orWhere($field, $value);
                                    break;
                                case 'like':
                                    $builder->like($field, $value);
                                    break;
                                case 'orLike':
                                    $builder->orLike($field, $value);
                                    break;
                                case 'notLike':
                                    $builder->notLike($field, $value);
                                    break;
                                case 'orNotLike':
                                    $builder->orNotLike($field, $value);
                                    break;
                                default:
                                    break;
                            }
                        }
                    } else {
                        $builder->whereIn($k, $v);
                    }
                    continue;
                }
                $builder->where($k, $v);
            }
        }
        $builder->where('deleted_at')
            ->where('deleted', DeletedStatus::UNDELETED->value);
        if (is_null($orderField)) {
            $builder->orderBy('created_at', $order);
        } else {
            $builder->orderBy($orderField, $order);
        }
        $totalRows = $builder->countAllResults(false);
        if ($totalRows === 0) {
            return $pageData;
        }
        $pageData['total'] = $totalRows;
        // 总页数
        $pageData['totalPage'] = $this->totalPages($totalRows, $pageSize);
        $offset = $this->pageOffset($page, $pageSize);
        $builder->limit($pageSize, $offset);
        $query = $builder->get();
        $result = $query->getResultArray();
        $pageData['pageData'] = $result;
        return $pageData;
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

    /**
     * 根据UUID更新数据
     * @param object $entity
     * @param string|null $uuid
     * @return bool
     */
    public function updateByUuid(object $entity, ?string $uuid = null): bool
    {
        $db = $this->getDb();
        $table = $this->getTable();
        $model = $this->getModel();
        $builder = $db->table($table);
        try {
            if (!is_object($entity)) {
                throw new Exception('数据类型必须为Object');
            }
            $verificationRes = $this->verificationData($model, $entity);
            if (!is_null($verificationRes)) {
                throw new Exception($table . '属性无效，未通过验证策略校验。');
            }
            // 如果未设置UUID参数，从实体中获取
            if (is_null($uuid)) {
                $uuid = $entity->getUuid();
            }

            // 判断是否是有效的UUID
            if (!Uuid::isValid($uuid)) {
                throw new Exception('参数UUID不是一个有效的UUID');
            }

            $currentTime = Time::now()->toDateTimeString();
            $data = $entity->toArray();
            // 移除id、gid、uuid等不需要更新参数
            $data = array_diff_key($data, [
                'id' => '',
                'gid' => '',
                'uuid' => ''
            ]);
            $data['updated_at'] = $currentTime;
            $builder->where('uuid', $uuid)
                ->update($data);
            $rows = $db->affectedRows();
            if ($rows === 0) {
                throw new Exception('受影响行数为0');
            }
            return true;
        } catch (Exception $e) {
            log_message('error', '根据UUID更新{table}失败，error：{error}',
                [
                    'table' => $table,
                    'error' => $e->getMessage()
                ]
            );
            return false;
        }
    }
}