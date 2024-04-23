<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/23
 * Time: 下午4:20
 */
declare(strict_types=1);

namespace App\Controllers\Api\Event\Group;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\EventService;
use Exception;

class Query extends Base
{
    /**
     * 获取事件分组列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new EventService();
        try {
            $list = $svc->getGroup();
            $data = [
                'code' => Code::OK,
                'message' => '获取事件分组列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取事件分组列表失败',
            ];
        }
        $this->render($data);
    }
}