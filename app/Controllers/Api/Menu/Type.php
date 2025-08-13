<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/13
 * Time: 15:51
 */
declare(strict_types=1);

namespace App\Controllers\Api\Menu;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\MenuType;

class Type extends Base
{
    public function index(): void
    {
        $list = [];
        foreach (MenuType::cases() as $case) {
            $value = match ($case->value) {
                'link' => '链接',
                'single_page' => '单页',
                'module' => '模块',
            };
            $list[$case->value] = $value;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取菜单类型列表成功',
        ];
        $data = array_merge($data, $list);
        $this->render($data);
    }
}