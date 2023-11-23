<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 15:06
 */
declare(strict_types=1);

namespace App\Commands;

use App\Services\BaseService;
use CodeIgniter\CLI\BaseCommand;
use CodeIgniter\CLI\CLI;

class CreateEntity extends BaseCommand
{
    use CommandTrait;

    protected $group = 'Generators';
    protected $name = 'entity:generate';
    protected $description = '生成实体类';
    protected $usage = 'entity:generate[table]';
    protected $arguments = [
        'table' => '表名',
    ];

    public function run(array $params): void
    {
        $table = $this->detectTable($params);
        $service = new BaseService();
        $db = $service->getDb();
        helper('filesystem');
        $path = APPPATH . 'Entities';
        $this->detectPermission($path);
        $fields = $db->getFieldData($table);
        $entityName = ucwords(str_replace('_', ' ', $table));
        $entityName = str_replace(' ', '', $entityName);
        $file = $path . '/' . $entityName . '.php';
        $this->detectOverwrite($file);
        $data = $this->structureFileHeader();
        $data .= <<<EOF
namespace App\Entities;

EOF;
        $data .= PHP_EOL;
        $data .= sprintf("class %s extends Base", $entityName) . PHP_EOL;
        $data .= "{" . PHP_EOL;
        // 生成ID的GET和SET方法
        $functions = $this->createGet('id', 'int');
        $functions .= $this->createSet('id', 'int', $entityName);
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
                    break;
                case 'created_at':
                case 'updated_at':
                case 'deleted_at':
                case 'deleted':
                    $functions .= $this->createGet($field->name, $fieldType);
                    break;
                default:
                    $functions .= $this->createGet($field->name, $fieldType);
                    $functions .= $this->createSet($field->name, $fieldType, $entityName);
                    break;
            }
            CLI::showProgress($currStep++, $totalSteps);
        }
        // 构造dates
        $data .= "    protected $" . "dates = [" . PHP_EOL;
        foreach ($dates as $item) {
            $data .= "        '" . $item . "'," . PHP_EOL;
        }
        $data .= "    ];" . PHP_EOL;

        // 构造casts
        $data .= "    protected $" . "casts = [" . PHP_EOL;
        if ($this->fieldExists($fields, 'deleted')) {
            $data .= "        'deleted' => 'boolean'" . PHP_EOL;
        }
        $data .= "    ];" . PHP_EOL;

        // 构造方法
        $data .= PHP_EOL;
        $data .= "    public function __construct(array $" . "data = null)" . PHP_EOL;
        $data .= "    {" . PHP_EOL;
        $data .= "        parent::__construct($" . "data);";
        $data .= PHP_EOL . '    }';
        $data .= PHP_EOL . PHP_EOL;
        $data .= $functions;
        $data .= '}' . PHP_EOL;
        CLI::showProgress(false);

        // 写入数据
        if (write_file($file, $data)) {
            CLI::write(sprintf("%s实体创建成功", $entityName), 'yellow');
        } else {
            CLI::error(sprintf("%s实体写入失败", $entityName));
        }
    }

    /**
     * 创建Get方法
     * @param string $fieldName
     * @param string $fieldType
     * @return string
     */
    public function createGet(string $fieldName, string $fieldType): string
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

    public function createSet(string $fieldName, string $fieldType, string $entityName): string
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
}