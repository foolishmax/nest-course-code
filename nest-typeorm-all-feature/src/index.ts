import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    // 批量修改
    await AppDataSource.manager.save(User, [
      { firstName: 'ccc', lastName: 'ccc', age: 21},
      { firstName: 'ddd', lastName: 'ddd', age: 22},
      { firstName: 'eee', lastName: 'eee', age: 23}
    ]);

    // 删除，delete和remove的区别是：delete直接传入id，remove传入entity对象
    await AppDataSource.manager.delete(User, 1);
    await AppDataSource.manager.delete(User, [2,3]);
    user.id = 1;
    await AppDataSource.manager.remove(User, user);

    // findBy按条件查询
    const users1 = await AppDataSource.manager.findBy(User, {
      age: 23
    });
    console.log(users1)

    // findAndCount
    const [users2, count2] = await AppDataSource.manager.findAndCount(User);
    const [users3, count3] = await AppDataSource.manager.findAndCountBy(User, {
        age: 23
    })

    // findOne:相比find多了个limit=1的条件
    const user4 = await await AppDataSource.manager.findOne(User, {
        select: {
            firstName: true,
            age: true
        },
        where: {
            id: 4
        },
        order: {
            age: 'ASC'
        }
    });

    // findOneBy
    const user5 = await AppDataSource.manager.findOneBy(User, {
      age: 23
    });




    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
