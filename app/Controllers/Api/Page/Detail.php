<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/22
 * Time: 下午3:22
 */
declare(strict_types=1);

namespace App\Controllers\Api\Page;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\PageService;
use Exception;

class Detail extends Base
{
    /**
     * 获取单页详情
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数单页UUID[uuid]为必填项',
                    'min_length' => '参数单页UUID[uuid]无效',
                    'max_length' => '参数单页UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的单页UUID');
            }
            $svc = new PageService();
            $res = $svc->getByUUID($uuid);
            if (is_null($res)) {
                throw new Exception('获取单页失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取单页成功',
            ];
            $data = array_merge($data, ['page' => $res]);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取单页失败',
            ];
        }
        $this->render($data);
    }
}