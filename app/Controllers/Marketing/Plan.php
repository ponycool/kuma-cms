<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/24
 * Time: 14:34
 */
declare(strict_types=1);

namespace App\Controllers\Marketing;


use App\Controllers\Web;
use App\Services\MarketingPlanService;
use App\Services\MarketingShareService;

class Plan extends Web
{
    /**
     * 营销计划
     * @return void
     */
    public function index(): void
    {
        $uuid = $this->getParam('uuid');
        if ($this->validateUUID($uuid) === true) {
            self::detail($uuid);
        } else {
            self::list();
        }
    }

    /**
     * 营销计划列表
     * @return void
     */
    private function list(): void
    {
        $data = [];
        $this->setTemplate('marketing-plan-list')
            ->setPage('marketing-plan-list')
            ->render($data);
    }

    /**
     * 营销计划详情
     * @param string $uuid
     * @return void
     */
    private function detail(string $uuid): void
    {
        $settings = self::getSettings();
        $data = [];
        $svc = new MarketingPlanService();
        $plan = $svc->getPlanByUuid($uuid);
        if (!empty($plan) && $plan['is_active'] === 1) {
            $data['plan'] = $plan;
            $title = $plan['name'];
            $title .= ' - ' . $settings['site_name'] ?? '';
            // 分享记录
            $shareCode = $this->getParam('share-code') ?? null;
            if (!is_null($shareCode)) {
                $shareSvc = new MarketingShareService();
                $cond = [
                    'plan_id' => $plan['id'],
                    'share_code' => $shareCode
                ];
                $shareRecord = $shareSvc->getFirstByCond($cond);
                if (!empty($shareRecord)) {
                    $shareSvc->incrById($shareRecord['id'], 'view_count');
                }
            }

            // 更新浏览计数
            $svc->incrById($plan['id'], 'view_count');
            $this->setTitle($title);
        }
        $this->setTemplate('marketing-plan')
            ->setPage('marketing-plan')
            ->render($data);
    }
}