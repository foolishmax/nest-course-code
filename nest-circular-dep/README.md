# Module 和 Provider的循环依赖如何处理？

nest创建Module时循环依赖会导致递归创建依赖时，拿到undefined无法创建成功

解决方案：

采用forwardRef的方式,如：

```ts
@Module({
  imports: [forwardRef(() => xxxModule)]
})
export class FooModule {}
```

service循环依赖时，就不能使用默认注入方式了，需要通过@Inject手动指定注入的token，也是采用forwardRef，如：

```ts
  //foo
  constructor(
    @Inject(forwardRef(() => BarService)) private barService: BarService,
  ) {}

  // bar
  constructor(
    @Inject(forwardRef(() => FooService)) private fooService: FooService,
  ) {}
```
