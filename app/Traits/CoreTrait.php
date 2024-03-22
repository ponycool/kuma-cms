<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/3
 * Time: 15:07
 */

namespace App\Traits;

use App\Enums\Code;
use Carbon\Carbon;
use Exception;
use PonyCool\Core\Jwt\Jwt;
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
            // 修复漏洞，当传递参数为小写加下划线时，会绕过参数验证规则
            if (str_contains($key, "_")) {
                continue;
            }

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
     * 校验密码，必须包含大小写字母、数字、特殊字符其中的任意三种组合，并且长度不能小于6位
     * @param string $password
     * @return bool
     */
    protected function validatePassword(string $password): bool
    {
        if (strlen($password) < 6) {
            return false;
        }
        // 包含大写字母
        $uppercase = preg_match('/[A-Z]/', $password);
        // 包含小写字母
        $lowercase = preg_match('/[a-z]/', $password);
        // 包含数字
        $number = preg_match('/[0-9]/', $password);
        // 包含特殊字符
        $specialChars = preg_match('/[^A-Za-z0-9]/', $password);

        $conditionsMet = 0;
        if ($uppercase) {
            $conditionsMet++;
        }
        if ($lowercase) {
            $conditionsMet++;
        }
        if ($number) {
            $conditionsMet++;
        }
        if ($specialChars) {
            $conditionsMet++;
        }
        return $conditionsMet >= 3; // 至少符合三种条件
    }

    /**
     * 生成盐值
     * @param int $length
     * @return bool|string
     */
    protected function generateSalt(int $length = 32): bool|string
    {
        try {
            return bin2hex(random_bytes($length / 2));
        } catch (Exception $exc) {
            log_message("error", "生成盐值异常，err：{err}",
                ["err" => $exc->getMessage()]
            );
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

    /**
     * 获取Token
     * @return string|bool
     */
    protected function getToken(): string|bool
    {
        helper('cookie');
        $request = service('request');
        $token = get_cookie('token', true);
        if (!is_null($token)) {
            return $token;
        }
        if ($request->hasHeader('token')) {
            $token = $request->getHeader('token');
            return $token->getValue();
        }
        $token = $request->getVar('token');
        if (is_null($token)) {
            return false;
        }
        return $token;
    }

    /**
     * 获取登录账户ID
     * @return int|null
     */
    protected function getLoginAccountID(): ?int
    {
        $token = $this->getToken();
        if ($token === false) {
            return null;
        }
        $jwt = new Jwt();
        try {
            $secret = getenv('jwt.secret');
            if ($secret === false) {
                throw new Exception('未配置JWT密钥', Code::JWT_SECRET_NOT_EXISTS->value);
            }
            if (strlen($secret) !== 32) {
                throw new Exception('无效的JWT密钥', Code::INVALID_JWT_SECRET->value);
            }
            if (!$jwt->verify($secret, $token)) {
                throw new Exception('令牌无效', Code::INVALID_TOKEN->value);
            }
        } catch (Exception $e) {
            log_message('info', '获取登录账户ID时，校验令牌失败；错误代码:{code}，错误消息：{message}', [
                'code' => $e->getCode(),
                'message' => $e->getMessage()
            ]);
            return null;
        }
        $payload = $jwt->getPayload($token);
        return (int)$payload['account_id'] ?? null;
    }
}