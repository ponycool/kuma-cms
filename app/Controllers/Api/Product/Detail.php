<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/18
 * Time: 上午9:31
 */
declare(strict_types=1);

namespace App\Controllers\Api\Product;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ProductService;
use Exception;

class Detail extends Base
{
    /**
     * 获取产品详情
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数产品UUID[uuid]为必填项',
                    'min_length' => '参数产品UUID[uuid]无效',
                    'max_length' => '参数产品UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的产品UUID');
            }
            $svc = new ProductService();
            $res = $svc->getByUUID($uuid);
            if (is_null($res)) {
                throw new Exception('获取产品失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取产品成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取产品失败',
            ];
        }
        $this->render($data);
    }
}