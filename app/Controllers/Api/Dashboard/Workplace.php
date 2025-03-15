<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/3/19
 * Time: 10:22
 */
declare(strict_types=1);

namespace App\Controllers\Api\Dashboard;

use App\Controllers\Api\Base;
use App\Enums\Code;
use App\Services\ArticleService;
use App\Services\LeadsService;
use App\Services\ProductService;
use App\Services\UserService;
use Carbon\Carbon;
use PonyCool\Core\SystemUtil;

class Workplace extends Base
{
    /**
     * 获取工作台数据
     * @return void
     */
    public function index(): void
    {
        $this->postFilter();
        $data = [
            'code' => Code::OK,
            'message' => '获取工作台数据成功',
        ];
        $systemUtil = new SystemUtil();
        // 文章数量
        $articleSvc = new ArticleService();
        $articleCount = $articleSvc->getCount();
        // 产品数量
        $productSvc = new ProductService();
        $productCount = $productSvc->getCount();
        // 线索数量
        $leadsSvc = new LeadsService();
        $leadsCount = $leadsSvc->getCount();
        // 用户数量
        $userSvc = new UserService();
        $userCount = $userSvc->getCount();
        // 近一年文章、产品浏览量
        $dt = Carbon::now();
        $cond = [
            'created_at >' => $dt->startOfYear()->toDateTimeString(),
            'created_at <' => $dt->endOfYear()->toDateTimeString(),
        ];
        $articleMonthly = $articleSvc->summarizeAndFillByMonth('view_count', where: $cond);
        $productMonthly = $productSvc->summarizeAndFillByMonth('view_count', where: $cond);
        // 文章、产品浏览Top10
        $topArticle = $articleSvc->getTop();
        $topProduct = $productSvc->getTop();
        // 文章类别占比分析
        $articleCategoryAnalysis = $articleSvc->categoryAnalysis();
        $data = array_merge(
            $data,
            [
                'version' => $this->version,
                'systemInfo' => $systemUtil::systemInfo(),
                'articleCount' => $articleCount,
                'productCount' => $productCount,
                'leadsCount' => $leadsCount,
                'userCount' => $userCount,
                'articleMonthly' => $articleMonthly,
                'productMonthly' => $productMonthly,
                'topArticle' => $topArticle,
                'topProduct' => $topProduct,
                'articleCategoryAnalysis' => $articleCategoryAnalysis
            ]
        );
        $this->render($data);
    }
}