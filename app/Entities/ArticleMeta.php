<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:47 上午
 */
declare(strict_types=1);

namespace App\Entities;

class ArticleMeta extends Base
{
    protected int $id = 0;
    protected int $article_id;
    protected string $meta_key;
    protected string $meta_value;
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
    public function setId(int $id): ArticleMeta
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
        return $this;
    }

    /**
     * @return int
     */
    public function getArticleId(): int
    {
        return $this->article_id;
    }

    /**
     * @param int $article_id
     * @return $this
     */
    public function setArticleId(int $article_id): ArticleMeta
    {
        $this->article_id = $article_id;
        $this->attributes['article_id'] = $this->article_id;
        return $this;
    }

    /**
     * @return string
     */
    public function getMetaKey(): string
    {
        return $this->meta_key;
    }

    /**
     * @param string $meta_key
     * @return $this
     */
    public function setMetaKey(string $meta_key): ArticleMeta
    {
        $this->meta_key = $meta_key;
        $this->attributes['meta_key'] = $this->meta_key;
        return $this;
    }

    /**
     * @return string
     */
    public function getMetaValue(): string
    {
        return $this->meta_value;
    }

    /**
     * @param string $meta_value
     * @return $this
     */
    public function setMetaValue(string $meta_value): ArticleMeta
    {
        $this->meta_value = $meta_value;
        $this->attributes['meta_value'] = $this->meta_value;
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
