<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/15
 * Time: 10:48
 */
declare(strict_types=1);

namespace App\Controllers\Api\Log;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LogService;
use Exception;

class System extends Base
{
    /**
     * 获取系统日志
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new LogService();
        $rules = $svc->getQueryRules();
        $this->verifyJsonInputByRules($rules);
        $params = $this->getJsonInputParams();
        try {
            $data = [
                'code' => Code::OK,
                'message' => '获取系统日志成功'
            ];
            $list = $svc->getList($params);
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取系统日志失败',
            ];
        }
        $this->render($data);
    }
}