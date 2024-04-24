<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/24
 * Time: 下午2:44
 */
declare(strict_types=1);

namespace App\Controllers\Api\Message;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MessageService;
use Exception;

class Query extends Base
{
    /**
     * 获取消息列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new MessageService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取消息列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取消息列表失败',
            ];
        }
        $this->render($data);
    }
}