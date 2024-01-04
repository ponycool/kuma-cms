<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:48 上午
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
    ];
    protected $validationMessages = [

    ];
    protected $skipValidation = false;

}

