<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/24
 * Time: 15:29
 */
declare(strict_types=1);

namespace App\Controllers\Api\Log;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LoginService;
use Exception;

class Login extends Base
{
    /**
     * 获取登录日志
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $params = $this->getJsonInputParams();
        $page = $params['page'] ?? 1;
        $pageSize = $params['pageSize'] ?? 10;
        $keyword = $params['keyword'] ?? null;
        $svc = new LoginService();
        try {
            $data = [
                'code' => Code::OK,
                'message' => '获取登录日志成功'
            ];
            $list = $svc->getList($keyword, page: $page, pageSize: $pageSize);
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取登录日志失败',
            ];
        }
        $this->render($data);
    }
}