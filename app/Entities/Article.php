<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:47 上午
 */
declare(strict_types=1);

namespace App\Entities;

class Article extends Base
{
    protected int $id = 0;
    protected string $title;
    protected int $cover_image;
    protected string $seo_title;
    protected string $seo_desc;
    protected string $seo_keywords;
    protected string $summary;
    protected string $content;
    protected string $author;
    protected string $custom_date;
    protected int $is_published;
    protected int $view_count;
    protected int $sort_index;
    protected string $created_at;
    protected string $updated_at;
    protected string $deleted_at;
    protected int $deleted;
    protected $dates = [
    ];
    protected $casts = [
        'deleted' => 'boolean'
    ];

    public function __construct(array $data = null)
    {
        parent::__construct($data);
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return $this
     */
    public function setId(int $id): Article
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle(string $title): Article
    {
        $this->title = $title;
        $this->attributes['title'] = $this->title;
        return $this;
    }

    /**
     * @return int
     */
    public function getCoverImage(): int
    {
        return $this->cover_image;
    }

    /**
     * @param int $cover_image
     * @return $this
     */
    public function setCoverImage(int $cover_image): Article
    {
        $this->cover_image = $cover_image;
        $this->attributes['cover_image'] = $this->cover_image;
        return $this;
    }

    /**
     * @return string
     */
    public function getSeoTitle(): string
    {
        return $this->seo_title;
    }

    /**
     * @param string $seo_title
     * @return $this
     */
    public function setSeoTitle(string $seo_title): Article
    {
        $this->seo_title = $seo_title;
        $this->attributes['seo_title'] = $this->seo_title;
        return $this;
    }

    /**
     * @return string
     */
    public function getSeoDesc(): string
    {
        return $this->seo_desc;
    }

    /**
     * @param string $seo_desc
     * @return $this
     */
    public function setSeoDesc(string $seo_desc): Article
    {
        $this->seo_desc = $seo_desc;
        $this->attributes['seo_desc'] = $this->seo_desc;
        return $this;
    }

    /**
     * @return string
     */
    public function getSeoKeywords(): string
    {
        return $this->seo_keywords;
    }

    /**
     * @param string $seo_keywords
     * @return $this
     */
    public function setSeoKeywords(string $seo_keywords): Article
    {
        $this->seo_keywords = $seo_keywords;
        $this->attributes['seo_keywords'] = $this->seo_keywords;
        return $this;
    }

    /**
     * @return string
     */
    public function getSummary(): string
    {
        return $this->summary;
    }

    /**
     * @param string $summary
     * @return $this
     */
    public function setSummary(string $summary): Article
    {
        $this->summary = $summary;
        $this->attributes['summary'] = $this->summary;
        return $this;
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     * @return $this
     */
    public function setContent(string $content): Article
    {
        $this->content = $content;
        $this->attributes['content'] = $this->content;
        return $this;
    }

    /**
     * @return string
     */
    public function getAuthor(): string
    {
        return $this->author;
    }

    /**
     * @param string $author
     * @return $this
     */
    public function setAuthor(string $author): Article
    {
        $this->author = $author;
        $this->attributes['author'] = $this->author;
        return $this;
    }

    /**
     * @return string
     */
    public function getCustomDate(): string
    {
        return $this->custom_date;
    }

    /**
     * @param string $custom_date
     * @return $this
     */
    public function setCustomDate(string $custom_date): Article
    {
        $this->custom_date = $custom_date;
        $this->attributes['custom_date'] = $this->custom_date;
        return $this;
    }

    /**
     * @return int
     */
    public function getIsPublished(): int
    {
        return $this->is_published;
    }

    /**
     * @param int $is_published
     * @return $this
     */
    public function setIsPublished(int $is_published): Article
    {
        $this->is_published = $is_published;
        $this->attributes['is_published'] = $this->is_published;
        return $this;
    }

    /**
     * @return int
     */
    public function getViewCount(): int
    {
        return $this->view_count;
    }

    /**
     * @param int $view_count
     * @return $this
     */
    public function setViewCount(int $view_count): Article
    {
        $this->view_count = $view_count;
        $this->attributes['view_count'] = $this->view_count;
        return $this;
    }

    /**
     * @return int
     */
    public function getSortIndex(): int
    {
        return $this->sort_index;
    }

    /**
     * @param int $sort_index
     * @return $this
     */
    public function setSortIndex(int $sort_index): Article
    {
        $this->sort_index = $sort_index;
        $this->attributes['sort_index'] = $this->sort_index;
        return $this;
    }

    /**
     * @return string
     */
    public function getCreatedAt(): string
    {
        return $this->created_at;
    }

    /**
     * @return string
     */
    public function getUpdatedAt(): string
    {
        return $this->updated_at;
    }

    /**
     * @return string
     */
    public function getDeletedAt(): string
    {
        return $this->deleted_at;
    }

    /**
     * @return int
     */
    public function getDeleted(): int
    {
        return $this->deleted;
    }

}
