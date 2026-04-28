# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 常用命令

```bash
# CodeIgniter CLI
php spark [command]

# 启动开发服务器
php spark serve

# 代码生成
php spark create:entity
php spark create:model
php spark create:service

# Docker 构建
make build                        # 使用 'latest' 标签构建
make -e version=1.0.0 build       # 使用指定版本标签构建
```

> 测试：本仓库尚未配置测试。仓库内不存在 `tests/` 目录与 `phpunit.xml`，`composer test` 当前会失败。新增测试需先创建测试目录与 PHPUnit 配置。

## 架构说明

**KumaCMS** 是基于 CodeIgniter 4（PHP 8.3+）构建的企业级 CMS，管理后台采用 React + Arco Design。

### 请求流程

```
HTTP → /public/index.php → CustomRoutes.php（动态路由）→ Controller → Service → Model/DB → Response
```

### 自定义路由（`app/Config/CustomRoutes.php`）

路由根据 URI 段动态解析，无需手动注册路由。URI 段从 kebab-case 转换为 PascalCase，以匹配控制器类/目录名和方法名。例如：
- `/api/article/list` → `App\Controllers\Api\Article::List`
- `/api/article-category/add` → `App\Controllers\Api\ArticleCategory::Add`

### 服务层（`app/Services/`）

所有业务逻辑位于 Service 中。`BaseService` 在实例化时自动配置：
- **数据库**：SQLite3，路径为 `writable/data/cms.db`，表前缀 `m_`
- **表名**：从类名自动推导（`ArticleService` → `article` 表）
- **Model**：自动发现 `App\Models\` 中的 `{Name}Model`

`BaseService` 已经是完整的 CRUD 工具集，子 Service 应直接调用，不要重新实现分页 / 软删除等逻辑：

| 类别 | 方法 |
|------|------|
| 写入 | `insert`、`insertBatch` |
| 更新 | `updateById`、`updateByUuid`、`updateByCond`、`updateBatch`、`incrById` |
| 删除（软删除） | `delete`、`deleteByCond`、`batchDelByIds` |
| 查询 | `getByCond`、`getFirstById`、`getFirstByUuid`、`getFirstByUlid`、`getWhere`、`getOrWhere`、`getCount` |
| 分页 | `getPage`、`getPageByQuery` |
| 报表汇总 | `monthlyCount`、`summarizeAndFillByMonth` |
| 辅助 | `buildConditions`（构造 WHERE 数组，支持 `groupStart` / `orWhere` / `like` 等标记）、`verificationData`（实体校验）、`assembleSql`、`prepareSql` |

原始 SQL 中使用 `swap_` 作为表前缀占位符，任何传给 `assembleSql()` 的 SQL 数组都必须使用该占位符（`monthlyCount` / `summarizeAndFillByMonth` 是范例），`assembleSql()` 会将其替换为实际前缀。

### API 控制器（`app/Controllers/Api/`）

所有 API 控制器继承 `App\Controllers\Api\Base`，该基类：
- 通过 `DetectMaliciousContentTrait` 检测恶意请求内容，发现可疑输入时返回 HTTP 403
- 通过 `apiAuth()` 提供 JWT 认证

**开放 API 约定**：当 URI 第二段为 `open` 时（即 `/api/open/...`），`apiAuth()` 会跳过 JWT 校验。新的免认证接口必须放在 `app/Controllers/Api/Open/` 目录下。

### 软删除

所有表均使用软删除：`deleted`（int，使用 `DeletedStatus` 枚举）和 `deleted_at`（datetime）。BaseService 的删除方法会设置这些字段，而非直接删除记录。

### 代码生成

新增资源时，使用以下命令生成脚手架：
```bash
php spark create:service   # 创建 Service + Model + Entity
php spark create:model     # 仅创建 Model
php spark create:entity    # 仅创建 Entity
```

控制器必须放置在 `app/Controllers/Api/{Name}.php`，路由会自动识别。

### 管理后台

`public/admin/` 是已经编译好的 React + Arco Design 产物，**源码不在本仓库**。不要尝试在此仓库里 `npm install` 或构建管理后台。

### 环境配置

- `.env.dev` 是当前生效的开发环境配置（CI4 以 `.env` 形式加载）
- 仓库根目录的 `env` 文件只是 CodeIgniter 注释掉的示例模板，并非运行配置

### 关键路径

| 路径 | 用途 |
|------|------|
| `app/Controllers/Api/` | REST API 控制器 |
| `app/Controllers/Api/Open/` | 免 JWT 鉴权的开放 API |
| `app/Services/` | 业务逻辑层 |
| `app/Models/` | 数据库模型（继承 BaseModel） |
| `app/Entities/` | 类型安全的数据对象 |
| `app/Enums/` | PHP 8.1 枚举常量 |
| `app/Traits/` | 共享行为（Core、Validation、Template、Security） |
| `app/Config/CustomRoutes.php` | 动态路由逻辑 |
| `writable/data/cms.db` | SQLite 数据库文件 |
| `public/admin/` | 编译后的 React 管理后台（源码不在本仓库） |
| `deploy/conf/` | Nginx、PHP-FPM、supervisord 配置 |
