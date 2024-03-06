<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/19
 * Time: 11:14
 */
declare(strict_types=1);

namespace App\Controllers;

class Page extends Web
{
    public function index(): void
    {
        $code = $this->request->getGet('code');
        $data = [
            'isPage' => true
        ];
        $this->setData($data);
        if (is_null($code)) {
            $this->setTemplate('404')
                ->render();
        }
        $this->setTemplate($code)
            ->setPage('page')
            ->render();
    }
}