<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/21
 * Time: 16:17
 */
declare(strict_types=1);

namespace App\Controllers\Api\Menu;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MenuService;
use Exception;

class Create extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $svc = new MenuService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $svc->create($params);
            $data = [
                'code' => Code::OK,
                'message' => '创建菜单成功'
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建菜单失败'
            ];
        }
        $this->render($data);
    }
}