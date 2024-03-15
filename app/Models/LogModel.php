<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/03/15
 * Time: 01:58 上午
 */
declare(strict_types=1);

namespace App\Models;

class LogModel extends BaseModel
{
    protected $table = 'log';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Log';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'uid',
        'level',
        'category',
        'message',
        'ip_address',
        'user_agent',
        'timestamp',
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

