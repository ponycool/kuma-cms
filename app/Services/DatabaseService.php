<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/30
 * Time: 11:18
 */
declare(strict_types=1);

namespace App\Services;

class DatabaseService extends BaseService
{
    /**
     * 获取执行SQL的验证规则
     * @return array[]
     */
    public function getExecRules(): array
    {
        return [
            'sql' => [
                'rules' => 'required|min_length[10]|max_length[1000]',
                'errors' => [
                    'required' => '参数SQL[sql]为必填项',
                    'min_length' => '参数SQL[sql]无效，SQL必须10个字符以上',
                    'max_length' => '参数SQL[sql]无效，超过最大长度',
                ]
            ],
        ];
    }

    /**
     *  执行SQL
     * @param string $sql
     * @return bool
     */
    public function execSql(string $sql): bool
    {
        return $this->exec($sql);
    }
}