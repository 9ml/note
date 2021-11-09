# Node

- 推荐安装`node-snippets`插件，增强语法提示
  - 输入`node-http-server`，根据语法提示编写出以下代码

```javascript
// 引入 http 内置模块模块
var http = require('http');
/**
 * request：获取 url 传递过来的信息
 * response：给浏览器响应信息
*/
http.createServer(function (request, response) {
  // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // 给页面上输入一句话并结束响应
  response.end('Hello World');
  // 端口
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
```
