<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/3
 * Time: 17:07
 */
declare(strict_types=1);

namespace App\Enums;

enum Language: string
{
    // 中文简体
    case SIMPLIFIED_CHINESE = 'zh-CN';
    // 英文
    case ENGLISH = 'en-US';
    // 俄文
    case RUSSIAN = 'ru-RU';

    public function getLabel(): string
    {
        return match ($this) {
            self::SIMPLIFIED_CHINESE => '中文简体',
            self::ENGLISH => 'English',
            self::RUSSIAN => 'Русский',
        };
    }

    public static function getLabels(): array
    {
        return [
            self::SIMPLIFIED_CHINESE->value => self::SIMPLIFIED_CHINESE->getLabel(),
            self::ENGLISH->value => self::ENGLISH->getLabel(),
            self::RUSSIAN->value => self::RUSSIAN->getLabel(),
        ];
    }

}