<p align="center">
  <a href="https://cms.ponycool.com">
    <img src="https://cdn.static.ponycool.com/img/cms/favicon/favicon.0e7c7f8f.svg" width="130" />
  </a>
  <br />
  <b>Kuma CMS</b>
  <p align="center">A rapid enterprise website building system based on Codeigniter4 and React</p>
  <p align="center">Leveraging the mature technology stack of Codeigniter4 and React, combining the efficient data - handling capabilities of the backend framework with the excellent interactive experience of the frontend framework, it significantly shortens the development cycle, enabling enterprises to quickly have a fully - functional website and create a professional and high - quality enterprise website.</p>
  <p align="center">
    <a href="README.md"><img alt="chinese" src="https://img.shields.io/static/v1.svg?label=&message=Chinese&style=flat-square&color=ff5000"></a>
    <img src="https://img.shields.io/github/v/release/ponycool/kuma-cms" />
    <a href="https://github.com/ponycool/kuma-cms/stargazers"><img src="https://img.shields.io/github/stars/ponycool/kuma-cms" alt="Stars"/></a>
    <img alt="Codeigniter4" src="https://img.shields.io/static/v1.svg?label=&message=Codeigniter4&style=flat-square&color=C82B38">
    <img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=C82B38">
    <img src="https://img.shields.io/github/license/ponycool/kuma-cms" />
  </p>
</p>

## Kuma CMS

A rapid enterprise website building system based on Codeigniter4 and React

[Official Website](https://cms.ponycool.com)

[Demo](http://kumacms.com)

[Admin Dashboard Demo](http://kumacms.com/admin/#/login)

Username: admin
Password: kumacms

## Preview

#### Web

<img src="https://cdn.static.ponycool.com/img/cms/screenshot/web_screenshot_compressed.jpg" width="100%">

#### Admin Dashboard

<img src="https://cdn.static.ponycool.com/img/cms/screenshot/admin_screenshot_compressed.png" width="100%">

## Installation

### System Requirements

We recommend running PHP 8.2 or higher on the server; the default database software is SQLite3, but you can also use MySQL 5.7 or higher, or MariaDB 10.3 or higher.
We also recommend Apache or Nginx as reliable options for running KumaCMS, but you can choose other HTTP server software.

_⚠ PHP8.4 is not supported yet._

### Run with Docker

```shell
sudo docker run -d --restart=unless - stopped -p 80:80 -p 443:443 ponycool/kumacms:latest

# Domestic source
sudo docker run -d --restart=unless - stopped -p 80:80 -p 443:443 registry.cn - qingdao.aliyuncs.com/ponycool/kumacms:latest

# Data persistence, please use named volume mounting

# Data persistence, please use named volume mounting
Docker run -d -p 80:80 -v kumacms - data:/opt/kumacms/writable/data --name kumacms ponycool/kumacms:latest
# Domestic source
Docker run -d -p 80:80 -v kumacms - data:/opt/kumacms/writable/data --name kumacms registry.cn - qingdao.aliyuncs.com/ponycool/kumacms:latest
```

## Usage

### Access

After successful installation, access KumaCMS through a browser.

```
# Front - end
Address: http://<KumaCMS Server IP Address>:<Service Port>
# Back - end
Address: http://<KumaCMS Server IP Address>:<Service Port>/admin/#/login
Username: admin
Password: kumacms
```

### Configuration

The JWT secret key must be a 32 - character random string. An example is as follows:

jwt.secret = 0W************IZAa

### Build Image

```shell
# Build the image
make build
# Build the image with a specified version
# make -e version=1.0.0 build
# Manually build the image locally
# docker build -t ponycool/kumacms:latest .
# View installed PHP modules (execute inside the container)
# php -m
# Test the image on port 8080
# docker run -it --rm -p 9000:8080 --name kumacms ponycool/kumacms:latest
```

## Support

[Website](https://ponycool.com/cms/index)

[issue](https://github.com/ponycool/kuma-cms/issues)

Mail:pony@ponycool.com

## Acknowledgments

[CodeIgniter4](https://github.com/codeigniter4/CodeIgniter4)

[Arco Design](https://github.com/arco-design/arco-design)

[React](https://reactjs.org/)

[Twig](https://twig.symfony.com/)

[UUID](https://github.com/ramsey/uuid)

[JetBrains](https://www.jetbrains.com/)

<img alt="JetBrains" height="80" src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.png" width="80"/>

## License

Apache License 2.0