<?php

/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 14:34
 */

declare(strict_types=1);

namespace App\Commands;

use App\Services\BaseService;
use CodeIgniter\CLI\CLI;

trait CommandTrait
{
    /**
     * 检测数据表
     * @param array $params
     * @return string
     */
    public function detectTable(array $params): string
    {
        if (count($params) === 0) {
            $table = CLI::prompt('请输入表名');
        } else {
            $table = $params[0];
        }

        $service = new BaseService();
        $db = $service->getDb();
        $hasTable = $db->tableExists($table);
        if (!$hasTable) {
            CLI::error(sprintf("表%s不存在，请检查后重试", $table));
            exit(EXIT_SUCCESS);
        }
        return $table;
    }

    /**
     * 检测目录权限
     * @param string $dirPath
     */
    public function detectPermission(string $dirPath): void
    {
        $permission = octal_permissions(fileperms($dirPath));
        if ($permission < 644) {
            CLI::error('Entities目录没有写入权限，请修改目录权限');
            exit(EXIT_SUCCESS);
        }
    }

    /**
     * 文件重写检测
     * @param string $filePath
     */
    public function detectOverwrite(string $filePath): void
    {
        // 文件存在是否重写
        if (file_exists($filePath)) {
            $overwrite = CLI::prompt('文件存在. 是否重写?', ['y', 'n']);
            if (!(strtoupper($overwrite) === 'Y' || strtoupper($overwrite) === 'YES')) {
                exit(EXIT_SUCCESS);
            }
        }
    }

    /**
     * 检查字段是否存在表中
     * @param array $fieldData 字段数据
     * @param string $field 要检查的字段
     * @return bool
     */
    public function fieldExists(array $fieldData, string $field): bool
    {
        if (count($fieldData) === 0) {
            return false;
        }
        foreach ($fieldData as $item) {
            if (is_object($item)) {
                $item = (array)$item;
            }
            if ($item['name'] === $field) {
                return true;
            }
        }
        return false;
    }
}