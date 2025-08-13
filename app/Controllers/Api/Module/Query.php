<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/8/13
 * Time: 14:44
 */
declare(strict_types=1);

namespace App\Controllers\Api\Module;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\Module;
use App\Enums\ModuleLink;

class Query extends Base
{
    public function index(): void
    {
        $keys = [];
        $modules = [];
        foreach (Module::cases() as $case) {
            $keys[] = $case->name;
            $modules[$case->name] = $case->value;
        }
        $links = [];
        foreach (ModuleLink::cases() as $case) {
            $links[$case->name] = $case->value;
        }
        $list = [];
        foreach ($keys as $key) {
            $item['code'] = $key;
            $item['text'] = $modules[$key];
            $item['link'] = $links[$key] ?? '';
            $list[] = $item;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取网站模块成功',
        ];
        $data = array_merge($data, $list);
        $this->render($data);
    }
}