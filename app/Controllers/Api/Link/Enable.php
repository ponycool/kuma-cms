<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/22
 * Time: 上午11:22
 */
declare(strict_types=1);
namespace App\Controllers\Api\Link;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LinkService;
use Exception;

class Enable extends Base
{
    /**
     * 启用友情链接
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的友情链接UUID');
            }
            $svc = new LinkService();
            $res = $svc->updateStatus($uuid, 1);
            if ($res !== true) {
                throw new Exception('启用友情链接失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '启用友情链接成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '启用友情链接失败'
            ];
        }
        $this->render($data);
    }
}