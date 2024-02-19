<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/19
 * Time: 16:06
 */
declare(strict_types=1);

namespace App\Controllers;

class Team extends Web
{
    public function index(): void
    {
        $this->setTemplate('team')
            ->render();
    }
}