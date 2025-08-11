<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/8
 * Time: 14:36
 */

declare(strict_types=1);

namespace App\Controllers\Api\Menu;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MenuService;
use Exception;

class Query extends Base
{
    public function index(): void
    {
        $this->postFilter();
        try {
            $svc = new MenuService();
            $res = $svc->getMenu();
            $data = [
                'code' => Code::OK,
                'message' => '获取菜单列表成功',
            ];
            $data= array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取菜单列表失败'
            ];
        }
        $this->render($data);
    }
}