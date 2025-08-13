<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/13
 * Time: 16:10
 */
declare(strict_types=1);

namespace App\Controllers\Api\Link\Type;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\LinkType;

class Query extends Base
{
    public function index(): void
    {
        $list = [];
        foreach (LinkType::cases() as $case) {
            $value = match ($case->name) {
                'INTERNAL' => '站内',
                'EXTERNAL' => '站外'
            };
            $list[$value] = $case->value;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取链接类型成功',
        ];
        $data = array_merge($data, $list);
        $this->render($data);
    }
}