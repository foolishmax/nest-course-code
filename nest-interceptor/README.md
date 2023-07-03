# RxJS 和 Interceptor

rxjs是一个处理异步逻辑的库，通过各种operator的组合完成复杂逻辑，无需自己手动编写。

nest的interceptor使用了rxjs来处理响应，常用的有：

- tap：不修改响应数据，执行一些额外逻辑，比如日志记录、更新缓存等

- map：对响应数据做修改，一般都是改成{code, data, message}的格式

- catchError：在exception filter之前处理抛出的异常，可以记录或者抛出别的异常

- timeout：处理响应超时的情况，抛出一个TimeoutError，配合catchError可以返回超时的响应

interceptor也是可以注入依赖的，全局interceptor可以通过APP_INTERCEPTOR的token声明，这种能注入依赖，比app.useGlobalInterceptors更好