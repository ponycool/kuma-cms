<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/22
 * Time: 13:36
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Plan;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingPlanService;
use Exception;

class Query extends Base
{
    /**
     * 获取营销计划列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new MarketingPlanService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取营销计划列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取营销计划列表失败',
            ];
        }
        $this->render($data);
    }
}