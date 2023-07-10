import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50
  })
  name: string;

  @OneToMany(()=>Employee, (employee)=>employee.department,{
    // cascade: true // 不能双方都级联保存，否则会无限循环
  })
  employee: Employee[];
}
