<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/17
 * Time: 08:44 上午
 */
declare(strict_types=1);

namespace App\Models;

class ProductModel extends BaseModel
{
    protected $table = 'product';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Product';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'cid',
        'name',
        'cover_image',
        'detail_images',
        'seo_title',
        'seo_desc',
        'seo_keywords',
        'description',
        'price',
        'stock_quantity',
        'sort_index',
        'status',
        'view_count',
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

