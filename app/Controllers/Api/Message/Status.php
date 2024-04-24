<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/24
 * Time: 下午3:40
 */
declare(strict_types=1);

namespace App\Controllers\Api\Message;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\MessageStatus;

class Status extends Base
{
    /**
     * 获取消息状态列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $list = [];
        foreach (MessageStatus::cases() as $case) {
            $value = match ($case->value) {
                'read' => '已读',
                'pending' => '未读',
                default => ''
            };
            $list[$case->value] = $value;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取消息状态列表成功',
        ];
        $data = array_merge($data, $list);
        $this->render($data);
    }
}