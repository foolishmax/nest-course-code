// 可以使用query执行sql语句

import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {

    const users = await AppDataSource.manager.query('select * from user where age in(?, ?)', [21, 22]);
    console.log(users);

}).catch(error => console.log(error))
