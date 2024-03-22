<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/22
 * Time: 16:45
 */
declare(strict_types=1);

namespace App\Controllers\Api\Backup\Server;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\BackupService;
use Exception;

class Upload extends Base
{
    /**
     * 数据库备份文件上传
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new BackupService();
        $rules = $svc->getUploadRules();
        $this->validInput($rules);
        try {
            $res = $svc->upload('file');
            if ($res !== true) {
                throw new Exception('数据库备份文件上传失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '数据库备份文件上传成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?? '数据库备份文件上传失败',
            ];
        }
        $this->render($data);
    }
}