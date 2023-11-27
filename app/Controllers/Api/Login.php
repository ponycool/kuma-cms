<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 14:32
 */
declare(strict_types=1);

namespace App\Controllers\Api;

use App\Controllers\Api\Admin\Base;
use App\Enums\Code;
use App\Services\AccountService;
use Carbon\Carbon;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;

class Login extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'account_name' => [
                'rules' => 'required|min_length[4]',
                'errors' => [
                    'required' => '缺少参数账户名称account_name',
                    'min_length' => '账户名称无效，至少需要4个字符'
                ]
            ],
            'pwd' => [
                'rules' => 'required|min_length[6]',
                'errors' => [
                    'required' => '缺少参数密码pwd',
                    'min_length' => '密码无效，至少需要6个字符'
                ]
            ]
        ];
        $this->validInput($rules);
        $accountName = $this->getParam('account_name');
        $pwd = $this->getParam('pwd');
        try {
            if (!is_string($accountName) || !is_string($pwd)) {
                throw new Exception('用户名称或者密码无效');
            }
            if (empty($pwd)) {
                throw  new Exception('密码无效');
            }

            $expiresIn = WEEK;
            $svc = new AccountService();
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