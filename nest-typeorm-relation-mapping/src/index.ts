import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25

    const idCard = new IdCard();
    idCard.cardName = '111'
    idCard.user = user;

    // await AppDataSource.manager.save(user)
    await AppDataSource.manager.save(idCard)

    // 方式1
    const ics = await AppDataSource.manager.find(IdCard, {
      relations: {user: true} // 把关联的user也一起查询出来
    });
    // 方式2
    // const ics = await AppDataSource.manager.getRepository(IdCard)
    // .createQueryBuilder("ic")
    // .leftJoinAndSelect("ic.user", "u")
    // .getMany();
    //方式3
    // const ics = await AppDataSource.manager.createQueryBuilder(IdCard, "ic")
    // .leftJoinAndSelect("ic.user", "u")
    // .getMany();



    console.log(ics)

}).catch(error => console.log(error))
