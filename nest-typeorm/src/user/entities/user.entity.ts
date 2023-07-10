import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'typeorm_user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'typeorm_name',
    length: 50,
  })
  name: string;
}
