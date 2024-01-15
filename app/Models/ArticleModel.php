<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:48 上午
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
        'view_count',
        'sort_index',
    ];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';
    protected $validationRules = [
    ];
    protected $validationMessages = [

    ];
    protected $skipValidation = false;

}

