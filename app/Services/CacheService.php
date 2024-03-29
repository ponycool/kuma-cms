<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/29
 * Time: 14:50
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\LogCategory;

class CacheService extends BaseService
{
    /**
     * 清空模板缓存
     * @return bool
     */
    public function clearTemplateCache(): bool
    {
        $cachePath = WRITEPATH . 'cache/template';
        if (!file_exists($cachePath) || !is_dir($cachePath)) {
            log_message('warning', '清空模板缓存失败，缓存目录不存在');
            return false;
        }
        helper('filesystem');
        if (!delete_files($cachePath, true)) {
            log_message('warning', '清空模板缓存失败，清空缓存目录失败');
            return false;
        }
        $logSvc = new LogService();
        $logSvc->info('清空模板缓存', LogCategory::USER);
        return true;
    }

}