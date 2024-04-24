<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/24
 * Time: 上午9:12
 */
declare(strict_types=1);

namespace App\Controllers\Api\Open;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MessageService;
use Exception;

class Message extends Base
{
    /**
     * 保存消息
     * @return void
     */
    public function index(): void
    {
        $svc = new MessageService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $res = $svc->create($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '保存消息成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '保存消息失败',
            ];
        }
        $this->render($data);
    }
}