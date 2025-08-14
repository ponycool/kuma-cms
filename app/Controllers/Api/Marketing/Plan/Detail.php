<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/22
 * Time: 14:55
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Plan;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingPlanService;
use Exception;

class Detail extends Base
{
    /**
     * 获取营销计划详情
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数营销计划UUID[uuid]为必填项',
                    'min_length' => '参数营销计划UUID[uuid]无效',
                    'max_length' => '参数营销计划UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的营销计划UUID');
            }
            $svc = new MarketingPlanService();
            $res = $svc->getPlanByUuid($uuid);
            if (is_null($res)) {
                throw new Exception('获取营销计划失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取营销计划成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取营销计划失败',
            ];
        }
        $this->render($data);
    }
}