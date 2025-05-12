<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/12
 * Time: 16:19
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Channel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingChannelService;
use Exception;

class Update extends Base
{
    /**
     * 更新营销渠道
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new MarketingChannelService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的营销渠道UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新营销渠道成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新营销渠道失败'
            ];
        }
        $this->render($data);
    }
}