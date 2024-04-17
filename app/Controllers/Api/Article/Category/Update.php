<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午2:18
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article\Category;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleCategoryService as ArticleCategorySvc;
use Exception;

class Update extends Base
{
    /**
     * 更新文章分类
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new ArticleCategorySvc();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的文章分类UUID');
            }

            $res = $svc->updateCategory($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新文章分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新文章分类失败'
            ];
        }
        $this->render($data);
    }
}