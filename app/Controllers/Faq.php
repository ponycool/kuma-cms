<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/6
 * Time: 11:14
 */
declare(strict_types=1);

namespace App\Controllers;

class Faq extends Web
{
    /**
     * 常见问题
     * @return void
     */
    public function index(): void
    {
        $this->setTemplate('faq')
            ->setPage('faq')
            ->render();
    }
}