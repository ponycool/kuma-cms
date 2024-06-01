<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/6/1
 * Time: 下午2:21
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\LogCategory;
use Carbon\Carbon;

class SitemapService extends BaseService
{
    const SITEMAP_PATH = FCPATH;
    const SITEMAP_NAME = 'sitemap';

    const SITEMAP_TYPE = [
        'txt',
        'xml',
        'html'
    ];

    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'sitemapType' => [
                'rules' => 'if_exist|valid_json|max_length[20]',
                'errors' => [
                    'valid_json' => '参数网站地图类型[sitemapType]无效,必须是有效的JSON格式',
                    'max_length' => '参数网站地图类型[sitemapType]无效,字符长度不能超过20个字符',
                ]
            ],
            'additionalLink' => [
                'rules' => 'if_exist|valid_json|max_length[1000]',
                'errors' => [
                    'valid_json' => '参数网站地图附加链接[additionalLink]无效，必须是有效的JSON格式',
                    'max_length' => '参数网站地图附加链接[additionalLink]无效，字符长度不能超过1000个字符',
                ]
            ],

        ];
    }

    /**
     * 获取创建验证规则
     * @return array
     */
    public function getCreateRules(): array
    {
        $rules = [
            'sitemapType' => [
                'rules' => 'required|valid_json|max_length[50]',
                'errors' => [
                    'required' => '参数网站地图类型[sitemapType]无效,网站地图类型为必填项',
                    'valid_json' => '参数网站地图类型[sitemapType]无效,必须是有效的JSON格式',
                    'max_length' => '参数网站地图类型[sitemapType]无效,字符长度不能超过50个字符',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 创建网站地图
     * sitemap格式：txt、xml、html
     * 页面地址（loc）
     * 最后修改日期（lastmod）
     * 更新频率（changefreq）
     * 优先级（priority）
     * @param array $params
     * @return string|bool
     */
    public function create(array $params): string|bool
    {
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }
        $sitemapType = $data['sitemap_type'];
        $additionalLink = $data['additional_link'] ?? null;
        $baseUrl = base_url();
        $mapList = [
            $baseUrl
        ];
        // 合并单页链接
        // 合并文章链接
        // 合并产品链接
        // 合并附加数据
        $mapList = self::mergeAdditionalLink($mapList, $additionalLink);
        $mapData = [];
        foreach ($mapList as $item) {
            $mapData[] = [
                'loc' => $item,
                'lastmod' => date('Y-m-d'),
                'changefreq' => 'daily',
                'priority' => '1.0'
            ];
        }
        $sitemapType = json_decode($sitemapType, true);
        foreach ($sitemapType as $type) {
            $file = self::SITEMAP_NAME . '.' . strtolower($type);
            $map = match (strtolower($type)) {
                'xml' => self::formatXml($mapData),
                'txt' => self::formatTxt($mapData),
                'html' => self::formatHtml($mapData),
            };
            $res = self::writeFile($file, $map);
            if ($res !== true) {
                log_message('info', '生成{type}格式网站地图失败', ['type' => $type]);
                return sprintf('生成%s格式网站地图失败', $type);
            }
        }

        // 记录日志
        $logSvc = new LogService();
        $logSvc->info('生成网站地图', LogCategory::USER);

        // 保存配置
        $settings = [
            'sitemapType' => json_encode($sitemapType)
        ];
        if (!is_null($additionalLink)) {
            $settings['sitemapAdditionalLink'] = json_encode($additionalLink);
        }
        $settingSvc = new SettingService();
        $res = $settingSvc->updateSetting($settings);
        if ($res !== true) {
            log_message('info', '保存网站地图配置失败');
            return '保存网站地图配置失败';
        }
        return true;
    }

    /**
     * 合并附加链接
     * @param array $list 链接列表
     * @param string|null $additionalLink 附加链接
     * @return array
     */
    private function mergeAdditionalLink(array $list, ?string $additionalLink): array
    {
        if (!is_null($additionalLink)) {
            $links = json_decode($additionalLink, true);
            $list = array_merge($list, $links);
        }
        return $list;
    }

    /**
     * 格式化XML
     * @param array $data 数据
     * @return string
     */
    private function formatXml(array $data): string
    {
        $map = '<?xml version="1.0" encoding="utf-8"?>' . PHP_EOL;
        $map .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
        $map .= PHP_EOL;
        $map .= sprintf('<!-- Created By http://kumacms.com,  URLs:%d  Generated at: %s -->',
            count($data),
            Carbon::now()->toDateTimeString()
        );
        $map .= PHP_EOL;
        foreach ($data as $item) {
            $map .= PHP_EOL;
            $map .= <<<EOF
                <url>
                    <loc>{$item['loc']}</loc>
                    <lastmod>{$item['lastmod']}</lastmod>
                    <changefreq>{$item['changefreq']}</changefreq>
                    <priority>{$item['priority']}</priority>
                </url>
            EOF;
        }
        $map .= PHP_EOL;
        $map .= '</urlset>';
        return $map;
    }

    /**
     * 格式化TXT
     * @param array $data
     * @return string
     */
    private function formatTxt(array $data): string
    {
        $map = '';
        foreach ($data as $item) {
            $map .= $item['loc'];
            $map .= PHP_EOL;
        }
        return $map;
    }

    /**
     * 格式化HTML
     * @param array $data
     * @return string
     */
    private function formatHtml(array $data): string
    {
        return '';
    }

    /**
     * 写入文件
     * @param string $fileName 文件名
     * @param string $data 数据
     * @return bool
     */
    private function writeFile(string $fileName, string $data): bool
    {
        helper('filesystem');
        $file = self::SITEMAP_PATH . $fileName;
        if (!write_file($file, $data)) {
            return false;
        }
        return true;
    }

    /**
     * 准备数据
     * @param array $data
     * @return string|array
     */
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);

        $type = $data['sitemap_type'] ?? null;
        if (!is_null($type)) {
            $type = json_decode($type, true);
            foreach ($type as $item) {
                if (!in_array($item, self::SITEMAP_TYPE, true)) {
                    return '网站地图类型[sitemapType]无效';
                }
            }
        }
        return $data;
    }
}