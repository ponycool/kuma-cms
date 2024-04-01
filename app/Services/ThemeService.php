<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/1
 * Time: 09:38
 */
declare(strict_types=1);

namespace App\Services;

class ThemeService extends BaseService
{
    /**
     *  获取主题列表
     * @return array
     */
    public function getList(): array
    {
        helper('filesystem');
        $path = APPPATH . 'Views/theme';
        $map = directory_map($path, 1);
        foreach ($map as $key => &$value) {
            if (is_dir($path . '/' . $value)) {
                $value = str_replace('/', '', $value);
            } else {
                unset($map[$key]);
            }
        }
        // 重新排序
        usort($map, function ($a, $b) {
            return strcmp($a, $b);
        });
        return $map;
    }
}