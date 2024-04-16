<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/16
 * Time: 下午2:28
 */
declare(strict_types=1);

namespace App\Controllers\Api\Link;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\LinkTarget;

class Target extends Base
{
    /**
     * 获取链接打开方式列表
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $list = [];
        foreach (LinkTarget::cases() as $case) {
            $value = match ($case->value) {
                '_blank' => '在新窗口中打开被链接文档',
                '_self' => '在相同的框架中打开被链接文档',
                '_parent' => '在父框架中打开被链接文档',
                '_top' => '在当前窗口中打开被链接文档',
            };
            $list[$case->value] = $value;
        }
        $data = [
            'code' => Code::OK,
            'message' => '获取链接打开方式列表成功',
        ];
        $data = array_merge($data, $list);
        $this->render($data);
    }
}