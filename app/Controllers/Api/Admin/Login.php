<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 14:32
 */
declare(strict_types=1);

namespace App\Controllers\Api\Admin;

use App\Enums\Code;
use CodeIgniter\HTTP\ResponseInterface;
use Exception;

class Login extends Base
{
    public function index(): ResponseInterface
    {
        try {
            $data = [
                'code' => Code::OK,
                'message' => '登录成功'
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '登录失败'
            ];
        }
        return $this->render($data);
    }
}