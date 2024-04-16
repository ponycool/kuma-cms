<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/16
 * Time: 09:04 上午
 */
declare(strict_types=1);

namespace App\Models;

class ProductCategoryModel extends BaseModel
{
    protected $table = 'product_category';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\ProductCategory';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'pid',
        'name',
        'icon',
        'code',
        'level',
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

