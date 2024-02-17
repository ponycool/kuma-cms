<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/3
 * Time: 15:07
 */

namespace App\Traits;

use Carbon\Carbon;
use Exception;
use Ramsey\Uuid\Uuid;

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

    /**
     * 校验UUID是否合法
     * @param string|null $uuid
     * @return bool|string
     */
    protected function validateUUID(?string $uuid): bool|string
    {
        if (is_null($uuid) || !Uuid::isValid($uuid)) {
            return '无效的UUID';
        }
        return true;
    }

    /**
     * 用于验证字符串是否是指定格式的日期
     * @param string $date
     * @param string $format 默认格式：Y-m-d H:i:s
     * @return bool
     */
    protected function validateDate(string $date, string $format = 'Y-m-d H:i:s'): bool
    {
        try {
            // 尝试根据指定的格式解析日期字符串，并返回一个Carbon对象
            $d = Carbon::createFromFormat($format, $date);
            // 检查Carbon对象是否存在，并且与原始字符串完全匹配
            return $d && $d->format($format) == $date;
        } catch (Exception) {
            return false;
        }
    }

    /**
     * 根据MimeType获取文件类型
     * @param string $mimeType
     * @return string
     */
    protected function getFileTypeByMimeType(string $mimeType): string
    {
        return match ($mimeType) {
            'image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/wbmp' => 'image',
            'audio/mpeg', 'audio/mpg', 'audio/mpeg3', 'audio/mp3' => 'audio',
            'video/mp4', 'video/x-f4v', 'video/x-flv', 'video/3gp', 'video/3gpp', 'video/webm', 'video/x-ms-wmv', 'video/x-ms-asf' => 'video',
            default => 'file',
        };
    }

    /**
     * 删除文件
     * @param string $file 文件路径
     * @return bool
     */
    protected function delFile(string $file): bool
    {
        if (!is_file($file) || !file_exists($file)) {
            return false;
        }
        $winPath = iconv('utf-8', 'gbk', $file);
        if (PATH_SEPARATOR == ':') {
            //linux
            unlink($file);
        } else {
            //Windows
            unlink($winPath);
        }
        return true;
    }
}