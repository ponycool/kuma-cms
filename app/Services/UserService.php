<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/01/04
 * Time: 01:49 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\DeletedStatus;

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

    /**
     * 获取用户列表
     * @param string|null $keyword
     * @param int $page
     * @param int $pageSize
     * @return array
     */
    public function getList(?string $keyword = null, int $page = 1, int $pageSize = 10): array
    {
        $sql = [
            'SELECT user.id,user.uuid,user.account_id,user.nickname,user.created_at,user.updated_at,',
            'account.uuid AS account_uuid,account.account_name,account.email,account.locked,account.locked_at ',
            'FROM swap_user AS user ',
            'LEFT JOIN swap_account AS account on account.id=user.account_id ',
            'WHERE user.deleted_at IS NULL ',
            'AND user.deleted=? ',
            'AND account.deleted_at IS NULL ',
            'AND account.deleted=? ',
            'AND account.id <> 1 '
        ];
        if (!is_null($keyword)) {
            $sql[] = 'AND account.account_name like ? ';
        }
        $sql[] = 'ORDER BY account.created_at DESC';
        $sql = $this->assembleSql($sql);
        $sqlParams = [
            DeletedStatus::UNDELETED->value,
            DeletedStatus::UNDELETED->value,
        ];
        if (!is_null($keyword)) {
            $sqlParams[] = '%' . $keyword . '%';
        }
        return $this->getPageByQuery($sql, $sqlParams, page: $page, pageSize: $pageSize);
    }
}
