<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/26
 * Time: 16:09
 */
declare(strict_types=1);

namespace App\Controllers\Api\User;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\UserService;
use Exception;

class Query extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $params = $this->getJsonInputParams();
        $page = $params['page'] ?? 1;
        $pageSize = $params['pageSize'] ?? 10;
        $keyword = $params['keyword'] ?? null;
        $svc = new UserService();
        try {
            $list = $svc->getList($keyword, page: $page, pageSize: $pageSize);
            $data = [
                'code' => Code::OK,
                'message' => '获取用户列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取用户列表失败',
            ];
        }
        $this->render($data);
    }
}