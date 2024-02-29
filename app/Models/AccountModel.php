<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/02/29
 * Time: 02:30 上午
 */
declare(strict_types=1);

namespace App\Models;

class AccountModel extends BaseModel
{
    protected $table = 'account';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Account';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'account_name',
        'password',
        'salt',
        'email',
        'locked',
        'locked_at',
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

