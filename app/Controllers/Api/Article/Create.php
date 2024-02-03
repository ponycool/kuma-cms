<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/1/5
 * Time: 14:24
 */
declare(strict_types=1);

namespace App\Controllers\Api\Article;

use App\Controllers\Api\Base;

class Create extends Base
{
    public function index(): void
    {
        $this->render();
    }
}