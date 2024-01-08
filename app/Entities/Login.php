<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/08
 * Time: 03:19 上午
 */
declare(strict_types=1);

namespace App\Entities;

class Login extends Base
{
    protected int $id = 0;
    protected int $account_id;
    protected string $account_name;
    protected string $ip;
    protected int $login_status;
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
    public function setId(int $id): Login
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
        return $this;
    }

    /**
     * @return int
     */
    public function getAccountId(): int
    {
        return $this->account_id;
    }

    /**
     * @param int $account_id
     * @return $this
     */
    public function setAccountId(int $account_id): Login
    {
        $this->account_id = $account_id;
        $this->attributes['account_id'] = $this->account_id;
        return $this;
    }

    /**
     * @return string
     */
    public function getAccountName(): string
    {
        return $this->account_name;
    }

    /**
     * @param string $account_name
     * @return $this
     */
    public function setAccountName(string $account_name): Login
    {
        $this->account_name = $account_name;
        $this->attributes['account_name'] = $this->account_name;
        return $this;
    }

    /**
     * @return string
     */
    public function getIp(): string
    {
        return $this->ip;
    }

    /**
     * @param string $ip
     * @return $this
     */
    public function setIp(string $ip): Login
    {
        $this->ip = $ip;
        $this->attributes['ip'] = $this->ip;
        return $this;
    }

    /**
     * @return int
     */
    public function getLoginStatus(): int
    {
        return $this->login_status;
    }

    /**
     * @param int $login_status
     * @return $this
     */
    public function setLoginStatus(int $login_status): Login
    {
        $this->login_status = $login_status;
        $this->attributes['login_status'] = $this->login_status;
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
