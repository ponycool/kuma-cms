<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/29
 * Time: 09:51
 */
declare(strict_types=1);

namespace App\Controllers\Api\User;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\UserService;
use Exception;

class Update extends Base
{
    /**
     * 更新用户
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new UserService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的用户UUID');
            }
            $res = $svc->updateUser($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新用户成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新用户失败'
            ];
        }
        $this->render($data);
    }
}