<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/19
 * Time: 06:19 上午
 */
declare(strict_types=1);

namespace App\Models;

class TeamModel extends BaseModel
{
    protected $table = 'team';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Team';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'name',
        'profile_image',
        'job_title',
        'introduction',
        'email',
        'phone',
        'joined_date',
        'sort_index',
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

