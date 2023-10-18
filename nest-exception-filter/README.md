# 如何自定义Exception Filter

通过@Catch指定要捕获的异常，在catch方法中拿到异常信息，返回对应的响应

当捕获的是HttpException时，需要注意兼容下ValidationPipe的错误格式处理

filter 可以通过 @UseFilters 加在 handler 或者 controller 上，也可以在 main.ts 用 app.useGlobalFilters 全局启用。

如果 filter 要注入其他 provider，就要通过 AppModule 里注册一个 token 为 APP_FILTER 的 provider 的方式。

此外，捕获的 Exception 也是可以自定义的。