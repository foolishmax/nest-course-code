# 第一个Dockerfile

构建：

docker build -t aaa:ccc .

aaa:镜像名
ccc:版本标签
-t: 指定要创建的目标镜像名
.:Dockerfile文件所在目录，可以指定Dockerfile的绝对路径

docker build -t aaa:ddd -f VOLUME.Dockerfile .

-f:指定dockfile文件构建
