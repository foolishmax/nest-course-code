# Nest 实现 Server Send Event 数据推送

服务端推送两种技术：webSocket、Server Send Event

SSE: http 返回的 Content-Type 为 text/event-stream 的 header

Nest 内部实现 sse 的接口，用@Sse 装饰器标识方法，然后通过 Observe 对象返回数据，内部通过 observer.next 随时返回数据

前端使用 EventSource 的 onmessage 来接收消息

应用场景：即时消息提醒、构建日志实时展示
