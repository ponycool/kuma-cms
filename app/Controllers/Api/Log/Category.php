<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/3/26
 * Time: 15:27
 */
declare(strict_types=1);

namespace App\Controllers\Api\Log;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\LogCategory;

class Category extends Base
{
    /**
     * 获取日志类别
     * @return void
     */
    public function index(): void
    {
        $list = [];
        foreach (LogCategory::cases() as $case) {
            $list[$case->name] = $case->value;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取日志类别成功',
            'list' => $list
        ];
        $this->render($data);
    }
}