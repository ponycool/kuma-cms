<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/17
 * Time: 下午2:58
 */
declare(strict_types=1);

namespace App\Controllers\Api\Product\Category;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductCategoryService;
use Exception;

class Query extends Base
{
    /**
     * 获取产品分类列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $page = $params['page'] ?? 1;
            $pageSize = $params['pageSize'] ?? 10;
            $svc = new ProductCategoryService();
            $res = $svc->getPage($page, $pageSize);
            $data = [
                'code' => Code::OK,
                'message' => '获取产品分类列表成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取产品分类列表失败'
            ];
        }
        $this->render($data);
    }
}