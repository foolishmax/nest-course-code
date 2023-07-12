# 基于ACL（Access Control List）实现权限控制

通过ACL（Access Control List）的方式实现了权限控制，特点是用户直接和权限关联

用户和权限是多对多的关系，数据库表会存在用户表、权限表、用户权限中间表

登录的时候把用户信息查出来，放到session或者jwt返回

访问接口时，在Guard里判断是否登录，是否有权限，没有就返回401

接口访问权限通过handler用@SetMetadata声明所需权限的信息，在Guard中从数据库查出来当前用户的权限与之对比，有权限再放行

但是这样会导致频繁查询数据库，需要用redis做缓存（在登录的时候把权限一并查出来放到session或者jwt里也可）
