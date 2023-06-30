# 全局模块和生命周期

Nest启动后会递归解析Module依赖，扫描其中的provider、controller，注入依赖。

全部解析完后开始监听网络端口处理请求。

在此过程中，nest暴露了一些生命周期方法：

创建过程：

- Bootstrapping starts
- `onModuleInit`
- `onApplicationBootstrap`
- Start listeners
- Application is running

销毁过程：

- `onModuleDestroy`
- `beforeApplicationShutdown`
- Stop listeners
- `onApplicationShutdown`
- Process exits

递归初始化模块，依次调用controller、provider、moudle的生命周期方法

通常在 onApplicationShutwon 里通过 moduleRef.get 传入token取出一些 provider实例，执行关闭连接等销毁逻辑。
