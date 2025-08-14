<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/19
 * Time: 下午3:29
 */
declare(strict_types=1);

namespace App\Controllers\Api\Team;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\TeamService;
use Exception;

class Delete extends Base
{
    /**
     * 删除团队成员
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的团队成员UUID');
            }
            $svc = new TeamService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除团队成员成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除团队成员失败'
            ];
        }
        $this->render($data);
    }
}