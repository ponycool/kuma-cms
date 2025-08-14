<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/22
 * Time: 下午3:06
 */
declare(strict_types=1);

namespace App\Controllers\Api\Page;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\PageService;
use Exception;

class Update extends Base
{
    /**
     * 更新单页
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new PageService();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUuid($uuid) !== true) {
                throw new Exception('无效的单页UUID');
            }
            $res = $svc->update($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新单页成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新单页失败'
            ];
        }
        $this->render($data);
    }
}