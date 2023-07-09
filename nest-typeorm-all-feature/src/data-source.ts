import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "lb17839238512",
    database: "practice",
    synchronize: true, // 同步建表，当database里没有和Entity对应的表的时候，会自动生成建表sql语句并执行
    logging: false, // 打印生成的sql语句
    // entities: [User], // 指定有哪些和数据库的表对应的Entity
    entities: ['./**/entity/*.ts'],
    migrations: [],
    subscribers: [], // subscribers 是一些 Entity 生命周期的订阅者，比如 insert、update、remove 前后，可以加入一些逻辑
    poolSize: 10, // 指定数据库连接池中连接的最大数量
    connectorPackage: 'mysql2', // 指定用什么驱动包
    extra: { // 额外发送给驱动包的一些选项
      authPlugin: 'sha256_password'
    }
})
