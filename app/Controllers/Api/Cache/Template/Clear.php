<?php
declare(strict_types=1);
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/29
 * Time: 14:48
 */

namespace App\Controllers\Api\Cache\Template;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\CacheService;
use Exception;

class Clear extends Base
{
    /**
     * 清空模版缓存
     * @return void
     */
    public function index(): void
    {
        try {
            $svc = new CacheService();
            $res = $svc->clearTemplateCache();
            if ($res !== true) {
                throw new Exception('清空模版缓存成功');
            }

            $data = [
                'code' => Code::OK,
                'message' => '清空模版缓存成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '清空模版缓存失败'
            ];
        }
        $this->render($data);
    }

}