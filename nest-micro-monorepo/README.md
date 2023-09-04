# Nest 的 Monorepo 项目和 Library 库

1. monorepo 就是在一个 git 仓库中管理多个项目

2. nest-cli 支持 monorepo，执行 nest g app xxx 会把项目变为 monorepo，在 apps 目录下保存多个 nest 应用

3. pnpm start:dev app1 或者 pnpm run build app1 加上应用名制定编译的项目

4. 多个项目可能存在公共代码，可以使用 nest g lib xxx 创建 library

总结：nest 可以通过创建 monorepo 及 library 复用代码的方式提升开发效率
