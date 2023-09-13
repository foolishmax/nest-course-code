# Nest 的 repl 模式

repl 模式下可以调用 controller 或者 provider 方法，但是不会出发 pipe、interceptor 等

可以使用 debug()拿到 module、controller、provider 的信息，methods()拿到方法，然后 get()或者$()拿到 controller、provider 进行调用。
