## 酷码CMS

基于Codeigniter4和React的快速企业建站系统

[官网](https://ponycool.com/cms/index)

[Demo](http://kumacms.com)

[管理后台Demo](http://kumacms.com/admin/#/login)

用户名: admin
密码: kumacms

## 预览

#### WEB端

<img src="https://cdn.static.ponycool.com/img/cms/screenshot/web.png" width="100%">

#### 管理后台

<img src="https://cdn.static.ponycool.com/img/cms/screenshot/admin.png" width="100%">

## 安装

### 系统要求

我们推荐服务器运行PHP 8.2或更高版本；数据库软件默认SQLite3，也可采用MySQL 5.7或更高版本、MariaDB 10.3或更高版本。
我们也推荐Apache或Nginx作为运行KumaCMS的可靠选项，但您也可以选择其他HTTP服务器软件。

### 使用docker运行

```shell
# 数据持久化，请使用具名挂载的方式进行挂载
docker run -d -p 80:80 -v kumacms-data:/opt/kumacms/writable/data --name kumacms ponycool/kumacms:latest
```

## 使用

### 访问

安装成功后，通过浏览器访问KumaCMS

```
# 前台
地址: http://<KumaCMS服务器IP地址>:<服务运行端口>
# 后台
地址: http://<KumaCMS服务器IP地址>:<服务运行端口>/admin/#/login
用户名: admin
密码: kumacms
```

### 配置

JWT密钥，必须为32位随机字符串，示例如下：

jwt.secret = 0W************IZAa


### 编译镜像

```shell
# 编译镜像
make build
# 编译指定版本镜像
# make -e version=1.0.0 build
# 手动本地编译镜像
# docker build -t ponycool/kumacms:latest .
# 查看已经安装PHP模块，容器内执行
# php -m
# 镜像测试端口8080
# docker run -it --rm -p 9000:8080 --name kumacms ponycool/kumacms:latest
```

### 镜像已安装模块

```
[PHP Modules]
bcmath
Core
ctype
curl
date
dom
fileinfo
filter
gd
hash
iconv
intl
json
libxml
mbstring
mysqlnd
openssl
pcre
PDO
pdo_sqlite
Phar
posix
random
readline
Reflection
session
SimpleXML
sodium
SPL
sqlite3
standard
tokenizer
xml
xmlreader
xmlwriter
zlib
```

## 二次开发

#### 生成实体

```shell
php spark entity:generate
```

#### 生成模型

```shell
php spark model:generate
```

#### 生成服务

```shell
php spark service:generate
```

## 支持

[Website](https://ponycool.com/cms/index)

[issue](https://github.com/ponycool/kuma-cms/issues)

Mail:pony@ponycool.com

## 鸣谢

[CodeIgniter4](https://github.com/codeigniter4/CodeIgniter4)

[Twig](https://twig.symfony.com/)

[UUID](https://github.com/ramsey/uuid)

<img alt="JetBrains" height="80" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" width="80"/>

## License

Apache License 2.0
