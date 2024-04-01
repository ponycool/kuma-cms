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
use CodeIgniter\Database\Query;
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
    //返回结果数据类型，object、array
    protected string $resultType = 'object';

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

    public function getResultType(): string
    {
        return $this->resultType;
    }

    public function setResultType(string $resultType): void
    {
        $this->resultType = $resultType;
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
     * 自定义SQL查询
     * @param string $sql
     * @param array|null $params
     * @return array
     */
    public function query(string $sql, ?array $params = null): array
    {
        $db = $this->getDb();
        if (is_null($params)) {
            $query = $db->query($sql);
        } else {
            $query = $db->query($sql, $params);
        }
        if ($this->getResultType() === 'object') {
            return $query->getResult();
        }
        return $query->getResultArray();
    }

    /**
     * 执行自定义SQL，只能执行写入操作
     * @param string $sql
     * @return bool
     */
    public function exec(string $sql): bool
    {
        if (stripos($sql, 'select') !== false) {
            log_message(
                'error',
                '执行自定义SQL失败，err：自定义SQL存在查询操作',
            );
            return false;
        }
        $db = $this->getDb();
        return $db->query($sql);
    }

    /**
     * 拼装SQL
     * @param array $sql
     * @return string
     */
    public function assembleSql(array $sql): string
    {
        $newSql = implode('', $sql);
        $newSql = trim($newSql);
        $tablePrefix = $this->getTablePrefix();
        // 替换表前缀
        return str_replace('swap_', $tablePrefix, $newSql);
    }

    /**
     * 预编译SQL
     * @param string $sql
     * @param array|null $params
     * @return string
     */
    public function prepareSql(string $sql, ?array $params = null): string
    {
        $db = $this->getDb();
        if (is_null($params)) {
            $pQuery = $db->prepare(function () use ($db, $sql) {
                return (new Query($db))->setQuery($sql);
            });
        } else {
            $pQuery = $db->prepare(
                function () use ($db, $sql) {
                    return (new Query($db))->setQuery($sql);
                },
                $params
            );
        }
        if ($pQuery->hasError()) {
            log_message(
                'error',
                'SQL预编译失败，err：{err}',
                [
                    'err' => $pQuery->getErrorMessage()
                ]
            );
        }
        $pQuery->close();

        return $pQuery->getQueryString();
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
     * 根据自定义SQL获取数据总条数
     * @param string $sql 自定义SQL
     * @param array|null $params 参数
     * @return int
     */
    public function getTotalRowsByQuery(string $sql, ?array $params = null): int
    {
        $selectKeyword = 'SELECT';
        $fromKeyword = 'FROM';
        $start = stripos($sql, $selectKeyword);
        $end = stripos($sql, $fromKeyword);
        if ($start !== false && $end !== false) {
            $newSql = substr($sql, 0, strlen($selectKeyword) + 1);
            $newSql .= "count(*) as total_rows ";
            $newSql .= substr($sql, $end);
            $result = $this->query($newSql, $params);
            if (count($result) === 0) {
                return 0;
            }
            if (is_array($result[0])) {
                return (int)$result[0]['total_rows'];
            } else {
                return (int)$result[0]->total_rows;
            }
        }
        return 0;
    }

    /**
     * 构建条件
     * @param object $builder
     * @param array $cond
     * @return object
     */
    public function buildConditions(object $builder, array $cond): object
    {
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
        return $builder;
    }

    /**
     * 根据自定义SQL获取分页
     * @param string $sql
     * @param array|null $params
     * @param int $page
     * @param int $pageSize
     * @return array
     */
    public function getPageByQuery(string $sql, ?array $params = null, int $page = 1, int $pageSize = 10): array
    {
        $pageData = [
            'page' => $page,
            'pageSize' => $pageSize,
            'total' => 0,
            'totalPage' => 0,
            'pageData' => []
        ];
        $sql = $this->prepareSql($sql, $params);
        $totalRows = $this->getTotalRowsByQuery($sql, $params);
        if ($totalRows === 0) {
            return $pageData;
        }
        $pageData['total'] = $totalRows;
        // 总页数
        $pageData['totalPage'] = $this->totalPages($totalRows, $pageSize);
        $offset = $this->pageOffset($page, $pageSize);
        $sql .= sprintf(" LIMIT %s,%s", $offset, $pageSize);
        $this->setResultType('array');
        $result = $this->query($sql, $params);
        $pageData['pageData'] = $result;
        return $pageData;
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
     * 根据ID获取一条数据
     * @param int $id
     * @return array
     */
    public function getFirstById(int $id): array
    {
        $model = $this->getModel();
        $res = $model->asArray()
            ->select($this->getSelectFields())
            ->where('id', $id)
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
     * @param $where
     * @return array
     */
    public function getWhere($where): array
    {
        $model = $this->getModel();
        $builder = $model->asArray();
        $res = $builder->where($where)
            ->findAll();
        return (array)$res;
    }

    /**
     * @param $where
     * @return array
     */
    public function getOrWhere($where): array
    {
        $model = $this->getModel();
        $builder = $model->asArray();
        $res = $builder->orWhere($where)
            ->findAll();
        return (array)$res;
    }

    /**
     * 获取统计数量
     * @param array|null $cond
     * @return int
     */
    public function getCount(?array $cond = null): int
    {
        $model = $this->getModel();
        $builder = $model->select('count(*) as count');
        if (!is_null($cond)) {
            $builder = $this->buildConditions($builder, $cond);
        }
        $builder->where('deleted_at IS NULL')
            ->where('deleted', DeletedStatus::UNDELETED->value);
        $query = $builder->get();
        $res = $query->getRowArray();
        return (int)$res['count'] ?? 0;
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
     * 获取插入行的ID
     * @return int
     */
    public function getInsertId(): int
    {
        $db = $this->getDb();
        return $db->insertID();
    }

    /**
     * 按月份汇总每个月份的数据条数并补全
     * 这个方法可以对MySQL中的数据按照月份进行汇总，
     * 并且将没有数据的月份进行补全并填充为0。
     * 这个方法可以在需要生成包含所有月份数据的报表或图表时使用，确保结果完整且没有缺失。
     * 汇总当年数据，必须指定当前年时间段
     * @param string $dateField 汇总日期字段
     * @param array|null $where 筛选条件
     * @return array
     */
    public function monthlyCount(string $dateField = 'created_at', ?array $where = null): array
    {
        $table = $this->getTable();
        $sql = [
            'SELECT mt.month, ',
            'COALESCE(count(t.`id`), 0) AS count ',
            'FROM (',
            'SELECT 1 AS month ',
            'UNION SELECT 2 AS month ',
            'UNION SELECT 3 AS month ',
            'UNION SELECT 4 AS month ',
            'UNION SELECT 5 AS month ',
            'UNION SELECT 6 AS month ',
            'UNION SELECT 7 AS month ',
            'UNION SELECT 8 AS month ',
            'UNION SELECT 9 AS month ',
            'UNION SELECT 10 AS month ',
            'UNION SELECT 11 AS month ',
            'UNION SELECT 12 AS month ',
            ') AS mt ',
            'LEFT JOIN (',
            'select * ',
            'FROM `swap_' . $table . '` ',
            'WHERE `deleted` = 0 ',
            'AND deleted_at IS NULL ',
        ];
        if (!is_null($where)) {
            foreach ($where as $k => $v) {
                if (!strpos($k, '>') && !strpos($k, '<')) {
                    $sql [] = sprintf("AND `%s` = '%s' ", $k, $v);
                } else {
                    $sql [] = sprintf("AND %s '%s' ", $k, $v);
                }
            }
        }
        array_push($sql,
            ') as t ON MONTH(t.`' . $dateField . '`) = mt.month ',
            'GROUP BY mt.month ',
            'ORDER BY mt.month'
        );
        $sql = $this->assembleSql($sql);
        return $this->query($sql);
    }

    /**
     * 按月份汇总数据并补全
     * 这个方法可以对MySQL中的数据按照月份进行汇总，
     * 并且将没有数据的月份进行补全并填充为0。
     * 这个方法可以在需要生成包含所有月份数据的报表或图表时使用，确保结果完整且没有缺失。
     * 汇总当年数据，必须指定当前年时间段
     * @param string|array $fields
     * @param string $dateField 汇总日期字段
     * @param array|null $where 筛选条件
     * @return array
     */
    public function summarizeAndFillByMonth(string|array $fields, string $dateField = 'created_at',
                                            ?array       $where = null): array
    {
        $table = $this->getTable();
        $queryFields = '';
        if (is_string($fields)) {
            $queryFields = sprintf(', COALESCE(SUM(t.`%s`), 0) AS %s ', $fields, $fields);
        }
        if (is_array($fields)) {
            $count = 0;
            foreach ($fields as $item) {
                if ($count < count($fields)) {
                    $queryFields .= ', ';
                }
                $queryFields .= sprintf('COALESCE(SUM(t.`%s`), 0) AS %s ', $item, $item);
                $count++;
            }
        }
        $sql = [
            'SELECT month_table.month ',
            $queryFields,
            'FROM (',
            'SELECT 1 AS month ',
            'UNION SELECT 2 AS month ',
            'UNION SELECT 3 AS month ',
            'UNION SELECT 4 AS month ',
            'UNION SELECT 5 AS month ',
            'UNION SELECT 6 AS month ',
            'UNION SELECT 7 AS month ',
            'UNION SELECT 8 AS month ',
            'UNION SELECT 9 AS month ',
            'UNION SELECT 10 AS month ',
            'UNION SELECT 11 AS month ',
            'UNION SELECT 12 AS month ',
            ') AS month_table ',
            'LEFT JOIN (',
            'SELECT * ',
            'FROM `swap_' . $table . '` ',
            'WHERE `deleted` = 0 ',
            'AND deleted_at IS NULL ',
        ];
        if (!is_null($where)) {
            foreach ($where as $k => $v) {
                if (!strpos($k, '>') && !strpos($k, '<')) {
                    $sql [] = sprintf("AND `%s` = '%s' ", $k, $v);
                } else {
                    $sql [] = sprintf("AND %s '%s' ", $k, $v);
                }
            }
        }
        // 兼容性
        $sql[] = match ($this->getDb()->DBDriver) {
            'SQLite3' => ') as t ON CAST(strftime(\'%m\',' . $dateField . ') AS INTEGER) = month_table.month ',
            default => ') as t ON MONTH(t.`' . $dateField . '`) = month_table.month ',
        };
        array_push($sql,
            'GROUP BY month_table.month ',
            'ORDER BY month_table.month'
        );
        $sql = $this->assembleSql($sql);
        $res = $this->query($sql);
        if (count($res) === 0) {
            return [];
        }
        return $res;
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
     * 批量插入数据
     * @param array $data
     * @return bool
     */
    public function insertBatch(array $data): bool
    {
        $db = $this->getDb();
        $model = $this->getModel();
        $table = $this->getTable();
        $builder = $db->table($table);
        try {
            $time = Time::now()->toDateTimeString();
            foreach ($data as &$item) {
                if (!is_object($item)) {
                    throw new Exception('数据类型必须为Object');
                }
                $verificationRes = $this->verificationData($model, $item);
                if (!is_null($verificationRes)) {
                    throw new Exception($table . '属性无效，未通过验证策略校验。');
                }
                $item = $item->toArray();
                $item['created_at'] = $time;
                $item['updated_at'] = $time;
            }
            $res = $builder->insertBatch($data);
            if ($res === false) {
                throw new Exception('执行SQL失败');
            }
            return (bool)$res;
        } catch (Exception $e) {
            log_message(
                'error',
                '{table} batch insert failed, error: {msg}',
                [
                    'table' => $table,
                    'msg' => $e->getMessage()
                ]
            );
            return false;
        }
    }

    /**
     * 根据ID更新数据
     * @param object $entity
     * @param int|null $id
     * @return bool
     */
    public function updateById(object $entity, ?int $id = null): bool
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
            // 如果未设置ID参数，从实体中获取
            if (is_null($id)) {
                $id = $entity->getId();
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
            $builder->where('id', $id)
                ->update($data);
            $rows = $db->affectedRows();
            if ($rows === 0) {
                throw new Exception('受影响行数为0');
            }
            return true;
        } catch (Exception $e) {
            log_message('error', '根据ID更新{table}失败，error：{error}',
                [
                    'table' => $table,
                    'error' => $e->getMessage()
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

    /**
     * 根据条件更新
     * @param array $data 更新数据
     * @param array $cond 更新条件
     * @return bool
     */
    public function updateByCond(array $data, array $cond): bool
    {
        $db = $this->getDb();
        $table = $this->getTable();
        $builder = $db->table($table);
        try {
            $builder->where('deleted', DeletedStatus::UNDELETED->value);
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
            $data['updated_at'] = Time::now()->toDateTimeString();
            // 更新时如果存在创建时间，则移除创建时间
            if (array_key_exists('created_at', $data)) {
                unset($data['created_at']);
            }
            // 尝试移除不需要更新的索引
            if (array_key_exists('id', $data)) {
                unset($data['id']);
            }
            if (array_key_exists('gid', $data)) {
                unset($data['gid']);
            }
            if (array_key_exists('uuid', $data)) {
                unset($data['uuid']);
            }
            $builder->update($data);
            $rows = $db->affectedRows();
            if ($rows === 0) {
                throw new Exception('0行数据受影响');
            }
            log_message(
                'info',
                '{table} 更新 {rows} 行数据',
                [
                    'table' => $table,
                    'rows' => $rows
                ]
            );
            return true;
        } catch (Exception $e) {
            log_message(
                'error',
                '{table} update failed, error: {msg}',
                [
                    'table' => $table,
                    'msg' => $e->getMessage()
                ]
            );
            return false;
        }
    }

    /**
     * 批量更新数据
     * @param array $data 数据
     * @param string $indexField 索引字段
     * @return bool
     */
    public function updateBatch(array $data, string $indexField): bool
    {
        $db = $this->getDb();
        $model = $this->getModel();
        $table = $this->getTable();
        $builder = $db->table($this->getTable());
        try {
            $time = Time::now()->toDateTimeString();
            foreach ($data as &$item) {
                if (is_object($item)) {
                    $verificationRes = $this->verificationData($model, $item);
                    if (!is_null($verificationRes)) {
                        throw new Exception($table . '属性无效，未通过验证策略校验。');
                    }
                    $item = $item->toArray();
                    $item['updated_at'] = $time;
                }
                if (is_array($item)) {
                    $item['updated_at'] = $time;
                }
            }

            foreach ($data as &$item) {
                // 更新时如果存在创建时间，则移除创建时间
                if (array_key_exists('created_at', $item)) {
                    unset($item['created_at']);
                }
                // 更新时如果存在删除属性，则移除删除属性
                if (array_key_exists('deleted', $item)) {
                    unset($item['deleted']);
                }
                if (array_key_exists('deleted_at', $item)) {
                    unset($item['deleted_at']);
                }
                // 尝试移除不需要的索引
                if (array_key_exists('id', $item) && $indexField !== 'id') {
                    unset($item['id']);
                }
                if (array_key_exists('gid', $item) && $indexField !== 'gid') {
                    unset($item['gid']);
                }
                if (array_key_exists('uuid', $item) && $indexField !== 'uuid') {
                    unset($item['uuid']);
                }
            }

            $res = $builder->updateBatch($data, $indexField);
            if ($res === false) {
                throw new Exception('执行SQL失败');
            }
            return (bool)$res;
        } catch (Exception $e) {
            log_message(
                'error',
                '{table} batch update failed, error: {msg}',
                [
                    'table' => $this->getTable(),
                    'msg' => $e->getMessage()
                ]
            );
            return false;
        }
    }

    /**
     * 根据ID将字段的值递增指定的量
     * @param int $id
     * @param string $field
     * @param int $value
     * @return bool
     */
    public function incrById(int $id, string $field, int $value = 1): bool
    {
        $db = $this->getDb();
        $table = $this->getTable();
        $builder = $db->table($this->getTable());
        try {
            $builder->where('id', $id)
                ->increment($field, $value);
            $rows = $db->affectedRows();
            if ($rows !== 1) {
                return false;
            }
            return true;
        } catch (Exception $e) {
            log_message(
                'error',
                '{table} increment failed, error: {msg}',
                [
                    'table' => $table,
                    'msg' => $e->getMessage()
                ]
            );
            return false;
        }
    }

    /**
     * 根据条件删除数据
     * @param array $cond
     * @return bool
     */
    public function deleteByCond(array $cond): bool
    {
        $db = $this->getDb();
        $table = $this->getTable();
        $builder = $db->table($table);
        try {
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
            $currentTime = Time::now()->toDateTimeString();
            $data = [
                'deleted_at' => $currentTime,
                'deleted' => DeletedStatus::DELETED->value
            ];
            $builder->update($data);
            $rows = $db->affectedRows();
            if ($rows === 0) {
                throw new Exception('0行数据受影响');
            }
            log_message(
                'info',
                '{table} 删除 {rows} 行数据',
                [
                    'table' => $table,
                    'rows' => $rows
                ]
            );
            return true;
        } catch (Exception $e) {
            log_message(
                'error',
                '{table} delete failed, error: {msg}',
                [
                    'table' => $table,
                    'msg' => $e->getMessage()
                ]
            );
            return false;
        }
    }

    /**
     * 删除数据
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool
    {
        $db = $this->getDb();
        $table = $this->getTable();
        $builder = $db->table($table);
        try {
            $currentTime = Time::now()->toDateTimeString();
            $data = [
                'deleted_at' => $currentTime,
                'deleted' => DeletedStatus::DELETED->value
            ];
            $builder->where('id', $id)
                ->update($data);
            $rows = $db->affectedRows();
            if ($rows === 0) {
                throw new Exception('受影响行数为0');
            }
            return true;
        } catch (Exception $e) {
            log_message(
                'error',
                '根据ID删除{table}中ID为{id}的数据失败，error：{error}',
                [
                    'table' => $table,
                    'id' => $id,
                    'error' => $e->getMessage()
                ]
            );
            return false;
        }
    }

    /**
     * 根据ID批量删除数据
     * @param array $ids
     * @return bool
     */
    public function batchDelByIds(array $ids): bool
    {
        try {
            $cond = [
                'id' => $ids
            ];
            return $this->deleteByCond($cond);
        } catch (Exception $e) {
            log_message('error', 'batch delete failed, error: {msg}', [
                'msg' => $e->getMessage()
            ]);
            return false;
        }
    }
}