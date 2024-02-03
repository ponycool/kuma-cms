<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/02/03
 * Time: 07:26 上午
 */
declare(strict_types=1);

namespace App\Models;

class MediaModel extends BaseModel
{
    protected $table = 'media';
    protected $primaryKey = 'id';
    protected $returnType = 'App\Entities\Media';
    protected $useSoftDeletes = true;
    protected $allowedFields = [
        'creator',
        'type',
        'thumbnail',
        'file_name',
        'file_url',
        'size',
        'size_by_unit',
        'exts',
        'mime_type',
        'status',
        'hash',
        'hash_alg',
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

