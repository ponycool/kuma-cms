<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2024/4/24
 * Time: 上午10:59
 */
declare(strict_types=1);

namespace App\Enums;

enum MessageStatus: string
{
    // 初始状态，消息已创建但尚未发送
    case PENDING = "pending";
    // 消息已成功发送至服务器或中间件，等待进一步投递
    case SENT = "sent";
    // 消息已送达接收方的服务器或客户端，但尚未被用户查看
    case DELIVERED = "delivered";
    // 消息已被接收方查看或确认阅读
    case READ = "read";
    // 消息已撤回
    case WITHDRAWN = "withdrawn";
    // 消息已被发送方或接收方删除
    case DELETED = "deleted";
    // 消息已过期或被撤回，不再对用户可见
    case EXPIRED = "expired";
    // 消息发送失败，可能由于网络问题、接收方不存在、权限不足等原因
    case FAILED = "failed";
    // 消息因违反规定或被举报等原因被系统自动屏蔽或移除
    case BLOCKED = "blocked";
    // 消息正在排队等待发送，可能由于系统负载、发送速率限制等原因
    case QUEUED = "queued";
    // 消息处于草稿状态，尚未正式发送
    case DRAFT = "draft";

    // 消息被接收方拒收
    case REJECTED = "rejected";
}