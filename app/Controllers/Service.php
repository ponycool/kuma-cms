<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/19
 * Time: 08:42
 */
declare(strict_types=1);

namespace App\Controllers;

class Service extends Web
{
    public function index(): void
    {
        $this->setTemplate('service')
            ->setPage('service')
            ->render();
    }
}