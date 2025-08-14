<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/14
 * Time: 16:52
 */
declare(strict_types=1);

namespace App\Controllers\Api\Menu;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MenuService;
use Exception;

class Hidden extends Base
{
    public function index(): void
    {
        $this->postFilter();
        try {
            $uuid = $this->getJsonInputParam('uuid');
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的菜单UUID');
            }
            $svc = new MenuService();
            $res = $svc->updateStatus($uuid, 'visible', false);
            if ($res !== true) {
                throw new Exception('更新菜单可见状态失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新菜单可见状态成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新菜单可见状态失败'
            ];
        }
        $this->render($data);
    }
}