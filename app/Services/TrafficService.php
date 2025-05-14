<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/5/9
 * Time: 15:33
 */
declare(strict_types=1);

namespace App\Services;

use App\Enums\SearchEngine;
use App\Enums\TrafficSource;

class TrafficService extends BaseService
{
    /**
     * 获取流量来源
     * @return string
     */
    public function getTrafficSource(): string
    {
        $request = service('request');
        $agent = $request->getUserAgent();
        // 如果来自其他网站的推荐
        if ($agent->isReferral()) {
            $referer = $agent->getReferrer();
            $uri = service('uri', $referer);
            $host = $uri->getHost();
            $sourceList = [];
            foreach (TrafficSource::cases() as $case) {
                $sourceList[] = $case->name;
            }
            foreach (SearchEngine::cases() as $engine) {
                if (str_contains($host, $engine->value)) {
                    if (in_array($engine->name, $sourceList)) {
                        return $engine->name;
                    } else {
                        return TrafficSource::UNKNOWN->name;
                    }
                }
            }
            return TrafficSource::UNKNOWN->name;
        }
        // 如果不是来自其他网站的推荐
        $trafficSource = $request->getGetPost('traffic_source');
        if (!empty($trafficSource)) {
            return $trafficSource;
        }
        return TrafficSource::DIRECT->name;
    }
}