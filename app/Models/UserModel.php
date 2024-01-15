<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:48 上午
 */
declare(strict_types=1);

namespace App\Models;

class UserModel extends BaseModel
{
    protected $table = 'user';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\User';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'account_id',
        'nickname',
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

