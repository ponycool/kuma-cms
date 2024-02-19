<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/19
 * Time: 09:25
 */
declare(strict_types=1);

namespace App\Controllers;

class Cases extends Web
{
    public function index(): void
    {
        $this->setTemplate('case')
            ->render();
    }
}