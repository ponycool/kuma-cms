<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/23
 * Time: 06:52 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Honor extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected string $title;
    protected int $image;
    protected string $award_organization;
    protected string $award_date;
    protected string $description;
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
                '初始化 Honor Entity 失败，error：{msg}',
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
    public function setId(int $id): Honor
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
    public function setUuid(string $uuid = ''): Honor
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
    public function setTitle(string $title): Honor
    {
        $this->title = $title;
        $this->attributes['title'] = $this->title;
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
    public function setImage(int $image): Honor
    {
        $this->image = $image;
        $this->attributes['image'] = $this->image;
        return $this;
    }

    /**
     * @return string
     */
    public function getAwardOrganization(): string
    {
        return $this->award_organization;
    }

    /**
     * @param string $award_organization
     * @return $this
     */
    public function setAwardOrganization(string $award_organization): Honor
    {
        $this->award_organization = $award_organization;
        $this->attributes['award_organization'] = $this->award_organization;
        return $this;
    }

    /**
     * @return string
     */
    public function getAwardDate(): string
    {
        return $this->award_date;
    }

    /**
     * @param string $award_date
     * @return $this
     */
    public function setAwardDate(string $award_date): Honor
    {
        $this->award_date = $award_date;
        $this->attributes['award_date'] = $this->award_date;
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
    public function setDescription(string $description): Honor
    {
        $this->description = $description;
        $this->attributes['description'] = $this->description;
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
