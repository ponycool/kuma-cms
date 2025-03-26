<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/3/26
 * Time: 15:26
 */
declare(strict_types=1);

namespace App\Controllers\Api\Log;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\OperationAction;

class Action extends Base
{
    /**
     * 获取日志操作
     * @return void
     */
    public function index(): void
    {
        $list = [];
        foreach (OperationAction::cases() as $case) {
            $list[$case->name] = $case->value;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取日志操作成功',
            'list' => $list
        ];
        $this->render($data);
    }
}