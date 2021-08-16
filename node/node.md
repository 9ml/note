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
> - 核心模块：其本质也是文件，不过已经编译到了二进制文件中，可以直接按照名字加载。
> - 第三方模块：通过`npm`下载的第三方文件包，使用`require('包名')`来加载，且不会与核心模块重名；找不到时会依次往上级目录查找，直到磁盘根目录，一个项目有且只有一个`node_modules`文件存放在项目的根目录。
> - 自定义模块：自己编写的模块文件，使用相对路径引入。

## CommonJS模块规范

- 加载`require`：

> 两个作用：
>
> - 执行被加载模块中的代码。
> - 得到被加载模块中的`exports`导出接口对象。

```javascript
var 自定义变量名称 = require('模块')
```

- 优先从缓存加载
- 判断模块标识

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

> - 原理解析：
> - 在`Node`中，每个模块内部都有自己的`module`对象，改`module`对象中有一个成员是`exports`，默认是一个空对象。
> - 如果需要对外导出成员，需要把导出的成员挂载到`module.exports`中。
> - `exports`是`module.exports`的一个引用。

```javascript
// var module = {
//   exports: {

//   }
// }
// 默认在代码最后有 return module.exports

// var exports = module.exports 就相当于
exports === module.exports // true
// 直接使用 exports = 'foo' 会造成指向不同，无法使用
exports.foo = 'bar'
// 等价于
module.exports.foo = 'bar'
```

## npm

> 全称：`node package manager`
>
> - 建议每个项目都要有一个`package.json`包描述文件，可以通过`npm init`命令初始化出来。
> - 建议执行`npm install`包名时加上`--save`选项，可以将依赖项保存在`dependencies`中。

- `npm`网站：`www.npmjs.com`

> 搜索/发布依赖包资源

- `npm`命令行工具

> 可通过`npm --version`查看当前版本。
> `npm install --global npm`升级版本。

- `npm`被墙问题

> - 安装淘宝的`cnpm`：`npm install --global cnpm`，然后使用`cnpm`命令。
> - 若不想安装`cnpm`又想使用淘宝的服务器下载：
>   - `npm i x --registry-https://registry.npm.taobao.org`
>   - 或加入到配置文件中：`npm config set registry https://registry.npm.taobao.org`
>   - 查看`npm`配置信息：`npm config list`

## Express

> 原生的`http`在某些方面表现不足以应对开发需求，所有需要使用框架来加快效率，让代码高度统一。
> `express`官网：`www.expressjs.com`
>
> - 第三方`Web`开发框架
> - 高度封装了`http`模块，是开发者更加专注于业务，而非底层细节。

- 示例：

```javascript
// 安装：npm i express -S
// 引包
const express = require('express')

// 创建服务器应用程序：http.createServer()
const app = express()

// 公开指定目录：当以 /public/ 开头时，去 ./public/ 目录中查找对接的资源：localhost:3000/public/img/1.jpg
// 这种方式更容易辨识，推荐使用。
app.use('/public/', express.static('./public/'))

// 当以 /a/ 开头时，去 ./public/ 目录中查找对接的资源：localhost:3000/a/img/1.jpg
// app.use('/a/', express.static('./public/'))

// 第一个参数省略时，可以通过省略 /public/ 的方式来访问查找对接的资源：localhost:3000/img/1.jpg
// app.use(express.static('./public/'))

// 当服务器收到 get 请求 / 时执行回调处理函数
app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.listen(3000, () => {
  console.log('App in running')
})
```

### 修改后服务器自动重启

> 使用一个第三方命令行工具：`nodemon`来解决修改代码重启服务器。
> `nodemon`是一个基于`Node`开发的一个第三方命令行工具，当文件修改时，它会自动重启服务。
>
> - 使用时需要单独安装：

```shell
npm install --global nodemon
```

> 使用：

```shell
# 原先启动服务器
node app.js

# 使用 nodemon
nodemon app.js
```

### 在`express`中使用`art-template`模板引擎

> 官网：`https://aui.github.io/art-template/zh-cn/index.html`

- 安装：

```shell
npm i --save art-template
npm i --save express-art-template
```

- 配置

```javascript
// 配置使用 art-template 模板引擎
// 表示当渲染以 .xxx 文件时，使用 express-art-template 模板引擎，默认是 .art 文件，为便捷可使用 .html 文件
app.engine('html', require('express-art-template'))

// express 为 response 提供了一个 render 方法，默认不可以使用，但是配置了模板引擎可以使用
// 即：res.render('html模板名.art',{ 模板数据 })
// 注意：第一个参数不能写路径，默认会在项目中 views 目录查找此模板文件
// 如果想要修改默认的 views 目录，可使用：app.set('views', render 函数的默认路径)
app.get('/', (req, res) => {
  res.render('demo.html', {
    title: 123
  })
  // 路由重定向
  // res.redirect('/')
})
```

### 在`express`中获取`GET`请求数据

```javascript
const express = require('express')
const app = express()

app.get('/get', (req, res) => {
  console.log(req.query)
  res.send(req.query)
})

```

### 在`express`中获取`POST`请求数据

> 在`express`中没有内置获取`post`请求体的`API`，需要借助第三方包：`body-parser`

- 安装

```shell
npm install --save body-parser
```

- 配置

```javascript
const express = require('express')
// 引包
const bodyParser = require('body-parser')

const app = express()

// 配置 body-parser
// 加入这个配置后，req 请求对象中会添加一个 body 属性
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post('/post', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})
```
