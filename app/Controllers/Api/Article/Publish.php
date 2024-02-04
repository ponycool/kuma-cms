<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/4
 * Time: 14:56
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;
use App\Entities\Article;
use App\Enums\Code;
use App\Enums\PublishStatus;
use App\Services\ArticleService;
use Carbon\Carbon;
use Exception;

class Publish extends Base
{
    /**
     * 文章发布
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的文章UUID');
            }
            $article = new Article();
            $article->setIsPublished(PublishStatus::PUBLISHED->value)
                ->setPublishedAt(Carbon::now()->toDateTimeString());
            $svc = new ArticleService();
            $res = $svc->updateByUuid($article, $uuid);
            if ($res === false) {
                throw new Exception('文章发布失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '文章发布成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '文章发布失败'
            ];
        }
        $this->render($data);
    }
}