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
> - 基础语法。
> - `if`
> - `var`
> - `function`
> - `Object`
> - `Array`
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

- 模块系统

> 模块作用域
> 使用`require`方法来加载模块。
> 使用`exports`接口对象导出模块中的成员。

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

## 模板引擎

> 模板引擎最早诞生于服务器领域，后来才发展到前端。
>
> - 安装模板引擎，例如`npm i art-template`。
> - 在需要使用的文件模块中加载`art-template`。
> - 查文档使用模板引擎的`API`。

## 服务端渲染

- 服务端渲染和客户端渲染的区别：

> - 服务端渲染在客户端拿到的就是服务端已经渲染好的。
> - 客户端渲染最少两次请求，发起`ajax`在客户端使用模板引擎渲染。
> - 客户端渲染不利于`SEO`搜索引擎优化。
> - 服务器端渲染是可以被爬虫抓取到的，客户端异步渲染是很难被爬虫抓取的。
> - 真正的网站是服务端渲染与客户端异步渲染两者结合做的。

- 浏览器解析

> 浏览器接收到`HTML`响应内容之后，就会从上到下依次解析，当在解析的过程中发现：
>
> - `link`
> - `script`
> - `img`
> - `video`
> - `audio`
> - `iframe`
> 等带有`src`或者`href`属性标签（外链资源），浏览器会自动对这写资源发起新的请求。

- `Node`实现服务器重定向

> `header(location)`
>
> - `301`：永久重定向，浏览器会记住
> - `302`：临时重定向，浏览器不会记住

## 模块系统

- 什么是模块化

> 具备
>
> - 文件作用域
> - 通信规则：
>   - 加载 `require`
>   - 导出

```javascript
// 导出
function add(x + y) {
  return x + y
}

// 如果一个模块需要直接导出某个成员而非挂载的方式，则必须使用 module.exports = xxx 的方式
module.exports = add

// 导入

```

- 使用`Node`编写应用程序就是在使用：

> - `ECMAScript`：`BOM`、`DOM`除外
> - 核心模块
> - 第三方模块
> - 自定义模块

## CommonJS模块规范

- 加载`require`：

> 两个作用：
>
> - 执行被加载模块中的代码。
> - 得到被加载模块中的`exports`导出接口对象。

```javascript
var 自定义变量名称 = require('模块')
```

- 导出`exports`：

> - `Node`中是模块作用域，默认文件中所有的成员只在当前文件模块中有效。
> - 对于希望可以被其他模块访问的成员，需要把这些公开的成员挂载到`exports`接口对象中。
> - 导出多个成员（必须在对象中）：

```javascript
exports.a = 123
exports.b = 'hello'
exports.c = function(a, b) {
  return a + b
}
```

> - 导出单个成员（函数、字符串）：

```javascript
module.exports = 123
module.exports = function(a + b) {
  return a +b
}
// 后者会覆盖前者，若需导出多个成员：
module.exports = {
  a: 123,
  b: 'hello',
  add: function(a + b) {
    return a + b
  }
}
```

## Express

> - 第三方`Web`开发框架
> - 高度封装了`http`模块，是开发者更加专注于业务，而非底层细节。
