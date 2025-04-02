<?php
/**
 * Created By PhpStorm
 * User: Pony
 * Data: 2025/3/26
 * Time: 15:58
 */
declare(strict_types=1);

namespace App\Enums;

enum OperationAction: string
{
    case QUERY = '查询';
    case INSERT = '新增';
    case UPDATE = '修改';
    case DELETE = '删除';
    case LOGIN = '登录';
    case REGISTER = '注册';
    case RECOVER_PASSWORD = '重置密码';
    case PAY = '支付';
    case DEBUG = '调试';
    case CANCEL = '取消';
    case CLEAR_CACHE = '清除缓存';
    case TRANSFER_OWNERSHIP = '转让所有权';
    case CLEAR_RUN_LOG = '清空运行日志';
}