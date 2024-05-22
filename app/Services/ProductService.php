<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/17
 * Time: 08:07 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Product;
use App\Enums\DeletedStatus;

class ProductService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'cid' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数产品分类ID[cid]无效,产品分类ID必须为非零自然数',
                ]
            ],
            'name' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数产品名称[name]无效，字符长度不能超过200个字符',
                ]
            ],
            'coverImage' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数封面图片[coverImage]无效，字符长度不能超过50个字符',
                ]
            ],
            'detailImages' => [
                'rules' => 'if_exist|valid_json|max_length[500]',
                'errors' => [
                    'valid_json' => '参数详情图片[detailImages]无效，必须包含有效的JSON字符串',
                    'max_length' => '参数详情图片[detailImages]无效，字符长度不能超过500个字符',
                ]
            ],
            'seoTitle' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数产品SEO标题[seoTitle]无效，字符长度不能超过200个字符',
                ]
            ],
            'seoDesc' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数产品SEO描述[seoDesc]无效，字符长度不能超过200个字符',
                ]
            ],
            'seoKeywords' => [
                'rules' => 'if_exist|max_length[200]',
                'errors' => [
                    'max_length' => '参数SEO关键词[seoKeywords]无效，字符长度不能超过200个字符',
                ]
            ],
            'description' => [
                'rules' => 'if_exist|max_length[100000]',
                'errors' => [
                    'max_length' => '参数产品描述[description]无效，字符长度不能超过10万个字符',
                ]
            ],
            'price' => [
                'rules' => 'if_exist|numeric',
                'errors' => [
                    'numeric' => '参数产品价格[price]无效，必须为有效的数字',
                ]
            ],
            'stockQuantity' => [
                'rules' => 'if_exist|is_natural',
                'errors' => [
                    'is_natural' => '参数库存数量[stockQuantity]无效，必须为自然数',
                ]
            ],
            'sortIndex' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数排序索引[sortIndex]无效，必须为非零自然数',
                ]
            ],
            'status' => [
                'rules' => 'if_exist|in_list[true,false]',
                'errors' => [
                    'in_list' => '参数状态[status]无效，必须为"true"或"false"',
                ]
            ],
        ];
    }

    /**
     * 获取创建验证规则
     * @return array
     */
    public function getCreateRules(): array
    {
        $rules = [
            'cid' => [
                'rules' => 'required|is_natural_no_zero',
                'errors' => [
                    'required' => '参数产品分类ID[cid]无效,产品分类ID为必填项',
                    'is_natural_no_zero' => '参数产品分类ID[cid]无效,产品分类ID必须为非零自然数',
                ]
            ],
            'name' => [
                'rules' => 'required|max_length[200]',
                'errors' => [
                    'required' => '参数产品名称[name]无效，产品名称为必填项',
                    'max_length' => '参数产品名称[name]无效，字符长度不能超过200个字符',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取更新验证规则
     * @return array
     */
    public function getUpdateRules(): array
    {
        $rules = [
            'uuid' => [
                'rules' => 'required|min_length[35]|max_length[37]',
                'errors' => [
                    'required' => '参数产品UUID[uuid]为必填项',
                    'min_length' => '参数产品UUID[uuid]无效',
                    'max_length' => '参数产品UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 获取产品列表
     * @param array $params
     * @return array
     */
    public function getList(array $params): array
    {
        $page = (int)($params['page'] ?? 1);
        $pageSize = (int)($params['pageSize'] ?? 10);
        $cid = $params['cid'] ?? null;
        $name = $params['name'] ?? null;
        $categoryCode = $params['categoryCode'] ?? null;
        $keyword = $params['keyword'] ?? null;
        $isPage = $params['isPage'] ?? true;
        $limit = $params['limit'] ?? null;
        $sql = [
            'SELECT p.id,p.uuid,p.cid,p.name,p.cover_image,p.detail_images,p.seo_title,p.seo_desc,p.seo_keywords,',
            'p.description,p.price,p.stock_quantity,p.sort_index,p.status,p.view_count,p.created_at,p.updated_at,',
            'c.name as category_name,c.code as category_code ',
            'FROM swap_product AS p ',
            'LEFT JOIN swap_product_category AS c ON p.cid=c.id ',
            'WHERE p.deleted_at IS NULL ',
            'AND p.deleted = ? '
        ];
        $sqlParams = [
            DeletedStatus::UNDELETED->value
        ];
        if (!is_null($cid)) {
            $sql[] = 'AND p.cid = ? ';
            $sqlParams[] = $cid;
        }
        if (!is_null($name)) {
            $sql[] = 'AND p.name = ? ';
            $sqlParams[] = $name;
        }
        if (!is_null($categoryCode)) {
            $sql[] = 'AND c.code = ? ';
            $sqlParams[] = $categoryCode;
        }
        if (!is_null($keyword)) {
            $sql[] = 'AND p.name LIKE ? ';
            $sqlParams[] = '%' . $keyword . '%';
        }
        $sql[] = 'ORDER BY p.sort_index DESC,p.id DESC';
        if (!$isPage && !is_null($limit)) {
            $sql[] = ' LIMIT ' . $limit;
        }
        $sql = $this->assembleSql($sql);
        if ($isPage) {
            $res = $this->getPageByQuery($sql, $sqlParams, $page, $pageSize);
            if ($res['total'] > 0) {
                if (is_array($res['pageData'])) {
                    $res['pageData'] = self::mergeMedia($res['pageData']);
                }
            }
        } else {
            $this->setResultType('array');
            $res = $this->query($sql, $sqlParams);
            if (count($res) > 0) {
                $res = self::mergeMedia($res);
            }
        }
        return $res;
    }

    /**
     * 根据UUID获取产品
     * @param string $uuid
     * @return array|null
     */
    public function getByUUID(string $uuid): ?array
    {
        if ($this->validateUUID($uuid) !== true) {
            return null;
        }
        $res = $this->getFirstByUuid($uuid);
        if (count($res) > 0) {
            $res = self::mergeMedia([$res])[0];
        }
        return $res;
    }

    /**
     * 获取TOP产品列表
     * @param int $count
     * @return array
     */
    public function getTop(int $count = 10): array
    {
        $sql = [
            'SELECT ',
            implode(',', $this->getSelectFields()) . ' ',
            'FROM swap_product ',
            'WHERE deleted_at IS NULL ',
            'AND deleted=? ',
            'ORDER BY view_count DESC ',
            'LIMIT ?'
        ];
        $params = [
            DeletedStatus::UNDELETED->value,
            $count
        ];
        $sql = $this->assembleSql($sql);
        return $this->query($sql, $params);
    }

    /**
     * 创建产品
     * @param array $params
     * @return bool|string
     */
    public function create(array $params): bool|string
    {
        // 准备数据
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $product = new Product();
        $product->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($product);
        if ($res !== true) {
            return '创建产品失败';
        }
        return true;
    }

    /**
     * 更新产品
     * @param array $params
     * @return bool|string
     */
    public function update(array $params): bool|string
    {
        // 准备数据
        $data = self::prepare($params);
        if (is_string($data)) {
            return $data;
        }

        $raw = $this->getFirstByUuid($data['uuid']);
        if (empty($raw)) {
            return '产品UUID不存在';
        }

        $product = new Product();
        $product->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($product);
        if ($res !== true) {
            return '更新产品失败';
        }
        return true;
    }

    /**
     * 更新产品状态
     * @param string $uuid
     * @param int $status
     * @return true|string
     */
    public function updateStatus(string $uuid, int $status): true|string
    {
        $product = new Product();
        $product->setStatus($status);
        $res = $this->updateByUuid($product, $uuid);
        if ($res !== true) {
            return '更新产品状态失败';
        }
        return true;
    }


    /**
     * 删除产品
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '产品UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除产品失败';
        }
        return true;
    }

    /**
     * 准备数据
     * @param array $data
     * @return string|array
     */
    private function prepare(array $data): string|array
    {
        $data = $this->convertParamsToSnakeCase($data);

        if (!is_null($data['price'] ?? null)) {
            $data['price'] = (string)$data['price'];
        }

        // 校验图片
        $mediaSvc = new MediaService();
        $coverImageName = $data['cover_image'] ?? null;
        if (!is_null($coverImageName)) {
            $media = $mediaSvc->getByMediaName($coverImageName);
            if (empty($media)) {
                return '无效的封面图';
            }
            $data['cover_image'] = (int)$media['id'];
        }

        if (!is_null($data['detail_images'] ?? null)) {
            $detailImages = json_decode($data['detail_images'], true);
            $cond = [
                'file_name' => $detailImages
            ];
            $list = $mediaSvc->getByCond($cond);
            $detailList = [];
            if (!empty($list)) {
                foreach ($list as $item) {
                    foreach ($detailImages as $image) {
                        if ($item['file_name'] === $image) {
                            $detailList[] = (int)$item['id'];
                        }
                    }
                }
            }
            $data['detail_images'] = json_encode($detailList);
        }

        if (!is_null($data['status'] ?? null)) {
            $data['status'] = (int)($data['status'] === 'true');
        }

        // 如果存在浏览次数则移除，防止篡改
        if (!is_null($data['view_count'] ?? null)) {
            unset($data['view_count']);
        }

        return $data;
    }

    /**
     * 合并媒体
     * @param array $list
     * @return array
     */
    private function mergeMedia(array $list): array
    {
        $coverImageList = [];
        $detailImageList = [];
        foreach ($list as $item) {
            if (!is_null($item['cover_image'])) {
                $coverImageList[] = $item['cover_image'];
            }
            if (!is_null($item['detail_images'])) {
                $detailImages = json_decode($item['detail_images'], true);
                if (!is_array($detailImages)) {
                    continue;
                }
                $detailImageList = array_merge($detailImageList, $detailImages);
            }
        }

        $mediaSvc = new MediaService();
        if (!empty($coverImageList)) {
            $imageList = $mediaSvc->getMedia($coverImageList);
            foreach ($imageList as $img) {
                foreach ($list as &$item) {
                    if ($img['id'] === $item['cover_image']) {
                        $item['cover_image'] = $img['file_url'];
                    }
                }
            }
        }
        if (!empty($detailImageList)) {
            $imageList = $mediaSvc->getMedia($detailImageList);
            foreach ($imageList as $img) {
                foreach ($list as &$item) {
                    $detailImages = json_decode($item['detail_images'] ?? '[]', true);
                    if (!is_array($detailImages)) {
                        continue;
                    }
                    foreach ($detailImages as &$image) {
                        if ($img['id'] === $image) {
                            $image = $img['file_url'];
                        }
                    }
                    $item['detail_images'] = json_encode($detailImages);
                }
            }
        }

        return $list;
    }
}
