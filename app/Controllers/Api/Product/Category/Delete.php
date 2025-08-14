<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/17
 * Time: 下午3:10
 */
declare(strict_types=1);

namespace App\Controllers\Api\Product\Category;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductCategoryService;
use Exception;

class Delete extends Base
{
    /**
     * 删除产品分类
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的产品分类UUID');
            }
            $svc = new ProductCategoryService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除产品分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除产品分类失败'
            ];
        }
        $this->render($data);
    }
}