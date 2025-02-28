<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/11/14
 * Time: 17:47
 */
declare(strict_types=1);

namespace App\Controllers\Api\Scaffold;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ScaffoldService;
use Exception;

class Entity extends Base
{
    /**
     * 创建实体
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
                throw new Exception('非开发环境禁止创建实体');
            }
            $table = $this->getParam('table');
            $overwrite = $this->getParam('overwrite');
            $overwrite = $overwrite === 'true';
            $res = $svc->createEntity($table, $overwrite);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '创建实体成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建实体失败',
            ];
        }
        $this->render($data);
    }
}