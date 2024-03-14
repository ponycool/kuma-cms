<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/13
 * Time: 17:09
 */
declare(strict_types=1);

namespace App\Controllers\Api\User;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\UserService;
use Exception;

class Password extends Base
{
    /**
     * 更改密码
     * @return void
     */
    public function change(): void
    {
        $this->postFilter();
        $svc = new UserService();
        $rules = $svc->changePasswordRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if (!is_null($uuid) && $this->validateUUID($uuid) !== true) {
                throw new Exception('无效的用户UUID');
            }
            $res = $svc->changePassword($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '密码修改成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '密码修改失败'
            ];
        }
        $this->render($data);
    }
}