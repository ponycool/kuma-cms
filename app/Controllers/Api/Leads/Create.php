<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/24
 * Time: 下午3:40
 */
declare(strict_types=1);

namespace App\Controllers\Api\Leads;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LeadsService;
use Exception;

class Create extends Base
{
    /**
     * 创建线索
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new LeadsService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $res = $svc->create($params);
            if ($res !== true) {
                throw new Exception($res);
            }

            $data = [
                'code' => Code::OK,
                'message' => '创建线索成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建线索失败'
            ];
        }
        $this->render($data);
    }
}