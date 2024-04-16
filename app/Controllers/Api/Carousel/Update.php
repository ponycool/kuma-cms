<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午1:46
 */
declare(strict_types=1);

namespace App\Controllers\Api\Carousel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\CarouselService;
use Exception;

class Update extends Base
{
    /**
     * 更新轮播
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new CarouselService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的轮播UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新轮播成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新轮播失败'
            ];
        }
        $this->render($data);
    }
}