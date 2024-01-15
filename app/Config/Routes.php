<?php

use CodeIgniter\Router\RouteCollection;
use Config\CustomRoutes;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

// 自定义路由策略
$customRoutes = new CustomRoutes();
$customRoutes->handle();