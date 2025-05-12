<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/12
 * Time: 15:08
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Channel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingChannelService;
use Exception;

class Detail extends Base
{
    /**
     * 获取营销渠道详情
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数营销渠道UUID[uuid]为必填项',
                    'min_length' => '参数营销渠道UUID[uuid]无效',
                    'max_length' => '参数营销渠道UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的营销渠道UUID');
            }
            $svc = new MarketingChannelService();
            $res = $svc->getChannelByUuid($uuid);
            if (is_null($res)) {
                throw new Exception('获取营销渠道失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取营销渠道成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取营销渠道失败',
            ];
        }
        $this->render($data);
    }
}