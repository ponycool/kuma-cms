<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/22
 * Time: 15:59
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\LogCategory;
use Carbon\Carbon;

class RunLogService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array
     */
    public function getBaseRules(): array
    {
        return [
            'line' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数日志行数[line]无效，必须为非零自然数',
                ]
            ]
        ];
    }

    /**
     * 清空运行日志
     * @return bool
     */
    public function clear(): bool
    {
        $logFile = $this->getLogFile();
        if (!file_exists($logFile)) {
            return false;
        }
        if (is_dir($logFile)) {
            log_message('warning', '清空运行日志失败，运行日志不是一个文件');
            return false;
        }
        if (!is_writable($logFile)) {
            log_message('warning', '清空运行日志失败，没有写入权限');
            return false;
        }

        $logSvc = new LogService();
        if (file_put_contents($logFile, "") !== false) {
            $logSvc->info('清空运行日志', LogCategory::USER->value);
        } else {
            log_message(
                'warning',
                '清空运行日志失败',
            );
            $logSvc->warn('清空运行日志失败', LogCategory::USER->value);
            return false;
        }
        return true;
    }

    /**
     * 获取日志文件
     * @return string
     */
    public function getLogFile(): string
    {
        $date = Carbon::now()->toDateString();
        return WRITEPATH . 'logs/log-' . $date . '.log';
    }
}