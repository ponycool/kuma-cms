<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/02/03
 * Time: 07:26 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\DeletedStatus;
use Exception;

class MediaService extends BaseService
{
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
}
