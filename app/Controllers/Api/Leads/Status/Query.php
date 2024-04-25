<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/25
 * Time: 上午10:16
 */
declare(strict_types=1);

namespace App\Controllers\Api\Leads\Status;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LeadsService;
use Exception;

class Query extends Base
{
    /**
     * 获取线索状态列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new LeadsService();
        try {
            $list = $svc->getStatus();
            $data = [
                'code' => Code::OK,
                'message' => '获取线索分组列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取线索分组列表失败',
            ];
        }
        $this->render($data);
    }
}