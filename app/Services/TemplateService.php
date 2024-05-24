<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/3
 * Time: 17:04
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\Language;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TemplateService extends AbstractExtension
{
    public string $language;
    public int $page;
    public int $pageSize;
    // 分类ID
    public ?int $cid;
    // 父级ID
    public ?int $pid;
    public ?string $uuid;
    // 搜索关键词
    public ?string $keyword;

    public function __construct()
    {
        $page = request()->getGetPost('page') ?? 1;
        $pageSize = request()->getGetPost('pageSize') ?? 10;
        $cid = request()->getGetPost('cid') ?? null;
        $cid = is_null($cid) ? $cid : (int)$cid;
        $pid = request()->getGetPost('pid') ?? null;
        $pid = is_null($pid) ? $pid : (int)$pid;
        $uuid = request()->getGetPost('uuid') ?? null;
        $keyword = request()->getGetPost('keyword', FILTER_SANITIZE_FULL_SPECIAL_CHARS) ?? null;
        $language = request()->getGetPost('lang') ?? Language::SIMPLIFIED_CHINESE->value;
        $this->setLanguage($language)
            ->setPage((int)$page)
            ->setPageSize((int)$pageSize)
            ->setCid($cid)
            ->setPid($pid)
            ->setUuid($uuid)
            ->setKeyword($keyword);
    }

    public function getLanguage(): string
    {
        return $this->language;
    }

    public function setLanguage(string $language): TemplateService
    {
        $this->language = $language;
        return $this;
    }

    public function getPage(): int
    {
        return $this->page;
    }

    public function setPage(int $page): TemplateService
    {
        $this->page = $page;
        return $this;
    }

    public function getPageSize(): int
    {
        return $this->pageSize;
    }

    public function setPageSize(int $pageSize): TemplateService
    {
        $this->pageSize = $pageSize;
        return $this;
    }

    public function getCid(): ?int
    {
        return $this->cid;
    }

    public function setCid(?int $cid): TemplateService
    {
        $this->cid = $cid;
        return $this;
    }

    public function getPid(): ?int
    {
        return $this->pid;
    }

    public function setPid(?int $pid): TemplateService
    {
        $this->pid = $pid;
        return $this;
    }

    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(?string $uuid): TemplateService
    {
        $this->uuid = $uuid;
        return $this;
    }

    public function getKeyword(): ?string
    {
        return $this->keyword;
    }

    public function setKeyword(?string $keyword): TemplateService
    {
        $this->keyword = $keyword;
        return $this;
    }

    /**
     * 获取函数
     * @return TwigFunction[]
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('menu', [$this, 'getMenu']),
            new TwigFunction('carousel', [$this, 'getCarousel']),
            new TwigFunction('articles', [$this, 'getArticles']),
            new TwigFunction('fetchArticleByCategory', [$this, 'fetchArticleByCategory']),
            new TwigFunction('fetchCategoryArticleCounts', [$this, 'fetchCategoryArticleCounts']),
            new TwigFunction('products', [$this, 'getProducts']),
            new TwigFunction('team', [$this, 'getTeam']),
            new TwigFunction('fetchRecentArticles', [$this, 'fetchRecentArticles']),
            new TwigFunction('fetchCategoriesProductsCount', [$this, 'fetchCategoriesProductsCount']),
            new TwigFunction('fetchTopCategoriesProductsCount', [$this, 'fetchTopCategoriesProductsCount']),
        ];
    }

    /**
     * 获取菜单
     * @return array
     */
    public function getMenu(): array
    {
        return [];
    }

    /**
     * 获取文章列表
     * @param string|null $categoryCode
     * @param bool $isPage
     * @param int|null $limit
     * @return array
     */
    public function getArticles(?string $categoryCode = null, bool $isPage = true,
                                ?int    $limit = null): array
    {
        $params = [
            'page' => $this->getPage(),
            'pageSize' => $this->getPageSize(),
            'cid' => $this->getCid(),
            'categoryCode' => $categoryCode,
            'isPage' => $isPage,
            'limit' => $limit,
        ];
        $svc = new ArticleService();
        return $svc->getList($params);
    }

    /**
     * 根据分类编码获取分类下的文章
     * @param string|array $categoryCode
     * @param int $limit
     * @return array
     */
    public function fetchArticleByCategory(string|array $categoryCode, int $limit = 10): array
    {
        $params = [
            'categoryCode' => $categoryCode,
            'limit' => $limit,
        ];
        $svc = new ArticleService();
        return $svc->getListByCategoryCode($params);
    }

    /**
     * 获取轮播图
     * @return array
     */
    public function getCarousel(): array
    {
        $svc = new CarouselService();
        return $svc->getEnableList();
    }

    /**
     * 获取产品列表
     * @param string|null $categoryCode
     * @param bool $isPage
     * @param int|null $limit
     * @return array
     */
    public function getProducts(?string $categoryCode = null, bool $isPage = true,
                                ?int    $limit = null): array
    {
        $params = [
            'page' => $this->getPage(),
            'pageSize' => $this->getPageSize(),
            'categoryCode' => $categoryCode,
            'isPage' => $isPage,
            'limit' => $limit,
        ];
        $svc = new ProductService();
        return $svc->getList($params);
    }

    /**
     * 获取团队成员
     * @param int|null $count
     * @return array
     */
    public function getTeam(?int $count = null): array
    {
        $svc = new TeamService();
        return $svc->getTeamMember($count);
    }

    /**
     * 获取分类文章数量
     * @return array
     */
    public function fetchCategoryArticleCounts(): array
    {
        $svc = new ArticleService();
        return $svc->getCategoryArticleCounts();
    }

    /**
     * 获取最近文章
     * @param int $count
     * @return array
     */
    public function fetchRecentArticles(int $count = 10): array
    {
        $params = [
            'cid' => $this->getCid(),
            'isPage' => false,
            'sortField' => 'created_at',
            'sortType' => 'DESC',
            'limit' => $count,
        ];
        $svc = new ArticleService();
        return $svc->getList($params);
    }

    /**
     * 获取所有产品分类及分类下的产品数量
     * @return array
     */
    public function fetchCategoriesProductsCount(): array
    {
        $svc = new ProductService();
        return $svc->getCountByCategory();
    }

    /**
     * 获取所有一级产品分类及分类下的产品数量
     * @return array
     */
    public function fetchTopCategoriesProductsCount(): array
    {
        $svc = new ProductService();
        return $svc->getCountByTopCategory();
    }
}