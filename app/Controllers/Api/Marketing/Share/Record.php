<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/23
 * Time: 11:19
 */
declare(strict_types=1);

namespace App\Controllers\Api\Marketing\Share;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MarketingShareService;
use Exception;

class Record extends Base
{
    /**
     * 获取分享记录
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new MarketingShareService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取营销计划分享记录成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取营销计划分享记录失败',
            ];
        }
        $this->render($data);
    }
}