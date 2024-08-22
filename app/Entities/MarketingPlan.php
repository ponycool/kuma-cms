<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/22
 * Time: 14:09 下午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class MarketingPlan extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected string $name;
    protected int $cover_image;
    protected string $content;
    protected string $location;
    protected string $start_datetime;
    protected string $end_datatime;
    protected int $is_active;
    protected string $status;
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
        try {
            $this->setUuid();
        } catch (Exception $e) {
            log_message(
                'error',
                '初始化 MarketingPlan Entity 失败，error：{msg}',
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
    public function setId(int $id): MarketingPlan
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
    public function setUuid(string $uuid = ''): MarketingPlan
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
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
    public function setName(string $name): MarketingPlan
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
    public function setCoverImage(int $cover_image): MarketingPlan
    {
        $this->cover_image = $cover_image;
        $this->attributes['cover_image'] = $this->cover_image;
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
    public function setContent(string $content): MarketingPlan
    {
        $this->content = $content;
        $this->attributes['content'] = $this->content;
        return $this;
    }

    /**
     * @return string
     */
    public function getLocation(): string
    {
        return $this->location;
    }

    /**
     * @param string $location
     * @return $this
     */
    public function setLocation(string $location): MarketingPlan
    {
        $this->location = $location;
        $this->attributes['location'] = $this->location;
        return $this;
    }

    /**
     * @return string
     */
    public function getStartDatetime(): string
    {
        return $this->start_datetime;
    }

    /**
     * @param string $start_datetime
     * @return $this
     */
    public function setStartDatetime(string $start_datetime): MarketingPlan
    {
        $this->start_datetime = $start_datetime;
        $this->attributes['start_datetime'] = $this->start_datetime;
        return $this;
    }

    /**
     * @return string
     */
    public function getEndDatatime(): string
    {
        return $this->end_datatime;
    }

    /**
     * @param string $end_datatime
     * @return $this
     */
    public function setEndDatatime(string $end_datatime): MarketingPlan
    {
        $this->end_datatime = $end_datatime;
        $this->attributes['end_datatime'] = $this->end_datatime;
        return $this;
    }

    /**
     * @return int
     */
    public function getIsActive(): int
    {
        return $this->is_active;
    }

    /**
     * @param int $is_active
     * @return $this
     */
    public function setIsActive(int $is_active): MarketingPlan
    {
        $this->is_active = $is_active;
        $this->attributes['is_active'] = $this->is_active;
        return $this;
    }

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * @param string $status
     * @return $this
     */
    public function setStatus(string $status): MarketingPlan
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
    public function setViewCount(int $view_count): MarketingPlan
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
    public function setSortIndex(int $sort_index): MarketingPlan
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
