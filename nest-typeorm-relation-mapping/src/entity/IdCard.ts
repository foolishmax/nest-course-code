import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
  name: 'id_card'
})
export class IdCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '身份证号'
  })
  cardName: string;

  @JoinColumn()
  @OneToOne(() => User,{
    cascade: true, // 增删改一个Entity的时候，是否级联增删改它关联的Entity，这样就不用自己保存user了
    onDelete: "CASCADE", // 级联关系
    onUpdate: 'CASCADE' // 级联关系
  })
  user: User;
}
