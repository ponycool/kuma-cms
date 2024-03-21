<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/21
 * Time: 15:24
 */
declare(strict_types=1);

namespace App\Controllers\Api\Backup\Server;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\BackupService;
use Exception;

class Delete extends Base
{
    /**
     * 删除备份
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new BackupService();
        $rules = $svc->getBaseRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $filename = $this->getJsonInputParam('filename');
            $res = $svc->deleteServerBackup($filename);
            if ($res !== true) {
                throw new Exception('删除数据库备份失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除数据库备份成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除数据库备份失败',
            ];
        }
        $this->render($data);
    }
}