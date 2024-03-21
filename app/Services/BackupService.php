<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/20
 * Time: 09:44
 */
declare(strict_types=1);

namespace App\Services;

use Carbon\Carbon;
use CodeIgniter\Files\File;
use PonyCool\File\File as FileUtil;

class BackupService extends BaseService
{
    // 数据库文件
    const DATABASE = WRITEPATH . 'data/cms.db';

    // 备份路径
    const BACKUP_PATH = WRITEPATH . 'backup/';

    /**
     * 备份数据库到本地
     * @return bool
     */
    public function backupToLocal(): bool
    {
        if (file_exists(self::BACKUP_PATH)) {
            if (!is_writable(self::BACKUP_PATH)) {
                if (@chmod(self::BACKUP_PATH, 0777)) {
                    log_message('info', '备份目录权限已更改为可写');
                } else {
                    log_message('error', '备份目录无法赋予目录写权限，请检查服务器设置');
                    return false;
                }
            }
        } else {
            if (!is_writable(WRITEPATH)) {
                if (@chmod(WRITEPATH, 0777)) {
                    log_message('info', 'WRITABLE目录权限已更改为可写');
                } else {
                    log_message('error', 'WRITABLE目录无法赋予目录写权限，请检查服务器设置');
                    return false;
                }
            }
            if (!mkdir(self::BACKUP_PATH, 0777, true)) {
                log_message('error', '备份目录无法创建，请检查服务器设置');
                return false;
            }
            log_message('info', '创建备份目录');
        }
        if (copy(self::DATABASE, self::BACKUP_PATH . 'cms.db')) {

            $backupFileName = self::BACKUP_PATH . $this->getBackupFileName();
            rename(self::BACKUP_PATH . 'cms.db', $backupFileName);
            return true;
        }
        return false;
    }

    /**
     * 获取服务器备份列表
     * @param array $params
     * @return array
     */
    public function getLocalBackup(array $params): array
    {
        $page = $params['page'] ?? 1;
        $pageSize = $params['pageSize'] ?? 10;
        $fileUtil = new FileUtil();
        $res = $fileUtil::paginateFiles(self::BACKUP_PATH, $page, $pageSize);
        $currentPageFiles = (array)$res['currentPageFiles'];
        $list = [];
        if (!empty($currentPageFiles)) {
            foreach ($currentPageFiles as $item) {
                $file = new File($item);
                $createdAt = Carbon::createFromTimestamp($file->getCTime())
                    ->format('Y-m-d H:i:s');
                $list[] = [
                    'filename' => $file->getFilename(),
                    'size' => $file->getSizeByUnit('mb'),
                    'created_at' => $createdAt
                ];
            }
            $res['currentPageFiles'] = $list;
        }
        return $res;
    }

    /**
     * 获取备份文件名称
     * @return string
     */
    private function getBackupFileName(): string
    {
        $time = Carbon::now()->format('Ymdhisv');
        return sprintf('cms_%s.db', $time);
    }
}