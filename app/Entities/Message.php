<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/05/07
 * Time: 15:06 下午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Message extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected string $name;
    protected string $email;
    protected string $phone;
    protected string $company;
    protected string $subject;
    protected string $content;
    protected string $registration_source;
    protected string $traffic_source;
    protected string $status;
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
                '初始化 Message Entity 失败，error：{msg}',
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
    public function setId(int $id): Message
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
    public function setUuid(string $uuid = ''): Message
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
    public function setName(string $name): Message
    {
        $this->name = $name;
        $this->attributes['name'] = $this->name;
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
    public function setEmail(string $email): Message
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
    public function setPhone(string $phone): Message
    {
        $this->phone = $phone;
        $this->attributes['phone'] = $this->phone;
        return $this;
    }

    /**
     * @return string
     */
    public function getCompany(): string
    {
        return $this->company;
    }

    /**
     * @param string $company
     * @return $this
     */
    public function setCompany(string $company): Message
    {
        $this->company = $company;
        $this->attributes['company'] = $this->company;
        return $this;
    }

    /**
     * @return string
     */
    public function getSubject(): string
    {
        return $this->subject;
    }

    /**
     * @param string $subject
     * @return $this
     */
    public function setSubject(string $subject): Message
    {
        $this->subject = $subject;
        $this->attributes['subject'] = $this->subject;
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
    public function setContent(string $content): Message
    {
        $this->content = $content;
        $this->attributes['content'] = $this->content;
        return $this;
    }

    /**
     * @return string
     */
    public function getRegistrationSource(): string
    {
        return $this->registration_source;
    }

    /**
     * @param string $registration_source
     * @return $this
     */
    public function setRegistrationSource(string $registration_source): Message
    {
        $this->registration_source = $registration_source;
        $this->attributes['registration_source'] = $this->registration_source;
        return $this;
    }

    /**
     * @return string
     */
    public function getTrafficSource(): string
    {
        return $this->traffic_source;
    }

    /**
     * @param string $traffic_source
     * @return $this
     */
    public function setTrafficSource(string $traffic_source): Message
    {
        $this->traffic_source = $traffic_source;
        $this->attributes['traffic_source'] = $this->traffic_source;
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
    public function setStatus(string $status): Message
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
