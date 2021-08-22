# Blog

## 目录结构

> - `app.js`：项目入口模块。
> - `controllers`：
> - `models`：存储使用`mongoose`设计的数据模型。
> - `node_modules`：第三方包。
> - `package.json`：包描述文件。
> - `package-lock.json`：第三方包版本锁定文件。
> - `public`：公共静态资源。
> - `READE.md`：项目说明文件。
> - `routes`：
> - `views`：储存视图目录。

## 路由设计

|    路径     |  方法  | GET参数 |        POST参数         | 权限 |     备注     |
| :---------: | :----: | :-----: | :---------------------: | :--: | :----------: |
|     `/`     | `GET`  |   无    |           无            |  无  |   渲染首页   |
|  `/login`   | `GET`  |   无    |           无            |  无  | 渲染登录页面 |
|  `/login`   | `POST` |   无    |    `name、password`     |  无  | 处理登录请求 |
| `/register` | `GET`  |   无    |           无            |  无  | 渲染注册页面 |
| `/register` | `POST` |   无    | `email、name、password` |  无  | 处理注册请求 |
|  `/logout`  | `GET`  |   无    |           无            | 登录 | 处理退出请求 |

## 实现步骤

- 创建目录结构
- 整合静态页面
  - `include`
  - `block`
  - `extend`
- 设计路由
- 注册
  - 处理客户端页面表单数据，发起请求
  - 服务端处理请求，操作数据库
  - 记录用户登录状态
- 登录
- 退出
