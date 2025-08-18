<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/08/18
 * Time: 10:20 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Menu extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected int $pid;
    protected string $name;
    protected string $code;
    protected int $icon;
    protected string $type;
    protected int $level;
    protected string $link_url;
    protected int $link_type;
    protected string $target;
    protected int $single_page_id;
    protected int $visible;
    protected int $enabled;
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
                '初始化 Menu Entity 失败，error：{msg}',
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
    public function setId(int $id): Menu
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
    public function setUuid(string $uuid = ''): Menu
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
        return $this;
    }

    /**
     * @return int
     */
    public function getPid(): int
    {
        return $this->pid;
    }

    /**
     * @param int $pid
     * @return $this
     */
    public function setPid(int $pid): Menu
    {
        $this->pid = $pid;
        $this->attributes['pid'] = $this->pid;
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
    public function setName(string $name): Menu
    {
        $this->name = $name;
        $this->attributes['name'] = $this->name;
        return $this;
    }

    /**
     * @return string
     */
    public function getCode(): string
    {
        return $this->code;
    }

    /**
     * @param string $code
     * @return $this
     */
    public function setCode(string $code): Menu
    {
        $this->code = $code;
        $this->attributes['code'] = $this->code;
        return $this;
    }

    /**
     * @return int
     */
    public function getIcon(): int
    {
        return $this->icon;
    }

    /**
     * @param int $icon
     * @return $this
     */
    public function setIcon(int $icon): Menu
    {
        $this->icon = $icon;
        $this->attributes['icon'] = $this->icon;
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
    public function setType(string $type): Menu
    {
        $this->type = $type;
        $this->attributes['type'] = $this->type;
        return $this;
    }

    /**
     * @return int
     */
    public function getLevel(): int
    {
        return $this->level;
    }

    /**
     * @param int $level
     * @return $this
     */
    public function setLevel(int $level): Menu
    {
        $this->level = $level;
        $this->attributes['level'] = $this->level;
        return $this;
    }

    /**
     * @return string
     */
    public function getLinkUrl(): string
    {
        return $this->link_url;
    }

    /**
     * @param string $link_url
     * @return $this
     */
    public function setLinkUrl(string $link_url): Menu
    {
        $this->link_url = $link_url;
        $this->attributes['link_url'] = $this->link_url;
        return $this;
    }

    /**
     * @return int
     */
    public function getLinkType(): int
    {
        return $this->link_type;
    }

    /**
     * @param int $link_type
     * @return $this
     */
    public function setLinkType(int $link_type): Menu
    {
        $this->link_type = $link_type;
        $this->attributes['link_type'] = $this->link_type;
        return $this;
    }

    /**
     * @return string
     */
    public function getTarget(): string
    {
        return $this->target;
    }

    /**
     * @param string $target
     * @return $this
     */
    public function setTarget(string $target): Menu
    {
        $this->target = $target;
        $this->attributes['target'] = $this->target;
        return $this;
    }

    /**
     * @return int
     */
    public function getSinglePageId(): int
    {
        return $this->single_page_id;
    }

    /**
     * @param int $single_page_id
     * @return $this
     */
    public function setSinglePageId(int $single_page_id): Menu
    {
        $this->single_page_id = $single_page_id;
        $this->attributes['single_page_id'] = $this->single_page_id;
        return $this;
    }

    /**
     * @return int
     */
    public function getVisible(): int
    {
        return $this->visible;
    }

    /**
     * @param int $visible
     * @return $this
     */
    public function setVisible(int $visible): Menu
    {
        $this->visible = $visible;
        $this->attributes['visible'] = $this->visible;
        return $this;
    }

    /**
     * @return int
     */
    public function getEnabled(): int
    {
        return $this->enabled;
    }

    /**
     * @param int $enabled
     * @return $this
     */
    public function setEnabled(int $enabled): Menu
    {
        $this->enabled = $enabled;
        $this->attributes['enabled'] = $this->enabled;
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
    public function setSortIndex(int $sort_index): Menu
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
