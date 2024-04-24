<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/24
 * Time: 下午2:41
 */
declare(strict_types=1);

namespace App\Controllers\Api\Message;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MessageService;
use Exception;

class Delete extends Base
{
    /**
     * 删除消息
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的消息UUID');
            }
            $svc = new MessageService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除消息成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除消息失败'
            ];
        }
        $this->render($data);
    }
}