<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/4/11
 * Time: 11:20
 */

namespace App\Validation;

use App\Enums\Language;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Uid\Ulid;

class Rules
{
    /**
     * 验证是否是手机号码
     * @param $value
     * @return bool
     */
    public function valid_mobile($value): bool
    {
        if (!is_string($value)) {
            return false;
        }
        if (!preg_match("/^1[3456789]\d{9}$/", $value)) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 验证是否是布尔值
     * @param  $value
     * @param string|null $params 参数字符串
     * @param array $data 表单提交的所有数据数组
     * @return bool 验证结果
     */
    public function is_bool($value, string $params = null, array $data = []): bool
    {
        return is_bool($value);
    }

    /**
     * 验证是否是UUID
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function uuid($value, ?string &$error = null): bool
    {
        if (!Uuid::isValid($value)) {
            $error = lang('validation.uuid', ['field' => 'uuid']);
            return false;
        }
        return true;
    }

    /**
     * 验证是否是ULID
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function ulid($value, ?string &$error = null): bool
    {
        $ulid = new Ulid();
        if (!$ulid->isValid($value)) {
            $error = lang('validation.ulid', ['field' => 'ulid']);
            return false;
        }
        return true;
    }

    /**
     * 验证分页参数当前页
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function page($value, ?string &$error = null): bool
    {
        if (!is_numeric($value) || $value < 1) {
            $error = lang('validation.page', ['field' => 'page']);
            return false;
        }
        return true;
    }

    /**
     * 验证分页参数每页条数
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function page_size($value, ?string &$error = null): bool
    {
        if (!is_numeric($value) || $value < 1) {
            $error = lang('validation.page_size', ['field' => 'page size']);
            return false;
        }
        return true;
    }

    /**
     * 验证限制返回条数
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function limit($value, ?string &$error = null): bool
    {
        if (!is_numeric($value)) {
            $error = lang('validation.limit', ['field' => 'limit']);
            return false;
        }
        return true;
    }

    /**
     * 验证数量
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function count($value, ?string &$error = null): bool
    {
        if (!is_numeric($value)) {
            $error = lang('validation.count', ['field' => 'count']);
            return false;
        }
        return true;
    }

    /**
     * 验证关键词
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function keyword($value, ?string &$error = null): bool
    {
        if (!(is_string($value) && strlen($value) > 0 && strlen($value) < 20)) {
            $error = lang('validation.keyword', ['field' => 'keyword']);
            return false;
        }
        return true;
    }

    /**
     * 验证语言
     * @param $value
     * @param string|null $error
     * @return bool
     */
    public function language($value, ?string &$error = null): bool
    {
        $languages = Language::getLabels();
        if (!in_array($value, $languages, true)) {
            $error = lang('validation.language', ['field' => 'language']);
            return false;
        }
        return true;
    }
}