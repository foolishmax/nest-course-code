# Nest项目如何编写Dockerfile

docker build的时候会把构建上下文的所有文件打包发送给docker daemon来构建镜像

通过.dockerignore指定哪些文件不发送，减少镜像体积，加快构建速度

另一种减少镜像提交的方法就是多阶段构建：

build一个镜像、production一个镜像，最终保留production的镜像，使用alpine的基础镜像，如：node:18.10-aline3.14，这样构建出来的体积会小很多


## Dockerfile中为什么是pm2-runtime start?

原因：通过pm2 start 在docker内启动进程会死掉导致起不来，pm2是默认后台启动的，docker感知不到cmd命令执行完成docker容器就结束了，pm2-runtime是专门为容器设计的，保证在后台一直运行