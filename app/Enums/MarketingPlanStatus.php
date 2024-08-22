<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/8/22
 * Time: 10:54
 */
declare(strict_types=1);

namespace App\Enums;

enum MarketingPlanStatus: string
{
    // 表示该营销活动正处于计划阶段。这意味着活动尚未启动，正在筹备中，包括定义目标、策略、预算等。
    case PLANNING = '计划中';
    // 表示该营销活动正处于活动阶段。这意味着活动已经开始，正在进行中，包括执行计划、执行广告、收集数据等。
    case ACTIVE = '进行中';
    // 表示该营销活动已被暂停。这通常是因为某些原因需要暂时停止活动的执行，但未来可能重新启动。
    case PAUSED = '暂停中';
    // 表示该营销活动已完成。这意味着活动已经按照预定计划执行完毕，所有相关的行动都已结束。
    case COMPLETED = '已完成';
}
