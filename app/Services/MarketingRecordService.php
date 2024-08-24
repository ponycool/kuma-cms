<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/08/21
 * Time: 15:58 下午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\MarketingRecord;

class MarketingRecordService extends BaseService
{
    /**
     * 创建分享记录
     * @param int $planId
     * @param int $shareId
     * @param string|null $name
     * @param string|null $phone
     * @param string|null $email
     * @return bool
     */
    public function create(int $planId, int $shareId, ?string $name, ?string $phone, ?string $email): bool
    {
        $model = $this->getModel();
        $builder = $model->asArray();
        $where = sprintf("plan_id='%s' AND share_id='%s' AND (phone_number='%s' OR email='%s')",
            $planId,
            $shareId,
            $phone,
            $email
        );
        $raw = $builder->where($where)
            ->first();
        if ($raw) {
            return false;
        }
        $record = new MarketingRecord();
        $record->setPlanId($planId)
            ->setShareId($shareId);
        if (!is_null($name)) {
            $record->setName($name);
        }
        if (!is_null($phone)) {
            $record->setPhoneNumber($phone);
        }
        if (!is_null($email)) {
            $record->setEmail($email);
        }
        return $this->insert($record);
    }
}
