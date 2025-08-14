<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/12
 * Time: 15:00
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Channel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingChannelService;
use Exception;

class Delete extends Base
{
    /**
     * 删除营销渠道
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的营销渠道UUID');
            }
            $svc = new MarketingChannelService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除营销渠道成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除营销渠道失败'
            ];
        }
        $this->render($data);
    }
}