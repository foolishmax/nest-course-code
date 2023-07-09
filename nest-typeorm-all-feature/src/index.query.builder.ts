// 复杂 sql 语句不会直接写，而是会用 query builder：
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize().then(async () => {

  // 开启事务锁
  //   await AppDataSource.manager.transaction(async manager => {
  //     await manager.save(User, {
  //         id: 4,
  //         firstName: 'eee',
  //         lastName: 'eee',
  //         age: 20
  //     });
  // });
  const queryBuilder = await AppDataSource.manager.createQueryBuilder();

  const user = await queryBuilder.select("user")
      .from(User, "user")
      .where("user.age = :age", { age: 21 })
      .getOne();

  console.log(user);


}).catch(error => console.log(error))
