<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2023/11/22
 * Time: 08:10 上午
 */
declare(strict_types=1);

namespace App\Models;

class AccountModel extends BaseModel
{
    protected $table = 'account';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Account';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'account_name',
        'password',
        'salt',
        'locked',
        'locked_at',
    ];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';
    protected $dateFormat = 'datetime';
    protected $validationRules = [
    ];
    protected $validationMessages = [

    ];
    protected $skipValidation = false;

}

