<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/23
 * Time: 下午4:13
 */
declare(strict_types=1);

namespace App\Controllers\Api\Event;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\EventService;
use Exception;

class Detail extends Base
{
    /**
     * 获取事件详情
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数事件UUID[uuid]为必填项',
                    'min_length' => '参数事件UUID[uuid]无效',
                    'max_length' => '参数事件UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的事件UUID');
            }
            $svc = new EventService();
            $res = $svc->getByUUID($uuid);
            if (is_null($res)) {
                throw new Exception('获取事件失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取事件成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取事件失败',
            ];
        }
        $this->render($data);
    }
}