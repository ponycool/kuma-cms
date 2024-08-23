<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/21
 * Time: 15:58 下午
 */
declare(strict_types=1);

namespace App\Models;

class MarketingRecordModel extends BaseModel
{
    protected $table = 'marketing_record';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\MarketingRecord';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'plan_id',
        'share_id',
        'name',
        'phone_number',
        'email',
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

