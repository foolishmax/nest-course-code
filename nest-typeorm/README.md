# 在Nest里集成TypeOrm

1. 使用方式是在根模块TypeOrmModule.forRoot传入数据源配置

2. 在各处注入DataSource、EntityManager做增删改查

3. 还可以在用到的模块引入TypeOrmModule.forFeature的动态模块，传入Entity，会返回相应的Repository

## 原理

TypeOrmModule.forRoot对应的动态模块是全局的，导出了dataSource、entityManager，所以可以到处注入

TypeOrmModule.forFeature则会把传入的Entity对应的Repository导出，这样可以在对应模块内注入
