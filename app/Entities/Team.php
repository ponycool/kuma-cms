<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/19
 * Time: 06:18 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Team extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected string $name;
    protected int $profile_image;
    protected string $job_title;
    protected string $introduction;
    protected string $email;
    protected string $phone;
    protected string $joined_date;
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
                '初始化 Team Entity 失败，error：{msg}',
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
    public function setId(int $id): Team
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
    public function setUuid(string $uuid = ''): Team
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
    public function setName(string $name): Team
    {
        $this->name = $name;
        $this->attributes['name'] = $this->name;
        return $this;
    }

    /**
     * @return int
     */
    public function getProfileImage(): int
    {
        return $this->profile_image;
    }

    /**
     * @param int $profile_image
     * @return $this
     */
    public function setProfileImage(int $profile_image): Team
    {
        $this->profile_image = $profile_image;
        $this->attributes['profile_image'] = $this->profile_image;
        return $this;
    }

    /**
     * @return string
     */
    public function getJobTitle(): string
    {
        return $this->job_title;
    }

    /**
     * @param string $job_title
     * @return $this
     */
    public function setJobTitle(string $job_title): Team
    {
        $this->job_title = $job_title;
        $this->attributes['job_title'] = $this->job_title;
        return $this;
    }

    /**
     * @return string
     */
    public function getIntroduction(): string
    {
        return $this->introduction;
    }

    /**
     * @param string $introduction
     * @return $this
     */
    public function setIntroduction(string $introduction): Team
    {
        $this->introduction = $introduction;
        $this->attributes['introduction'] = $this->introduction;
        return $this;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return $this
     */
    public function setEmail(string $email): Team
    {
        $this->email = $email;
        $this->attributes['email'] = $this->email;
        return $this;
    }

    /**
     * @return string
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * @param string $phone
     * @return $this
     */
    public function setPhone(string $phone): Team
    {
        $this->phone = $phone;
        $this->attributes['phone'] = $this->phone;
        return $this;
    }

    /**
     * @return string
     */
    public function getJoinedDate(): string
    {
        return $this->joined_date;
    }

    /**
     * @param string $joined_date
     * @return $this
     */
    public function setJoinedDate(string $joined_date): Team
    {
        $this->joined_date = $joined_date;
        $this->attributes['joined_date'] = $this->joined_date;
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
    public function setSortIndex(int $sort_index): Team
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
