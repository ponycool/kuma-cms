<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/12/12
 * Time: 08:56
 */
declare(strict_types=1);

namespace App\Traits;

use Exception;

/**
 * 检测恶意内容
 * XSS、SQL 注入、病毒脚本、钓鱼链接、恶意 payload
 */
trait DetectMaliciousContentTrait
{
    // 攻击类型与对应特征库（结构化管理，便于维护），可将ATTACK_RULES从常量改为配置文件/数据库存储，支持动态更新规则
    private array $attackRules = [
        // 路径遍历（仅匹配高风险组合，正则定界符/引号无冲突）
        'path_traversal' => [
            'patterns' => [
                '/\.\./\.\./etc/passwd/iS',
                '/\.\./\.\./windows/win\.ini/iS',
                '/\.\.\\\.\./windows/win\.ini/iS',
                '/(\.\.\\){2,}windows\win\.ini/iS',
                '/%2e%2e%2f%2e%2e%2fetc/passwd/iS',
                '/file:\/\/\/etc\/shadow/iS',
                '/WEB-INF[\\\/]/web\.xml/iS',
                '/web\.xml/iS',
                '/(\.\.\/|\.\.\\|\.\.\.){2,}/iS',
                '/windows[\\\/]/win\.ini/iS',
                '/windows%5cwin\.ini/iS',
                '/etc\/passwd/iS',
                '/etc\/shells/iS',
                '/\/etc\/shells$/iS',
                '/\\etc\\shells$/iS',
                '/\.\.%5c/iS',
                '/%2e%2e%5c/iS',
                '/\.\.\\.*?\.\.\\.*?windows/iS',
                '/(\.\.){5,}/iS',
                '/\.\.\\win\.ini/iS',
                '/windows\win\.ini/iS',
                '/\.\.\\/iS',
                '/%c0%ae/iS',
                '/%c0%af/iS',
                '/%c0%ae%c0%ae%c0%af/iS',
                '/windows%c0%afwin\.ini/iS',
                '/\\hosts$/iS',
                '/\/hosts$/iS',
                '/\/system32\//iS',
                '/\\system32\\/iS',
                '/drivers\\etc/iS',
                '/win\.ini$/iS',
                '/\\win\.ini$/iS',
                '/\\WINDOWS\\/iS',
                '/\/WINDOWS\//iS',
                '/\\WINDOWS$/iS',
                '/\/WINDOWS$/iS',
                '/\.\/\.\//iS',
                '/\.\.\/\.\//iS',
                '/etc\/\.\/passwd/iS',
                '/\/etc\/passwd%00/iS',
                '/%00$/iS',
                '/\.\/\.\/\.\/\.\/\.\/\.\/\.\/\.\/\.\/\.\/\.\//iS'
            ],
            'message' => '路径遍历/系统文件读取'
        ],

        // 命令执行（正则无语法错误，仅匹配高风险组合）
        'command_injection' => [
            'patterns' => [
                '/;\s*curl\s+bxss\.me/iS',
                '/\|\s*ping\s+127\.0\.0\.1/iS',
                '/\$\(sleep\s+5\)/iS',
                '/\$\(\)/iS',
                '/wget\s+interactsh\.com/iS',
                '/\|\s*\(${IFS}\)?nslookup/iS',
                '/\|\s*\(${IFS}\)?curl/iS',
                '/\|\s*\(nslookup/iS',
                '/\|\s*\(curl/iS',
                '/&\s*nslookup/iS',
                '/&\s*curl/iS',
                '/\|\s*echo/iS',
                '/\|\|\s*[a-zA-Z0-9]+/iS',
                '/\|\*\|\*\|/iS',
                '/!\(\(\)&&!/iS',
                '/\${IFS}/iS',
                '/nslookup\s+[a-zA-Z0-9\.\-]+\.bxss\.me/iS',
                '/curl\s+[a-zA-Z0-9\.\-]+\.bxss\.me/iS',
                '/`\s*nslookup/iS',
                '/`\s*curl/iS',
                '/nslookup\s+[a-zA-Z0-9\.\-]+\.interactsh\.com/iS',
                '/curl\s+[a-zA-Z0-9\.\-]+\.interactsh\.com/iS'
            ],
            'message' => '系统命令注入'
        ],

        // PHP代码注入（引号/括号正确转义，无语法冲突）
        'php_injection' => [
            'patterns' => [
                '/eval\(\$_GET\[.*?\]\)/iS',
                '/assert\(base64_decode\(.*?\)\)/iS',
                '/system\(\'rm -rf /\'\)/iS',
                '/passthru\(.*?cmd=.*?\)/iS'
            ],
            'message' => 'PHP代码注入'
        ],
        // 代码注入（通用代码注入，包括Ruby、Python、Node.js等）
        'code_injection' => [
            'patterns' => [
                '/\.concat\(/iS',
                '/require\'socket\'/iS',
                '/Socket\.gethostbyname/iS',
                '/to_s/iS',
                '/hitov/iS',
                '/\+\([^)]+\)/iS',
                // 检测response.write()及其变体
                '/response\.write\(/iS',
                '/res\.write\(/iS',
                '/http\.createServer/iS',
                '/fs\.readFile/iS'
            ],
            'message' => '通用代码注入'
        ],

        // XSS跨站脚本（正则定界符闭合，无语法错误）
        'xss_attack' => [
            'patterns' => [
                '/\<script\>.*?<\/script\>/iS',
                '/on[a-zA-Z]+=javascript:/iS',
                '/on[a-zA-Z]+=alert\(/iS',
                '/\<iframe[^>]*javascript:/iS',
                '/document\.write\(.*?\<script/iS',
                '/document\.location=.*?alert\(/iS',
                '/eval\(.*?alert\(/iS',
                '/\<script\s+[^>]*>/iS',
                '/\<\/script\>/iS',
                '/[\'"\(\)\&\%]+\<.*?script/iS',
                '/data:text\/html;base64,/iS',
                '/vbscript:/iS',
                '/livescript:/iS'
            ],
            'message' => 'XSS跨站脚本'
        ],

        // SQL注入（正则无语法问题，仅匹配高风险特征）
        'sql_injection' => [
            'patterns' => [
                '/UNION\s+SELECT/iS',
                '/UNION\s+ALL\s+SELECT/iS',
                // 仅匹配可能的SQL注入场景中的SELECT *
                '/(\'|\")\s*SELECT\s+\*/iS',
                '/(OR|AND)\s+\d+\s*=\s*\(SELECT\s+\d+\s+FROM/iS',
                '/(OR|AND)\s+\d+[\+\-\*\/\s\d]{1,20}[=<>!]=?\s*[\d\(\)\+\-\*\/\s]{1,20}/iS',
                '/(OR|AND)\s+1=1\s+--/iS',
                '/(OR|AND)\s+1=1\s+#/iS',
                '/\'\s*(OR|AND)\s+\d+\s*=\s*\d+/iS',
                '/"\s*(OR|AND)\s+\d+\s*=\s*\d+/iS',
                '/\'\s*(OR|AND)\s+1=1/iS',
                '/"\s*(OR|AND)\s+1=1/iS',
                '/sleep\(\d+\)/iS',
                '/select\(\d+\)from\(select\(sleep\(/iS',
                '/PG_SLEEP\(\d+\)/iS',
                '/waitfor\s+delay\s+[\x27\x22\s]\d+:\d+:\d+[\x27\x22\s]/iS',
                '/updatexml\(1,concat\(0x7e,version\(\)\),1\)/iS',
                '/extractvalue\(1,concat\(0x7e,version\(\)\)\)/iS',
                '/DBMS_PIPE\.RECEIVE_MESSAGE/iS',
                '/CHR\(/iS',
                '/ASCII\(/iS',
                '/SUBSTRING\(/iS',
                '/MID\(/iS',
                '/ORD\(/iS',
                '/[\x27\x22\)\(\);|\\]+\d+$/iS',
                '/\x27\x22\\\x27\x22\\/iS',
                '/%27.*?%27/iS',
                '/%22.*?%22/iS',
                '/;DROP\s+TABLE/iS',
                '/;DELETE\s+FROM/iS',
                '/;TRUNCATE\s+TABLE/iS'
            ],
            'message' => 'SQL注入'
        ],
        // SSRF攻击（仅匹配高风险组合，语法合规）
        'ssrf_attack' => [
            'patterns' => [
                '/curl\s+http:\/\/169\.254\.169\.254/iS',
                '/http:\/\/127\.0\.0\.1:8080\/admin/iS',
                '/gopher:\/\/127\.0\.0\.1:6379/iS',
                '/<esi:include/iS',
                '/<esi:include.*?src=/iS',
            ],
            'message' => 'SSRF服务器端请求伪造'
        ],

        // 文件上传攻击（正则无冲突，匹配恶意文件特征）
        'file_upload' => [
            'patterns' => [
                '/\.php\.jpg$/iS',
                '/\.php\.png$/iS',
                '/\.php\.gif$/iS',
                '/\.php3$/iS',
                '/\.php4$/iS',
                '/\.php5$/iS',
                '/\.phtml$/iS',
                '/content-type:\s+application/x-php/iS',
                '/<\?php\s+eval\(\$_POST\[.*?\]\)\?>/iS'
            ],
            'message' => '恶意文件上传'
        ],

        // 反序列化攻击（正则定界符/花括号正确转义）
        'unserialize_attack' => [
            'patterns' => [
                '/O:\d+:"[a-zA-Z0-9_]+":\d+:\{/iS',
                '/unserialize\(\$_GET\[.*?\]\)/iS',
                '/unserialize\(\$_POST\[.*?\]\)/iS'
            ],
            'message' => 'PHP反序列化攻击'
        ],
        // 特殊字符注入（正则无语法错误，仅匹配高风险组合）
        'special_char_injection' => [
            'patterns' => [
                '/[\^#!@$()*+\-./:;\<=>?@[\\]^_`\{|}~]{5,}/iS',
                '/\(\(\)\)\)\)/iS',
                '/\*\*\*\*\*\*/iS',
                '/\^\(#.*?\)\(\(\)\)\)\*\*\*\*/iS',
                '/%00/iS',
                '/%0d%0a/iS',
                '/<%00>/iS',
                '/[\x27\x22\)\(\);|\\\[\]\*\{%\}]+{5,}/iS',
                '/\|\]/iS',
                // 检测连续的两个@符号
                '/@@/iS',
                // 检测连续的两个特殊符号组合
                '/[\x27\x22\)\(\);|\\\[\]\*\{%\}]{2,}/iS',
                // 检测特定的危险符号组合
                '/\);/iS',
                '/\];/iS',
                '/\}\);/iS',
                '/\}\\);/iS'
            ],
            'message' => '特殊字符注入'
        ],
        // 特殊符号攻击
        'special_symbol_attack' => [
            'patterns' => [
                // 检测连续的两个@符号
                '/@@/iS',
                // 检测连续的特殊符号组合（排除JSON/HTML合法语法）
                '/(?:[^\{]|^)[\x27\x22\)\(\);|\\\[\]\*\{%\}]{3,}(?:[^\"]|$)/iS'
            ],
            'message' => '特殊符号攻击'
        ],
        // 服务器端模板注入攻击（SSTI）
        'ssti_injection' => [
            'patterns' => [
                '/\{\{2}.*?\}{2}/iS', // Jinja2模板语法
                '/\{%.*?%\}/iS', // Django模板语法
                '/\${.*?}/iS', // Velocity模板语法
                '/\#.*?}/iS', // JSP EL表达式
                '/\<%.*?%\>/iS' // ASP/PHP标签
            ],
            'message' => '服务器端模板注入攻击'
        ],
        // Webshell后门检测
        'webshell_detection' => [
            'patterns' => [
                '/eval\(\$_POST/iS', // 常见的PHP一句话木马
                '/assert\(\$_POST/iS', // 常见的PHP一句话木马
                '/system\(\$_GET/iS', // 常见的PHP一句话木马
                '/passthru\(\$_REQUEST/iS', // 常见的PHP一句话木马
                '/@eval\(/iS', // 带@符号的eval调用
                '/base64_decode\(/iS', // Base64解码
                '/str_rot13\(/iS', // ROT13编码
                '/gzuncompress\(/iS' // Gzip解压
            ],
            'message' => 'Webshell后门检测'
        ]
    ];

    // 白名单关键词（支持正则）
    private array $whiteList = [
        '/^_ga(_[A-Z0-9]+)?$/iS',
        '/GA1\.\d+\.\d+\.\d+/iS',
        '/172\.18\.0\.\d+/iS',
        '/192\.168\.\d+\.\d+/iS',
        '/127\.0\.0\.1/iS',
        // '/合法业务关键词1/i',
        // '/合法业务关键词2/i'
    ];

    // 宽松模式下跳过的低风险攻击类型
    private array $looseModeSkipRules = [
        'xss_attack',
        'ssrf_attack',
        'unserialize_attack'
    ];

    /**
     * 自定义业务白名单（可重写）
     * @param string $content
     * @return bool
     */
    protected function customWhitelisted(string $content): bool
    {
        // 放行Google Analytics相关关键词（仅匹配完整的GA标识符和相关参数，避免被滥用）
        $gaPatterns = [
            '/^_ga(_[A-Z0-9]+)?$/iS',
            '/^GA1\.\d+\.\d+\.\d+$/iS',
            '/google-analytics\.com/iS',
            '/www\.googletagmanager\.com/iS'
        ];

        foreach ($gaPatterns as $pattern) {
            if ($this->validateRegexPattern($pattern) && preg_match($pattern, $content)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 校验正则表达式合法性
     * @param string $pattern 正则表达式（带定界符和修饰符）
     * @return bool 合法返回true
     */
    private function validateRegexPattern(string $pattern): bool
    {
        // 静默执行preg_match，避免报错；返回false表示正则语法错误
        return @preg_match($pattern, '') !== false;
    }

    /**
     * 正则规则是否已预编译
     * @var bool
     */
    private bool $rulesPrecompiled = false;

    /**
     * 预编译所有正则规则（初始化时执行，避免运行时重复编译）
     * @return void
     */
    private function precompileRegexRules(): void
    {
        // 避免重复编译
        if ($this->rulesPrecompiled) {
            return;
        }

        foreach ($this->attackRules as &$rule) {
            $rule['patterns'] = array_filter($rule['patterns'], fn($p) => $this->validateRegexPattern($p));
            foreach ($rule['patterns'] as $p) @preg_match($p, '');
        }
        unset($rule);

        $this->whiteList = array_filter($this->whiteList, fn($p) => $this->validateRegexPattern($p));
        foreach ($this->whiteList as $p) @preg_match($p, '');

        $this->rulesPrecompiled = true;
    }


    /**
     * 恶意内容检测
     * @param string $content 待检测内容
     * @param bool $strict 严格模式
     * @return array
     */
    private function detectMaliciousContent(string $content, bool $strict = true): array
    {
        // 空内容直接放行
        if (trim($content) === '') {
            return ['isMalicious' => false, 'reason' => ''];
        }

        // 白名单过滤（优先放行合法内容）
        if ($this->isWhitelisted($content)) {
            return ['isMalicious' => false, 'reason' => ''];
        }

        // 检测是否为合法JSON，对合法JSON放宽特殊字符检测
        $isValidJson = json_decode($content) !== null;

        // 检测是否为合法HTML，对合法HTML放宽特殊字符检测
        $isValidHtml = preg_match('/^<!DOCTYPE html>|\<html|\<body|\<div|\<p/iS', $content) === 1;

        // 多维度内容预处理（抗绕过：覆盖各类编码/变形）
        $contentVariants = $this->generateContentVariants($content);

        // 遍历所有攻击规则检测
        foreach ($this->attackRules as $attackType => $rule) {
            // 宽松模式（$strict=false）：跳过低风险/易误判的规则（如XSS/SSRF）
            // 严格模式（$strict=true）：执行全量规则检测（无跳过）
            if (!$strict && in_array($attackType, $this->looseModeSkipRules)) {
                continue;
            }

            // 对于合法JSON或HTML，跳过某些严格的特殊字符检测和可能误判的SQL注入规则
            if (($isValidJson || $isValidHtml) && 
                in_array($attackType, ['special_char_injection', 'special_symbol_attack'])) {
                continue;
            }

            // 检测所有内容变种（原始/解码/变形）
            foreach ($contentVariants as $variantType => $variantContent) {
                foreach ($rule['patterns'] as $pattern) {
                    try {
                        // 跳过非法正则（防御性检查）
                        if (!$this->validateRegexPattern($pattern)) {
                            continue;
                        }

                        // 执行匹配（S修饰符已缓存编译结果，性能提升）
                        if (preg_match($pattern, $variantContent, $matches)) {
                            $matchedStr = $matches[0] ?? '未知特征';
                            // 截断过长的匹配内容，避免日志溢出
                            $matchedStr = mb_strlen($matchedStr) > 100 ?
                                mb_substr($matchedStr, 0, 100) . '...' :
                                $matchedStr;

                            return [
                                'isMalicious' => true,
                                'reason' => sprintf(
                                    '检测到%s攻击【%s】，匹配特征：%s（内容变种：%s）',
                                    $rule['message'],
                                    $attackType,
                                    $matchedStr,
                                    $variantType
                                )
                            ];
                        }
                    } catch (Exception $e) {
                        // 记录正则匹配错误（便于排查）
                        if (function_exists('log_message')) {
                            log_message(
                                'error', '[MaliciousDetector] 匹配异常 [' . $attackType . ']：' . $e->getMessage() .
                                ' | 正则：' . $pattern . ' | 内容变种：' . $variantType
                            );
                        }
                        continue;
                    }
                }
            }
        }

        // 语义级检测（严格/宽松模式均执行，保障核心防护）
        $semanticResult = $this->detectSemanticAttack($content);
        if ($semanticResult['isMalicious']) {
            return $semanticResult;
        }

        return ['isMalicious' => false, 'reason' => ''];
    }

    /**
     * 检测恶意请求
     * @param bool $strict 严格模式
     * @return array
     */
    private function detectMaliciousRequest(bool $strict = true): array
    {
        $this->precompileRegexRules();
        // 检测标准参数
        $paramSources = [
            'GET参数' => $_GET,
            'POST参数' => $_POST,
            'COOKIE参数' => $_COOKIE,
            'REQUEST参数' => $_REQUEST
        ];
        foreach ($paramSources as $sourceName => $params) {
            foreach ($params as $key => $value) {
                $content = is_array($value) ? json_encode($value, JSON_UNESCAPED_UNICODE) : (string)$value;
                $detectResult = $this->detectMaliciousContent($content, $strict);
                if ($detectResult['isMalicious']) {
                    return [
                        'isMalicious' => true,
                        'reason' => $detectResult['reason'],
                        'source' => "$sourceName.$key"
                    ];
                }
            }
        }

        // 检测原始请求体
        $rawBody = file_get_contents('php://input');
        if ($rawBody !== '') {
            $detectResult = $this->detectMaliciousContent($rawBody, $strict);
            if ($detectResult['isMalicious']) {
                return [
                    'isMalicious' => true,
                    'reason' => $detectResult['reason'],
                    'source' => 'php://input'
                ];
            }
        }

        // 检测请求头/URL
        $headerSources = [
            'User-Agent' => $_SERVER['HTTP_USER_AGENT'] ?? '',
            'Referer' => $_SERVER['HTTP_REFERER'] ?? '',
            'X-Forwarded-For' => $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '',
            'X-Real-IP' => $_SERVER['HTTP_X_REAL_IP'] ?? '',
            'Host' => $_SERVER['HTTP_HOST'] ?? ''
        ];
        foreach ($headerSources as $headerName => $content) {
            if ($content === '') continue;

            // 对X-Forwarded-For/X-Real-IP使用宽松模式（跳过低风险规则）
            $headerStrict = !in_array($headerName, ['X-Forwarded-For', 'X-Real-IP']);
            $detectResult = $this->detectMaliciousContent($content, $headerStrict);

            if ($detectResult['isMalicious']) {
                return [
                    'isMalicious' => true,
                    'reason' => $detectResult['reason'],
                    'source' => "请求头.$headerName"
                ];
            }
        }

        // 检测URL路径
        $requestUri = $_SERVER['REQUEST_URI'] ?? '';
        $detectResult = $this->detectMaliciousContent($requestUri, $strict);
        if ($detectResult['isMalicious']) {
            return [
                'isMalicious' => true,
                'reason' => $detectResult['reason'],
                'source' => 'URL路径'
            ];
        }

        return ['isMalicious' => false, 'reason' => '', 'source' => ''];
    }

    /**
     * 白名单过滤（支持正则匹配）
     * @param string $content 待检测内容
     * @return bool
     */
    private function isWhitelisted(string $content): bool
    {
        foreach ($this->whiteList as $pattern) {
            if ($this->validateRegexPattern($pattern) && preg_match($pattern, $content)) {
                return true;
            }
        }
        // 可重写扩展业务白名单
        return $this->customWhitelisted($content);
    }

    /**
     * 生成内容变种（抗绕过：覆盖各类编码/变形）
     * @param string $content 原始内容
     * @return array 不同变种的内容集合
     */
    private function generateContentVariants(string $content): array
    {
        $variants = [
            'raw' => $content,
            'lowercase' => strtolower($content),
            'no_whitespace' => preg_replace('/\s+/', '', $content),
            'no_separator' => preg_replace('/[\\+\\-\\*\\/\\.,;:]/', '', $content),
            'backslash_to_slash' => str_replace('\\', '/', $content),
            'unicode_decode' => preg_replace_callback('/&\\#x([0-9a-f]+);/i', function ($matches) {
                $charCode = hexdec($matches[1]);
                return $charCode > 0 && $charCode < 256 ? chr($charCode) : $matches[0];
            }, $content),
            'hex_decode' => preg_replace_callback('/0x([0-9a-f]+)/i', function ($matches) {
                $charCode = hexdec($matches[1]);
                return $charCode > 0 && $charCode < 256 ? chr($charCode) : $matches[0];
            }, $content)
        ];

        // 安全的URL解码：最多解码2次，避免无限解码攻击
        $urlDecoded1 = urldecode($content);
        if ($urlDecoded1 !== $content) {
            $variants['url_decode_1'] = $urlDecoded1;
            $urlDecoded2 = urldecode($urlDecoded1);
            if ($urlDecoded2 !== $urlDecoded1) {
                $variants['url_decode_2'] = $urlDecoded2;
            }
        }

        // 去重+过滤空值
        $variants = array_filter($variants, fn($v) => $v !== '');
        return array_unique($variants);
    }

    /**
     * 语义级攻击检测（识别组合式攻击）
     * @param string $content 原始内容
     * @return array {isMalicious: bool, reason: string}
     */
    private function detectSemanticAttack(string $content): array
    {
        $contentLower = strtolower($content);

        $semanticRules = [
            [
                // 仅匹配 路径遍历符号 + 系统文件名（必须同时满足）
                'patterns' => ['/(\.\/|\.\.\)+/iS', '/(etc\/passwd|win\.ini)/iS'],
                'message' => '路径遍历+系统文件读取组合攻击'
            ],
            [
                // 仅匹配 命令 + 延时函数（必须同时满足）
                'patterns' => ['/\b(nslookup|curl)\b/iS', '/\b(sleep|pg_sleep)\b/iS'],
                'message' => '命令执行+延时盲注组合攻击'
            ],
            [
                'patterns' => ['/(\$\{@|print)/iS', '/(md5|eval|assert)/iS'],
                'message' => 'PHP代码注入+执行函数组合攻击'
            ],
            [
                'patterns' => ['/<script/iS', '/(onclick|javascript:)/iS'],
                'message' => 'XSS脚本+事件触发组合攻击'
            ]
        ];

        foreach ($semanticRules as $rule) {
            $matchCount = 0;
            foreach ($rule['patterns'] as $pattern) {
                if ($this->validateRegexPattern($pattern) && preg_match($pattern, $contentLower)) {
                    $matchCount++;
                }
            }
            if ($matchCount === count($rule['patterns'])) {
                return [
                    'isMalicious' => true,
                    'reason' => "语义检测：{$rule['message']}"
                ];
            }
        }

        return ['isMalicious' => false, 'reason' => ''];
    }
}