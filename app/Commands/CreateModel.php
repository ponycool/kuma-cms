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
use App\Services\ScaffoldService;
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
        $scaffoldSvc = new ScaffoldService();
        $data = $scaffoldSvc->structureFileHeader();
        $data .= $scaffoldSvc->structureModel($table, $modelName, $entityName, $fields);

        // 写入数据
        if (write_file($file, $data)) {
            CLI::write(sprintf("%s模型创建成功", $modelName), 'yellow');
        } else {
            CLI::error(sprintf("%s模型写入失败", $modelName));
        }
    }
}