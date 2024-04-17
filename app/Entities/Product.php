<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/17
 * Time: 08:43 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Product extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected int $cid;
    protected string $name;
    protected int $cover_image;
    protected string $detail_images;
    protected string $seo_title;
    protected string $seo_desc;
    protected string $seo_keywords;
    protected string $description;
    protected string $price;
    protected int $stock_quantity;
    protected int $sort_index;
    protected int $status;
    protected int $view_count;
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
                '初始化 Product Entity 失败，error：{msg}',
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
    public function setId(int $id): Product
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
    public function setUuid(string $uuid = ''): Product
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
        return $this;
    }

    /**
     * @return int
     */
    public function getCid(): int
    {
        return $this->cid;
    }

    /**
     * @param int $cid
     * @return $this
     */
    public function setCid(int $cid): Product
    {
        $this->cid = $cid;
        $this->attributes['cid'] = $this->cid;
        return $this;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return $this
     */
    public function setName(string $name): Product
    {
        $this->name = $name;
        $this->attributes['name'] = $this->name;
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
    public function setCoverImage(int $cover_image): Product
    {
        $this->cover_image = $cover_image;
        $this->attributes['cover_image'] = $this->cover_image;
        return $this;
    }

    /**
     * @return string
     */
    public function getDetailImages(): string
    {
        return $this->detail_images;
    }

    /**
     * @param string $detail_images
     * @return $this
     */
    public function setDetailImages(string $detail_images): Product
    {
        $this->detail_images = $detail_images;
        $this->attributes['detail_images'] = $this->detail_images;
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
    public function setSeoTitle(string $seo_title): Product
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
    public function setSeoDesc(string $seo_desc): Product
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
    public function setSeoKeywords(string $seo_keywords): Product
    {
        $this->seo_keywords = $seo_keywords;
        $this->attributes['seo_keywords'] = $this->seo_keywords;
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
    public function setDescription(string $description): Product
    {
        $this->description = $description;
        $this->attributes['description'] = $this->description;
        return $this;
    }

    /**
     * @return string
     */
    public function getPrice(): string
    {
        return $this->price;
    }

    /**
     * @param string $price
     * @return $this
     */
    public function setPrice(string $price): Product
    {
        $this->price = $price;
        $this->attributes['price'] = $this->price;
        return $this;
    }

    /**
     * @return int
     */
    public function getStockQuantity(): int
    {
        return $this->stock_quantity;
    }

    /**
     * @param int $stock_quantity
     * @return $this
     */
    public function setStockQuantity(int $stock_quantity): Product
    {
        $this->stock_quantity = $stock_quantity;
        $this->attributes['stock_quantity'] = $this->stock_quantity;
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
    public function setSortIndex(int $sort_index): Product
    {
        $this->sort_index = $sort_index;
        $this->attributes['sort_index'] = $this->sort_index;
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
    public function setStatus(int $status): Product
    {
        $this->status = $status;
        $this->attributes['status'] = $this->status;
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
    public function setViewCount(int $view_count): Product
    {
        $this->view_count = $view_count;
        $this->attributes['view_count'] = $this->view_count;
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
