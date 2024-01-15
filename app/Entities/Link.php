<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:47 上午
 */
declare(strict_types=1);

namespace App\Entities;

class Link extends Base
{
    protected int $id = 0;
    protected string $link_name;
    protected string $link_url;
    protected string $link_desc;
    protected string $link_image;
    protected string $target;
    protected int $is_visible;
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
    public function setId(int $id): Link
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
        return $this;
    }

    /**
     * @return string
     */
    public function getLinkName(): string
    {
        return $this->link_name;
    }

    /**
     * @param string $link_name
     * @return $this
     */
    public function setLinkName(string $link_name): Link
    {
        $this->link_name = $link_name;
        $this->attributes['link_name'] = $this->link_name;
        return $this;
    }

    /**
     * @return string
     */
    public function getLinkUrl(): string
    {
        return $this->link_url;
    }

    /**
     * @param string $link_url
     * @return $this
     */
    public function setLinkUrl(string $link_url): Link
    {
        $this->link_url = $link_url;
        $this->attributes['link_url'] = $this->link_url;
        return $this;
    }

    /**
     * @return string
     */
    public function getLinkDesc(): string
    {
        return $this->link_desc;
    }

    /**
     * @param string $link_desc
     * @return $this
     */
    public function setLinkDesc(string $link_desc): Link
    {
        $this->link_desc = $link_desc;
        $this->attributes['link_desc'] = $this->link_desc;
        return $this;
    }

    /**
     * @return string
     */
    public function getLinkImage(): string
    {
        return $this->link_image;
    }

    /**
     * @param string $link_image
     * @return $this
     */
    public function setLinkImage(string $link_image): Link
    {
        $this->link_image = $link_image;
        $this->attributes['link_image'] = $this->link_image;
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
    public function setTarget(string $target): Link
    {
        $this->target = $target;
        $this->attributes['target'] = $this->target;
        return $this;
    }

    /**
     * @return int
     */
    public function getIsVisible(): int
    {
        return $this->is_visible;
    }

    /**
     * @param int $is_visible
     * @return $this
     */
    public function setIsVisible(int $is_visible): Link
    {
        $this->is_visible = $is_visible;
        $this->attributes['is_visible'] = $this->is_visible;
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
