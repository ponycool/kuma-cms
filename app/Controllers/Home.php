<?php
declare(strict_types=1);

namespace App\Controllers;

class Home extends Web
{
    public function index(): void
    {
        $this->render();
    }
}
