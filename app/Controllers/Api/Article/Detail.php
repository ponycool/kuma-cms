<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/4
 * Time: 14:34
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleService;
use Exception;

class Detail extends Base
{
    /**
     * 获取文章
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数文章UUID[uuid]为必填项',
                    'min_length' => '参数文章UUID[uuid]无效',
                    'max_length' => '参数文章UUID[uuid]无效',
                ]
            ],
        ];
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的文章UUID');
            }
            $svc = new ArticleService();
            $res = $svc->getFirstByUuid($uuid);
            $data = [
                'code' => Code::OK,
                'message' => '获取文章成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取文章失败',
            ];
        }
        $this->render($data);
    }
}