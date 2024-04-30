<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/30
 * Time: 上午10:55
 */
declare(strict_types=1);

namespace App\Controllers\Api\Leads\Assigner;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LeadsService;
use Exception;

class Query extends Base
{
    /**
     * 获取负责人列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new LeadsService();
        try {
            $list = $svc->getAssignerList();
            $data = [
                'code' => Code::OK,
                'message' => '获取负责人列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取负责人列表失败',
            ];
        }
        $this->render($data);
    }
}