<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/22
 * Time: 下午3:26
 */
declare(strict_types=1);

namespace App\Controllers\Api\Page;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\PageService;
use Exception;

class Query extends Base
{
    /**
     * 获取单页列表信息
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new PageService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取单页列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取单页列表失败',
            ];
        }
        $this->render($data);
    }
}