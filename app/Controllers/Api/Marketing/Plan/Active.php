<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/22
 * Time: 15:04
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Plan;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingPlanService;
use Exception;

class Active extends Base
{
    /**
     * 激活营销计划
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的营销计划UUID');
            }
            $svc = new MarketingPlanService();
            $res = $svc->updateActiveStatus($uuid, 1);
            if ($res !== true) {
                throw new Exception('激活营销计划失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '激活营销计划成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '激活营销计划失败'
            ];
        }
        $this->render($data);
    }
}