<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午1:54
 */
declare(strict_types=1);

namespace App\Controllers\Api\Carousel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\CarouselService;
use Exception;

class Delete extends Base
{
    /**
     * 删除轮播
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
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除轮播成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除轮播失败'
            ];
        }
        $this->render($data);
    }
}