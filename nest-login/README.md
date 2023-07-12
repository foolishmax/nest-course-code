# mysql + typeorm + jwt + ValidationPipe实现登录注册功能

- typeorm通过@PrimaryGeneratedColumn、@Column、@CreateDateColumn、@UpdateDateColumn声明和数据库表的映射

- 通过TypeOrmModule.forRoot、TypeOrmModule.forFeature的动态模块添加数据源,拿到user的repository

- 通过Repository来做增删改查、实现注册和登录的功能

- 登录成功之后，把用户信息通过jwt的方式放在authorization的header里返回

- 在LoginGuard里面取出header的token来做权限校验

- 参数的合法化校验使用ValidationPipe + class-validator来实现

- 如此这般，便实现了注册和基于JWT的登录功能