<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/23
 * Time: 下午3:20
 */
declare(strict_types=1);

namespace App\Controllers\Api\Honor;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\HonorService;
use Exception;

class Query extends Base
{
    /**
     * 获取荣誉资质列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new HonorService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取荣誉资质列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取荣誉资质列表失败',
            ];
        }
        $this->render($data);
    }
}