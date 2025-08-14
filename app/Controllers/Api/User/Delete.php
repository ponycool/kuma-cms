<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/29
 * Time: 11:08
 */
declare(strict_types=1);

namespace App\Controllers\Api\User;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\UserService;
use Exception;

class Delete extends Base
{
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的用户UUID');
            }
            $svc = new UserService();
            $res = $svc->deleteUser($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除用户成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除用户失败'
            ];
        }
        $this->render($data);
    }
}