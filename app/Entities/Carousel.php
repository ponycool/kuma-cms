<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/16
 * Time: 03:03 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Carousel extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected int $image;
    protected string $link;
    protected string $target;
    protected string $title;
    protected string $description;
    protected int $status;
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
        try {
            $this->setUuid();
        } catch (Exception $e) {
            log_message(
                'error',
                '初始化 Carousel Entity 失败，error：{msg}',
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
    public function setId(int $id): Carousel
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
    public function setUuid(string $uuid = ''): Carousel
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
        return $this;
    }

    /**
     * @return int
     */
    public function getImage(): int
    {
        return $this->image;
    }

    /**
     * @param int $image
     * @return $this
     */
    public function setImage(int $image): Carousel
    {
        $this->image = $image;
        $this->attributes['image'] = $this->image;
        return $this;
    }

    /**
     * @return string
     */
    public function getLink(): string
    {
        return $this->link;
    }

    /**
     * @param string $link
     * @return $this
     */
    public function setLink(string $link): Carousel
    {
        $this->link = $link;
        $this->attributes['link'] = $this->link;
        return $this;
    }

    /**
     * @return string
     */
    public function getTarget(): string
    {
        return $this->target;
    }

    /**
     * @param string $target
     * @return $this
     */
    public function setTarget(string $target): Carousel
    {
        $this->target = $target;
        $this->attributes['target'] = $this->target;
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
    public function setTitle(string $title): Carousel
    {
        $this->title = $title;
        $this->attributes['title'] = $this->title;
        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     * @return $this
     */
    public function setDescription(string $description): Carousel
    {
        $this->description = $description;
        $this->attributes['description'] = $this->description;
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
    public function setStatus(int $status): Carousel
    {
        $this->status = $status;
        $this->attributes['status'] = $this->status;
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
    public function setSortIndex(int $sort_index): Carousel
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
