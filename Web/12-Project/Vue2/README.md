# Vue项目实战

> 版本：`Vue2.x`
> 环境：`Node + Webpack`

## 起步

### 安装

```shell
# 全局安装 Vue
npm install -g @vue/cli
# 创建项目
vue create <project-name>
```

### 目录结构

- `node_modules`：项目依赖文件
- `public`：静态资源文件，注意：`webpack`打包时会原封不动的打包在`dist`文件夹中
- `src`：源代码文件
  - `assets`：静态资源文件，一般放置多个组件共用的静态资源，注意：`webpack`打包时会把此文件夹中的静态资源当作一个模块打包到`JS`文件中
  - `components`：非路由组件文件、全局组件
  - `App.vue`：唯一的根组件
  - `main.js`：程序入口文件，整个程序中最先执行的文件
- `.gitignore`：`Git`忽略文件
- `babel.config.js`：`babel`配置文件
- `package-lock.json`：包锁定文件，锁定依赖的版本号，提升安装速度
- `package.json`：包说明文件，记录项目信息
- `README.md`：项目说明文件
- `vue.config.js`：项目配置文件

### 项目的其他配置

#### 运行项目自动打开

- `package.json`：

```json
{
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
}
```

#### ESLint校验功能关闭

- 在项目根目录创建`vue.config.js`文件：

```javascript
module.exports = {
  // 关闭ESLint
  lintOnSave: false
}
```

#### 配置src文件夹别名

- 方便静态资源文件可直接使用`@/...`引用，在项目根目录创建`jsconfig.json`文件：

```json
{
  // 配置 @ 为 src
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  // 排除文件夹，即不能使用的文件夹
  "exclude": ["node_modules", "dist"]
}
```

## 项目路由分析

- 使用`vue-router`实现路由
- 前端路由：`key: value`键值对
  - `key`：url，地址栏中的路径
  - `value`：相应的路由组件
- 注意：项目为上中下结构
- 路由组件：
  - 首页路由组件
  - 搜索路由组件
  - 登录路由组件
  - 注册路由组件
- 非路由组件：
  - 头部
  - 底部（登录注册页面不显示）

## 完成非路由组件业务

> 项目中不再以`HTML + CSS`，主要做业务逻辑方面

- 开发项目步骤
  - 书写静态页面`HTML + CSS`
  - 拆分组件
  - 获取服务器的数据并动态渲染
  - 完成相应的动态业务逻辑
- 注意：
  - 创建组件时，组件结构 + 组件样式 + 图片资源
  - 项目采用的是`Less`语法样式，需要通过`less`及`less-loader`将`less`样式编译为`css`样式，`style`标签添加`lang="less"`属性

```shell
#安装less less-load 为 5.x 版本
npm i --save less less-loader@5
```

### 使用组件的步骤

- 非路由组件：
  - 创建或者定义组件
  - 引入
  - 注册
  - 使用1
