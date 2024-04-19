<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/19
 * Time: 下午4:53
 */
declare(strict_types=1);

namespace App\Controllers\Api\Link;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LinkService;
use Exception;

class Update extends Base
{
    /**
     * 更新友情链接
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new LinkService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的友情链接UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新友情链接成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新友情链接失败'
            ];
        }
        $this->render($data);
    }
}