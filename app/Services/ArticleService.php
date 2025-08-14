<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:49 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Article;
use App\Enums\DeletedStatus;
use App\Enums\PublishStatus;
use Carbon\Carbon;

class ArticleService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'cid' => [
                'rules' => 'required|is_natural_no_zero',
                'errors' => [
                    'required' => '参数文章分类ID[cid]无效,文章分类ID为必填项',
                    'is_natural_no_zero' => '参数文章分类ID[cid]无效,文章分类ID必须为非零自然数',
                ]
            ],
            'coverImage' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数封面图片[coverImage]无效，字符长度不能超过50个字符',
                ]
            ],
            'author' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数作者[author]无效，字符长度不能超过20个字符',
                ]
            ],
            'customDate' => [
                'rules' => 'if_exist|valid_date[Y-m-d H:i:s]',
                'errors' => [
                    'valid_date' => '参数自定义发布时间[customDate]无效，必须是有效的日期，格式：Y-m-d H:i:s',
                ]
            ],
            'title' => [
                'rules' => 'required|max_length[200]',
                'errors' => [
                    'required' => '参数文章标题[title]无效，文章标题为必填项',
                    'max_length' => '参数文章标题[title]无效，字符长度不能超过200个字符',
                ]
            ],
            'seoTitle' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数文章SEO标题[seoTitle]无效，字符长度不能超过200个字符',
                ]
            ],
            'seoDesc' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数文章SEO描述[seoDesc]无效，字符长度不能超过200个字符',
                ]
            ],
            'seoKeywords' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数SEO关键词[seoKeywords]无效，字符长度不能超过200个字符',
                ]
            ],
            'summary' => [
                'rules' => 'if_exist|max_length[1000]',
                'errors' => [
                    'max_length' => '参数文章摘要[summary]无效，字符长度不能超过1000个字符',
                ]
            ],
            'content' => [
                'rules' => 'required|max_length[100000]',
                'errors' => [
                    'required' => '参数文章内容[content]无效，文章内容为必填项',
                    'max_length' => '参数文章内容[content]无效，字符长度不能超过10万个字符',
                ]
            ],
            'sortIndex' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数排序索引[sortIndex]无效，必须为非零自然数',
                ]
            ],
            'isPublished' => [
                'rules' => 'if_exist|in_list[true,false]',
                'errors' => [
                    'in_list' => '参数是否发布[is_published]无效，必须为"true"或"false"',
                ]
            ],
        ];
    }

    /**
     * 获取更新验证规则
     * @return array
     */
    public function getUpdateRules(): array
    {
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数文章UUID[uuid]为必填项',
                    'min_length' => '参数文章UUID[uuid]无效',
                    'max_length' => '参数文章UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 合并图片
     * @param array $list
     * @return array
     */
    public function mergeMedia(array $list): array
    {
        $coverImageList = [];
        foreach ($list as $item) {
            if (!is_null($item['cover_image'])) {
                $coverImageList[] = $item['cover_image'];
            }
        }
        $mediaSvc = new MediaService();
        if (!empty($coverImageList)) {
            $imageList = $mediaSvc->getMedia($coverImageList);
            foreach ($imageList as $img) {
                foreach ($list as &$item) {
                    if ($img['id'] === $item['cover_image']) {
                        $item['cover_image'] = $img['file_url'];
                    }
                }
            }
        }

        return $list;
    }

    /**
     * 获取分页列表
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $page = (int)($params['page'] ?? 1);
        $pageSize = (int)($params['pageSize'] ?? 10);
        $cid = $params['cid'] ?? null;
        $categoryCode = $params['categoryCode'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $sortField = $params['sortField'] ?? null;
        $sortType = $params['sortType'] ?? 'ASC';
        $isPage = $params['isPage'] ?? true;
        $limit = $params['limit'] ?? null;
        $sql = [
            'SELECT a.id,a.uuid,a.cid,a.title,a.cover_image,a.seo_title,a.seo_desc,a.seo_keywords,a.summary,a.content,',
            'a.author,a.custom_date,a.is_published,a.published_at,a.view_count,a.sort_index,a.created_at,a.updated_at,',
            'c.name as category_name,c.code as category_code ',
            'FROM swap_article AS a ',
            'LEFT JOIN swap_article_category AS c ON a.cid=c.id ',
            'WHERE a.deleted_at IS NULL ',
            'AND a.deleted = ? ',
            'AND a.is_published = ? '
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
            PublishStatus::PUBLISHED->value
        ];
        if (!is_null($cid)) {
            $sql[] = 'AND a.cid = ? ';
            $sqlParams[] = $cid;
        }
        if (!is_null($keyword)) {
            $sql[] = 'AND a.title LIKE ? ';
            $sqlParams[] = '%' . $keyword . '%';
        }
        if (!is_null($categoryCode)) {
            $sql[] = 'AND c.code = ? ';
            $sqlParams[] = $categoryCode;
        }
        if (is_null($sortField)) {
            $sql[] = 'ORDER BY a.sort_index DESC,a.id DESC';
        } else {
            $sql[] = 'ORDER BY a.' . $sortField . ' ' . $sortType;
        }
        if (!$isPage && !is_null($limit)) {
            $sql[] = ' LIMIT ' . $limit;
        }
        $sql = $this->assembleSql($sql);
        if ($isPage) {
            $res = $this->getPageByQuery($sql, $sqlParams, $page, $pageSize);
            if ($res['total'] > 0) {
                if (is_array($res['pageData'])) {
                    $res['pageData'] = $this->mergeMedia($res['pageData']);
                }
            }
        } else {
            $this->setResultType('array');
            $res = $this->query($sql, $sqlParams);
            if (count($res) > 0) {
                $res = $this->mergeMedia($res);
            }
        }
        return $res;
    }

    /**
     * 根据分类编码获取分类文章列表
     * @param array $params
     * @return array
     */
    public function getListByCategoryCode(array $params): array
    {
        $categoryCode = $params['categoryCode'];
        if (is_array($categoryCode)) {
            $categoryCode = array_map(function ($element) {
                return "'" . $element . "'";
            }, $categoryCode);
            $categoryCode = implode(',', $categoryCode);
        }
        $limit = (int)($params['limit'] ?? 10);
        $sql = [
            'SELECT a.id,a.uuid,a.cid,a.title,a.cover_image,a.seo_title,a.seo_desc,a.seo_keywords,a.summary,a.content,',
            'a.author,a.custom_date,a.is_published,a.published_at,a.view_count,a.sort_index,a.created_at,a.updated_at,',
            'c.name as category_name,c.code as category_code ',
            'FROM swap_article AS a ',
            'LEFT JOIN swap_article_category AS c ON a.cid=c.id ',
            'WHERE a.deleted_at IS NULL ',
            'AND c.code IN (',
            $categoryCode,
            ') ',
            'AND a.deleted = ? ',
            'ORDER BY a.sort_index DESC,a.id DESC ',
            'LIMIT ?'
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
            $limit
        ];
        $sql = $this->assembleSql($sql);
        $this->setResultType('array');
        $res = $this->query($sql, $sqlParams);
        if (count($res) > 0) {
            $res = $this->mergeMedia($res);
        }
        return $res;
    }

    /**
     * 根据UUID获取文章详情
     * @param string $uuid
     * @return array|null
     */
    public function getArticleByUUID(string $uuid): ?array
    {
        if ($this->validateUuid($uuid) !== true) {
            return null;
        }
        $res = $this->getFirstByUuid($uuid);
        if (count($res) > 0) {
            $res = $this->mergeMedia([$res])[0];
        }
        return $res;
    }

    /**
     * 根据UUID获取已发布文章
     * @param string $uuid
     * @return array|null
     */
    public function getPublishedArticleByUuid(string $uuid): ?array
    {
        if ($this->validateUuid($uuid) !== true) {
            return null;
        }
        $cond = [
            'uuid' => $uuid,
            'is_published' => PublishStatus::PUBLISHED->value
        ];
        $res = $this->getFirstByCond($cond);
        if (count($res) > 0) {
            $res = $this->mergeMedia([$res])[0];
        }
        return $res;
    }

    /**
     * 获取上一篇文章
     * @param int $id
     * @return array
     */
    public function getPreviousArticle(int $id): array
    {
        $cond = [
            'id <' => $id,
            'is_published' => PublishStatus::PUBLISHED->value
        ];
        $res = $this->getFirstByCond($cond);
        if (count($res) > 0) {
            $res = $this->mergeMedia([$res])[0];
        }
        return $res;
    }

    /**
     * 获取下一篇文章
     * @param int $id
     * @return array
     */
    public function getNextArticle(int $id): array
    {
        $cond = [
            'id >' => $id,
            'is_published' => PublishStatus::PUBLISHED->value
        ];
        $res = $this->getFirstByCond($cond);
        if (count($res) > 0) {
            $res = $this->mergeMedia([$res])[0];
        }
        return $res;
    }


    /**
     * 获取TOP文章列表
     * @param int $count
     * @return array
     */
    public function getTop(int $count = 10): array
    {
        $sql = [
            'SELECT ',
            implode(',', $this->getSelectFields()) . ' ',
            'FROM swap_article ',
            'WHERE deleted_at IS NULL ',
            'AND deleted=? ',
            'ORDER BY view_count DESC ',
            'LIMIT ?'
        ];
        $params = [
            DeletedStatus::UNDELETED->value,
            $count
        ];
        $sql = $this->assembleSql($sql);
        return $this->query($sql, $params);
    }

    /**
     * 获取文章类别文章数量
     * @return array
     */
    public function getCategoryArticleCounts(): array
    {
        $sql = [
            'SELECT category.id,category.name,category.pid,count(article.id) as count ',
            'FROM swap_article AS article ',
            'LEFT JOIN swap_article_category AS category ',
            'ON article.cid=category.id ',
            'WHERE article.deleted_at IS NULL ',
            'AND article.deleted=? ',
            'AND article.is_published=1 ',
            'AND category.deleted_at IS NULL ',
            'AND category.deleted=? ',
            'GROUP BY article.cid ',
            'ORDER BY count DESC'
        ];
        $params = [
            DeletedStatus::UNDELETED->value,
            DeletedStatus::UNDELETED->value,
        ];
        $sql = $this->assembleSql($sql);
        $this->setResultType('array');
        return $this->query($sql, $params);
    }

    /**
     * 文章类别占比分析
     * @return array
     */
    public function categoryAnalysis(): array
    {
        $sql = [
            'SELECT article.id,article.cid,article.count, ',
            'category.name AS category,category.pid AS category_pid ',
            'FROM (',
            'SELECT id,cid,count(`id`) AS count ',
            'FROM swap_article ',
            'WHERE deleted_at IS NULL ',
            'AND deleted=? ',
            'GROUP BY cid',
            ') AS article ',
            'LEFT JOIN swap_article_category AS category ',
            'ON article.cid=category.id ',
            'WHERE category.deleted_at IS NULL ',
            'AND category.deleted=? '
        ];
        $params = [
            DeletedStatus::UNDELETED->value,
            DeletedStatus::UNDELETED->value,
        ];
        $sql = $this->assembleSql($sql);
        $this->setResultType('array');
        $res = $this->query($sql, $params);
        $categorySvc = new ArticleCategoryService();
        $categories = $categorySvc->get();
        $total = 0;
        $analyzeResult = [];
        if (!empty($res)) {
            foreach ($res as $item) {
                $total += (int)$item['count'];
                $category = $item['category'];
                if ($item['category_pid'] !== 0) {
                    foreach ($categories as $c) {
                        if ($item['category_pid'] === $c['id']) {
                            $category = $c['name'];
                        }
                    }
                }
                $analyzeResult[] = [
                    'category' => $category,
                    'count' => $item['count']
                ];
            }
            // 合并相同的项
            $analyzeResult = array_reduce($analyzeResult, function ($carry, $item) {
                $key = $item['category'];
                // 如果当前`category`已存在于结果数组中，累加`count`
                if (isset($carry[$key])) {
                    $carry[$key]['count'] += $item['count'];
                } else {
                    // 否则，直接将当前项添加到结果数组
                    $carry[$key] = $item;
                }
                return $carry;
            }, []);
            $analyzeResult = array_values($analyzeResult);

            foreach ($analyzeResult as &$item) {
                $item['rate'] = ((int)$item['count'] / $total) * 100;
                $item['rate'] = round($item['rate'], 2);
            }
        }
        return $analyzeResult;
    }

    /**
     * 创建文章
     * @param array $params
     * @return bool|string
     */
    public function createArticle(array $params): bool|string
    {
        // 准备数据
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $article = new Article();
        $article->fill($data)
            ->filterInvalidProperties();
        if (!is_null($data['cover_image'] ?? null)) {
            $article->setCoverImage($data['cover_image']);
        }

        $res = $this->insert($article);
        if ($res !== true) {
            return '创建文章失败';
        }
        return true;
    }

    /**
     * 更新文章
     * @param array $params
     * @return bool|string
     */
    public function updateArticle(array $params): bool|string
    {
        // 准备数据
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $articleData = $this->getFirstByUuid($data['uuid']);
        if (empty($articleData)) {
            return '文章UUID不存在';
        }

        $article = new Article();
        $article->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($article);
        if ($res !== true) {
            return '更新文章失败';
        }
        return true;
    }

    /**
     * 删除文章
     * @param string $uuid
     * @return bool|string
     */
    public function deleteArticle(string $uuid): bool|string
    {
        $article = $this->getFirstByUuid($uuid);
        if (empty($article)) {
            return '文章UUID不存在';
        }
        $id = (int)$article['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除文章失败';
        }
        return true;
    }

    /**
     * 准备数据以供保存和更新，返回处理后的数据或错误消息
     * @param array $data
     * @return string|array 处理后的数据或错误消息
     */
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);
        // 校验自定义发布时间
        if (!is_null($data['custom_date'] ?? null)) {
            if (!$this->validateDate($data['custom_date'])) {
                return '无效的自定义发布日期';
            }
        }

        // 校验图片
        $mediaSvc = new MediaService();
        $coverImageName = $data['cover_image'] ?? null;
        if (!is_null($coverImageName)) {
            $media = $mediaSvc->getByMediaName($coverImageName);
            if (empty($media)) {
                return '无效的封面图';
            }
            $data['cover_image'] = (int)$media['id'];
        }

        // 处理发布状态和发布时间
        if (!is_null($data['is_published'] ?? null)) {
            $data['is_published'] = (int)($data['is_published'] === 'true');
            if ($data['is_published']) {
                $data['published_at'] = Carbon::now()->toDateTimeString();
            }
        }

        // 如果存在浏览次数则移除，防止篡改
        if (!is_null($data['view_count'] ?? null)) {
            unset($data['view_count']);
        }

        return $data;
    }
}
