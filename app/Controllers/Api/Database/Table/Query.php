<?php
declare(strict_types=1);
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/2/28
 * Time: 13:14
 */


namespace App\Controllers\Api\Database\Table;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\BaseService;
use Exception;

class Query extends Base
{
    /**
     * 获取数据库表列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $svc = new BaseService();
            $tables = $svc->getTableList();
            $data = [
                'code' => Code::OK,
                'message' => '获取数据库表列表成功',
                'tables' => $tables
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取数据库表列表失败',
            ];
        }
        $this->render($data);
    }
}