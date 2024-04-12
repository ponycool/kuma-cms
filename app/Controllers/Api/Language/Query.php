<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/12
 * Time: 下午4:36
 */
declare(strict_types=1);

namespace App\Controllers\Api\Language;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Enums\Language;

class Query extends Base
{
    /**
     * 获取语言列表
     * @return void
     */
    public function index(): void
    {
        $data = [
            'code' => Code::OK,
            'message' => '获取语言列表成功'
        ];
        foreach (Language::cases() as $item) {
            $data['language'][] = $item->value;
        }
        $this->render($data);
    }
}