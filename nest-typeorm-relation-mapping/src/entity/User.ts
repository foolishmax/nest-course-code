import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { IdCard } from "./IdCard"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    // 如果是非外键的Entity，想要关联查询另一个Entity，则需要通过第二个参数指定外键列是另一个Entity的哪个属性
    @OneToOne(()=>IdCard,(idcard)=>idcard.user)
    idCard: IdCard
}
