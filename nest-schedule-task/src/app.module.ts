import { Inject, Module, OnApplicationBootstrap } from '@nestjs/common';
import { ScheduleModule, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { AaaModule } from './aaa/aaa.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './task.service';

@Module({
  imports: [ScheduleModule.forRoot(), AaaModule],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule implements OnApplicationBootstrap {
  @Inject(SchedulerRegistry)
  private schedulerRegistry: SchedulerRegistry;

  // onApplicationBootstrap() {
  //   const jobs = this.schedulerResigtry.getCronJobs();

  //   // this.schedulerRegistry.getIntervals();
  //   // this.schedulerRegistry.getInterval('task2');

  //   // this.schedulerRegistry.getTimeouts();
  //   // this.schedulerRegistry.getTimeout('task3');

  //   // this.schedulerRegistry.getCronJobs();
  //   // this.schedulerRegistry.getCronJob('task1');

  //   console.log(jobs);
  // }
  onApplicationBootstrap() {
    // 删除定时任务逻辑
    const crons = this.schedulerRegistry.getCronJobs();

    crons.forEach((item, key) => {
      item.stop();
      this.schedulerRegistry.deleteCronJob(key);
    });

    const intervals = this.schedulerRegistry.getIntervals();
    intervals.forEach((item) => {
      const interval = this.schedulerRegistry.getInterval(item);
      clearInterval(interval);

      this.schedulerRegistry.deleteInterval(item);
    });

    const timeouts = this.schedulerRegistry.getTimeouts();
    timeouts.forEach((item) => {
      const timeout = this.schedulerRegistry.getTimeout(item);
      clearTimeout(timeout);

      this.schedulerRegistry.deleteTimeout(item);
    });

    console.log(this.schedulerRegistry.getCronJobs());
    console.log(this.schedulerRegistry.getIntervals());
    console.log(this.schedulerRegistry.getTimeouts());

    // 动态添加定时任务
    const job = new CronJob(`0/5 * * * * *`, () => {
      console.log('cron job');
    });

    this.schedulerRegistry.addCronJob('job1', job);
    job.start();

    const interval = setInterval(() => {
      console.log('interval job');
    }, 3000);
    this.schedulerRegistry.addInterval('job2', interval);

    const timeout = setTimeout(() => {
      console.log('timeout job');
    }, 5000);
    this.schedulerRegistry.addTimeout('job3', timeout);
  }
}
