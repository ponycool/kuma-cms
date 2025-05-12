<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/12
 * Time: 14:26
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Channel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingChannelService;
use Exception;

class Create extends Base
{
    /**
     * 创建营销渠道
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new MarketingChannelService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $res = $svc->create($params);
            if ($res !== true) {
                throw new Exception($res);
            }

            $data = [
                'code' => Code::OK,
                'message' => '创建营销渠道成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建营销渠道失败'
            ];
        }
        $this->render($data);
    }
}