<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/18
 * Time: 上午9:26
 */
declare(strict_types=1);

namespace App\Controllers\Api\Product;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductService;
use Exception;

class Delete extends Base
{
    /**
     * 删除产品
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的产品UUID');
            }
            $svc = new ProductService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除产品成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除产品失败'
            ];
        }
        $this->render($data);
    }
}