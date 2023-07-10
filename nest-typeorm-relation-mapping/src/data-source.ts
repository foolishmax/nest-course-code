import "reflect-metadata"
import { DataSource } from "typeorm"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "lb17839238512",
    database: "typeorm_test",
    synchronize: true,
    logging: true,
    entities: [User,IdCard],
    migrations: [],
    subscribers: [],
    poolSize: 10,
    connectorPackage: 'mysql2',
    extra: {
      authPlugin: 'sha256_password'
    }
})
