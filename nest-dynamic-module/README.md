# 如何创建动态模块

在module中自定义一个方法名字（叫什么名字无所谓）,但约定了一些使用上的区别：

- register： 用一次模块传一次配置，比如这次调用为FooModule.register({name: 'aaa'}),下次是FooModule.register({name: 'bbb'})

- forRoot: 配置一次用多次，一般在AppModule中import

- forFeature：forRoot固定整体模块，forFeatru用于局部配置，比如forRoot指定数据库链接信息，forFeature指定某个模块访问哪个数据库和表;



[方式一](./src/foo)
[方式二](./src/bar)