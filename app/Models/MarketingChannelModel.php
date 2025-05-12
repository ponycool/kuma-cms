<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/05/12
 * Time: 15:07 下午
 */
declare(strict_types=1);

namespace App\Models;

class MarketingChannelModel extends BaseModel
{
    protected $table = 'marketing_channel';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\MarketingChannel';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'channel_name',
        'channel_type',
        'description',
        'source_code',
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

