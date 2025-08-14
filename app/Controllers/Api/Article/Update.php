<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/4
 * Time: 14:01
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleService;
use Exception;

class Update extends Base
{
    /**
     * 更新文章
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $articleSvc = new ArticleService();
        $rules = $articleSvc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的文章UUID');
            }
            $res = $articleSvc->updateArticle($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新文章成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新文章失败'
            ];
        }
        $this->render($data);
    }
}