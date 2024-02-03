<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/02/03
 * Time: 08:21 上午
 */
declare(strict_types=1);

namespace App\Models;

class ArticleCategoryModel extends BaseModel
{
    protected $table = 'article_category';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\ArticleCategory';
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

