<?php

/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午4:43
 */

declare(strict_types=1);

namespace App\Controllers\Api\Product\Category;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductCategoryService as CategorySvc;
use Exception;

class Create extends Base
{
    /**
     * 创建产品分类
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new CategorySvc();
        $rules = $svc->getBaseRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $res = $svc->create($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '创建产品分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建产品分类失败'
            ];
        }
        $this->render($data);
    }
}