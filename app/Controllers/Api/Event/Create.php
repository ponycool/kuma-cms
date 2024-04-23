<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/23
 * Time: 下午3:47
 */
declare(strict_types=1);

namespace App\Controllers\Api\Event;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\EventService;
use Exception;

class Create extends Base
{
    /**
     * 创建事件
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new EventService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            // 创建业务逻辑
            $res = $svc->create($params);
            if ($res !== true) {
                throw new Exception($res);
            }

            $data = [
                'code' => Code::OK,
                'message' => '创建事件成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建事件失败'
            ];
        }
        $this->render($data);
    }
}