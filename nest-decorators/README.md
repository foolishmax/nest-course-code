# 一网打尽Nest所有装饰器

## @Module 声明模块

## @Controller 声明controller

## @Injectable 声明provider

- provider可以是任何class
- 注入的方式可以是构造器、属性（属性注入要指定token，token是class或者string）
- 可以通过useFactory、useValue等方式声明provider


## @Optional 注入依赖可选

## Global() 声明全局

## @Catch() 指定处理的异常

- @Catch(HttpException)
- 通过@UseFilters应用到handler上

## @UseFilters()、@UseGuards、@UseInterceptors()、@UsePipes()

## @Params()、@Query()、@Body()

## @Post()、@Put()、@Delete()、@Patch()、@Options()、@Head()

## @SetMetadata()

- 可以为handler和class设置@SetMetadata指定metadata
- 在guard或者interceptor中取出来

## @Headers()

- 获取某个请求头或者全部请求头

## @Ip()

- 拿到请求的ip

## @Session()

- 拿到session对象
- 需要安装一个express中间件

## @Req() 或 @Request()

## @Res() 或 @Response()

- 不会返回响应了，需手动返回

## @Next()

- 当有两个handler来处理同一个路由，可以在第一个handler中注入next，调用它将请求转发到第二个handler
- 不会返回响应，需手动返回


## @HttpCode(201)

- 指定返回的状态码

## @Header('xxx','bbb')

- 修改response header

## @Redirect

- 指定路由重定向url

## @Render()

- 指定渲染用的模版引擎
