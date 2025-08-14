<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/22
 * Time: 上午11:28
 */
declare(strict_types=1);

namespace App\Controllers\Api\Link;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LinkService;
use Exception;

class Disable extends Base
{
    /**
     * 禁用友情链接
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的友情链接UUID');
            }
            $svc = new LinkService();
            $res = $svc->updateStatus($uuid, 0);
            if ($res !== true) {
                throw new Exception('禁用友情链接失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '禁用友情链接成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '禁用友情链接失败'
            ];
        }
        $this->render($data);
    }
}