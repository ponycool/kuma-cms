<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/05/07
 * Time: 15:06 下午
 */
declare(strict_types=1);

namespace App\Models;

class MessageModel extends BaseModel
{
    protected $table = 'message';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Message';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'name',
        'email',
        'phone',
        'company',
        'subject',
        'content',
        'registration_source',
        'traffic_source',
        'status',
    ];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';
    protected $dateFormat = 'datetime';
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

