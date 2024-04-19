<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/19
 * Time: 下午3:48
 */
declare(strict_types=1);
namespace App\Controllers\Api\Team;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\TeamService;
use Exception;

class Query extends Base
{
    /**
     * 获取团队成员列表信息
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $this->validatePageParamsFromJsonInput();
        $svc = new TeamService();
        try {
            $params = $this->getJsonInputParams();
            $list = $svc->getList($params);
            $data = [
                'code' => Code::OK,
                'message' => '获取团队成员列表成功',
            ];
            $data = array_merge($data, $list);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取团队成员列表失败',
            ];
        }
        $this->render($data);
    }
}