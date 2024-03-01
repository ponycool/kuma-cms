<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/1
 * Time: 15:48
 */
declare(strict_types=1);

namespace App\Controllers\Api\User;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\UserService;
use Exception;

class Lock extends Base
{
    /**
     * 冻结用户
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的用户UUID');
            }
            $svc = new UserService();
            $res = $svc->lockUser($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '用户冻结成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '用户冻结失败'
            ];
        }
        $this->render($data);
    }
}