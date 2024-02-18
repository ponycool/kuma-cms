<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/18
 * Time: 16:45
 */
declare(strict_types=1);

namespace App\Controllers;

class About extends Web
{
    public function index(): void
    {
        $this->setTemplate('about')
            ->render();
    }
}