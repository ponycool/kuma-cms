<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/28
 * Time: 14:58
 */
declare(strict_types=1);

namespace App\Controllers\Api\User;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\UserService;
use Exception;

class Create extends Base
{
    /**
     * 创建用户
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new UserService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            // 创建业务逻辑
            $res = $svc->createUser($params);
            if ($res !== true) {
                throw new Exception($res);
            }

            $data = [
                'code' => Code::OK,
                'message' => '创建用户成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建用户失败'
            ];
        }
        $this->render($data);
    }
}