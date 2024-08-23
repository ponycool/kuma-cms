<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/21
 * Time: 15:58 下午
 */
declare(strict_types=1);

namespace App\Models;

class MarketingShareModel extends BaseModel
{
    protected $table = 'marketing_share';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\MarketingShare';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'plan_id',
        'name',
        'phone_number',
        'email',
        'share_code',
        'view_count',
        'share_count',
        'deleted_at	',
    ];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
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

