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

## 启动

docker run -d -p 8888:3000 -v /aaa:/bbb/ccc --name xxx-container xxx-image

通过xxx-image镜像跑起来一个xxx-container的容器

-d：后台运行

-p：端口映射，宿主机8888端口映射到容器的3000端口

-v：数据卷（volume）挂载，挂载宿主机/aaa目录到容器的/bbb/ccc目录

而xxx-image镜像就是通过Dockerfile经过build产生的


## docker实现原理

- Namespace资源隔离
  - linux操作系统提供了namespace机制，可以给进程、用户、网络等分配一个命名空间，这个命名空间下的资源都是独立命名的

- Control Group资源限制

- UnionFS 文件系统的镜像存储、镜像合并

通过dockerfile描述镜像构建的过程，每条指令都是一个镜像层

镜像通过docker run跑起来对外提供服务，这是会添加一个可写层（容器层）

挂载一个volume数据卷到docker容器，就可以实现数据的持久化
