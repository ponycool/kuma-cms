<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/29
 * Time: 08:15
 */
declare(strict_types=1);

namespace App\Controllers\Api\Open\Marketing\Share;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingShareService;
use Exception;

class Query extends Base
{
    /**
     * 获取分享记录
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new MarketingShareService();
        try {
            $params = $this->getJsonInputParams();
            $planId = (int)($params['planId'] ?? 0);
            $name = $params['name'] ?? null;
            $phone = $params['phone'] ?? null;
            $email = $params['email'] ?? null;
            if ($planId <= 0) {
                throw new Exception('营销计划ID无效');
            }
            if (is_null($phone) && is_null($email)) {
                throw new Exception('手机号、邮箱至少需要填写一项');
            }
            $shareRecord = $svc->getShareRecord($planId, $name, $phone, $email);
            $data = [
                'code' => Code::OK,
                'message' => '获取营销计划分享记录成功',
            ];
            $data = array_merge($data, $shareRecord);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取营销计划分享记录失败',
            ];
        }
        $this->render($data);
    }
}