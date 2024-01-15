<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/1/8
 * Time: 09:56
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Login;
use App\Enums\Status;
use CodeIgniter\I18n\Time;
use Config\Services;
use Exception;
use PonyCool\Core\Jwt\Jwt;

class LoginService extends BaseService
{
    /** 账户登录
     * @param string $accountName 账户名称
     * @param string $password 密码
     * @param int $expiresIn 令牌有效期
     * @return bool|string
     */
    public function login(string $accountName, string $password, int $expiresIn = WEEK): bool|string
    {
        $accountSvc = new AccountService();
        $cond = [
            'account_name' => $accountName
        ];
        $account = $accountSvc->getFirstByCond($cond);

        // 登录信息
        $login = new Login();
        $login->setAccountName($accountName)
            ->setLoginStatus(Status::FAILED->value);
        try {
            if (empty($account)) {
                throw new Exception(sprintf('用户%s登录失败，账户不存在', $accountName));
            }
            if ($account['locked']) {
                throw new Exception(sprintf('用户%s登录失败，账户已被冻结', $accountName));
            }
            $encryptPwd = hash_hmac('sha256', $password, $account['salt']);
            if ($account['password'] !== $encryptPwd) {
                throw new Exception(sprintf('用户%s登录失败，密码无效', $accountName));
            }
            // 登录成功，颁发令牌
            $jwt = new Jwt();
            $secret = getenv('jwt.secret');
            if ($secret === false) {
                throw new Exception('登录失败，未配置JWT密钥');
            }
            if (strlen($secret) !== 32) {
                throw new Exception('登录失败，无效的JWT密钥');
            }
            $host = parse_url(base_url())['host'];
            $time = Time::now();
            $token = $jwt->getToken(
                $secret,
                [
                    'typ' => 'JWT',
                    'alg' => 'HS256'
                ],
                [
                    'iss' => $host,
                    'sub' => 'login',
                    'aud' => $host,
                    'exp' => (string)$time->addSeconds($expiresIn)->getTimestamp(),
                    'account_name' => $accountName,
                    'account_id' => $account['id'],
                    'admin' => 1 === $account['id'],
                ]
            );
            // 写入最后登录信息
            $login->setAccountId($account['id'])
                ->setLoginStatus(Status::SUCCESS->value);
        } catch (Exception $e) {
            log_message('info', $e->getMessage() ?: '登录失败');
            return false;
        }
        $request = Services::request();
        $ip = $request->getIPAddress();
        $login->setIp($ip);
        $this->insert($login);
        return $token;
    }
}