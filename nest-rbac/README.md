# 基于RBAC实现权限控制

jwt实现登录，将用户和角色信息保存在token里返回

添加LoginGuard来做登录状态的检查

添加PermissionGuard来做权限的检查

LoginGuard 里从 jwt 取出 user 信息放入 request，PermissionGuard 从数据库取出角色对应的权限，检查目标 handler 和 controller 上声明的所需权限是否满足。

LoginGuard 和 PermissionGuard 需要注入一些 provider，所以通过在 AppModule 里声明 APP_GUARD 为 token 的 provider 来注册的全局 Gard。

然后在 controller 和 handler 上添加 metadata 来声明是否需要登录，需要什么权限，之后在 Guard 里取出来做检查。

可以采用加一层redis来做缓存，减少查询数据库的次数
