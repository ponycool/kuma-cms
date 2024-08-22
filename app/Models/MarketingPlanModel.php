<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/22
 * Time: 10:40 上午
 */
declare(strict_types=1);

namespace App\Models;

class MarketingPlanModel extends BaseModel
{
    protected $table = 'marketing_plan';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\MarketingPlan';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'name',
        'cove_image',
        'content',
        'location',
        'start_datetime',
        'end_datatime',
        'is_active',
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

