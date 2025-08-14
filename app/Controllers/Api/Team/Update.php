<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/19
 * Time: 下午3:25
 */
declare(strict_types=1);

namespace App\Controllers\Api\Team;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\TeamService;
use Exception;

class Update extends Base
{
    /**
     * 更新团队成员
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new TeamService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的团队成员UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新团队成员成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新团队成员失败'
            ];
        }
        $this->render($data);
    }
}