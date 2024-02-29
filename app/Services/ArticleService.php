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
use Carbon\Carbon;

class ArticleService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getValidationRules(): array
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
            $this->getValidationRules(),
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
        $page = $params['page'] ?? 1;
        $pageSize = $params['pageSize'] ?? 10;
        $res = $this->getPage($page, $pageSize);
        if ($res['total'] > 0) {
            if (is_array($res['pageData'])) {
                $res['pageData'] = $this->mergeMedia($res['pageData']);
            }
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
        if ($this->validateUUID($uuid) !== true) {
            return null;
        }
        $res = $this->getFirstByUuid($uuid);
        if (count($res) > 0) {
            $res = $this->mergeMedia([$res])[0];
        }
        return $res;
    }

    /**
     * 创建文章
     * @param array $params
     * @return bool|string
     */
    public function createArticle(array $params): bool|string
    {
        // 准备数据
        $data = $this->prepareData($params);
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
        $data = $this->convertParamsToSnakeCase($params);

        $articleData = $this->getFirstByUuid($data['uuid']);
        if (empty($articleData)) {
            return '文章UUID不存在';
        }

        // 准备数据
        $data = $this->prepareData($data);
        if (is_string($data)) {
            return $data;
        }

        $article = new Article();
        $article->fillData($data)
            ->filterInvalidProperties();
        if (!is_null($data['cover_image'] ?? null)) {
            $article->setCoverImage($data['cover_image']);
        }

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
    public function prepareData(array $data): string|array
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
            $data['is_published'] = $data['is_published'] === 'true';
            if ($data['is_published'] === true) {
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
