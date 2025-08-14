<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/23
 * Time: 下午4:07
 */
declare(strict_types=1);

namespace App\Controllers\Api\Event;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\EventService;
use Exception;

class Delete extends Base
{
    /**
     * 删除事件
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的事件UUID');
            }
            $svc = new EventService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除事件成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除事件失败'
            ];
        }
        $this->render($data);
    }
}