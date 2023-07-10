import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Department";

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50
  })
  name: string;

  @JoinColumn({
    name: 'd_id' // 通过@JoinColumn来修改外键列的名字
  })
  @ManyToOne(()=>Department,{
    cascade: true,
    onDelete: 'CASCADE'
  })
  department: Department;
}
