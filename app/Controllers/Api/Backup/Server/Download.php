<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/21
 * Time: 16:45
 */
declare(strict_types=1);

namespace App\Controllers\Api\Backup\Server;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\BackupService;
use App\Services\LogService;
use CodeIgniter\Files\File;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;

class Download extends Base
{
    /**
     * 下载数据库备份
     * @return ResponseInterface
     */
    public function index(): ResponseInterface
    {
        $svc = new BackupService();
        $rules = $svc->getBaseRules();
        $this->verifyInputByRules($rules);
        try {
            $filename = $this->request->getGet('filename');
            $res = $svc->exists($filename);
            if ($res !== true) {
                throw new Exception('下载数据库备份失败，备份文件不存在');
            }
            $logSvc = new LogService();
            $logSvc->info('下载数据库备份，备份文件' . $filename);
            $filePath = WRITEPATH . 'backup/' . $filename;
            $file = new File($filePath);
            $binary = readfile($filePath);
            return $this->response
                ->setHeader('Content-Type', $file->getMimeType())
                ->setHeader('Content-disposition', 'attachment; filename="' . $file->getBasename() . '"')
                ->setStatusCode(200)
                ->setBody($binary);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '下载数据库备份失败',
            ];
        }
        $this->render($data);
    }
}