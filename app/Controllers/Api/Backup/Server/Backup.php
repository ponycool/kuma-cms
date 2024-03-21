<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/20
 * Time: 09:17
 */
declare(strict_types=1);

namespace App\Controllers\Api\Backup\Server;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\BackupService;
use Exception;

class Backup extends Base
{
    /**
     * 备份数据库到本地
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $svc = new BackupService();
            $res = $svc->backupToLocal();
            if ($res !== true) {
                throw new Exception('数据库备份失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '数据库备份成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '数据库备份失败'
            ];
        }
        $this->render($data);
    }
}