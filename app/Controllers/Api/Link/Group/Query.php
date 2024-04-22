<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/22
 * Time: 下午2:00
 */
declare(strict_types=1);

namespace App\Controllers\Api\Link\Group;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\LinkService;
use Exception;

class Query extends Base
{
    /**
     * 获取友情链接分组列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new LinkService();
        try {
            $list = $svc->getGroup();
            $data = [
                'code' => Code::OK,
                'message' => '获取友情链接分组列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取友情链接分组列表失败',
            ];
        }
        $this->render($data);
    }
}