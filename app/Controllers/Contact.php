<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/19
 * Time: 16:34
 */
declare(strict_types=1);

namespace App\Controllers;

class Contact extends Web
{
    public function index(): void
    {
        $this->setTemplate('contact')
            ->render();
    }
}