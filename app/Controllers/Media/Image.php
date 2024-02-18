<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/24
 * Time: 11:39
 */
declare(strict_types=1);

namespace App\Controllers\Media;

use App\Controllers\Base;
use CodeIgniter\Files\File;
use CodeIgniter\HTTP\ResponseInterface;

class Image extends Base
{
    /**
     * 输出图片
     * @return ResponseInterface
     */
    public function index(): ResponseInterface
    {
        $filename = $this->request->getGet('n');
        if (is_null($filename)) {
            exit();
        }
        $path = WRITEPATH . 'uploads/';
        $filePath = $path . $filename;
        if (!file_exists($filePath)) {
            exit();
        }
        $file = new File($filePath);
        $binary = readfile($filePath);
        return $this->response
            ->setHeader('Content-Type', $file->getMimeType())
            ->setHeader('Content-disposition', 'inline; filename="' . $file->getBasename() . '"')
            ->setStatusCode(200)
            ->setBody($binary);
    }
}