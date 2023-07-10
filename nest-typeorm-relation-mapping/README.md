# typeorm一对一的映射和关联crud

1. typeorm中一对一关系的映射通过@OneToOne装饰器声明，维持外键列的Entity添加@JoinColumn装饰器

2. 非外键列的entity，想要关联查询另一个entity，则需要通过第二个参数指定外键列是另一个entity的哪一个属性

3. 通过@OneToOne装饰器的onDelete、onUpdate参数设置级联删除和更新的方式，比如cascade、setnull等

4. 设置cascade，会在save的时候自动级联相关的entity的save

5. find时指定relations才会关联查询
