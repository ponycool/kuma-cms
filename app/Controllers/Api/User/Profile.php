<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/27
 * Time: 16:00
 */
declare(strict_types=1);

namespace App\Controllers\Api\User;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\UserService;
use Exception;

class Profile extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数用户UUID[uuid]为必填项',
                    'min_length' => '参数用户UUID[uuid]无效',
                    'max_length' => '参数用户UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的用户UUID');
            }
            $svc = new UserService();
            $res = $svc->getUserProfile($uuid);
            if (is_null($res)) {
                throw new Exception('获取用户档案失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取用户档案成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取用户档案失败',
            ];
        }
        $this->render($data);
    }
}