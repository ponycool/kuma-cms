<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/19
 * Time: 下午4:31
 */
declare(strict_types=1);

namespace App\Controllers\Api\Link;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LinkService;
use Exception;

class Create extends Base
{
    /**
     * 创建友情链接
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new LinkService();
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
                'message' => '创建友情链接成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建友情链接失败'
            ];
        }
        $this->render($data);
    }
}