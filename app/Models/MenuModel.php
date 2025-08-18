<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/08/18
 * Time: 10:20 上午
 */
declare(strict_types=1);

namespace App\Models;

class MenuModel extends BaseModel
{
    protected $table = 'menu';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Menu';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'pid',
        'name',
        'code',
        'icon',
        'type',
        'level',
        'link_url',
        'link_type',
        'target',
        'single_page_id',
        'visible',
        'enabled',
        'sort_index',
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

