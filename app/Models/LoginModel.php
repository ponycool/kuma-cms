<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/08
 * Time: 03:19 上午
 */
declare(strict_types=1);

namespace App\Models;

class LoginModel extends BaseModel
{
    protected $table = 'login';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Login';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'account_id',
        'account_name',
        'ip',
        'login_status',
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

