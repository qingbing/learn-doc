1、什么是swoole？
面向生产环境的PHP异步网络通行引擎，使PHP可以编写高性能的异步并发TCP、UDP、Unix Socket、HTTP、WebSocket服务

2、swoole能够做什么？
可应用于互联网、移动通信、企业软件、云计算、网络游戏、物联网（IOT）、车联网、智能家居等，使用PHP+Swoole作为网络通信框架，可使企业的IT研发团队效率大大提升，更加专注于开发创新产品

对于web开发而言，Swoole的常用场景
- APP的推送（服务器主动向客户端发送数据）
- 客服聊天系统
- 网络直播

3、为啥使用Swoole？
- WebSocket 解决HTTP请求问题：HTTP只有请求服务器才能够返回响应内容
- 纯C编写，性能极强
- 简单易用，开发效率高
- 事件驱动，异步非阻塞
- 并发百万TCP连接
- 支持多进程/线程