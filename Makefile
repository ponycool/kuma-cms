IMAGE=kumacms
# 默认版本
version = latest

all: build

.PHONY: build
build:
	sh ./script/build.sh ${version}
