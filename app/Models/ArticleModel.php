<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/02/04
 * Time: 08:05 上午
 */
declare(strict_types=1);

namespace App\Models;

class ArticleModel extends BaseModel
{
    protected $table = 'article';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Article';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uuid',
        'cid',
        'title',
        'cover_image',
        'seo_title',
        'seo_desc',
        'seo_keywords',
        'summary',
        'content',
        'author',
        'custom_date',
        'is_published',
        'published_at',
        'sort_index',
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

