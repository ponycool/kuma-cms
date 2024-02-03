<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/3
 * Time: 15:07
 */

namespace App\Traits;

trait CoreTrait
{
    /**
     * 将单驼峰格式的字符串转为小写并用下划线分割
     * @param $string
     * @return string
     */
    protected function camelCaseToSnakeCase($string): string
    {
        // 使用正则表达式，在大写字母前面添加一个下划线
        $string = preg_replace('/([A-Z])/', '_$1', $string);
        // 将字符串转为小写字母
        return strtolower($string);
    }

    /**
     * 将参数的每一项转为小写并用下划线分割
     * @param array $params
     * @return array
     */
    protected function convertParamsToSnakeCase(array $params): array
    {
        $data = [];
        foreach ($params as $key => $value) {
            if (!is_null($value)) {
                $data[$this->camelCaseToSnakeCase($key)] = $value;
            }
        }
        return $data;
    }
}