<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/23
 * Time: 下午3:10
 */
declare(strict_types=1);

namespace App\Controllers\Api\Honor;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\HonorService;
use Exception;

class Update extends Base
{
    /**
     * 更新荣誉资质
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new HonorService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的荣誉资质UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新荣誉资质成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新荣誉资质失败'
            ];
        }
        $this->render($data);
    }
}