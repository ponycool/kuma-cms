<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/21
 * Time: 15:58 下午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\MarketingShare;

class MarketingShareService extends BaseService
{
    /**
     * 获取分享记录列表
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $page = (int)($params['page'] ?? 1);
        $pageSize = (int)($params['pageSize'] ?? 10);
        $planId = (int)($params['planId'] ?? 0);
        $cond = null;
        if ($planId > 0) {
            $cond = [
                'plan_id' => $planId
            ];
        }
        return $this->getPage($page, $pageSize, $cond);
    }

    /**
     * 创建分享记录
     * @param int $planId
     * @param string|null $name
     * @param string|null $phone
     * @param string|null $email
     * @return bool
     */
    public function create(int $planId, ?string $name = null, ?string $phone = null, ?string $email = null): bool
    {
        $model = $this->getModel();
        $builder = $model->asArray();
        $raw = $builder->where('plan_id', $planId)
            ->orWhere('phone_number', $phone)
            ->orWhere('email', $email)
            ->first();
        if ($raw) {
            return false;
        }
        $share = new MarketingShare();
        $code = $this->generateRandomStr(32);
        $share->setPlanId($planId)
            ->setShareCode($code)
            ->setViewCount(0)
            ->setShareCount(0);
        if (!is_null($name)) {
            $share->setName($name);
        }
        if (!is_null($phone)) {
            $share->setPhoneNumber($phone);
        }
        if (!is_null($email)) {
            $share->setEmail($email);
        }
        return $this->insert($share);
    }
}
