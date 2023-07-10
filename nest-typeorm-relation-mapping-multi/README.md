# TypeOrm一对多的映射和关联CRUD

1. 通过@ManyToOne和@OneToMany装饰器

2. TypeOrm会自动在多的那一方添加外键，不需要通过@JoinColumn指定，不过可以通过@JoinColumn来修改外键列的名字

3. 双方只能一方有cascade，否则会无限循环，设置cascade之后只要一方保存，关联的另一方自动保存

4. 删除时，如果设置了外键的cascade或set null，那删除主标（一的一方）对应的entity就可以了，mysql会做后续的关联删除或id置空
