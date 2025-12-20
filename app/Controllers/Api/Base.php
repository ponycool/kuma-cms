<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 13:54
 */
declare(strict_types=1);

namespace App\Controllers\Api;

use App\Controllers\Base as BaseController;
use App\Enums\Code;
use App\Services\LogService;
use App\Traits\DetectMaliciousContentTrait;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;
use PonyCool\Core\Jwt\Jwt;
use Psr\Log\LoggerInterface;

class Base extends BaseController
{
    use DetectMaliciousContentTrait;

    public function initController(RequestInterface $request, ResponseInterface $response, LoggerInterface $logger): void
    {
        parent::initController($request, $response, $logger);

        // 拦截恶意请求
        $this->interceptMaliciousRequest();

        // API鉴权
        $this->apiAuth();
    }

    /**
     * 拦截恶意请求
     * @param int $statusCode
     * @return void
     */
    private function interceptMaliciousRequest(int $statusCode = 403): void
    {
        $detectResult = $this->detectMaliciousRequest();
        // 只有当检测到恶意内容时才拦截
        if ($detectResult['isMalicious']) {
            http_response_code($statusCode);
            header('Content-Type: application/json; charset=utf-8');
            $reason = $detectResult['reason'];
            $source = $detectResult['source'];
            $timestamp = date('Y-m-d H:i:s');
            $requestId = uniqid('req_', true);
            $response = [
                'code' => $statusCode,
                'message' => '非法请求拦截',
                'detail' => [
                    'reason' => $reason,
                    'source' => $source,
                    'timestamp' => $timestamp,
                    'request_id' => $requestId
                ]
            ];
            echo json_encode($response, JSON_UNESCAPED_UNICODE);

            $logSvc = new LogService();
            $message = sprintf(
                '系统拦截到非法请求！拦截原因：%s，请求源：%s，时间：%s，请求ID：%s',
                $reason,
                $source,
                $timestamp,
                $requestId
            );
            $logSvc->warn($message);
            exit;
        }
    }

    /**
     * API鉴权
     * @return void
     */
    private function apiAuth(): void
    {
        // 解析URI对象
        $uri = service('uri');
        $segments = $uri->getSegments();

        //获取URl第一个分段
        if (0 === count($segments)) {
            return;
        }

        // 如果不是API则直接放行
        if (!$this->isApiRequest()) {
            return;
        }

        // 开放免认证类接口
        if ($this->isOpenApiRequest()) {
            return;
        }

        // 校验令牌
        $this->verifyToken();
    }

    /**
     * 校验令牌
     * @return void
     */
    private function verifyToken(): void
    {
        $token = $this->getParam('token');
        try {
            if (is_null($token)) {
                throw new Exception('缺少令牌', Code::INVALID_TOKEN->value);
            }
            // 校验Token
            $jwt = new Jwt();
            $secret = getenv('jwt.secret');
            if ($secret === false) {
                throw new Exception('未配置JWT密钥', Code::JWT_SECRET_NOT_EXISTS->value);
            }
            if (strlen($secret) !== 32) {
                throw new Exception('无效的JWT密钥', Code::INVALID_JWT_SECRET->value);
            }
            if (!$jwt->verify($secret, $token)) {
                throw new Exception('令牌无效', Code::INVALID_TOKEN->value);
            }
        } catch (Exception $e) {
            $data = [
                'code' => !Code::tryFrom($e->getCode()) ?: Code::UNAUTHORIZED,
                'message' => Code::UNAUTHORIZED->name
            ];
            log_message('info', 'API请求未授权；错误代码:{code}，错误消息：{message}', [
                'code' => $e->getCode(),
                'message' => $e->getMessage()
            ]);
            $this->render($data);
        }
    }
}