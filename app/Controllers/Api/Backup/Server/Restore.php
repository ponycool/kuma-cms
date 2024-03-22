<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/21
 * Time: 17:12
 */
declare(strict_types=1);

namespace App\Controllers\Api\Backup\Server;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\BackupService;
use Exception;

class Restore extends Base
{
    /**
     * 从服务器的数据库备份文件恢复数据库
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
            $res = $svc->restoreDatabaseFromServer($filename);
            if ($res !== true) {
                throw new Exception('恢复数据库备份失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '恢复数据库备份成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '恢复数据库备份失败',
            ];
        }
        $this->render($data);
    }
}