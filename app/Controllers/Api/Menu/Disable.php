<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/14
 * Time: 16:38
 */
declare(strict_types=1);

namespace App\Controllers\Api\Menu;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MenuService;
use Exception;

class Disable extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $svc = new MenuService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $params['field'] = 'enabled';
            $params['status'] = false;
            $svc->updateStatus($params);
            $data = [
                'code' => Code::OK,
                'message' => '禁用菜单成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '禁用菜单失败'
            ];
        }
        $this->render($data);
    }
}