<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/25
 * Time: 上午9:43
 */
declare(strict_types=1);

namespace App\Controllers\Api\Leads;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LeadsService;
use Exception;

class Detail extends Base
{
    /**
     * 获取线索详情
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数线索UUID[uuid]为必填项',
                    'min_length' => '参数线索UUID[uuid]无效',
                    'max_length' => '参数线索UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的线索UUID');
            }
            $svc = new LeadsService();
            $res = $svc->getByUUID($uuid);
            if (is_null($res)) {
                throw new Exception('获取线索失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取线索成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取线索失败',
            ];
        }
        $this->render($data);
    }
}