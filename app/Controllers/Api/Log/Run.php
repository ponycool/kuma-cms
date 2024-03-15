<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/15
 * Time: 16:10
 */
declare(strict_types=1);

namespace App\Controllers\Api\Log;

use App\Controllers\Api\Base;
use App\Enums\Code;
use Carbon\Carbon;
use CodeIgniter\Files\File;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;

class Run extends Base
{
    /**
     * 获取系统日志
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $data = [
                'code' => Code::OK,
                'message' => '获取系统运行日志成功'
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取系统运行日志失败',
            ];
        }
        $this->render($data);
    }

    /**
     * 下载运行日志
     * @return ResponseInterface
     */
    public function download(): ResponseInterface
    {
        $this->postFilter();
        try {
            $date = Carbon::now()->toDateString();
            $logFile = WRITEPATH . 'logs/log-' . $date . '.log';
            if (!file_exists($logFile)) {
                throw new Exception('系统运行日志不存在');
            }

            $file = new File($logFile);
            $binary = readfile($logFile);
            return $this->response
                ->setHeader('Content-Type', $file->getMimeType())
                ->setHeader('Content-disposition', 'attachment; filename="' . $file->getBasename() . '"')
                ->setStatusCode(200)
                ->setBody($binary);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '下载系统运行日志失败',
            ];
        }
        $this->render($data);
    }
}