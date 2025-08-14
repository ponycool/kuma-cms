<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午1:40
 */
declare(strict_types=1);

namespace App\Controllers\Api\Carousel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\CarouselService;
use Exception;

class Detail extends Base
{
    /**
     * 轮播详情
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数轮播UUID[uuid]为必填项',
                    'min_length' => '参数轮播UUID[uuid]无效',
                    'max_length' => '参数轮播UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的轮播UUID');
            }
            $svc = new CarouselService();
            $res = $svc->getCarouselByUUID($uuid);
            if (is_null($res)) {
                throw new Exception('获取轮播失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '获取轮播成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取轮播失败',
            ];
        }
        $this->render($data);
    }
}