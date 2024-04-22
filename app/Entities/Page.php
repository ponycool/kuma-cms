<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/22
 * Time: 06:43 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Page extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected string $title;
    protected string $code;
    protected string $seo_title;
    protected string $seo_description;
    protected string $seo_keywords;
    protected string $content;
    protected int $status;
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
        try {
            $this->setUuid();
        } catch (Exception $e) {
            log_message(
                'error',
                '初始化 Page Entity 失败，error：{msg}',
                ['msg' => $e->getMessage()]
            );
        }
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
    public function setId(int $id): Page
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
        return $this;
    }

    /**
     * @return string
     */
    public function getUuid(): string
    {
        return $this->uuid;
    }

    /**
     * @param string $uuid
     * @return $this
     * @throws Exception
     */
    public function setUuid(string $uuid = ''): Page
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
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
    public function setTitle(string $title): Page
    {
        $this->title = $title;
        $this->attributes['title'] = $this->title;
        return $this;
    }

    /**
     * @return string
     */
    public function getCode(): string
    {
        return $this->code;
    }

    /**
     * @param string $code
     * @return $this
     */
    public function setCode(string $code): Page
    {
        $this->code = $code;
        $this->attributes['code'] = $this->code;
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
    public function setSeoTitle(string $seo_title): Page
    {
        $this->seo_title = $seo_title;
        $this->attributes['seo_title'] = $this->seo_title;
        return $this;
    }

    /**
     * @return string
     */
    public function getSeoDescription(): string
    {
        return $this->seo_description;
    }

    /**
     * @param string $seo_description
     * @return $this
     */
    public function setSeoDescription(string $seo_description): Page
    {
        $this->seo_description = $seo_description;
        $this->attributes['seo_description'] = $this->seo_description;
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
    public function setSeoKeywords(string $seo_keywords): Page
    {
        $this->seo_keywords = $seo_keywords;
        $this->attributes['seo_keywords'] = $this->seo_keywords;
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
    public function setContent(string $content): Page
    {
        $this->content = $content;
        $this->attributes['content'] = $this->content;
        return $this;
    }

    /**
     * @return int
     */
    public function getStatus(): int
    {
        return $this->status;
    }

    /**
     * @param int $status
     * @return $this
     */
    public function setStatus(int $status): Page
    {
        $this->status = $status;
        $this->attributes['status'] = $this->status;
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
