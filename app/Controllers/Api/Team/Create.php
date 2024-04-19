<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/19
 * Time: 下午2:21
 */
declare(strict_types=1);

namespace App\Controllers\Api\Team;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\TeamService;
use Exception;

class Create extends Base
{
    /**
     * 创建团队成员
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new TeamService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            // 创建业务逻辑
            $res = $svc->create($params);
            if ($res !== true) {
                throw new Exception($res);
            }

            $data = [
                'code' => Code::OK,
                'message' => '创建团队成员成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建团队成员失败'
            ];
        }
        $this->render($data);
    }
}