<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/03/15
 * Time: 01:58 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Log extends Base
{
    protected int $id = 0;
    protected int $uid;
    protected string $level;
    protected string $category;
    protected string $message;
    protected string $ip_address;
    protected string $user_agent;
    protected string $timestamp;
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
    public function setId(int $id): Log
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
        return $this;
    }

    /**
     * @return int
     */
    public function getUid(): int
    {
        return $this->uid;
    }

    /**
     * @param int $uid
     * @return $this
     */
    public function setUid(int $uid): Log
    {
        $this->uid = $uid;
        $this->attributes['uid'] = $this->uid;
        return $this;
    }

    /**
     * @return string
     */
    public function getLevel(): string
    {
        return $this->level;
    }

    /**
     * @param string $level
     * @return $this
     */
    public function setLevel(string $level): Log
    {
        $this->level = $level;
        $this->attributes['level'] = $this->level;
        return $this;
    }

    /**
     * @return string
     */
    public function getCategory(): string
    {
        return $this->category;
    }

    /**
     * @param string $category
     * @return $this
     */
    public function setCategory(string $category): Log
    {
        $this->category = $category;
        $this->attributes['category'] = $this->category;
        return $this;
    }

    /**
     * @return string
     */
    public function getMessage(): string
    {
        return $this->message;
    }

    /**
     * @param string $message
     * @return $this
     */
    public function setMessage(string $message): Log
    {
        $this->message = $message;
        $this->attributes['message'] = $this->message;
        return $this;
    }

    /**
     * @return string
     */
    public function getIpAddress(): string
    {
        return $this->ip_address;
    }

    /**
     * @param string $ip_address
     * @return $this
     */
    public function setIpAddress(string $ip_address): Log
    {
        $this->ip_address = $ip_address;
        $this->attributes['ip_address'] = $this->ip_address;
        return $this;
    }

    /**
     * @return string
     */
    public function getUserAgent(): string
    {
        return $this->user_agent;
    }

    /**
     * @param string $user_agent
     * @return $this
     */
    public function setUserAgent(string $user_agent): Log
    {
        $this->user_agent = $user_agent;
        $this->attributes['user_agent'] = $this->user_agent;
        return $this;
    }

    /**
     * @return string
     */
    public function getTimestamp(): string
    {
        return $this->timestamp;
    }

    /**
     * @param string $timestamp
     * @return $this
     */
    public function setTimestamp(string $timestamp): Log
    {
        $this->timestamp = $timestamp;
        $this->attributes['timestamp'] = $this->timestamp;
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
