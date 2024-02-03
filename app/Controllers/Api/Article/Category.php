<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/2
 * Time: 14:52
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;
use App\Enums\Code;
use CodeIgniter\HTTP\ResponseInterface;
use App\Services\ArticleCategoryService as ArticleCategorySvc;
use Exception;

class Category extends Base
{
    public function index(): ResponseInterface
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $page = $params['page'] ?? 1;
            $pageSize = $params['pageSize'] ?? 10;
            $svc = new ArticleCategorySvc();
            $res = $svc->getPage($page, $pageSize);
            $data = [
                'code' => Code::OK,
                'message' => '获取文章分类列表成功',
            ];
            $data = array_merge($data, $res);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '获取文章分类列表失败'
            ];
        }
        $this->render($data);
    }


    /**
     * 创建文章分类
     * @return ResponseInterface
     */
    public function create(): ResponseInterface
    {
        $this->postFilter();
        $svc = new ArticleCategorySvc();
        $rules = $svc->getValidationRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $svc = new ArticleCategorySvc();
            $res = $svc->createCategory($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '创建文章分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '创建文章分类失败'
            ];
        }
        $this->render($data);
    }

    /**
     * 更新文章分类
     * @return ResponseInterface
     */
    public function update(): ResponseInterface
    {
        $this->postFilter();
        $svc = new ArticleCategorySvc();
        $rules = $svc->getUpdateRules();
        $this->verifyJsonInputByRules($rules);
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的文章分类UUID');
            }

            $svc = new ArticleCategorySvc();
            $res = $svc->updateCategory($params);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '更新文章分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '更新文章分类失败'
            ];
        }
        $this->render($data);
    }

    /**
     * 删除文章分类
     * @return ResponseInterface
     */
    public function delete(): ResponseInterface
    {
        $this->postFilter();
        try {
            $params = $this->getJsonInputParams();
            $uuid = $params['uuid'] ?? null;
            if ($this->validateUUID($uuid) !== true) {
                throw new Exception('无效的文章分类UUID');
            }
            $svc = new ArticleCategorySvc();
            $res = $svc->deleteCategory($uuid);
            if ($res !== true) {
                throw new Exception($res);
            }
            $data = [
                'code' => Code::OK,
                'message' => '删除文章分类成功',
            ];
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => $e->getMessage() ?: '删除文章分类失败'
            ];
        }
        $this->render($data);
    }
}