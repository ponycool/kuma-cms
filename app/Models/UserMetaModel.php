<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:48 上午
 */
declare(strict_types=1);

namespace App\Models;

class UserMetaModel extends BaseModel
{
    protected $table = 'user_meta';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\UserMeta';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'user_id',
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

