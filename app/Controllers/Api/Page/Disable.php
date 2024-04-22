<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/22
 * Time: 下午3:40
 */
declare(strict_types=1);

namespace App\Controllers\Api\Page;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\PageService;
use Exception;

class Disable extends Base
{
    /**
     * 禁用单页
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的单页UUID');
            }
            $svc = new PageService();
            $res = $svc->updateStatus($uuid, 0);
            if ($res !== true) {
                throw new Exception('禁用单页失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '禁用单页成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '禁用单页失败'
            ];
        }
        $this->render($data);
    }
}