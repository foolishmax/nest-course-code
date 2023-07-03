# Metadata 和 Reflector

nest核心实现原理：

通过装饰器给class或者对象添加metadata，并且开启ts的emitDecoratorMetadata来自动添加类型相关的metadata，然后运行的时候通过这些元数据来实现依赖的扫描，对象的实例化等。

两个核心api：

Reflect.getMetadata、Reflect.defineMetadata

对象实例化过程需要构造器参数的类型，在开启ts的emitDecoratorMetadata的编译选项后ts会自动添加一些元数据：

- design:type 被装饰目标的类型
- design:paramtypes 被装饰目标的参数类型
- design:returntype 被装饰目标的返回值类型
