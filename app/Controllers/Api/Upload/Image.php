<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/2/17
 * Time: 11:16
 */
declare(strict_types=1);

namespace App\Controllers\Api\Upload;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\MediaService;
use Exception;

class Image extends Base
{
    /**
     * 图片上传
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $uploadRules = [
            'uploaded[file]',
            'max_size[file,10240]',
            'max_dims[file,4096,4096]',
            'mime_in[file,image/png,image/jpg,image/jpeg]',
            'ext_in[file,png,jpg,jpeg,gif]',
            'is_image[file]'
        ];
        $rules = [
            'file' => [
                'rules' => implode('|', $uploadRules),
                'errors' => [
                    'uploaded' => '请上传正确的图片文件',
                    'max_size' => '图片最大支持10MB',
                    'max_dims' => '图片最大尺寸为4096*4096',
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
                throw new Exception('图片上传失败');
            }
            $data = [
                'code' => Code::OK,
                'message' => '图片上传成功',
            ];
            $data = array_merge($data, $image);
        } catch (Exception $e) {
            $data = [
                'code' => Code::FAIL,
                'message' => '图片上传失败',
            ];
            log_message('info', $e->getMessage());
        }
        $this->render($data);
    }
}