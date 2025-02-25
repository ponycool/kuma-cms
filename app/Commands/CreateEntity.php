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
use App\Services\ScaffoldService;
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
        $scaffoldSvc = new ScaffoldService();
        $data = $scaffoldSvc->structureFileHeader();
        $data .= $scaffoldSvc->structureEntity($entityName, $fields);

        // 写入数据
        if (write_file($file, $data)) {
            CLI::write(sprintf("%s实体创建成功", $entityName), 'yellow');
        } else {
            CLI::error(sprintf("%s实体写入失败", $entityName));
        }
    }
}