<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/6
 * Time: 11:11
 */
declare(strict_types=1);

namespace App\Controllers;

use App\Services\ProductService;

class Product extends Web
{
    /**
     * 产品
     * @return void
     */
    public function index(): void
    {
        $uuid = $this->getParam('uuid');
        if ($this->validateUuid($uuid) === true) {
            self::detail($uuid);
        } else {
            self::list();
        }
    }

    /**
     * 产品列表
     * @return void
     */
    private function list(): void
    {
        $this->setTemplate('product-list')
            ->setPage('product-list')
            ->render();
    }

    /**
     * 产品详情
     * @param string $uuid
     * @return void
     */
    private function detail(string $uuid): void
    {
        $settings = self::getSettings();
        $data = [];
        $svc = new ProductService();
        $product = $svc->getByUUID($uuid);
        if (!empty($product) && $product['status'] === 1) {
            $data['product'] = $product;
            $title = empty($product['seo_title']) ? $product['name'] : $product['seo_title'];
            $title .= ' - ' . $settings['site_name'] ?? '';
            $description = empty($product['seo_desc']) ? $product['name'] : $product['seo_desc'];
            $keywords = $product['seo_keywords'] ?? '';
            if (!empty($keywords)) {
                if ($this->isJsonStr($keywords)) {
                    $keywords = implode(',', json_decode($keywords, true));
                }
            }
            // 更新浏览计数
            $svc->incrById((int)$product['id'], 'view_count');

            $this->setTitle($title)
                ->setDescription($description)
                ->setKeywords($keywords);
        }
        $this->setTemplate('product')
            ->setPage('product')
            ->render($data);
    }
}