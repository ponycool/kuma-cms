<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/20
 * Time: 10:53
 */
declare(strict_types=1);

namespace App\Controllers\Api\Backup\Server;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\BackupService;
use Exception;

class Query extends Base
{
    /**
     * 获取服务器上数据库备份列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new BackupService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getLocalBackup($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取数据库备份列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取数据库备份列表失败',
            ];
        }
        $this->render($data);
    }
}