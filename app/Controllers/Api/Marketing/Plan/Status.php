<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/23
 * Time: 10:46
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Plan;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\MarketingPlanStatus;

class Status extends Base
{
    /**
     * 获取营销计划状态
     * @return void
     */
    public function index(): void
    {
        $data = [
            'code' => Code::OK,
            'message' => '获取营销计划状态成功'
        ];
        $list = [];
        foreach (MarketingPlanStatus::cases() as $item) {
            $list[$item->name] = $item->value;
        }
        $data['status'] = $list;
        $this->render($data);
    }
}