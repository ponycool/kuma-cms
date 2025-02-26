<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 16:13
 */
declare(strict_types=1);

namespace App\Commands;

use App\Services\ScaffoldService;
use CodeIgniter\CLI\BaseCommand;
use CodeIgniter\CLI\CLI;

class CreateService extends BaseCommand
{
    use CommandTrait;

    protected $group = 'Generators';
    protected $name = 'service:generate';
    protected $description = '生成服务';
    protected $usage = 'service:generate[table]';
    protected $arguments = [
        'table' => '表名',
    ];

    public function run(array $params): void
    {
        $table = $this->detectTable($params);
        helper('filesystem');
        $path = APPPATH . 'Services';
        $this->detectPermission($path);
        $entityName = ucwords(str_replace('_', ' ', $table));
        $entityName = str_replace(' ', '', $entityName);
        $serviceName = $entityName . 'Service';
        $file = $path . '/' . $serviceName . '.php';
        $this->detectOverwrite($file);
        $scaffoldSvc = new ScaffoldService();
        $data = $scaffoldSvc->structureFileHeader();
        $data .= $scaffoldSvc->structureService($serviceName);

        // 写入数据
        if (write_file($file, $data)) {
            CLI::write(sprintf("%s服务创建成功", $serviceName), 'yellow');
        } else {
            CLI::error(sprintf("%s服务写入失败", $serviceName));
        }
    }
}