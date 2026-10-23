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

## 编码规范

> 以下规则从同栈姊妹项目（CI4 + BaseService 架构）提炼并按 KumaCMS 实际基础设施（SQLite、`Base::render()`、`LogService(LogCategory)` 签名等）校准而来。

### Service 层约定

- `app/Services/` 下所有类**必须** `extends BaseService`；命名以 `Resolver`、`Renderer`、`Publisher` 等结尾的"工具型"类也视作 Service，同样继承 BaseService。
- 获取数据库连接**只用 `$this->getDb()`**，**禁止** `\Config\Database::connect('default')`、`service('database')` 等绕过 BaseService 的方式（`getDb()` 是项目统一入口）。
- 业务逻辑（数据转换、DB 操作、缓存、日志等）全部在 Service；控制器只负责请求过滤、参数校验、调用 Service、返回结果，不含业务逻辑。
- Service 操作 DB 优先用 BaseService 现成方法（见架构说明的 CRUD 表），其次 Query Builder，再次 Model/Entity，最后才考虑其他方式；不要重新实现分页 / 软删除等已有逻辑。

### Service 写操作错误处理

- 写操作方法（`create`/`update`/`del` 等）对底层写入失败（`insert()`/`updateById()` 返回 `false` 或受影响行为 0）**必须主动 `throw new Exception(...)`**，**不得**把 `bool false` 作为失败信号向上返回。
- 成功路径才返回（一般返回 `true`），失败一律抛异常；控制器只用 `try/catch` 包裹 Service 调用，不再做 `if ($res !== true) throw ...` 兜底。

```php
// Service 内部
$res = $this->insert($entity);
if (!$res) {
    throw new Exception('创建 Foo 失败');
}
// ... 日志等后续动作 ...
return true;
```

### Entity 使用规范

- 填充实体用 `fillData()`（**不用** `fill()`）：`fillData()` 自动过滤 null、转换类型、忽略时间戳字段。
- `fillData()` 后**必须**接 `filterInvalidProperties()` 过滤无效属性；更新时再 `setId($id)`。

```php
$entity->fillData($data)
    ->filterInvalidProperties();
// 更新
$entity->fillData($data)
    ->filterInvalidProperties()
    ->setId($id);
```

### 数据库事务规范

- **禁止**在 `try/catch` 中使用 `transStart()/transComplete()`（`transComplete` 在异常跳过时会让事务悬空，且对 PHP 业务异常无感知）。
- **必须**用 `transBegin()/transCommit()/transRollback()`；事务内所有 Model 传入**同一个 `$db` 实例**。
- **禁止**在事务内调用 `$this->insert()`、`$this->updateById()` 等 BaseService 方法（内部使用独立连接，不在当前事务范围），应直接用传入的 `$db` 或 Model 实例操作。

```php
$db = $this->getDb();
$db->transBegin();
try {
    $fooModel = new FooModel($db);
    // ... DB 操作，业务异常用 throw 抛出
    $db->transCommit();
} catch (Exception $e) {
    $db->transRollback();
    log_message('error', '操作失败，err：{err}', ['err' => $e->getMessage()]);
}
```

### 校验规则结构

- 验证类覆写 `getBaseRules()`，把所有业务字段以 `if_exist` 形式写入作为兜底，再由具体方法按需覆盖为 `required`；通过 `parent::getBaseRules()` 继承 `ValidationRuleTrait` 内置的 `page`/`page_size`/`keyword` 等通用规则。
- 优先复用 `app/Validation/Rules.php` 中已定义的自定义规则，不重复造规则。

```php
public function getQueryRules(): array
{
    return self::getBaseRules();
}

public function getCreateRules(): array
{
    $rules = [
        'name' => ['rules' => 'required|max_length[50]', 'errors' => [/* ... */]],
    ];
    return array_merge(self::getBaseRules(), $rules);
}

protected function getBaseRules(): array
{
    $rules = [
        'name' => ['rules' => 'if_exist|max_length[50]', 'errors' => [/* ... */]],
    ];
    return array_merge(parent::getBaseRules(), $rules);
}
```

### 操作日志

- 写操作（新增 / 更新 / 删除）成功后用 `LogService` 记录日志，**仅在成功时记录**（`if ($res)`）。
- KumaCMS 的 `LogService` 方法签名为 `info(string $message, LogCategory $category = LogCategory::SYSTEM, ?int $uid = null)`（同理 `debug`/`warn`/`error`），用 `LogCategory` 枚举分类，**不接收** `OperationAction` 或 `data:` 参数——日志正文写进 `$message` 字符串。

```php
if ($res) {
    $logSvc = new LogService();
    $logSvc->info('新增文章：' . $entity->getTitle(), LogCategory::SYSTEM, $uid);
}
```

### API 响应组装（`Base::render()`）

- 控制器统一通过 `render()` 输出。`render()` 会把传入数组里**除 `code`/`message` 外的所有剩余键自动包进 `data`**，因此：
  - **不要**手动加 `'data' => $detail`，否则会双层嵌套成 `data: { data: detail }`；
  - 业务字段直接平铺传入（如 `'list' => $rows`、`'detail' => $entity`），由 `render()` 收进 `data`。
- 入口侧 `convertParamsToSnakeCase()` 已把请求参数从 camelCase 自动转 snake_case 供校验，调用方无需手动转；校验规则键名用 snake_case。

```php
$data = [
    'code'    => Code::OK,
    'message' => '获取成功',
    'list'    => $rows,          // 自动收进 data，勿写成 'data' => ['list' => $rows]
];
$this->render($data);
```

### 设计模式优先 / 反过度设计

- 满足业务是底线；当成熟设计模式能带来明显的优雅 / 可读 / 可扩展 / 可测收益时优先采用，而非堆砌过程式代码。
- 同等力气也用来识别**过度设计**：单实现强抽工厂/策略接口、简单 array 硬包 Value Object、`enum + match` 已能表达却改写成 N 个策略类、3 行逻辑硬拆多层 Pipeline 等一律禁止。
- 项目内已有同款模式实现的，沿用其结构，不平行重发明；匹配 PHP 8.3 + CI4 栈，不强套 Java DDD / Go 风格。
- 检验：删掉抽象后代码是否反而更易读？跳转跳数是否变多？新人是否 >5 分钟才读懂？命中任一则重新评估。

### 并发处理：post-insert recheck

单条 INSERT 走 `BaseService::insert()` 且表有 UNIQUE 约束时，用 **post-insert recheck** 兜底并发竞态：

```php
$dupCheckCond = [
    'account_id' => $accountId,
    'scene_id'   => $sceneId,
    'deleted'    => 0,
];
$existing = $this->getFirstByCond($dupCheckCond);
if (!empty($existing)) {
    throw new Exception('XXX 已存在');
}
$res = $this->insert($entity);
if (!$res) {
    // race 兜底：BaseService::insert 内部 catch Exception 吞掉 UNIQUE 冲突直接返 false，
    // 上层无法按异常类型区分 race；recheck 通过"是否已存在"反推是否为并发竞态
    $recheck = $this->getFirstByCond($dupCheckCond);
    if (!empty($recheck)) {
        throw new Exception('XXX 已存在');
    }
    throw new Exception('XXX 创建失败');
}
```

适用前提：单条 INSERT、不需事务、表有 UNIQUE 约束作最终兜底、走 `BaseService::insert()`。理由：`insert()` 内部吞掉了底层 DatabaseException 直接返 `false`，无法按异常类型区分"并发重复"与"真失败"，故先查重 → 插入 → 失败再 recheck，用"已存在与否"区分两者。

> 注：emp 项目另有"catch DatabaseException 1062"、"乐观锁 `WHERE status=X`"、"MySQL `GET_LOCK` 命名锁"三种模式，均依赖 MySQL 特性；KumaCMS 基于 SQLite，不适用，故仅采纳 recheck 模式。批量 INSERT / 跨表互斥等场景如确有需要，再按 SQLite 能力另行设计。

## 代码风格

- **禁止**完全限定类名（如 `new \App\Models\FooModel()`），必须在文件顶部 `use` 导入后用短名。
- 方法参数为数组且元素 **>1** 时，提取为变量、每元素单独占一行后再传入。
- **禁止**"方法套方法"——把方法/函数调用结果直接作为另一方法的参数；先用语义化变量接收返回值再传入。
  - 例外：类型转换 / 单参数内建函数（`intval`/`(int)`/`trim`/`count` 等）、框架短路 helper（`service('request')->getMethod()`）、fluent builder 自身链式。
- **链式调用 ≥2 个 `->` 必须换行**，每个 `->method()` 单独占一行并对齐缩进；单步调用或两段式框架取值 helper 可单行。
- `json_encode` 不内联在方法调用中，单独一行赋值给变量再传入；其入参数组 >1 元素时同样先提取逐行。
- 类中方法按访问修饰符排列：`public → protected → private`。

```php
// 数组参数提取 + 不嵌套
$cond = [
    'id !='      => $id,
    'ip_address' => $ipAddress,
];
$result = $this->getFirstByCond($cond);

// 链式换行
$entity->fillData($data)
    ->filterInvalidProperties()
    ->setId($id);
```

## 命名规范

遵循 PSR，并要求达到"信（准确不歧义）、达（通顺自然）、雅（业务语义清晰）"：

| 场景 | 规范 | 示例 |
|------|------|------|
| 类 / 接口 / Trait / 枚举 | PascalCase | `ArticleService`、`OperationAction` |
| 方法 / 函数 | camelCase | `getArticleById()` |
| 局部变量 / 参数 | camelCase | `$articleId`、`$pageSize` |
| 常量 / 枚举 case | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT`、`Status::IN_PROGRESS` |
| 类文件名 | 与类名一致的 PascalCase | `ArticleService.php` |
| 数据库字段 / 数组键 / API JSON 字段 | snake_case | `article_id`、`page_size` |

- **动作动词独立成类**，不要复合动词或状态切换：`ToggleEnabled` → 拆 `Enable` + `Disable`；`Review` → 拆 `Approve` + `Reject`。每个控制器只承载一种业务意图，路径即语义。
- **业务语义优先于技术词**；表名 / 类名描述"是什么"（名词），动作动词留给 API 控制器层。
- **路径层级反映领域，不用动词作目录**：`Foo/Bar/MarkPaid.php`（动作平铺）而非 `Foo/Bar/Mark/Paid.php`。
- 命名在代码评审（`/review`、PR、本地 diff）中作为独立检查项，与正确性、安全性同级，不达标一律给修改建议。

## 受保护的基础设施文件

以下文件是全部 Entity / Model / Service 的"地基"，**任何改动前必须先经用户确认**，禁止直接编辑后再汇报：

- `app/Entities/Base.php` —— 所有 Entity 父类（`fillData`/`filterInvalidProperties` 等核心机制）
- `app/Models/BaseModel.php` —— 所有 Model 父类
- `app/Services/BaseService.php` —— 所有业务 Service 父类（DB 模式、分页、CRUD helper）

工作流：发现需改这些文件时**先停下**，列出"为什么必须改 / 有哪些替代方案 / 各方案影响面"，等用户明确"按方案 X 改"后再动手；临时调试改动也要先说明意图。

## 自动生成文件

- `app/Entities/`、`app/Models/` 下的文件由 `php spark create:*` 脚手架生成；如需适配类型问题，在 Service 层处理，**不要手动修改 Entity / Model**。

## Git 提交

- commit message 使用中文。
