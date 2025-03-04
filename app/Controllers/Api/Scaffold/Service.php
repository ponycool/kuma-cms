<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/11/15
 * Time: 14:13
 */
declare(strict_types=1);

namespace App\Controllers\Api\Scaffold;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ScaffoldService;
use Exception;

class Service extends Base
{
    /**
     * 创建服务
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $svc = new ScaffoldService();
        $rules = $svc->getBaseRules();
        $this->verifyJsonInputByRules($rules);
        try {
            if (ENVIRONMENT !== 'development') {
                throw new Exception('非开发环境禁止创建服务');
            }
            $table = $this->getParam('table');
            $overwrite = $this->getParam('overwrite');
            $overwrite = $overwrite === 'true';
            $res = $svc->createService($table, $overwrite);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '创建服务成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建服务失败',
            ];
        }
        $this->render($data);
    }
}