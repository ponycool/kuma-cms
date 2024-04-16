<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 上午11:21
 */
declare(strict_types=1);

namespace App\Controllers\Api\Carousel;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\CarouselService;
use Exception;

class Query extends Base
{
    /**
     * 获取轮播列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new CarouselService();
        try {
            $list = $svc->getList();
            $data = [
                'code' => Code::OK,
                'message' => '获取轮播列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取轮播列表失败',
            ];
        }
        $this->render($data);
    }
}