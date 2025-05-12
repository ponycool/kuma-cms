<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/12
 * Time: 15:13
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Channel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingChannelService;
use Exception;

class Query extends Base
{
    /**
     * 获取营销渠道列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new MarketingChannelService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取营销渠道列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取营销渠道列表失败',
            ];
        }
        $this->render($data);
    }
}