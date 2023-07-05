# 第一个Dockerfile

## 构建

docker build -t aaa:ccc .

aaa:镜像名
ccc:版本标签
-t: 指定要创建的目标镜像名
.:Dockerfile文件所在目录，可以指定Dockerfile的绝对路径

docker build -t aaa:ddd -f VOLUME.Dockerfile .

-f:指定dockfile文件构建

思考一个问题：dockerfile是在哪里构建的？

答案：守护进程docker daemon，当docker daemon启动后，通过命令行工具和docker daemon交互来实现各种工具。