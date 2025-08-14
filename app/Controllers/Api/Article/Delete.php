<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/4
 * Time: 14:33
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleService;
use Exception;

class Delete extends Base
{
    /**
     * 删除文章
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的文章UUID');
            }
            $svc = new ArticleService();
            $res = $svc->deleteArticle($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除文章成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除文章失败'
            ];
        }
        $this->render($data);
    }
}