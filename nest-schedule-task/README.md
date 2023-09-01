# Nest 的三种定时任务

使用的是@nestjs/scheduler 这个包

三种定时任务：cron、timeout、interval

cron 依赖 cron 包实现，后两种是对原声 api 的封装

可以注入 SchedulerRegistory 来对定时任务做增删改查

定时任务可以注入 service 来定时执行一些逻辑
