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
                    'required' => '参数产品描述[description]无效，产品描述为必填项',
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
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数库存数量[stockQuantity]无效，必须为非零自然数',
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
}