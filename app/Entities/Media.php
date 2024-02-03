<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/02/03
 * Time: 07:51 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Media extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected int $creator;
    protected string $type;
    protected string $thumbnail;
    protected string $file_name;
    protected string $file_url;
    protected int $size;
    protected string $size_by_unit;
    protected string $exts;
    protected string $mime_type;
    protected string $status;
    protected string $hash;
    protected string $hash_alg;
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
                '初始化 Media Entity 失败，error：{msg}',
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
    public function setId(int $id): Media
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
    public function setUuid(string $uuid = ''): Media
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
        return $this;
    }

    /**
     * @return int
     */
    public function getCreator(): int
    {
        return $this->creator;
    }

    /**
     * @param int $creator
     * @return $this
     */
    public function setCreator(int $creator): Media
    {
        $this->creator = $creator;
        $this->attributes['creator'] = $this->creator;
        return $this;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     * @return $this
     */
    public function setType(string $type): Media
    {
        $this->type = $type;
        $this->attributes['type'] = $this->type;
        return $this;
    }

    /**
     * @return string
     */
    public function getThumbnail(): string
    {
        return $this->thumbnail;
    }

    /**
     * @param string $thumbnail
     * @return $this
     */
    public function setThumbnail(string $thumbnail): Media
    {
        $this->thumbnail = $thumbnail;
        $this->attributes['thumbnail'] = $this->thumbnail;
        return $this;
    }

    /**
     * @return string
     */
    public function getFileName(): string
    {
        return $this->file_name;
    }

    /**
     * @param string $file_name
     * @return $this
     */
    public function setFileName(string $file_name): Media
    {
        $this->file_name = $file_name;
        $this->attributes['file_name'] = $this->file_name;
        return $this;
    }

    /**
     * @return string
     */
    public function getFileUrl(): string
    {
        return $this->file_url;
    }

    /**
     * @param string $file_url
     * @return $this
     */
    public function setFileUrl(string $file_url): Media
    {
        $this->file_url = $file_url;
        $this->attributes['file_url'] = $this->file_url;
        return $this;
    }

    /**
     * @return int
     */
    public function getSize(): int
    {
        return $this->size;
    }

    /**
     * @param int $size
     * @return $this
     */
    public function setSize(int $size): Media
    {
        $this->size = $size;
        $this->attributes['size'] = $this->size;
        return $this;
    }

    /**
     * @return string
     */
    public function getSizeByUnit(): string
    {
        return $this->size_by_unit;
    }

    /**
     * @param string $size_by_unit
     * @return $this
     */
    public function setSizeByUnit(string $size_by_unit): Media
    {
        $this->size_by_unit = $size_by_unit;
        $this->attributes['size_by_unit'] = $this->size_by_unit;
        return $this;
    }

    /**
     * @return string
     */
    public function getExts(): string
    {
        return $this->exts;
    }

    /**
     * @param string $exts
     * @return $this
     */
    public function setExts(string $exts): Media
    {
        $this->exts = $exts;
        $this->attributes['exts'] = $this->exts;
        return $this;
    }

    /**
     * @return string
     */
    public function getMimeType(): string
    {
        return $this->mime_type;
    }

    /**
     * @param string $mime_type
     * @return $this
     */
    public function setMimeType(string $mime_type): Media
    {
        $this->mime_type = $mime_type;
        $this->attributes['mime_type'] = $this->mime_type;
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
    public function setStatus(string $status): Media
    {
        $this->status = $status;
        $this->attributes['status'] = $this->status;
        return $this;
    }

    /**
     * @return string
     */
    public function getHash(): string
    {
        return $this->hash;
    }

    /**
     * @param string $hash
     * @return $this
     */
    public function setHash(string $hash): Media
    {
        $this->hash = $hash;
        $this->attributes['hash'] = $this->hash;
        return $this;
    }

    /**
     * @return string
     */
    public function getHashAlg(): string
    {
        return $this->hash_alg;
    }

    /**
     * @param string $hash_alg
     * @return $this
     */
    public function setHashAlg(string $hash_alg): Media
    {
        $this->hash_alg = $hash_alg;
        $this->attributes['hash_alg'] = $this->hash_alg;
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
