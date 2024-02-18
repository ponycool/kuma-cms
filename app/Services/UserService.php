<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:49 上午
 */
declare(strict_types=1);

namespace App\Services;

class UserService extends BaseService
{
    /**
     * 根据账户ID获取用户
     * @param int $id
     * @return array
     */
    public function getByAccountID(int $id): array
    {
        $cond = [
            'account_id' => $id
        ];
        return $this->getFirstByCond($cond);
    }
}
