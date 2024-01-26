## 酷码CMS

基于Codeigniter4和React的快速建站系统

[官网](https://ponycool.com/cms/index)

[Demo](http://kumacms.com)

[管理后台Demo](http://kumacms.com/admin/#/login)

## 安装

### 系统要求

我们推荐服务器运行PHP 8.2或更高版本；数据库软件可采用MySQL 5.7或更高版本，也可采用MariaDB 10.3或更高版本。
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

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of
usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably
include in the README.

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
Core
ctype
curl
date
dom
fileinfo
filter
ftp
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

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address,
etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started.
Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps
explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce
the likelihood that the changes inadvertently break something. Having instructions for running tests is especially
helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## 鸣谢

[CodeIgniter4](https://github.com/codeigniter4/CodeIgniter4)

[Twig](https://twig.symfony.com/)

！[JetBrains标志（主）标志]（https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png）

## License

For open source projects, say how it is licensed.

## Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has
slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or
owner, allowing your project to keep going. You can also make an explicit request for maintainers.
