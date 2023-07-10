import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./Tag";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    comment: '文章标题'
  })
  title: string;

  @Column({
    type: 'text',
    comment: '文章内容'
  })
  content: string;

  // @JoinTable生成中间表用的
  @JoinTable(
    {
      // name: 'xxx' // 自己指定中间表的名称
    }
  )
  @ManyToMany(()=>Tag,(tag)=>tag.articles)
  tags: Tag[]
}
