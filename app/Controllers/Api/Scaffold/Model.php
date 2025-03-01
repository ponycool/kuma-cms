<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/11/15
 * Time: 13:46
 */
declare(strict_types=1);

namespace App\Controllers\Api\Scaffold;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ScaffoldService;
use Exception;

/**
 * 创建模型
 */
class Model extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $svc = new ScaffoldService();
        $rules = $svc->getBaseRules();
        $this->verifyJsonInputByRules($rules);
        try {
            if (ENVIRONMENT !== 'development') {
                throw new Exception('非开发环境禁止创建模型');
            }
            $table = $this->getParam('table');
            $overwrite = $this->getParam('overwrite');
            $overwrite = $overwrite === 'true';
            $res = $svc->createModel($table, $overwrite);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '创建模型成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建模型失败',
            ];
        }
        $this->render($data);
    }
}