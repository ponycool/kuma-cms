<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/21
 * Time: 15:11
 */
declare(strict_types=1);

namespace Config;

use CodeIgniter\Router\RouteCollection;

class CustomRoutes
{
    // 命名空间分隔符
    const NAMESPACE_DELIMITER = '\\';

    // 路由
    public RouteCollection $routes;
    public object $uri;
    // URI分段
    public array $segments;

    // 路由命名空间
    public string $ns;
    // 分隔符
    public string $separator = DIRECTORY_SEPARATOR;

    // 路由来路
    private string $from = '';
    // 路由去路
    private string $to = '';
    // 默认方法名
    private string $method = 'Index';

    public function __construct()
    {
        $this->routes = Services::routes();
        $this->uri = service('uri');
        $this->ns = $this->routes->getDefaultNamespace();
        $this->segments = $this->uri->getSegments();
    }


    /**
     * 路由处理
     * @return void
     */
    public function handle(): void
    {
        if (!is_cli()) {
            // 获取当前服务器系统
            $isWin = strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
            if ($isWin) {
                $this->separator = '/';
            }

            if (!empty($this->segments)) {
                $this->handleRouteChains();
                // 路由方法
                $method = $this->method;
                $from = $this->from;
                $to = $this->to;
                // 添加路由
                $to = sprintf('%s::%s', $to, $method);
                $this->routes->add($from, $to);
                $this->routes->add(sprintf('%s/(:any)', $from), $to);
            }
        }
    }

    /**
     * 处理路由链
     * @return void
     */
    private function handleRouteChains(): void
    {
        $controller = str_replace('\\', '/', ROOTPATH . lcfirst($this->ns));
        $controller .= '/';
        foreach ($this->segments as $k => $v) {
            $v = $this->formatSegment($v);
            $this->to .= $v;
            $controller .= $v;
            if (!is_dir($controller)) {
                if (array_key_exists($k + 1, $this->segments)) {
                    $this->method = ucfirst($this->segments[$k + 1]);
                    $this->method = $this->formatSegment($this->method);
                }
                break;
            }

            $this->to .= self::NAMESPACE_DELIMITER;
            $controller .= $this->separator;
        }

        // 单独处理来路
        $segments = $this->uri->getSegments();
        foreach ($segments as $s) {
            $this->from .= $s;
            $this->from .= $this->separator;
        }
    }

    /**
     * 格式化URI分段
     * 保持与目录格式一直，遵循双驼峰命名规范并去除下划线
     * @param string $segment
     * @return string
     */
    private function formatSegment(string $segment): string
    {
        // 替换路由中的中划线为下划线
        $segment = str_replace('-', '_', $segment);

        if (!strpos($segment, '_')) {
            return ucfirst($segment);
        }

        $words = explode('_', $segment);
        $words = implode(" ", $words);
        // 首字母转为大写
        $words = ucwords($words);
        return str_replace(" ", "", $words);
    }
}