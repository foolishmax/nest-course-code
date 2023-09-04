# Nest 如何创建微服务？

项目大了之后，为了维护和扩展方便，拆分微服务是很自然的事情
【1】微服务之间通过 tcp 方式通信，在 nest 里需要用到 @nestjs/microservices 这个包。
【2】微服务启动的时候不再调用 NestFactory.create 而是调用 NestFactory.createMicroservice 方法，指定 tcp 的端口。
【3】 然后另一个服务里通过 ClientsModule 来注入连接这个微服务的代理对象。
【4】之后分别用 send、emit 方法来调用微服务的 @MessagePattern、@EventPattern 声明的方法。
【5】我们还通过 wireshark 抓包分析了 tcp 通信的内容，发现微服务之间的通信是基于 json 的
