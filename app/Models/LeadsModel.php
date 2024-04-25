<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/24
 * Time: 01:10 上午
 */
declare(strict_types=1);

namespace App\Models;

class LeadsModel extends BaseModel
{
    protected $table = 'leads';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Leads';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'source',
        'company',
        'name',
        'email',
        'phone',
        'additional_contacts',
        'assigned_to',
        'assigned_at',
        'registration_entry',
        'group',
        'tags',
        'remark',
        'status',
    ];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';
    protected $validationRules = [
        'uuid' => 'required|min_length[36]|max_length[36]',
    ];
    protected $validationMessages = [
        'uuid' => [
            'required' => 'uuid 列为必填项',
            'min_length' => 'uuid 长度为36个字符',
            'max_length' => 'uuid 长度为36个字符',
        ],
    ];
    protected $skipValidation = false;

}

