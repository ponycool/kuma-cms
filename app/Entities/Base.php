<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2023/11/22
 * Time: 15:48
 */
declare(strict_types=1);

namespace App\Entities;

use CodeIgniter\Entity\Entity;
use Exception;
use Ramsey\Uuid\Uuid;

class Base extends Entity
{

    /**
     * 生成UUID
     * @return string
     * @throws Exception
     */
    public function generateUuid(): string
    {
        $uuid = '';
        try {
            $uuid = Uuid::uuid1()->toString();
        } catch (Exception $e) {
            log_message('error', 'uuid 生成器异常，error：{error}', ['error' => $e->getMessage()]);
        }
        return $uuid;
    }

    /**
     * 获取实体的所有属性
     * @return array
     */
    public function getProperties(): array
    {
        $data = $this->toRawArray(true);
        foreach ($data as $k => $v) {
            if (!property_exists($this, $k)) {
                unset($data[$k]);
            }
        }
        return $data;
    }

    /**
     * 获取实体的所有可更新属性
     * @return array
     */
    public function getUpdatableProperties(): array
    {
        $properties = $this->getProperties();
        return array_diff_key($properties, [
            'id' => '',
            'gid' => '',
            'uuid' => ''
        ]);
    }

    /**
     * 过滤无效属性
     * @return Base
     */
    public function filterInvalidProperties(): Base
    {
        $data = $this->toRawArray(true);
        foreach ($data as $k => $v) {
            if (!property_exists($this, $k)) {
                unset($this->$k);
            }
        }
        return $this;
    }

    /**
     * 填充数据，填充时会过滤无效数据
     * @param array $data
     * @return Base
     */
    public function fillData(array $data): Base
    {
        foreach ($data as $key => $value) {
            if (is_null($value)) {
                unset($data[$key]);
            }
            switch ($key) {
                case 'created_at':
                case 'updated_at':
                case 'deleted_at':
                case 'deleted':
                    unset($data[$key]);
                    break;
            }
        }
        $this->fill($data);
        return $this;
    }

    /**
     * 比对差异
     * @param array|object $target 比对目标
     * @param bool $strict 是否启用严格比对模式，严格比对模式会比对所有数据项，默认为false
     * @return bool
     */
    public function diff(array|object $target, bool $strict = false): bool
    {
        if (is_object($target)) {
            if (!$target instanceof $this) {
                return false;
            }
            $target = $target->toArray();
        }
        // 宽松模式过滤函数
        $filter = function (array $data): array {
            foreach ($data as $key => $value) {
                switch ($key) {
                    case 'id':
                    case 'gid':
                    case 'uuid':
                    case 'created_at':
                    case 'updated_at':
                    case 'deleted_at':
                    case 'deleted':
                        unset($data[$key]);
                        break;
                }
            }
            return $data;
        };

        $curr = $this->toArray();

        // 重新排序
        ksort($curr);
        ksort($target);

        if (!$strict) {
            // 宽松模式差异比较
            $curr = $filter($curr);
            $target = $filter($target);
            return ($curr == $target);
        }

        $currHash = hash('sha256', json_encode($curr));
        $targetHash = hash('sha256', json_encode($target));
        if ($currHash !== $targetHash) {
            return false;
        }
        return true;
    }
}