<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/25
 * Time: 上午9:40
 */
declare(strict_types=1);

namespace App\Controllers\Api\Leads;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LeadsService;
use Exception;

class Delete extends Base
{
    /**
     * 删除线索
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的线索UUID');
            }
            $svc = new LeadsService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除线索成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除线索失败'
            ];
        }
        $this->render($data);
    }
}