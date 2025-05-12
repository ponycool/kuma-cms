<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/12
 * Time: 16:26
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Channel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\MarketingChannelType;

class Type extends Base
{
    /**
     * 获取营销渠道类型
     * @return void
     */
    public function index(): void
    {
        $list = [];
        foreach (MarketingChannelType::cases() as $case) {
            $list[$case->name] = $case->value;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取营销渠道类型成功',
            'list' => $list
        ];
        $this->render($data);
    }
}