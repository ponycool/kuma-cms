<?php
/**
 * Created by PhpStorm.
 * User: Pony
 * Date: 2024/04/19
 * Time: 06:19 上午
 */
declare(strict_types=1);

namespace App\Services;

use App\Entities\Team;

class TeamService extends BaseService
{
    /**
     * 获取基础验证规则
     * @return array[]
     */
    public function getBaseRules(): array
    {
        return [
            'name' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数团队成员名称[name]无效，字符长度不能超过50个字符',
                ]
            ],
            'profileImage' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数封面图片[profileImage]无效，字符长度不能超过50个字符',
                ]
            ],
            'jobTitle' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数职位[jobTitle]无效，字符长度不能超过50个字符',
                ]
            ],
            'introduction' => [
                'rules' => 'if_exist|max_length[500]',
                'errors' => [
                    'max_length' => '参数团队成员介绍[introduction]无效，字符长度不能超过500个字符',
                ]
            ],
            'email' => [
                'rules' => 'if_exist|valid_email|max_length[50]',
                'errors' => [
                    'valid_email' => '参数电子邮箱[email]无效，必须是有效的电子邮箱地址',
                    'max_length' => '参数电子邮箱[email]无效，字符长度不能超过50个字符',
                ]
            ],
            'phone' => [
                'rules' => 'if_exist|max_length[50]',
                'errors' => [
                    'max_length' => '参数电话号码[phone]无效，字符长度不能超过50个字符',
                ]
            ],
            'joinedDate' => [
                'rules' => 'if_exist|valid_date[Y-m-d]',
                'errors' => [
                    'valid_date' => '参数加入日期[joinedDate]无效，必须为有效的日期',
                ]
            ],
            'sortIndex' => [
                'rules' => 'if_exist|is_natural_no_zero',
                'errors' => [
                    'is_natural_no_zero' => '参数排序索引[sortIndex]无效，必须为非零自然数',
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
            'name' => [
                'rules' => 'required|max_length[50]',
                'errors' => [
                    'required' => '参数团队成员名称[name]无效，团队成员名称为必填项',
                    'max_length' => '参数团队成员名称[name]无效，字符长度不能超过50个字符',
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
                    'required' => '参数团队成员UUID[uuid]为必填项',
                    'min_length' => '参数团队成员UUID[uuid]无效',
                    'max_length' => '参数团队成员UUID[uuid]无效',
                ]
            ],
        ];
        return array_merge(
            $this->getBaseRules(),
            $rules
        );
    }

    /**
     * 创建团队成员
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

        $team = new Team();
        $team->fill($data)
            ->filterInvalidProperties();

        $res = $this->insert($team);
        if ($res !== true) {
            return '创建团队成员失败';
        }
        return true;
    }

    /**
     * 更新团队成员
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
            return '团队成员UUID不存在';
        }

        $team = new Team();
        $team->fillData($data)
            ->filterInvalidProperties();

        $res = $this->updateByUuid($team);
        if ($res !== true) {
            return '更新团队成员失败';
        }
        return true;
    }

    /**
     * 删除团队成员
     * @param string $uuid
     * @return bool|string
     */
    public function del(string $uuid): bool|string
    {
        $raw = $this->getFirstByUuid($uuid);
        if (empty($raw)) {
            return '团队成员UUID不存在';
        }
        $id = (int)$raw['id'];
        $res = $this->delete($id);
        if ($res !== true) {
            return '删除团队成员失败';
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

        // 校验图片
        $mediaSvc = new MediaService();
        $profileImage = $data['profile_image'] ?? null;
        if (!is_null($profileImage)) {
            $media = $mediaSvc->getByMediaName($profileImage);
            if (empty($media)) {
                return '无效的档案图片';
            }
            $data['profile_image'] = (int)$media['id'];
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
        $imageList = [];
        foreach ($list as $item) {
            if (!is_null($item['profile_image'])) {
                $imageList[] = $item['profile_image'];
            }
        }

        $mediaSvc = new MediaService();
        if (!empty($imageList)) {
            $mediaList = $mediaSvc->getMedia($imageList);
            foreach ($mediaList as $img) {
                foreach ($list as &$item) {
                    if ($img['id'] === $item['profile_image']) {
                        $item['profile_image'] = $img['file_url'];
                    }
                }
            }
        }

        return $list;
    }
}
