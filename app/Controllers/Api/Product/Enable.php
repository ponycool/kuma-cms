<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/18
 * Time: 上午10:50
 */
declare(strict_types=1);

namespace App\Controllers\Api\Product;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductService;
use Exception;

class Enable extends Base
{
    /**
     * 启用产品
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的产品UUID');
            }
            $svc = new ProductService();
            $res = $svc->updateStatus($uuid, 1);
            if ($res !== true) {
                throw new Exception('启用产品失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '启用产品成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '启用产品失败'
            ];
        }
        $this->render($data);
    }
}