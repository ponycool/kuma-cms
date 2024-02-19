<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/19
 * Time: 16:25
 */
declare(strict_types=1);

namespace App\Controllers;

class Error extends Web
{
    public function index(): void
    {
        $code = $this->request->getGet('code');
        $code = $code ?? 404;
        $this->setTemplate($code)
            ->render();
    }
}