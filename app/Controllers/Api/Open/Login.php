<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 14:32
 */
declare(strict_types=1);

namespace App\Controllers\Api\Open;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LoginService;
use Carbon\Carbon;
use Exception;

class Login extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'accountName' => [
                'rules' => 'required|min_length[4]',
                'errors' => [
                    'required' => '缺少参数账户名称accountName',
                    'min_length' => '账户名称无效，至少需要4个字符'
                ]
            ],
            'password' => [
                'rules' => 'required|min_length[6]',
                'errors' => [
                    'required' => '缺少参数密码password',
                    'min_length' => '密码无效，至少需要6个字符'
                ]
            ]
        ];
        $this->validInput($rules);
        $accountName = $this->getParam('accountName');
        $pwd = $this->getParam('password');
        try {
            if (!is_string($accountName) || !is_string($pwd)) {
                throw new Exception('用户名称或者密码无效');
            }
            if (empty($pwd)) {
                throw  new Exception('密码无效');
            }

            $expiresIn = WEEK;
            $svc = new LoginService();
            $token = $svc->login($accountName, $pwd, $expiresIn);
            if ($token === false) {
                throw new Exception('登录失败');
            }
            $time = Carbon::now();
            $data = [
                'code' => Code::OK,
                'message' => '登录成功',
                'token' => $token,
                'expires_in' => $expiresIn,
                'iat' => $time->getTimestamp()
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '登录失败'
            ];
        }
        $this->render($data);
    }
}