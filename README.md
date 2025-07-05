<p align="center">
  <a href="https://cms.ponycool.com">
    <img src="https://cdn.static.ponycool.com/img/cms/favicon/favicon.0e7c7f8f.svg" width="130" />
  </a>
  <br />
  <b>酷码 CMS</b>
  <p align="center">基于Codeigniter4和React的快速企业建站系统</p>
  <p align="center">借助成熟的 Codeigniter4 与 React 技术栈，结合后端框架的高效数据处理能力与前端框架的出色交互体验，极大缩短开发周期，让企业能迅速拥有功能完备的网站，打造专业且优质的企业网站。</p>
  <p align="center">
    <a href="README_EN.md"><img alt="english" src="https://img.shields.io/static/v1.svg?label=&message=English&style=flat-square&color=ff5000"></a>
    <img src="https://img.shields.io/github/v/release/ponycool/kuma-cms" />
    <a href="https://github.com/ponycool/kuma-cms/stargazers"><img src="https://img.shields.io/github/stars/ponycool/kuma-cms" alt="Stars"/></a>
    <img alt="Codeigniter4" src="https://img.shields.io/static/v1.svg?label=&message=Codeigniter4&style=flat-square&color=C82B38">
    <img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=C82B38">
    <img src="https://img.shields.io/github/license/ponycool/kuma-cms" />
  </p>
</p>

## 酷码CMS

基于Codeigniter4和React的快速企业建站系统

[官网](https://cms.ponycool.com)

[Demo](http://kumacms.com)

[管理后台Demo](http://kumacms.com/admin/#/login)

用户名: admin
密码: kumacms

## 预览

#### WEB端

<img src="https://cdn.static.ponycool.com/img/cms/screenshot/web_screenshot_compressed.jpg" width="100%">

#### 管理后台

<img src="https://cdn.static.ponycool.com/img/cms/screenshot/admin_screenshot_compressed.png" width="100%">

## 安装

### 系统要求

我们推荐服务器运行PHP 8.2或更高版本；数据库软件默认SQLite3，也可采用MySQL 5.7或更高版本、MariaDB 10.3或更高版本。
我们也推荐Apache或Nginx作为运行KumaCMS的可靠选项，但您也可以选择其他HTTP服务器软件。

_⚠ 暂不支持PHP8.4_

### 使用docker运行

```shell
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 ponycool/kumacms:latest

# 国内源
sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 registry.cn-qingdao.aliyuncs.com/ponycool/kumacms:latest

# 数据持久化，请使用具名挂载的方式进行挂载
docker run -d -p 80:80 -v kumacms-data:/opt/kumacms/writable/data --name kumacms ponycool/kumacms:latest
#国内源
docker run -d -p 80:80 -v kumacms-data:/opt/kumacms/writable/data --name kumacms registry.cn-qingdao.aliyuncs.com/ponycool/kumacms:latest
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

## 支持

[Website](https://ponycool.com/cms/index)

[issue](https://github.com/ponycool/kuma-cms/issues)

Mail:pony@ponycool.com

## 鸣谢

[CodeIgniter4](https://github.com/codeigniter4/CodeIgniter4)

[Arco Design](https://github.com/arco-design/arco-design)

[React](https://reactjs.org/)

[Twig](https://twig.symfony.com/)

[UUID](https://github.com/ramsey/uuid)

[JetBrains](https://www.jetbrains.com/)

<img alt="JetBrains" height="80" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" width="80"/>

## License

Apache License 2.0
