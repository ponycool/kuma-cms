<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/21
 * Time: 15:57 下午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class MarketingShare extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected int $plan_id;
    protected string $name;
    protected string $phone_number;
    protected string $email;
    protected string $share_code;
    protected int $view_count;
    protected int $share_count;
    protected string $created_at;
    protected string $updated_at;
    protected string $deleted_at	;
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
                '初始化 MarketingShare Entity 失败，error：{msg}',
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
    public function setId(int $id): MarketingShare
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
    public function setUuid(string $uuid = ''): MarketingShare
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
        return $this;
    }

    /**
     * @return int
     */
    public function getPlanId(): int
    {
        return $this->plan_id;
    }

    /**
     * @param int $plan_id
     * @return $this
     */
    public function setPlanId(int $plan_id): MarketingShare
    {
        $this->plan_id = $plan_id;
        $this->attributes['plan_id'] = $this->plan_id;
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
    public function setName(string $name): MarketingShare
    {
        $this->name = $name;
        $this->attributes['name'] = $this->name;
        return $this;
    }

    /**
     * @return string
     */
    public function getPhoneNumber(): string
    {
        return $this->phone_number;
    }

    /**
     * @param string $phone_number
     * @return $this
     */
    public function setPhoneNumber(string $phone_number): MarketingShare
    {
        $this->phone_number = $phone_number;
        $this->attributes['phone_number'] = $this->phone_number;
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
    public function setEmail(string $email): MarketingShare
    {
        $this->email = $email;
        $this->attributes['email'] = $this->email;
        return $this;
    }

    /**
     * @return string
     */
    public function getShareCode(): string
    {
        return $this->share_code;
    }

    /**
     * @param string $share_code
     * @return $this
     */
    public function setShareCode(string $share_code): MarketingShare
    {
        $this->share_code = $share_code;
        $this->attributes['share_code'] = $this->share_code;
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
    public function setViewCount(int $view_count): MarketingShare
    {
        $this->view_count = $view_count;
        $this->attributes['view_count'] = $this->view_count;
        return $this;
    }

    /**
     * @return int
     */
    public function getShareCount(): int
    {
        return $this->share_count;
    }

    /**
     * @param int $share_count
     * @return $this
     */
    public function setShareCount(int $share_count): MarketingShare
    {
        $this->share_count = $share_count;
        $this->attributes['share_count'] = $this->share_count;
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
    public function getDeletedAt	(): string
    {
        return $this->deleted_at	;
    }

    /**
     * @param string $deleted_at	
     * @return $this
     */
    public function setDeletedAt	(string $deleted_at	): MarketingShare
    {
        $this->deleted_at	 = $deleted_at	;
        $this->attributes['deleted_at	'] = $this->deleted_at	;
        return $this;
    }

    /**
     * @return int
     */
    public function getDeleted(): int
    {
        return $this->deleted;
    }

}
