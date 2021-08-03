# Node

- 简介：

> `Node.js`是一个基于`Chrome V8 引擎`的`JavaScript`**运行时环境**。
>
> - `Node.js`不是一门语言，也不是库或者框架，是一个`JavaScript`运行时环境，可以解析和执行`JavaScript`代码。
> - `Node.js`可以是`JavaScript`代码完全脱离浏览器运行。
> - `Node.js`使用*事件驱动*、*非阻塞`IO`模型（异步）*来变得轻量和高效。
> - `npm`是世界上最大的开源库生态系统。
>
> `Node.js`可以做什么？
>
> - `Web`服务器后台。
> - 命令行工具。
>

- 学到什么？

> - `B/S`编程模型：
>   - `Browser - Server`：浏览器 - 服务器
>   - 任何服务端技术的`BS`编程模型都是一样的，与语言无关。
> - 模块化编程。
>   - `requireJS`
>   - `seaJS`
>   - 在`Node.js`中可以引用加载`JavaScript`脚本文件。
> - `Node`常用`API`。
> - 异步编程。
>   - 回调函数。
>   - `Promise`
>   - `async`
>   - `generator`
> - `EXpress Web`开发框架。
> - `ECMAScript 6`等。

- 浏览器中的`JavaScript`：

>- `ECMAScript`：
>  - 基础语法。
>  - `if`
>  - `var`
>  - `function`
>  - `Object`
>  - `Array`
>- `BOM`
>- `DOM`

- `Node.js`中的`JavaScript`：

>- 没有`BOM、DOM`，只有`ECMAScript`。
>- 在`Node`执行环境中为`JavaScript`提供了一系列的服务器级别的`API`。
> - 文件的读写。
> - 网络服务的构建。
> - 网络通信。
> - `HTTP`服务器等。

- 最简单的`HTTP`服务器：

```javascript
// 在 Node 中提供了一个核心模块：http，此模块可以很轻松的构建一个WEB服务器。
// 1. 加载 http 核心模块
const http = require('http')

// 2. 使用 http.createServer() 方法创建一个 Web 服务器实例
const server = http.createServer()

// 3. 提供服务：对数据的服务
// 发起请求 -> 接收请求 -> 处理请求 -> 发送响应
// 注册 request 请求事件：当客户端发起请求，就会触发服务器的 request 请求事件，执行回调处理函数。
server.on('request', function(request, response) {
  // console.log('收到请求路径为：' + request.url)
  // response 对象有一个 write 方法给客户端发送响应数据，write 可以使用多次，但最后一定要使用 end 方法结束响应，否则客户端会一直等待。
  // response.write('Hello World!')
  response.end('收到的请求路径为:' + request.url)
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function() {
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 进行访问')
})
```

## Node中的JavaScript

- `ECMAScript`

>没有`DOM、BOM`。

- 核心模块

> `Node`为`JavaScript`提供了很多服务器级别的`API`，这些`API`绝大多数都被包装到了一个具名的核心模块中。
>
> - `fs`模块
> - `http`服务模块
> - `path`路径操作模块
> - `os`操作系统信息模块
>
> 想要使用核心模块必须`require`引入。

- 用户自定义模块

> `require`用来加载模块的方法，在`Node`中，模块分为三种：
>
> - 具名的核心模块，如：`fs`、`http`等。
> - 用户自己编写的文件模块。
>   - 相对路径必须加`./`，否则会报错。
>   - 可以省略后缀名。
>
> 在`Node`中没有全局作用域，只有模块作用域。
>
> - 外部访问不到内部，内部访问不到外部，默认都是封闭的。
>
> `require`方法有两个作用：
>
> - 加载文件模块并执行里面的代码。
> - 拿到被加载文件模块导出的接口对象。
>   - 在每个文件模块中都提供了一个对象：`exports`，默认是一个空对象。

- 第三方模块

## 端口号

> 所有联网的程序都需要进行网络通信。
>
> - 每台计算机中只有一个物理网卡，而且在同一个局域网中，网卡的地址必须是唯一的。
> - 网卡是通过唯一的`IP`地址来进行定位的。
> - `IP`地址用来定位计算机。
> - 端口号用来定位具体的应用程序。
>   - 所有需要联网通信的软件都必须具有端口号。
>   - 端口号的范围在`0~65536`之间。
>   - 在计算机中有一些默认的端口号，最好不用使用。



