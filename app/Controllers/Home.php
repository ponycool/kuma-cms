<?php
declare(strict_types=1);

namespace App\Controllers;

class Home extends Web
{
    public function index(): void
    {
        $settings = self::getSettings();
        $title = '首页 - ' . $settings['site_name' ?? '酷码内容管理系统'];
        $description = $settings['site_description' ?? '酷码内容管理系统'];
        $keywords = $settings['site_keywords' ?? '酷码内容管理系统'];
        $this->setTitle($title)
            ->setDescription($description)
            ->setKeywords($keywords)
            ->setTemplate('home')
            ->setPage('home')
            ->render();
    }
}
