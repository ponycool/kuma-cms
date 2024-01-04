<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:48 上午
 */
declare(strict_types=1);

namespace App\Models;

class ArticleMetaModel extends BaseModel
{
    protected $table = 'article_meta';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\ArticleMeta';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'article_id',
        'meta_key',
        'meta_value',
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

