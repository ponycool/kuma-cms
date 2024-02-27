<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/02/03
 * Time: 07:26 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Media;
use App\Enums\DeletedStatus;
use CodeIgniter\HTTP\Files\UploadedFile;
use Config\Services;
use Exception;

class MediaService extends BaseService
{
    const HASH_ALGO = 'md5';

    /**
     * 获取媒体
     * @param string|array $id
     * @return array
     */
    public function getMedia(string|array $id): array
    {
        try {
            if (is_string($id)) {
                $cond = [
                    'id' => (int)$id,
                    'deleted' => DeletedStatus::UNDELETED->value
                ];
                return $this->getFirstByCond($cond);
            }
            if (is_array($id)) {
                $layers = 0;
                $count = 0;
                $medias = [];
                $mergeId = function ($id) use (&$layers, &$count, &$medias, &$mergeId) {
                    $layers++;
                    foreach ($id as $item) {
                        if (!is_string($item) && !is_array($item)) {
                            throw new Exception('存在无效的媒体ID');
                        }
                        if (is_string($item)) {
                            $medias[] = $item;
                            $count++;
                        }
                        if (is_array($item)) {
                            $mergeId($item, 2);
                        }
                    }
                };
                $mergeId($id);

                if ($count > 1000) {
                    log_message(
                        'warning',
                        '获取数据量超过最大限制，一次性最多可以获取1000个媒体资源，请检查并优化业务'
                    );
                }

                $allMedias = [];
                $rows = 100;
                $loopTimes = floor($count / $rows);
                // 如果$gid的长度不是100的倍数，循环次数加一
                if ($count % $rows != 0) {
                    $loopTimes++;
                }
                // 循环从$gid中取出100个元素，获取媒体资源数据
                for ($i = 0; $i < $loopTimes; $i++) {
                    // 取出$gid中的第i*100到第(i+1)*100个元素，赋值给$slice
                    $slice = array_slice($medias, $i * $rows, $rows);
                    $cond = [
                        'id' => $slice
                    ];
                    $allMedias = array_merge($allMedias, $this->getByCond($cond));
                }
                return $allMedias;
            }

            throw new Exception('无效的媒体GID');

        } catch (Exception $e) {
            log_message('info', '获取媒体失败，msg：{msg}',
                ['msg' => $e->getMessage()]
            );
            return [];
        }
    }

    /**
     * 根据媒体名称获取媒体
     * @param string $name
     * @return array
     */
    public function getByMediaName(string $name): array
    {
        $cond = [
            'file_name' => $name
        ];
        return $this->getFirstByCond($cond);
    }

    /**
     * 上传媒体文件
     * @param string $filename
     * @return array|null
     */
    public function upload(string $filename): ?array
    {
        try {
            $request = Services::request();
            $file = $request->getFile($filename);
            if (is_null($file)) {
                return null;
            }
            if (!$file->isValid()) {
                throw new Exception($file->getErrorString() . '(' . $file->getError() . ')');
            }
            $fileInfo = $this->getUploadFileInfo($file);
            if (!$file->hasMoved()) {
                // 持久化到本地
                $durableRes = $this->durableUploadFile($file);
                if (!is_null($durableRes)) {
                    $fileInfo = array_merge($fileInfo, $durableRes);
                }
            }
            return $fileInfo;
        } catch (Exception $e) {
            log_message('error', $e->getMessage());
            return null;
        }
    }

    /**
     * 获取上传文件信息
     * @param UploadedFile $file
     * @return array
     */
    public function getUploadFileInfo(UploadedFile $file): array
    {
        $hash = hash_file(self::HASH_ALGO, $file->getTempName());
        // 如果是图片获取图片缩略图和高度、宽度
        $fileType = $this->getFileTypeByMimeType($file->getMimeType());
        if ($fileType === 'image') {
            list($width, $height) = getimagesize($file->getTempName());
        }
        $fileInfo = [
            'name' => $file->getName(),
            'path' => $file->getPath(),
            'ext' => $file->getExtension(),
            'mimeType' => $file->getMimeType(),
            'size' => $file->getSize(),
            'sizeByUnit' => $file->getSizeByUnit('MB') . 'MB',
            'width' => $width ?? 0,
            'height' => $height ?? 0,
            'type' => $fileType,
            'original' => [
                'fileName' => $file->getClientName(),
                'tempPath' => $file->getTempName(),
                'ext' => $file->getClientExtension(),
                'mimeType' => $file->getClientMimeType()
            ],
            'hash' => $hash,
        ];
        if ($fileType !== 'image') {
            $fileInfo = array_diff_key($fileInfo, ['width' => 0, 'height' => 0]);
        }
        return $fileInfo;
    }

    /**
     * 持久化上传文件
     * @param UploadedFile $file 上传文件
     * @return array|null 持久化后文件信息
     */
    public function durableUploadFile(UploadedFile $file): ?array
    {
        if ($file->isValid() && !$file->hasMoved()) {
            $hash = hash_file(self::HASH_ALGO, $file->getTempName());
            $service = new MediaService();
            $cond = [
                'hash' => $hash,
                'hash_alg' => self::HASH_ALGO,
            ];
            $queryRes = $service->getFirstByCond($cond);
            if (count($queryRes) === 0) {
                // 插入
                $newFileName = $file->getRandomName();
                $newFilePath = WRITEPATH . 'uploads/';
                $fileType = $this->getFileTypeByMimeType($file->getMimeType());
                $resourcePath = '/media/' . $fileType . '?n=' . $newFileName;
                $media = new Media();
                $media->setFileName($newFileName)
                    ->setType($fileType)
                    ->setSize($file->getSize())
                    ->setSizeByUnit($file->getSizeByUnit('mb') . 'MB')
                    ->setHash($hash)
                    ->setHashAlg(self::HASH_ALGO)
                    ->setExts($file->getExtension())
                    ->setMimeType($file->getMimeType())
                    ->setFileUrl($resourcePath)
                    ->setStatus('normal');
                // 获取当前用户
                $accountID = $this->getLoginAccountID();
                if (!is_null($accountID)) {
                    $userSvc = new UserService();
                    $user = $userSvc->getByAccountID($accountID);
                    $creator = $user['id'] ?? null;
                    if (!is_null($creator)) {
                        $media->setCreator($creator);
                    }
                }
                $res = $service->insert($media);
                if ($res) {
                    $file->move($newFilePath, $newFileName);
                    return [
                        'hash' => $hash,
                        'name' => $newFileName,
                        'path' => $resourcePath,
                    ];
                }
            }
            return [
                'hash' => $hash,
                'name' => $queryRes['file_name'],
                'path' => $queryRes['file_url'],
            ];
        }
        return null;
    }
}
