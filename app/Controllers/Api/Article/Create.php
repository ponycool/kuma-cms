<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/1/5
 * Time: 14:24
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleService;
use Exception;

class Create extends Base
{
    /**
     * 创建文章
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $articleSvc = new ArticleService();
        $rules = $articleSvc->getBaseRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $res = $articleSvc->createArticle($params);
            if ($res !== true) {
                throw new Exception($res);
            }

            $data = [
                'code' => Code::OK,
                'message' => '创建文章成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建文章失败'
            ];
        }
        $this->render($data);
    }
}