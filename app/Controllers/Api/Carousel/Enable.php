<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午2:00
 */
declare(strict_types=1);

namespace App\Controllers\Api\Carousel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\CarouselService;
use Exception;

class Enable extends Base
{
    /**
     * 启用轮播
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的轮播UUID');
            }
            $svc = new CarouselService();
            $data = [
                'status' => 1
            ];
            $cond = [
                'uuid' => $uuid
            ];
            $res = $svc->updateByCond($data, $cond);
            if ($res === false) {
                throw new Exception('启用轮播失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '启用轮播成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '启用轮播失败'
            ];
        }
        $this->render($data);
    }
}