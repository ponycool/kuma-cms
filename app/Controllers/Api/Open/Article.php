<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/12
 * Time: 下午4:12
 */
declare(strict_types=1);

namespace App\Controllers\Api\Open;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleService;
use Exception;

class Article extends Base
{
    /**
     * 文章列表
     * @return void
     */
    public function index(): void
    {
        $svc = new ArticleService();
        $page = request()->getGetPost('page') ?? 1;
        $pageSize = request()->getGetPost('pageSize') ?? 10;
        $cid = request()->getGetPost('cid') ?? null;
        $cid = is_null($cid) ? $cid : (int)$cid;
        try {
            $params = [
                'page' => $page,
                'pageSize' => $pageSize,
                'cid' => $cid,
                'isPage' => true,
            ];
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