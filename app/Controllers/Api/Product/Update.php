<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/17
 * Time: 下午5:15
 */
declare(strict_types=1);

namespace App\Controllers\Api\Product;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductService;
use Exception;

class Update extends Base
{
    /**
     * 更新产品
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new ProductService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的产品UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新产品成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新产品失败'
            ];
        }
        $this->render($data);
    }
}