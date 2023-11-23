<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 15:59
 */
declare(strict_types=1);

namespace App\Commands;

use App\Services\BaseService;
use CodeIgniter\CLI\BaseCommand;
use CodeIgniter\CLI\CLI;

class CreateModel extends BaseCommand
{
    use CommandTrait;

    protected $group = 'Generators';
    protected $name = 'model:generate';
    protected $description = '生成模型';
    protected $usage = 'model:generate[table]';
    protected $arguments = [
        'table' => '表名',
    ];

    public function run(array $params): void
    {
        $table = $this->detectTable($params);
        $service = new BaseService();
        $db = $service->getDb();
        helper('filesystem');
        $path = APPPATH . 'Models';
        $this->detectPermission($path);
        $fields = $db->getFieldData($table);
        $entityName = ucwords(str_replace('_', ' ', $table));
        $entityName = str_replace(' ', '', $entityName);
        $modelName = $entityName . 'Model';
        $file = $path . '/' . $modelName . '.php';
        $this->detectOverwrite($file);
        $data = $this->structureFileHeader();
        $data .= "namespace App\Models;" . PHP_EOL;
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
        if ($this->fieldExists($fields, 'deleted_at')) {
            $data .= "    protected $" . "deletedField = 'deleted_at';" . PHP_EOL;
        }
        if ($this->fieldExists($fields, 'datetime')) {
            $data .= "    protected $" . "dateFormat = 'datetime';" . PHP_EOL;
        }
        $data .= "    protected $" . "validationRules = [" . PHP_EOL;
        if ($table === 'setting') {
            $data .= <<<EOF
        'key' => 'required',
EOF;
            $data .= PHP_EOL;
        }
        $data .= "    ];";
        $data .= PHP_EOL;
        $data .= "    protected $" . "validationMessages = [" . PHP_EOL;
        if ($table === 'setting') {
            $data .= <<<EOF
        'key' => [
            'required' => '系统配置项的键为必填项',
        ],
EOF;
            $data .= PHP_EOL;
        }
        $data .= PHP_EOL;
        $data .= "    ];";
        $data .= PHP_EOL;
        $data .= "    protected $" . "skipValidation = false;" . PHP_EOL . PHP_EOL;
        $data .= "}" . PHP_EOL . PHP_EOL;
        // 写入数据
        if (write_file($file, $data)) {
            CLI::write(sprintf("%s模型创建成功", $modelName), 'yellow');
        } else {
            CLI::error(sprintf("%s模型写入失败", $modelName));
        }
    }
}