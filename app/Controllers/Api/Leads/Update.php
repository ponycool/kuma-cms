<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/25
 * Time: 上午9:19
 */
declare(strict_types=1);

namespace App\Controllers\Api\Leads;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LeadsService;
use Exception;

class Update extends Base
{
    /**
     * 更新线索
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new LeadsService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的线索UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新线索成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新线索失败'
            ];
        }
        $this->render($data);
    }
}