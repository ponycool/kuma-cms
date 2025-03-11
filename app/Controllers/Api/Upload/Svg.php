<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/3/5
 * Time: 15:31
 */
declare(strict_types=1);

namespace App\Controllers\Api\Upload;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MediaService;
use Exception;

class Svg extends Base
{
    public function index(): void
    {
        $this->postFilter();
        $uploadRules = [
            'uploaded[file]',
            'max_size[file,10240]',
            'mime_in[file,image/svg+xml]',
            'ext_in[file,svg]',
            'is_image[file]'
        ];
        $rules = [
            'file' => [
                'rules' => implode('|', $uploadRules),
                'errors' => [
                    'uploaded' => '请上传正确的图片文件',
                    'max_size' => '图片最大支持10MB',
                    'mime_in' => '图片类型不支持',
                    'ext_in' => '图片扩展名不支持',
                    'is_image' => '图片必须为图片'
                ]
            ],
        ];
        $this->validInput($rules);
        try {
            $svc = new MediaService();
            $image = $svc->upload('file');
            if (is_null($image)) {
                throw new Exception('SVG图片上传失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => 'SVG图片上传成功',
            ];
            $data = array_merge($data, $image);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => 'SVG图片上传失败',
            ];
            log_message('info', $e->getMessage());
        }
        $this->render($data);
    }
}