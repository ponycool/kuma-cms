<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2023/11/23
 * Time: 06:41 上午
 */
declare(strict_types=1);

namespace App\Entities;

class Setting extends Base
{
    protected int $id = 0;
    protected string $key;
    protected string $value;
    protected string $created_at;
    protected string $updated_at;
    protected $dates = [
    ];
    protected $casts = [
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
    public function setId(int $id): Setting
    {
        $this->id = $id;
        $this->attributes['id'] = $this->id;
        return $this;
    }

    /**
     * @return string
     */
    public function getKey(): string
    {
        return $this->key;
    }

    /**
     * @param string $key
     * @return $this
     */
    public function setKey(string $key): Setting
    {
        $this->key = $key;
        $this->attributes['key'] = $this->key;
        return $this;
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return $this->value;
    }

    /**
     * @param string $value
     * @return $this
     */
    public function setValue(string $value): Setting
    {
        $this->value = $value;
        $this->attributes['value'] = $this->value;
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

}
