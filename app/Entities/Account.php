<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2023/11/23
 * Time: 06:41 上午
 */
declare(strict_types=1);

namespace App\Entities;

class Account extends Base
{
    protected int $id = 0;
    protected string $account_name;
    protected string $password;
    protected string $salt;
    protected int $locked;
    protected string $locked_at;
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
    public function setId(int $id): Account
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
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
    public function setAccountName(string $account_name): Account
    {
        $this->account_name = $account_name;
        $this->attributes['account_name'] = $this->account_name;
        return $this;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     * @return $this
     */
    public function setPassword(string $password): Account
    {
        $this->password = $password;
        $this->attributes['password'] = $this->password;
        return $this;
    }

    /**
     * @return string
     */
    public function getSalt(): string
    {
        return $this->salt;
    }

    /**
     * @param string $salt
     * @return $this
     */
    public function setSalt(string $salt): Account
    {
        $this->salt = $salt;
        $this->attributes['salt'] = $this->salt;
        return $this;
    }

    /**
     * @return int
     */
    public function getLocked(): int
    {
        return $this->locked;
    }

    /**
     * @param int $locked
     * @return $this
     */
    public function setLocked(int $locked): Account
    {
        $this->locked = $locked;
        $this->attributes['locked'] = $this->locked;
        return $this;
    }

    /**
     * @return string
     */
    public function getLockedAt(): string
    {
        return $this->locked_at;
    }

    /**
     * @param string $locked_at
     * @return $this
     */
    public function setLockedAt(string $locked_at): Account
    {
        $this->locked_at = $locked_at;
        $this->attributes['locked_at'] = $this->locked_at;
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
