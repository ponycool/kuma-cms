<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/23
 * Time: 下午3:14
 */
declare(strict_types=1);

namespace App\Controllers\Api\Honor;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\HonorService;
use Exception;

class Delete extends Base
{
    /**
     * 删除荣誉资质
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的荣誉资质UUID');
            }
            $svc = new HonorService();
            $res = $svc->del($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除荣誉资质成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除荣誉资质失败'
            ];
        }
        $this->render($data);
    }
}