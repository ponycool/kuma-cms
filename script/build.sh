#!/bin/bash

IMAGE=kumacms
VERSION=latest

# 如果参数中存在版本，则使用参数中的版本
if [ -n "$1" ]; then
  VERSION=$1
fi

# 清除tag为none的镜像
docker ps -a | grep "Exited" | awk '{print $1}' | xargs docker stop
docker ps -a | grep "Exited" | awk '{print $2}' | xargs docker rm
docker images | grep none | awk '{print $3}' | xargs docker rmi

# 清除已有的
docker stop ${IMAGE}
docker rm ${IMAGE}
docker rmi ponycool/${IMAGE}

docker rm $(docker ps -a -q)

# 启用buildx插件，适用于v19.03+
docker buildx create --use --name larger_log --node larger_log0 --driver-opt env.BUILDKIT_STEP_LOG_MAX_SIZE=10485760

# 检查当前的构建器实例
docker buildx inspect larger_log --bootstrap

# 编译生成
docker buildx build -t ponycool/${IMAGE}:${VERSION} --platform=linux/amd64,linux/arm64 --push ./
