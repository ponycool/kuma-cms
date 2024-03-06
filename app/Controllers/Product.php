<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/6
 * Time: 11:11
 */
declare(strict_types=1);

namespace App\Controllers;

class Product extends Web
{
    /**
     * 产品
     * @return void
     */
    public function index(): void
    {
        $this->setTemplate('product')
            ->setPage('product')
            ->render();
    }

    /**
     * 产品列表
     * @return void
     */
    public function list(): void
    {
        $this->setTemplate('product_list')
            ->setPage('product_list')
            ->render();
    }
}