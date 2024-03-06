<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/6
 * Time: 09:06
 */
declare(strict_types=1);

namespace App\Controllers;

use App\Enums\PublishStatus;
use App\Services\ArticleService;

class Article extends Web
{
    /**
     * 文章
     * @return void
     */
    public function index(): void
    {
        // 获取当前文章的UUID
        $uuid = $this->getParam('uuid');
        $data = [];
        if ($this->validateUUID($uuid) === true) {
            // 获取当前文章
            $svc = new ArticleService();
            $article = $svc->getPublishedArticleByUuid($uuid);
            if (!empty($article) && $article['is_published'] === PublishStatus::PUBLISHED->value) {
                $data['article'] = $article;
                $this->setTitle(empty($article['seo_title']) ? $article['title'] : $article['seo_title'])
                    ->setDescription(empty($article['seo_desc']) ? $article['title'] : $article['seo_desc']);
                $keywords = $article['seo_keywords'];
                if (!empty($keywords)) {
                    if ($this->isJsonStr($keywords)) {
                        $keywords = implode(',', json_decode($keywords, true));
                    }
                    $this->setKeywords($keywords);
                }

                // 获取上一篇文章
                $previous = $svc->getPreviousArticle((int)$article['website_id'], (int)$article['id']);
                $data['prev'] = $previous;

                // 获取下一篇文章
                $next = $svc->getNextArticle((int)$article['website_id'], (int)$article['id']);
                $data['next'] = $next;

                // 获取推荐文章列表
                $params['page'] = 1;
                $params['pageSize'] = 10;
                $res = $svc->getList($params);
                if (!empty($res)) {
                    $data['relatedList'] = $res['pageData'];
                }

                // 更新浏览计数
                $svc->incrById((int)$article['id'], 'view_count');
            }
        }

        $this->setTemplate('article')
            ->setPage('article')
            ->render($data);
    }

    /**
     * 文章列表
     * @return void
     */
    public function list(): void
    {
        $data = [];
        $this->setTemplate('article_list')
            ->setPage('article_list')
            ->render($data);
    }
}