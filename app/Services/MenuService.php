<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2025/08/08
 * Time: 11:53 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Menu;
use App\Enums\LinkTarget;
use App\Enums\LinkType;
use App\Enums\MenuType;
use App\Enums\ModuleLink;
use App\Models\MenuModel;
use Exception;

class MenuService extends BaseService
{
    public function getCreateRules(): array
    {
        $rules = [
            'name' => [
                'rules' => 'required|max_length[20]',
                'errors' => [
                    'required' => '参数菜单名称[name]为必填项',
                    'max_length' => '参数菜单名称[name]最大字符长度为20个字符'
                ]
            ],
            'type' => [
                'rules' => 'required|max_length[20]',
                'errors' => [
                    'required' => '参数菜单类型[type]为必填项',
                    'max_length' => '参数菜单类型[type]最大字符长度为20个字符'
                ]
            ],
        ];
        return array_merge(
            self::getBaseRules(),
            $rules
        );
    }

    /**
     * 获取更新规则
     * @return array
     */
    public function getUpdateRules(): array
    {
        $rules = [
            'uuid' => [
                'rules' => 'required|uuid',
                'errors' => [
                    'required' => '参数菜单uuid[uuid]为必填项',
                    'uuid' => '参数菜单uuid[uuid]必须为UUID格式'
                ]
            ]
        ];
        return array_merge(
            self::getBaseRules(),
            $rules
        );
    }

    public function getDeleteRules(): array
    {
        $rules = [
            'uuid' => [
                'rules' => 'required|uuid',
                'errors' => [
                    'required' => '参数菜单uuid[uuid]为必填项',
                    'uuid' => '参数菜单uuid[uuid]必须为UUID格式'
                ]
            ]
        ];
        return array_merge(
            self::getBaseRules(),
            $rules
        );
    }


    /**
     * 获取基本规则
     * @return array
     */
    protected function getBaseRules(): array
    {
        $rules = [
            'pid' => [
                'rules' => 'if_exist|is_natural',
                'errors' => [
                    'is_natural' => '参数父级菜单[pid]必须为自然数'
                ]
            ],
            'name' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数菜单名称[name]最大字符长度为20个字符'
                ]
            ],
            'code' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数菜单编码[code]最大字符长度为20个字符'
                ]
            ],
            'icon' => [
                'rules' => 'if_exist|max_length[255]',
                'errors' => [
                    'max_length' => '参数菜单图标[icon]最大字符长度为255个字符'
                ]
            ],
            'type' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数菜单类型[type]最大字符长度为20个字符'
                ]
            ],
            'level' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数菜单层级[level]必须为非零自然数'
                ]
            ],
            'target' => [
                'rules' => 'if_exist|max_length[20]',
                'errors' => [
                    'max_length' => '参数菜单打开方式[target]最大字符长度为20个字符'
                ]
            ],
            'linkUrl' => [
                'rules' => 'if_exist|max_length[255]',
                'errors' => [
                    'max_length' => '参数菜单链接[linkUrl]最大字符长度为255个字符'
                ]
            ],
            'linkType' => [
                'rules' => 'if_exist|is_natural',
                'errors' => [
                    'is_natural' => '参数菜单链接类型[linkType]必须为自然数'
                ]
            ],
            'singlePageId' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数单页面ID[singlePageId]必须为非零自然数'
                ]
            ],
            'visible' => [
                'rules' => 'if_exist|is_bool',
                'errors' => [
                    'is_bool' => '参数菜单可见状态[visible]必须为布尔值'
                ]
            ],
            'enabled' => [
                'rules' => 'if_exist|is_bool',
                'errors' => [
                    'is_bool' => '参数菜单启用状态[enabled]必须为布尔值'
                ]
            ],
        ];
        return array_merge(
            parent::getBaseRules(),
            $rules
        );
    }

    public function getMenu(): array
    {
        $db = $this->getDb();
        $model = new MenuModel($db);
        $res = $model->asArray()
            ->select($this->getSelectFields())
            ->orderBy('level', 'ASC')
            ->orderBy('sort_index', 'ASC')
            ->orderBy('created_at', 'ASC')
            ->limit(100)
            ->findAll();
        return self::mergeData($res);
    }

    public function getVisibleMenu(): array
    {
        $db = $this->getDb();
        $model = new MenuModel($db);
        $res = $model->asArray()
            ->select($this->getSelectFields())
            ->where('visible', true)
            ->where('enabled', true)
            ->orderBy('level', 'ASC')
            ->orderBy('sort_index', 'ASC')
            ->orderBy('created_at', 'ASC')
            ->limit(100)
            ->findAll();
        return self::mergeData($res);
    }

    /**
     * 创建菜单
     * @param array $data
     * @return bool
     * @throws Exception
     */
    public function create(array $data): bool
    {
        $data = self::prepare($data);
        $code = $data['code'] ?? null;
        if (!is_null($code)) {
            $cond = [
                'code' => $code
            ];
            $record = $this->getFirstByCond($cond);
            if ($record) {
                throw new Exception('菜单编码已存在');
            }
        }
        $menu = new Menu();
        $menu->fillData($data)
            ->filterInvalidProperties();
        $res = $this->insert($menu);
        if ($res !== true) {
            throw new Exception('创建菜单失败');
        }
        return true;
    }

    /**
     * @param array $data
     * @return bool
     * @throws Exception
     */
    public function update(array $data): bool
    {
        $data = self::prepare($data);
        $uuid = $data['uuid'];
        $record = $this->getFirstByUuid($uuid);
        if (!$record) {
            throw new Exception('菜单不存在');
        }
        $id = (int)$record['id'];
        $code = $data['code'] ?? null;
        if (!is_null($code)) {
            $cond = [
                'uuid !=' => $uuid,
                'code' => $code
            ];
            $record = $this->getFirstByCond($cond);
            if ($record) {
                throw new Exception('菜单编码已存在');
            }
        }
        $menu = new Menu();
        $menu->fillData($data)
            ->filterInvalidProperties();
        $res = $this->updateById($menu, $id);
        if ($res !== true) {
            throw new Exception('更新站点菜单失败');
        }
        return true;
    }

    /**
     * 更新菜单状态
     * @throws Exception
     */
    public function updateStatus(array $data): bool
    {
        $data = self::prepare($data);
        $uuid = $data['uuid'];
        $field = $data['field'];
        $status = $data['status'];
        if (!in_array($field, ['visible', 'enabled'], true)) {
            throw new Exception('更新字段错误');
        }
        $record = $this->getFirstByUuid($uuid);
        if (!$record) {
            throw new Exception('菜单不存在');
        }
        $id = (int)$record['id'];
        $data = [
            $field => $status
        ];
        $res = $this->updateByCond($data, ['id' => $id]);
        if ($res !== true) {
            throw new Exception('更新菜单失败');
        }
        return true;
    }

    /**
     * 删除
     * @param array $data
     * @return bool
     * @throws Exception
     */
    public function del(array $data): bool
    {
        $data = self::prepare($data);
        $uuid = $data['uuid'];
        $record = $this->getFirstByUuid($uuid);
        if (!$record) {
            throw new Exception('菜单不存在');
        }
        $id = (int)$record['id'];
        $cond = [
            'id' => $id,
            'pid' => $id
        ];
        $list = $this->getOrWhere($cond);
        $ids = array_column($list, 'id');
        $res = $this->batchDelByIds($ids);
        if ($res !== true) {
            throw new Exception('删除菜单失败');
        }
        return true;
    }

    /**
     * 预处理数据
     * @throws Exception
     */
    private function prepare(array $data): array
    {
        $data = parent::prepareData($data);
        $data['pid'] = intval($data['pid'] ?? 0);
        $icon = $data['icon'] ?? null;
        if (!is_null($icon)) {
            $mediaSvc = new MediaService();
            $media = $mediaSvc->getByMediaName($icon);
            if (!$media) {
                throw new Exception('图标不存在');
            }
            $data['icon'] = (int)$media['id'];
        }
        $list = array_map(fn($case) => $case->value, MenuType::cases());
        $type = $data['type'] ?? null;
        if (!is_null($type) && !in_array($type, $list, true)) {
            throw new Exception('菜单类型无效');
        }
        $data['level'] = intval($data['level'] ?? 1);
        $list = array_map(fn($case) => $case->value, LinkTarget::cases());
        $target = $data['target'] ?? null;
        if (!is_null($target) && !in_array($target, $list, true)) {
            throw new Exception('菜单打开方式无效');
        }
        if ($type === MenuType::LINK->value || $type === MenuType::MODULE->value) {
            $linkUrl = $data['link_url'] ?? null;
            $linkType = $data['link_type'] ?? null;
            if (is_null($linkUrl)) {
                throw new Exception('菜单链接地址不能为空');
            }
            if (mb_strlen($linkUrl) > 255) {
                throw new Exception('菜单链接地址过长');
            }
            if ($type === MenuType::LINK->value) {
                $list = array_map(fn($case) => $case->value, LinkType::cases());
                if (!in_array($linkType, $list, true)) {
                    throw new Exception('菜单链接类型无效');
                }
            }
            if ($type === MenuType::MODULE->value) {
                $list = array_map(fn($case) => $case->value, ModuleLink::cases());
                if (!in_array($linkUrl, $list, true)) {
                    throw new Exception('菜单模块链接无效');
                }
            }
        }
        if ($type === MenuType::SINGLE_PAGE->value) {
            $singlePageId = $data['single_page_id'] ?? null;
            if (is_null($singlePageId)) {
                throw new Exception('菜单单页ID不能为空');
            }
            if (!is_numeric($singlePageId)) {
                throw new Exception('菜单单页ID无效,必须为非零自然数');
            }
            $data['single_page_id'] = intval($singlePageId);
        }
        $data['sort_index'] = intval($data['sort_index'] ?? 1);
        $data['visible'] = ($data['visible'] ?? true) === true;
        $data['enabled'] = ($data['enabled'] ?? false) === true;
        return $data;
    }

    private function mergeData(array $data): array
    {
        $ids = array_column($data, 'icon');
        $ids = array_filter($ids);
        if (!$ids) {
            return $data;
        }
        $mediaSvc = new MediaService();
        $list = $mediaSvc->getMedia($ids);
        $list = array_column($list, null, 'id');
        foreach ($data as &$item) {
            $icon = $item['icon'] ?? null;
            if ($icon && isset($list[$icon])) {
                $item['icon'] = $list[$icon]['file_url'];
            }
        }
        return $data;
    }
}
