import { Module } from '@nestjs/common';
import { ArticleModule } from 'src/article/article.module';
import { TaskService } from './task.service';

@Module({
  imports: [ArticleModule],
  providers: [TaskService],
})
export class TaskModule {}
