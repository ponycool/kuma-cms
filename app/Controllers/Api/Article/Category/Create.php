<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午2:16
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article\Category;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleCategoryService as ArticleCategorySvc;
use Exception;

class Create extends Base
{
    /**
     * 创建文章分类
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new ArticleCategorySvc();
        $rules = $svc->getBaseRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $svc = new ArticleCategorySvc();
            $res = $svc->createCategory($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '创建文章分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建文章分类失败'
            ];
        }
        $this->render($data);
    }
}