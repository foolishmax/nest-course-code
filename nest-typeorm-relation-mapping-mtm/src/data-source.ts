import "reflect-metadata"
import { DataSource } from "typeorm"
import { Article } from "./entity/Article"
import { Tag } from "./entity/Tag"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "lb17839238512",
  database: "typeorm_test",
  synchronize: true,
  logging: true,
  entities: [Article,Tag],
  migrations: [],
  subscribers: [],
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password'
  }
})
