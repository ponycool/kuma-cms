<?php
declare(strict_types=1);
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/8
 * Time: 14:36
 */

namespace App\Controllers\Api\Menu;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MenuService;
use Exception;

class Update extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $svc = new MenuService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $svc->update($params);
            $data = [
                'code' => Code::OK,
                'message' => '更新菜单成功'
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新菜单失败'
            ];
        }
        $this->render($data);
    }
}