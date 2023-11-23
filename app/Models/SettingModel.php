<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2023/11/23
 * Time: 07:48 上午
 */
declare(strict_types=1);

namespace App\Models;

class SettingModel extends BaseModel
{
    protected $table = 'setting';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Setting';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'key',
        'value',
    ];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';
    protected $validationRules = [
        'key' => 'required',
    ];
    protected $validationMessages = [
        'key' => [
            'required' => '系统配置项的键为必填项',
        ],

    ];
    protected $skipValidation = false;

}

