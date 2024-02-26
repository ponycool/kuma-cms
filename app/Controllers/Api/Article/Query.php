<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/4
 * Time: 14:55
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleService;
use Exception;

class Query extends Base
{
    /**
     * 获取文章列表信息
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new ArticleService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取文章列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取文章列表失败',
            ];
        }
        $this->render($data);
    }
}