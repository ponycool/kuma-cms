<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/6/1
 * Time: 下午2:20
 */
declare(strict_types=1);

namespace App\Controllers\Api\Sitemap;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\SitemapService;
use Exception;

class Create extends Base
{
    /**
     * 创建网站地图
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new SitemapService();
        $rules = $svc->getCreateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $res = $svc->create($params);
            if (is_string($res)) {
                throw new Exception($res);
            }
            if ($res !== true) {
                throw new Exception('创建网站地图失败');
            }

            $data = [
                'code' => Code::OK,
                'message' => '创建网站地图成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建网站地图失败'
            ];
        }
        $this->render($data);
    }
}