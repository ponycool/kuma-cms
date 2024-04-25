<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/24
 * Time: 01:10 上午
 */
declare(strict_types=1);

namespace App\Entities;

use Exception;

class Leads extends Base
{
    protected int $id = 0;
    protected string $uuid;
    protected string $source;
    protected string $company;
    protected string $name;
    protected string $email;
    protected string $phone;
    protected string $additional_contacts;
    protected string $assigned_to;
    protected string $assigned_at;
    protected string $registration_entry;
    protected string $group;
    protected string $tags;
    protected string $remark;
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
                '初始化 Leads Entity 失败，error：{msg}',
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
    public function setId(int $id): Leads
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
    public function setUuid(string $uuid = ''): Leads
    {
        $this->uuid = $uuid ?: $this->generateUuid();
        $this->attributes['uuid'] = $this->uuid;
        return $this;
    }

    /**
     * @return string
     */
    public function getSource(): string
    {
        return $this->source;
    }

    /**
     * @param string $source
     * @return $this
     */
    public function setSource(string $source): Leads
    {
        $this->source = $source;
        $this->attributes['source'] = $this->source;
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
    public function setCompany(string $company): Leads
    {
        $this->company = $company;
        $this->attributes['company'] = $this->company;
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
    public function setName(string $name): Leads
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
    public function setEmail(string $email): Leads
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
    public function setPhone(string $phone): Leads
    {
        $this->phone = $phone;
        $this->attributes['phone'] = $this->phone;
        return $this;
    }

    /**
     * @return string
     */
    public function getAdditionalContacts(): string
    {
        return $this->additional_contacts;
    }

    /**
     * @param string $additional_contacts
     * @return $this
     */
    public function setAdditionalContacts(string $additional_contacts): Leads
    {
        $this->additional_contacts = $additional_contacts;
        $this->attributes['additional_contacts'] = $this->additional_contacts;
        return $this;
    }

    /**
     * @return string
     */
    public function getAssignedTo(): string
    {
        return $this->assigned_to;
    }

    /**
     * @param string $assigned_to
     * @return $this
     */
    public function setAssignedTo(string $assigned_to): Leads
    {
        $this->assigned_to = $assigned_to;
        $this->attributes['assigned_to'] = $this->assigned_to;
        return $this;
    }

    /**
     * @return string
     */
    public function getAssignedAt(): string
    {
        return $this->assigned_at;
    }

    /**
     * @param string $assigned_at
     * @return $this
     */
    public function setAssignedAt(string $assigned_at): Leads
    {
        $this->assigned_at = $assigned_at;
        $this->attributes['assigned_at'] = $this->assigned_at;
        return $this;
    }

    /**
     * @return string
     */
    public function getRegistrationEntry(): string
    {
        return $this->registration_entry;
    }

    /**
     * @param string $registration_entry
     * @return $this
     */
    public function setRegistrationEntry(string $registration_entry): Leads
    {
        $this->registration_entry = $registration_entry;
        $this->attributes['registration_entry'] = $this->registration_entry;
        return $this;
    }

    /**
     * @return string
     */
    public function getGroup(): string
    {
        return $this->group;
    }

    /**
     * @param string $group
     * @return $this
     */
    public function setGroup(string $group): Leads
    {
        $this->group = $group;
        $this->attributes['group'] = $this->group;
        return $this;
    }

    /**
     * @return string
     */
    public function getTags(): string
    {
        return $this->tags;
    }

    /**
     * @param string $tags
     * @return $this
     */
    public function setTags(string $tags): Leads
    {
        $this->tags = $tags;
        $this->attributes['tags'] = $this->tags;
        return $this;
    }

    /**
     * @return string
     */
    public function getRemark(): string
    {
        return $this->remark;
    }

    /**
     * @param string $remark
     * @return $this
     */
    public function setRemark(string $remark): Leads
    {
        $this->remark = $remark;
        $this->attributes['remark'] = $this->remark;
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
    public function setStatus(string $status): Leads
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
