<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/22
 * Time: 08:47
 */
declare(strict_types=1);

namespace App\Controllers\Api\Menu;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MenuService;
use Exception;

class Delete extends Base
{
    /**
     * 删除
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new MenuService();
        $rules = $svc->getDeleteRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $svc->del($params);
            $data = [
                'code' => Code::OK,
                'message' => '删除菜单成功'
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除菜单失败'
            ];
        }
        $this->render($data);
    }
}