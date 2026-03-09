# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指引。

## 常用命令

```bash
# 运行测试
composer test

# 运行单个测试文件
vendor/bin/phpunit tests/path/to/TestFile.php

# CodeIgniter CLI
php spark [command]

# 代码生成
php spark create:entity
php spark create:model
php spark create:service

# Docker 构建
make build                        # 使用 'latest' 标签构建
make -e version=1.0.0 build       # 使用指定版本标签构建
```

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

原始 SQL 中使用 `swap_` 作为表前缀占位符，`assembleSql()` 会将其替换为实际前缀。

### API 控制器（`app/Controllers/Api/`）

所有 API 控制器继承 `App\Controllers\Api\Base`，该基类：
- 通过 `DetectMaliciousContentTrait` 检测恶意请求内容，发现可疑输入时返回 HTTP 403
- 通过 `apiAuth()` 提供 JWT 认证

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

### 关键路径

| 路径 | 用途 |
|------|------|
| `app/Controllers/Api/` | REST API 控制器 |
| `app/Services/` | 业务逻辑层 |
| `app/Models/` | 数据库模型（继承 BaseModel） |
| `app/Entities/` | 类型安全的数据对象 |
| `app/Enums/` | PHP 8.1 枚举常量 |
| `app/Traits/` | 共享行为（Core、Validation、Template、Security） |
| `app/Config/CustomRoutes.php` | 动态路由逻辑 |
| `writable/data/cms.db` | SQLite 数据库文件 |
| `public/admin/` | 编译后的 React 管理后台 |
| `deploy/conf/` | Nginx、PHP-FPM、supervisord 配置 |
