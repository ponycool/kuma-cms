<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/1
 * Time: 09:37
 */
declare(strict_types=1);

namespace App\Controllers\Api\Theme;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ThemeService;
use Exception;

class Query extends Base
{
    /**
     * 获取主题列表
     * @return void
     */
    public function index(): void
    {
        $svc = new ThemeService();
        try {
            $data = [
                'code' => Code::OK,
                'message' => '获取主题列表成功',
                'list' => $svc->getList()
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取主题列表失败',
            ];
        }
        $this->render($data);
    }
}