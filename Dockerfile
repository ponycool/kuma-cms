FROM php:8.2-fpm-alpine
LABEL maintainer="KumaCMS DOCKER MAINTAINER <pony@ponycool.com>"

ENV TIMEZONE=Asia/Shanghai
ENV VHOST_PATH=/etc/nginx/vhost
ENV PHP_FPM_CONF_PATH=/usr/local/etc/php-fpm.d
ENV APP_PATH=/opt/kumacms

#换为国内清华镜像，以加速docker image的制作速度，非中国境内用户请注释掉下面一条
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories \
    && apk update && apk upgrade

# 设置时区
RUN apk add tzdata \
    && ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \
    && echo ${TIMEZONE} > /etc/timezone


# 安装Nginx
RUN apk --no-cache add nginx

# 安装Supervisord,管理Nginx和PHP-FPM进程
RUN apk --no-cache add supervisor

# 创建www用户
RUN addgroup -g 1000 -S www && adduser -s /sbin/nologin -S -D -u 1000 -G www www

RUN set-eux; \
    [ ! -d "$APP_PATH" ]; \
    mkdir -p "$APP_PATH"; \
    chown -R www:www "$APP_PATH"; \
    chown -R www:www "/var/lib/nginx"

# PHPIZE_DEPS 包含 gcc g++ 等编译辅助类库，完成编译后删除
ENV apk add --no-cache $PHPIZE_DEPS && \
    apk del $PHPIZE_DEPS

RUN apk add --no-cache freetype libpng libjpeg-turbo freetype-dev libpng-dev libjpeg-turbo-dev icu-dev && \
    docker-php-ext-install bcmath && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-configure intl && \
    docker-php-ext-install -j$(nproc) gd && \
    docker-php-ext-install intl

# 配置PHP、FPM \
RUN sed -i 's/listen = 9000/listen = \/run\/php-fpm.sock/g' "$PHP_FPM_CONF_PATH/zz-docker.conf"
COPY deploy/conf/fpm-pool.conf "$PHP_FPM_CONF_PATH/www.conf"
COPY deploy/conf/php.ini "$PHP_INI_DIR/php.ini"

# 配置NGINX
COPY deploy/conf/nginx.conf /etc/nginx/nginx.conf
COPY deploy/conf/nginx.vh.default.conf "$VHOST_PATH/default.conf"
COPY deploy/conf/nginx.vh.kumacms.conf "$VHOST_PATH/kumacms.conf"

# 配置 supervisord
COPY deploy/conf/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# 配置默认测试文件
RUN set -eux; \
    cd /var/www/html; \
    { \
        echo  '<div>Hello KumaCMS</div>'; \
    } | tee index.html; \
    { \
        echo '<?php'; \
        echo '    phpinfo();'; \
     } | tee index.php;

# 复制应用
COPY app "$APP_PATH/app"
COPY public "$APP_PATH/public"
COPY writable "$APP_PATH/writable"
COPY vendor "$APP_PATH/vendor"
COPY spark "$APP_PATH/spark"
COPY .env.dev "$APP_PATH/.env"

# 文件夹授权
RUN chown -R www.www /var/www/html && \
    chown -R www.www "$APP_PATH" && \
    chmod -R 777 "$APP_PATH/public/css" && \
    chmod -R 777 "$APP_PATH/public/js" && \
    chmod -R 777 "$APP_PATH/writable" && \
    # 删除文件使用通配符不能使用双引号，通配符在引号内不会被扩展
    rm -rf $APP_PATH/writable/cache/template/* && \
    rm -rf $APP_PATH/writable/debugbar/*.json && \
    rm -rf $APP_PATH/writable/logs/*.log && \
    echo "jwt.secret=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)" >> "$APP_PATH/.env"

# 修改配置文件
RUN sed -i 's/public array \$proxyIPs = \[\];/public array \$proxyIPs = \["172\.0\.0\.1\/8"=> "X-Forwarded-For"\];/g' "$APP_PATH/app/Config/App.php"


VOLUME "$APP_PATH/writable"

WORKDIR "$APP_PATH"

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

# 配置健康检查以验证一切是否已启动并正在运行
HEALTHCHECK --timeout=10s CMD curl --silent --fail http://127.0.0.1/fpm-ping