<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/30
 * Time: 11:00
 */
declare(strict_types=1);

namespace App\Controllers\Api\Database;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\DatabaseService;
use Exception;

class Exec extends Base
{
    /**
     * 执行SQL
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new DatabaseService();
        $rules = $svc->getExecRules();
        $this->verifyJsonInputByRules($rules);
        $sql = $this->getJsonInputParam('sql') ?? null;
        try {
            $data = [
                'code' => Code::OK,
                'message' => '执行SQL成功',
            ];
            $res = $svc->execSql($sql);
            if ($res !== true) {
                throw new Exception('执行SQL失败');
            }
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?? '执行SQL失败',
            ];
        }
        $this->render($data);
    }
}