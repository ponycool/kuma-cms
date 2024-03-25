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
use App\Services\RunLogService;
use CodeIgniter\Files\File;
use PonyCool\File\File as FileUtil;
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
        $svc = new RunLogService();
        $rules = $svc->getBaseRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $data = [
                'code' => Code::OK,
                'message' => '获取系统运行日志成功'
            ];
            if (!file_exists($svc->getLogFile())) {
                throw new Exception('系统运行日志不存在');
            }
            $line = (int)($this->getJsonInputParam('line') ?? 50);
            $fileUtil = new FileUtil();
            $content = $fileUtil::getFileLastLines($svc->getLogFile(), $line);
            $data = array_merge($data, $content);
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
        $svc = new RunLogService();
        $logFile = $svc->getLogFile();
        try {
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

    /**
     * 清空运行日志
     * @return void
     */
    public function clear(): void
    {
        try {
            $data = [
                'code' => Code::OK,
                'message' => '清空系统运行日志成功'
            ];
            $svc = new RunLogService();
            if (!file_exists($svc->getLogFile())) {
                throw new Exception('系统运行日志不存在');
            }
            $res = $svc->clear();
            if ($res !== true) {
                throw new Exception('清空系统运行日志失败');
            }
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '清空系统运行日志失败',
            ];
        }
        $this->render($data);
    }
}