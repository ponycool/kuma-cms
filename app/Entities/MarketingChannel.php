<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/05/12
 * Time: 15:07 下午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class MarketingChannel extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected string $channel_name;
    protected string $channel_type;
    protected string $description;
    protected string $source_code;
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
                '初始化 MarketingChannel Entity 失败，error：{msg}',
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
    public function setId(int $id): MarketingChannel
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
    public function setUuid(string $uuid = ''): MarketingChannel
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
        return $this;
    }

    /**
     * @return string
     */
    public function getChannelName(): string
    {
        return $this->channel_name;
    }

    /**
     * @param string $channel_name
     * @return $this
     */
    public function setChannelName(string $channel_name): MarketingChannel
    {
        $this->channel_name = $channel_name;
        $this->attributes['channel_name'] = $this->channel_name;
        return $this;
    }

    /**
     * @return string
     */
    public function getChannelType(): string
    {
        return $this->channel_type;
    }

    /**
     * @param string $channel_type
     * @return $this
     */
    public function setChannelType(string $channel_type): MarketingChannel
    {
        $this->channel_type = $channel_type;
        $this->attributes['channel_type'] = $this->channel_type;
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
    public function setDescription(string $description): MarketingChannel
    {
        $this->description = $description;
        $this->attributes['description'] = $this->description;
        return $this;
    }

    /**
     * @return string
     */
    public function getSourceCode(): string
    {
        return $this->source_code;
    }

    /**
     * @param string $source_code
     * @return $this
     */
    public function setSourceCode(string $source_code): MarketingChannel
    {
        $this->source_code = $source_code;
        $this->attributes['source_code'] = $this->source_code;
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
