import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./Article";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  // tag里想有文章的引用时，需指定entity的外键列，且article也要相应添加
  @ManyToMany(()=>Article, (article)=>article.tags)
  articles: Article[]
}
