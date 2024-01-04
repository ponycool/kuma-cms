<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:48 上午
 */
declare(strict_types=1);

namespace App\Models;

class LinkModel extends BaseModel
{
    protected $table = 'link';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Link';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'link_name',
        'link_url',
        'link_desc',
        'link_image',
        'target',
        'is_visible',
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

