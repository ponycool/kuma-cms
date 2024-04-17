<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/17
 * Time: 下午2:46
 */
declare(strict_types=1);

namespace App\Controllers\Api\Product\Category;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductCategoryService;
use Exception;

class Update extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $svc = new ProductCategoryService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的产品分类UUID');
            }

            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新产品分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新产品分类失败'
            ];
        }
        $this->render($data);
    }
}