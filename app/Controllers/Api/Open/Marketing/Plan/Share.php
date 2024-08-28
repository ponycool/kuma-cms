<?php

/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/24
 * Time: 15:14
 */
declare(strict_types=1);

namespace App\Controllers\Api\Open\Marketing\Plan;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\MarketingPlanStatus;
use App\Services\MarketingPlanService;
use App\Services\MarketingRecordService;
use App\Services\MarketingShareService;
use Exception;

class Share extends Base
{
    /**
     * 分享营销计划
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $planUuid = $this->getParam('planUuid');
        $name = $this->getParam('name');
        $phone = $this->getParam('phone');
        $email = $this->getParam('email');
        $shareCode = $this->getParam('shareCode');
        try {
            if (is_null($phone) && is_null($email)) {
                throw new Exception('手机号、邮箱至少需要填写一项');
            }
            if ($this->validateUUID($planUuid) !== true) {
                throw new Exception('营销计划无效');
            }
            $planSvc = new MarketingPlanService();
            $plan = $planSvc->getFirstByUuid($planUuid);
            if (empty($plan)) {
                throw new Exception('营销计划无效');
            }
            if ($plan['is_active'] !== 1) {
                throw new Exception('营销计划未激活');
            }
            if ($plan['status'] === MarketingPlanStatus::PAUSED) {
                throw new Exception('营销计划已暂停');
            }
            if ($plan['status'] === MarketingPlanStatus::COMPLETED) {
                throw new Exception('营销计划已结束');
            }
            $shareSvc = new MarketingShareService();
            if (is_null($shareCode)) {
                $res = $shareSvc->create($plan['id'], $name, $phone, $email);
                if (!$res) {
                    throw new Exception('分享失败');
                }
            }
            if (!is_null($shareCode)) {
                $cond = [
                    'plan_id' => $plan['id'],
                    'share_code' => $shareCode
                ];
                $shareRecord = $shareSvc->getFirstByCond($cond);
                $recordSvc = new MarketingRecordService();
                $res = $recordSvc->create($plan['id'], $shareRecord['id'], $name, $phone, $email);
                if (!$res) {
                    throw new Exception('分享失败');
                }
                $shareSvc->incrById($shareRecord['id'], 'share_count');
            }
            $data = [
                'code' => Code::OK,
                'message' => '营销计划分享成功',
                'data' => [
                    'shareCode' => $shareCode
                ]
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '营销计划分享失败',
            ];
        }
        $this->render($data);
    }
}