<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/11/14
 * Time: 17:45
 */
declare(strict_types=1);

namespace App\Services;

use CodeIgniter\CLI\CLI;
use CodeIgniter\I18n\Time;
use Exception;

class ScaffoldService extends BaseService
{
    public function __construct()
    {
        parent::__construct();
        helper('filesystem');
    }

    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'table' => [
                'rules' => 'required|max_length[50]',
                'errors' => [
                    'required' => '参数表名无效,表名为必填项',
                    'max_length' => '参数表名无效，字符长度不能超过50个字符',
                ]
            ],
            'overwrite' => [
                'rules' => 'if_exist|in_list[true,false]',
                'errors' => [
                    'in_list' => '参数是否重写无效，必须为字符串格式的true或false',
                ]
            ]
        ];
    }

    /**
     * 创建实体文件
     * @param string $table
     * @param bool $overwrite
     * @return bool|string
     */
    public function createEntity(string $table, bool $overwrite = false): bool|string
    {
        $path = APPPATH . 'Entities';
        try {
            $res = self::check($table, $path);
            if ($res !== true) {
                return $res;
            }
            $db = $this->getDb();
            $fields = $db->getFieldData($table);
            $entityName = self::getEntityName($table);
            $file = $path . '/' . $entityName . '.php';
            if (file_exists($file) && !$overwrite) {
                throw new Exception(sprintf("实体文件%s已存在", $file));
            }
            $data = $this->structureFileHeader();
            $data .= $this->structureEntity($entityName, $fields);
            if (!write_file($file, $data)) {
                throw new Exception(sprintf("实体文件%s写入失败", $file));
            }
            return true;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * 创建模型文件
     * @param string $table
     * @param bool $overwrite
     * @return bool|string
     */
    public function createModel(string $table, bool $overwrite = false): bool|string
    {
        $path = APPPATH . 'Models';
        try {
            $res = self::check($table, $path);
            if ($res !== true) {
                return $res;
            }
            $db = $this->getDb();
            $fields = $db->getFieldData($table);
            $entityName = self::getEntityName($table);
            $modelName = $entityName . 'Model';
            $file = $path . '/' . $modelName . '.php';
            if (file_exists($file) && !$overwrite) {
                throw new Exception(sprintf("模型文件%s已存在", $file));
            }
            $data = $this->structureFileHeader();
            $data .= $this->structureModel($table, $modelName, $entityName, $fields);
            if (!write_file($file, $data)) {
                throw new Exception(sprintf("模型文件%s写入失败", $file));
            }
            return true;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * 创建服务文件
     * @param string $table
     * @param bool $overwrite
     * @return bool|string
     */
    public function createService(string $table, bool $overwrite = false): bool|string
    {
        $path = APPPATH . 'Services';
        try {
            $res = self::check($table, $path);
            if ($res !== true) {
                return $res;
            }
            $entityName = ucwords(str_replace('_', ' ', $table));
            $entityName = str_replace(' ', '', $entityName);
            $serviceName = $entityName . 'Service';
            $file = $path . '/' . $serviceName . '.php';
            if (file_exists($file) && !$overwrite) {
                throw new Exception(sprintf("服务文件%s已存在", $file));
            }
            $data = $this->structureFileHeader();
            $data .= $this->structureService($serviceName);
            if (!write_file($file, $data)) {
                throw new Exception(sprintf("服务文件%s写入失败", $file));
            }
            return true;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * 构造文件头
     * @return string
     */
    public function structureFileHeader(): string
    {
        $fileHeader = '<?php';
        $fileHeader .= PHP_EOL;
        $fileHeader .= <<<EOF
/**
 * Created by PhpStorm.
 * User: Pony
EOF;
        $fileHeader .= PHP_EOL;
        try {
            $now = Time::now();
            $fileHeader .= ' * Date: ' . $now->format('Y/m/d') . PHP_EOL;
            $fileHeader .= ' * Time: ' . $now->format('H:i') . ' ';
            if ($now->getHour() < 12) {
                $fileHeader .= '上午';
            } else {
                $fileHeader .= '下午';
            }
            $fileHeader .= PHP_EOL;
        } catch (Exception $e) {
            log_message('warning',
                '脚手架构造文件头时出现异常，异常信息为：{err}',
                ['err' => $e->getMessage()]
            );
        }
        $fileHeader .= ' */' . PHP_EOL;
        $fileHeader .= "declare(strict_types=1);" . PHP_EOL . PHP_EOL;
        return $fileHeader;
    }

    /**
     * 构造实体文件
     * @param string $entity
     * @param array $fields
     * @return string
     */
    public function structureEntity(string $entity, array $fields): string
    {
        $data = <<<EOF
namespace App\Entities;

use Exception;

EOF;
        $data .= PHP_EOL;
        $data .= sprintf("class %s extends Base", $entity) . PHP_EOL;
        $data .= "{" . PHP_EOL;
        $functions = '';
        // 生成ID的GET和SET方法
        if ($this->fieldExists($fields, 'id')) {
            $functions .= self::createGet('id', 'int');
            $functions .= self::createSet('id', 'int', $entity);
        }
        if (self::fieldExists($fields, 'gid')) {
            $functions .= <<<EOF
    /**
     * @return int
     */
    public function getGid(): int
    {
EOF;
            $functions .= PHP_EOL;
            $functions .= "        return $" . "this->gid;" . PHP_EOL;
            $functions .= "    }" . PHP_EOL;
            $functions .= PHP_EOL;
            $functions .= "    /**" . PHP_EOL;
            $functions .= "     * @param int $" . "gid" . PHP_EOL;
            $functions .= "     * @return $" . "this" . PHP_EOL;
            $functions .= "     * @throws Exception" . PHP_EOL;
            $functions .= "     */" . PHP_EOL;
            $functions .= "    public function setGid(int $" . "gid = 0): " . $entity . PHP_EOL;
            $functions .= "    {" . PHP_EOL;
            $functions .= "        $" . "this->gid = $" . "gid ?: (int)$" . "this->generateGid();" . PHP_EOL;
            $functions .= "        $" . "this->attributes['gid'] = $" . "this->gid;" . PHP_EOL;
            $functions .= "        return $" . "this;" . PHP_EOL;
            $functions .= "    }" . PHP_EOL;
            $functions .= PHP_EOL;
        }
        if (self::fieldExists($fields, 'uuid')) {
            $functions .= <<<EOF
    /**
     * @return string
     */
    public function getUuid(): string
    {
EOF;
            $functions .= PHP_EOL;
            $functions .= "        return $" . "this->uuid;" . PHP_EOL;
            $functions .= "    }" . PHP_EOL . PHP_EOL;
            $functions .= "    /**" . PHP_EOL;
            $functions .= "     * @param string $" . "uuid" . PHP_EOL;
            $functions .= "     * @return $" . "this" . PHP_EOL;
            $functions .= "     * @throws Exception" . PHP_EOL;
            $functions .= "     */" . PHP_EOL;
            $functions .= "    public function setUuid(string $" . "uuid = ''): " . $entity . PHP_EOL;
            $functions .= "    {" . PHP_EOL;
            $functions .= "        $" . "this->uuid = $" . "uuid ?: $" . "this->generateUuid();" . PHP_EOL;
            $functions .= "        $" . "this->attributes['uuid'] = $" . "this->uuid;" . PHP_EOL;
            $functions .= "        return $" . "this;" . PHP_EOL;
            $functions .= "    }" . PHP_EOL;
        }
        if (self::fieldExists($fields, 'ulid')) {
            $functions .= <<<EOF
    /**
     * @return string
     */
    public function getUlid(): string
    {
EOF;
            $functions .= PHP_EOL;
            $functions .= "        return $" . "this->ulid;" . PHP_EOL;
            $functions .= "    }" . PHP_EOL . PHP_EOL;
            $functions .= "    /**" . PHP_EOL;
            $functions .= "     * @param string $" . "ulid" . PHP_EOL;
            $functions .= "     * @return $" . "this" . PHP_EOL;
            $functions .= "     * @throws Exception" . PHP_EOL;
            $functions .= "     */" . PHP_EOL;
            $functions .= "    public function setUlid(string $" . "ulid = ''): " . $entity . PHP_EOL;
            $functions .= "    {" . PHP_EOL;
            $functions .= "        $" . "this->ulid = $" . "ulid ?: $" . "this->generateUlid();" . PHP_EOL;
            $functions .= "        $" . "this->attributes['ulid'] = $" . "this->ulid;" . PHP_EOL;
            $functions .= "        return $" . "this;" . PHP_EOL;
            $functions .= "    }" . PHP_EOL;
        }
        $functions .= PHP_EOL;
        $totalSteps = count($fields);
        $currStep = 1;
        $dates = [];
        foreach ($fields as $field) {
            $fieldType = match (strtolower($field->type)) {
                'int', 'bigint', 'tinyint', 'smallint', 'mediumint', 'integer', 'bit' => 'int',
                'float', 'double', 'decimal' => 'float',
                default => 'string',
            };
            // 构造对象属性
            $data .= match ($field->name) {
                'id' => '    protected ' . $fieldType . ' $' . $field->name . ' = 0;' . PHP_EOL,
                default => '    protected ' . $fieldType . ' $' . $field->name . ';' . PHP_EOL,
            };

            if ($field->type === 'datetime') {
                $dates[] = $field->name;
            }
            // 构造函数
            switch ($field->name) {
                case 'id':
                case 'gid':
                case 'uuid':
                case 'ulid':
                    break;
                case 'created_at':
                case 'updated_at':
                case 'deleted_at':
                case 'deleted':
                    $functions .= $this->createGet($field->name, $fieldType);
                    break;
                default:
                    $functions .= $this->createGet($field->name, $fieldType);
                    $functions .= $this->createSet($field->name, $fieldType, $entity);
                    break;
            }
            if (is_cli()) {
                CLI::showProgress($currStep++, $totalSteps);
            }
        }
        // 构造dates
        $data .= "    protected $" . "dates = [" . PHP_EOL;
        foreach ($dates as $item) {
            $data .= match ($item) {
                'created_at', 'updated_at', 'deleted_at' => "        '" . $item . "'," . PHP_EOL,
                default => ''
            };
        }
        $data .= "    ];" . PHP_EOL;

        // 构造casts
        $data .= "    protected $" . "casts = [" . PHP_EOL;
        $data .= <<<EOF
        'deleted' => 'boolean'
    ];
EOF;

        // 构造方法
        $data .= PHP_EOL . PHP_EOL;
        $data .= "    public function __construct(array $" . "data = null)" . PHP_EOL;
        $data .= "    {" . PHP_EOL;
        $data .= "        parent::__construct($" . "data);";
        if (
            self::fieldExists($fields, 'gid')
            || self::fieldExists($fields, 'uuid')
            || self::fieldExists($fields, 'ulid')
        ) {
            $data .= PHP_EOL;
            $data .= "        try {" . PHP_EOL;
            if (self::fieldExists($fields, 'gid')) {
                $data .= "            $" . "this->setGid();" . PHP_EOL;
            }
            if (self::fieldExists($fields, 'uuid')) {
                $data .= "            $" . "this->setUuid();" . PHP_EOL;
            }
            if (self::fieldExists($fields, 'ulid')) {
                $data .= "            $" . "this->setUlid();" . PHP_EOL;
            }
            $data .= "        } catch (Exception $" . "e) {" . PHP_EOL;
            $data .= <<<EOF
            log_message(
                'error',
EOF;
            $data .= PHP_EOL;
            $data .= "                '初始化 " . $entity . " Entity 失败，error：{msg}'," . PHP_EOL;
            $data .= "                ['msg' => $" . "e->getMessage()]" . PHP_EOL;
            $data .= <<<EOF
            );
        }
EOF;
        }
        $data .= PHP_EOL . '    }';
        $data .= PHP_EOL . PHP_EOL;
        $data .= $functions;
        $data .= '}' . PHP_EOL;

        if (is_cli()) {
            CLI::showProgress(false);
        }

        return $data;
    }

    /**
     * 构造实体
     * @param string $table
     * @param string $modelName
     * @param string $entityName
     * @param array $fields
     * @return string
     */
    public function structureModel(string $table, string $modelName, string $entityName, array $fields): string
    {
        $data = "namespace App\Models;" . PHP_EOL;
        $data .= PHP_EOL;
        $data .= sprintf("class %s extends BaseModel", $modelName) . PHP_EOL;
        $data .= "{" . PHP_EOL;
        $data .= "    protected $" . "table = '" . $table . "';" . PHP_EOL;
        $data .= "    protected $" . "primaryKey = 'id';" . PHP_EOL;
        $data .= "    protected $" . "returnType = 'App\Entities\\" . $entityName . "';" . PHP_EOL;
        $data .= "    protected $" . "useSoftDeletes = true;" . PHP_EOL;
        $data .= "    protected $" . "allowedFields = [" . PHP_EOL;
        foreach ($fields as $field) {
            switch ($field->name) {
                case 'id':
                case 'created_at':
                case 'updated_at':
                case 'deleted_at':
                case 'deleted':
                    break;
                default:
                    $data .= "        '" . $field->name . "'," . PHP_EOL;
                    break;
            }
        }
        $data .= "    ];" . PHP_EOL;
        $data .= "    protected $" . "useTimestamps = true;" . PHP_EOL;
        $data .= "    protected $" . "createdField = 'created_at';" . PHP_EOL;
        $data .= "    protected $" . "updatedField = 'updated_at';" . PHP_EOL;
        $data .= "    protected $" . "deletedField = 'deleted_at';" . PHP_EOL;
        $data .= "    protected $" . "dateFormat = 'datetime';" . PHP_EOL;
        $data .= "    protected $" . "validationRules = [" . PHP_EOL;
        if (self::fieldExists($fields, 'gid')) {
            $data .= "        'gid' => 'required|integer'," . PHP_EOL;
        }
        if (self::fieldExists($fields, 'uuid')) {
            $data .= "        'uuid' => 'required|min_length[36]|max_length[36]'," . PHP_EOL;
        }
        if (self::fieldExists($fields, 'ulid')) {
            $data .= "        'ulid' => 'required|min_length[26]|max_length[26]'," . PHP_EOL;
        }
        if ($table === 'system_config') {
            $data .= <<<EOF
        'conf_key' => 'required',
EOF;
            $data .= PHP_EOL;
        }
        $data .= "    ];";
        $data .= PHP_EOL;
        $data .= "    protected $" . "validationMessages = [" . PHP_EOL;
        if (self::fieldExists($fields, 'gid')) {
            $data .= <<<EOF
        'gid' => [
            'required' => 'gid 列为必填项',
            'integer' => 'gid 必须为整数',
        ],
EOF;
            $data .= PHP_EOL;
        }
        if (self::fieldExists($fields, 'uuid')) {
            $data .= <<<EOF
        'uuid' => [
            'required' => 'uuid 列为必填项',
            'min_length' => 'uuid 长度为36个字符',
            'max_length' => 'uuid 长度为36个字符',
        ],
EOF;
            $data .= PHP_EOL;
        }
        if (self::fieldExists($fields, 'ulid')) {
            $data .= <<<EOF
        'ulid' => [
            'required' => 'ulid 列为必填项',
            'min_length' => 'ulid 长度为26个字符',
            'max_length' => 'ulid 长度为26个字符',
        ],
EOF;
            $data .= PHP_EOL;
        }
        if ($table === 'system_config') {
            $data .= <<<EOF
        'conf_key' => [
            'required' => '系统配置项的键为必填项',
        ],
EOF;
            $data .= PHP_EOL;
        }
        // 移除多余的PHP_EOL
        $data = rtrim($data, PHP_EOL);
        $data .= PHP_EOL;
        $data .= "    ];";
        $data .= PHP_EOL;
        $data .= "    protected $" . "skipValidation = false;" . PHP_EOL . PHP_EOL;
        $data .= "}" . PHP_EOL . PHP_EOL;
        return $data;
    }

    /**
     * 构造服务
     * @param string $service
     * @return string
     */
    public function structureService(string $service): string
    {
        $data = "namespace App\Services;" . PHP_EOL;
        $data .= PHP_EOL;
        $data .= sprintf("class %s extends BaseService", $service) . PHP_EOL;
        $data .= "{" . PHP_EOL;
        $data .= PHP_EOL;
        $data .= "}" . PHP_EOL;
        return $data;
    }

    /**
     * 检查
     * @param string $table
     * @param string $path
     * @return bool|string
     */
    private function check(string $table, string $path): bool|string
    {
        try {
            $db = $this->getDb();
            $hasTable = $db->tableExists($table);
            if (!$hasTable) {
                throw new Exception(sprintf("表%s不存在，请检查后重试", $table));
            }
            $permission = octal_permissions(fileperms($path));
            if ($permission < 644) {
                throw new Exception(sprintf("%s目录没有写入权限，请修改目录权限", $path));
            }
            return true;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * 创建Get方法
     * @param string $fieldName
     * @param string $fieldType
     * @return string
     */
    private function createGet(string $fieldName, string $fieldType): string
    {
        $method = ucwords(str_replace('_', ' ', $fieldName));
        $method = str_replace(' ', '', $method);
        $getMethod = "    /**" . PHP_EOL;
        $getMethod .= "     * @return " . $fieldType . PHP_EOL;
        $getMethod .= "     */" . PHP_EOL;
        $getMethod .= "    public function get" . $method . "(): " . $fieldType . PHP_EOL;
        $getMethod .= "    {" . PHP_EOL;
        $getMethod .= "        return $" . "this->" . $fieldName . ";" . PHP_EOL;
        $getMethod .= "    }" . PHP_EOL . PHP_EOL;
        return $getMethod;
    }

    /**
     * 创建Set方法
     * @param string $fieldName
     * @param string $fieldType
     * @param string $entityName
     * @return string
     */
    private function createSet(string $fieldName, string $fieldType, string $entityName): string
    {
        $method = ucwords(str_replace('_', ' ', $fieldName));
        $method = str_replace(' ', '', $method);
        $setMethod = "    /**" . PHP_EOL;
        $setMethod .= "     * @param " . $fieldType . " $" . $fieldName . PHP_EOL;
        $setMethod .= "     * @return $" . "this" . PHP_EOL;
        $setMethod .= "     */" . PHP_EOL;
        $setMethod .= "    public function set" . $method . "(" . $fieldType . " $" . $fieldName . "): " . $entityName . PHP_EOL;
        $setMethod .= "    {" . PHP_EOL;
        $setMethod .= "        $" . "this->" . $fieldName . " = $" . $fieldName . ";" . PHP_EOL;
        $setMethod .= "        $" . "this->attributes['" . $fieldName . "'] = $" . "this->" . $fieldName . ";" . PHP_EOL;
        $setMethod .= "        return $" . "this;" . PHP_EOL;
        $setMethod .= "    }" . PHP_EOL . PHP_EOL;
        return $setMethod;
    }

    /**
     * 检查字段是否存在表中
     * @param array $fieldData 字段数据
     * @param string $field 要检查的字段
     * @return bool
     */
    private function fieldExists(array $fieldData, string $field): bool
    {
        if (count($fieldData) === 0) {
            return false;
        }
        foreach ($fieldData as $item) {
            if (is_object($item)) {
                $item = (array)$item;
            }
            if ($item['name'] === $field) {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取实体名称
     * @param string $table
     * @return string
     */
    private function getEntityName(string $table): string
    {
        $entityName = ucwords(str_replace('_', ' ', $table));
        return str_replace(' ', '', $entityName);
    }
}