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
use App\Enums\MenuType;
use App\Enums\ModuleLink;
use App\Models\MenuModel;
use Exception;

class MenuService extends BaseService
{
    public function getBaseRules(): array
    {
        return [
            'menu' => [
                'rules' => 'if_exist|valid_json|max_length[10000]',
                'errors' => [
                    'valid_json' => '参数站点菜单[menu]必须为JSON格式',
                    'max_length' => '参数站点菜单[menu]最大字符长度为10000个字符',
                ]
            ]
        ];
    }

    public function getUpdateRules(): array
    {
        $rules = [
            'menu' => [
                'rules' => 'required|valid_json|max_length[10000]',
                'errors' => [
                    'required' => '参数站点菜单[menu]为必填项',
                    'valid_json' => '参数站点菜单[menu]必须为JSON格式',
                    'max_length' => '参数站点菜单[menu]最大字符长度为10000个字符',
                ]
            ]
        ];
        return array_merge(
            self::getBaseRules(),
            $rules
        );
    }

    public function getMenu(): array
    {
        $db = $this->getDb();
        $model = new MenuModel($db);
        return $model->asArray()
            ->select($this->getSelectFields())
            ->orderBy('level', 'ASC')
            ->orderBy('sort_index', 'ASC')
            ->orderBy('created_at', 'ASC')
            ->findAll();
    }

    /**
     * @param array $data
     * @return bool
     * @throws Exception
     */
    public function update(array $data): bool
    {
        $data = self::prepare($data);
        $menu = $data['menu'];
        // 将数据填充到实体列表
        $list = [];
        $updateList = [];
        foreach ($menu as $item) {
            $data = [];
            foreach ($item as $key => $value) {
                if (!is_null($value)) {
                    $data[$this->camelCaseToSnakeCase($key)] = $value;
                }
                if (is_bool($value)) {
                    $data[$key] = (int)$value;
                }
            }
            $entity = new Menu();
            $entity->fillData($data)
                ->filterInvalidProperties();
            if ($entity->getId() === 0) {
                $list[] = $entity;
            } else {
                $updateList[] = $entity;
            }
        }

        // 计算删除列表
        $deleteList = $this->calculateDeleteList($updateList);

        // 重新递归计算更新列表和删除列表
        $res = $this->recalculateDeleteAndUpdateList([$updateList, $deleteList]);
        $updateList = $res[0];
        $deleteList = $res[1];

        // 批量插入
        if (count($list) > 0) {
            $res = $this->insertBatch($list);
            if ($res === false) {
                throw new Exception('批量新增菜单失败');
            }
        }

        // 批量更新
        $res = $this->batchUpdateMenu($updateList);
        if ($res !== true) {
            throw new Exception('批量更新菜单失败');
        }

        // 批量删除
        if (count($deleteList) > 0) {
            $res = $this->batchDelByIds($deleteList);
            if ($res === false) {
                throw new Exception('批量删除菜单失败');
            }
        }
        return true;
    }

    /**
     * 检查菜单
     * @param array $menu
     * @return bool
     * @throws Exception
     */
    public function checkMenu(array $menu): bool
    {
        $types = [];
        foreach (MenuType::cases() as $case) {
            $types[] = $case->value;
        }
        $linkTargets = [];
        foreach (LinkTarget::cases() as $case) {
            $linkTargets[] = $case->value;
        }
        $moduleLinks = [];
        foreach (ModuleLink::cases() as $case) {
            $moduleLinks[] = $case->value;
        }
        foreach ($menu as $item) {
            if (!is_null($item['id'] ?? null) && !is_numeric($item['id'])) {
                throw new Exception('菜单ID必须为数字类型');
            }
            if (is_null($item['pid'] ?? null)) {
                throw new Exception('菜单父级ID为必填项');
            }
            if (!is_numeric($item['pid'])) {
                throw new Exception('菜单父级ID必须为数字类型');
            }
            if (is_null($item['name'] ?? null)) {
                throw new Exception('菜单名称为必填项');
            }
            if (mb_strlen($item['name']) > 20) {
                throw new Exception('菜单名称最大限制为20个字符');
            }
            if (!is_null($item['code'] ?? null) && mb_strlen($item['code']) > 20) {
                throw new Exception('菜单编码最大限制为20个字符');
            }
            if (!is_null($item['icon'] ?? null) && !is_numeric($item['icon'])) {
                throw new Exception('菜单ICON为必填项');
            }
            if (!in_array($item['type'] ?? null, $types, true)) {
                throw new Exception('菜单类型无效');
            }
            if (is_null($item['level'] ?? null)) {
                throw new Exception('菜单层级为必填项');
            }
            if (!is_numeric($item['level'])) {
                throw new Exception('菜单层级必须为数字类型');
            }
            if (!is_null($item['target'] ?? null) &&
                !in_array($item['target'] ?? null, $linkTargets, true)) {
                throw new Exception('菜单链接打开方式无效');
            }
            if ($item['type'] === MenuType::LINK->value
                || $item['type'] === MenuType::MODULE->value) {
                if (is_null($item['linkUrl'] ?? null)) {
                    throw new Exception('菜单链接为必填项');
                }
                if (mb_strlen($item['linkUrl']) > 200) {
                    throw new Exception('菜单链接最大限制为200个字符');
                }
                if ($item['type'] === MenuType::LINK->value &&
                    !array_key_exists($item['linkType'] ?? null, [0, 1])) {
                    throw new Exception('菜单链接类型无效');
                }
                if ($item['type'] === MenuType::MODULE->value &&
                    !in_array($item['linkUrl'], $moduleLinks, true)) {
                    throw new Exception('菜单链接无效');
                }
            }
            if ($item['type'] === MenuType::SINGLE_PAGE->value) {
                if (is_null($item['singlePageId'] ?? null)) {
                    throw new Exception('菜单单页ID为必填项');
                }
                if (!is_numeric($item['singlePageId'])) {
                    throw new Exception('菜单单页ID必须为数字类型');
                }
            }
            if (!is_null($item['sortIndex'] ?? null) &&
                !is_numeric($item['sortIndex'])) {
                throw new Exception('菜单排序索引必须为数字类型');
            }
            if (!is_null($item['visible'] ?? null) &&
                !is_bool($item['visible'])) {
                throw new Exception('菜单可见状态必须为布尔类型');
            }
            if (!is_null($item['disabled'] ?? null) &&
                !is_bool($item['disabled'])) {
                throw new Exception('菜单启用状态必须为布尔类型');
            }
        }
        return true;
    }

    /**
     * 计算删除列表
     * @param array $list
     * @return array
     */
    private function calculateDeleteList(array $list): array
    {
        // 获取已存在的记录
        $menuList = $this->get();

        $ids = [];
        foreach ($menuList as $item) {
            $ids[] = (int)$item['id'];
        }

        $updateIds = [];
        foreach ($list as $item) {
            if (!in_array($item->getId(), $ids)) {
                log_message('warning', '待更新数据ID{id}不存在，更新失败',
                    [
                        'id' => $item->getId()
                    ]
                );
                continue;
            }
            $updateIds[] = $item->getId();
        }

        // 获取已删除列表
        $deleteList = [];
        foreach ($ids as $id) {
            if (!in_array($id, $updateIds, true)) {
                $deleteList[] = $id;
            }
        }
        return $deleteList;
    }

    /**
     * 重新递归计算更新列表和删除列表
     * @param array $arr
     * @return array
     */
    private function recalculateDeleteAndUpdateList(array $arr): array
    {
        $updateList = $arr[0];
        $deleteList = $arr[1];
        foreach ($updateList as $key => $value) {
            if (in_array($value->getPid(), $deleteList, true)) {
                $deleteList[] = (int)$value->getPid();
                unset($updateList[$key]);
                self::recalculateDeleteAndUpdateList([$updateList, $deleteList]);
            }
        }
        return [$updateList, $deleteList];
    }

    /**
     * 批量更新菜单
     * @param array $menuList
     * @return bool
     * @throws Exception
     */
    private function batchUpdateMenu(array $menuList): bool
    {
        if (count($menuList) > 0) {
            $linkList = [];
            $moduleList = [];
            $singlePageList = [];
            foreach ($menuList as $item) {
                if ($item->getId())
                    switch ($item->getType()) {
                        case MenuType::LINK->value:
                            unset($item->single_page_id);
                            $linkList[] = $item;
                            break;
                        case MenuType::MODULE->value:
                            unset($item->single_page_id);
                            $moduleList[] = $item;
                            break;
                        case MenuType::SINGLE_PAGE->value:
                            $singlePageList[] = $item;
                            break;
                        default:
                            break;
                    }
            }
            if (count($linkList) > 0) {
                $res = $this->updateBatch($linkList, 'id');
                if ($res === false) {
                    throw new Exception('更新链接类型菜单失败');
                }
            }
            if (count($moduleList) > 0) {
                $res = $this->updateBatch($moduleList, 'id');
                if ($res === false) {
                    throw new Exception('更新模块类型菜单失败');
                }
            }
            if (count($singlePageList) > 0) {
                $res = $this->updateBatch($singlePageList, 'id');
                if ($res === false) {
                    throw new Exception('更新单页类型菜单失败');
                }
            }
        }
        return true;
    }

    /**
     * @throws Exception
     */
    private function prepare(array $data): array
    {
        $data = parent::prepareData($data);
        $menu = $data['menu'] ?? null;
        if (!is_null($menu)) {
            $menu = json_decode($menu, true);
            if (json_last_error() != JSON_ERROR_NONE) {
                throw new Exception('菜单数据格式错误，必须为JSON格式');
            }
            $this->checkMenu($menu);
            $data['menu'] = $menu;
        }
        return $data;
    }
}
