<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/22
 * Time: 06:43 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Link;
use App\Entities\Page;
use App\Enums\DeletedStatus;

class PageService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'title' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数单页标题[title]无效，字符长度不能超过200个字符',
                ]
            ],
            'code' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数编码[code]无效，字符长度不能超过50个字符',
                ]
            ],
            'seoTitle' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数单页SEO标题[seoTitle]无效，字符长度不能超过200个字符',
                ]
            ],
            'seoDescription' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数单页SEO描述[seoDescription]无效，字符长度不能超过200个字符',
                ]
            ],
            'seoKeywords' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数SEO关键词[seoKeywords]无效，字符长度不能超过200个字符',
                ]
            ],
            'content' => [
                'rules' => 'if_exist|max_length[100000]',
                'errors' => [
                    'max_length' => '参数单页内容[content]无效，字符长度不能超过10万个字符',
                ]
            ],
            'status' => [
                'rules' => 'if_exist|in_list[true,false]',
                'errors' => [
                    'in_list' => '参数状态[status]无效，必须为"true"或"false"',
                ]
            ],
        ];
    }

    /**
     * 获取创建验证规则
     * @return array
     */
    public function getCreateRules(): array
    {
        $rules = [
            'title' => [
                'rules' => 'required|max_length[200]',
                'errors' => [
                    'required' => '参数单页标题[title]无效，单页标题为必填项',
                    'max_length' => '参数单页标题[title]无效，字符长度不能超过200个字符',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取更新验证规则
     * @return array
     */
    public function getUpdateRules(): array
    {
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数单页UUID[uuid]为必填项',
                    'min_length' => '参数单页UUID[uuid]无效',
                    'max_length' => '参数单页UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取分页列表
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $page = (int)($params['page'] ?? 1);
        $pageSize = (int)($params['pageSize'] ?? 10);
        $keyword = $params['keyword'] ?? null;
        $sql = [
            'SELECT p.id,p.uuid,p.title,p.code,p.seo_title,p.seo_description,p.seo_keywords,p.content,p.status,',
            'p.created_at,p.updated_at ',
            'FROM swap_page AS p ',
            'WHERE p.deleted_at IS NULL ',
            'AND p.deleted = ? '
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value
        ];
        if (!is_null($keyword)) {
            $sql = array_merge($sql, [
                'AND ( ',
                'p.title LIKE ? ',
                'OR p.code LIKE ? ',
                ') ',
            ]);
            $sqlParams = array_merge($sqlParams, [
                '%' . $keyword . '%',
                '%' . $keyword . '%'
            ]);
        }
        $sql[] = 'ORDER BY p.created_at DESC';
        $sql = $this->assembleSql($sql);
        return $this->getPageByQuery($sql, $sqlParams, $page, $pageSize);
    }

    /**
     * 根据UUID获取单页详情
     * @param string $uuid
     * @return array|null
     */
    public function getByUUID(string $uuid): ?array
    {
        if ($this->validateUUID($uuid) !== true) {
            return null;
        }
        return $this->getFirstByUuid($uuid);
    }

    /**
     * 创建单页
     * @param array $params
     * @return bool|string
     */
    public function create(array $params): bool|string
    {
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $code = $data['code'] ?? null;
        if (!is_null($code)) {
            if (self::codeExists($code)) {
                return '单页编码已存在';
            }
        }

        $page = new Page();
        $page->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($page);
        if ($res !== true) {
            return '创建单页失败';
        }
        return true;
    }

    /**
     * 更新单页
     * @param array $params
     * @return bool|string
     */
    public function update(array $params): bool|string
    {
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $raw = $this->getFirstByUuid($data['uuid']);
        if (empty($raw)) {
            return '单页UUID不存在';
        }

        $code = $data['code'] ?? null;
        if (!is_null($code)) {
            if (self::codeExists($code)) {
                return '单页编码已存在';
            }
        }

        $page = new Page();
        $page->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($page);
        if ($res !== true) {
            return '更新单页失败';
        }
        return true;
    }

    /**
     * 更新单页状态
     * @param string $uuid
     * @param int $status
     * @return true|string
     */
    public function updateStatus(string $uuid, int $status): true|string
    {
        $page = new Page();
        $page->setStatus($status);
        $res = $this->updateByUuid($page, $uuid);
        if ($res !== true) {
            return '更新单页状态失败';
        }
        return true;
    }

    /**
     * 删除单页
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '单页UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除单页失败';
        }
        return true;
    }

    /**
     * 准备数据以供保存和更新，返回处理后的数据或错误消息
     * @param array $data
     * @return string|array 处理后的数据或错误消息
     */
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);

        // 处理发布状态和发布时间
        if (!is_null($data['status'] ?? null)) {
            $data['status'] = (int)($data['status'] === 'true');
        }

        return $data;
    }

    /**
     * 单页编码是否存在
     * @param string $code
     * @return bool
     */
    private function codeExists(string $code): bool
    {
        $cond = [
            'code' => $code
        ];
        $page = $this->getFirstByCond($cond);
        return !empty($page);
    }
}
