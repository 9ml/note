# Vue脚手架

> `Vue CLI`：`command line interface`

## 起步

### 安装环境

> 必须先安装`Node`环境

- 安装`Vue`

```shell
# 配置淘宝镜像
npm config set registry https://registry.npm.tabobao.org
# 全局安装 Vue
npm install -g @vue/cli
```

- 创建项目

```shell
vue create demo
```

### 目录结构

- `node_modules`：第三方包文件
- `public`
  - `favicon.ico`：网站页签图标
  - `index.html`：`HTML`模板
- `src`
  - `assets`：静态资源文件
  - `components`：组件文件
  - `views`：页面文件
  - `router`：路由文件
  - `store`：`Vuex`配置文件
  - `App.vue`：根组件
  - `main.js`：项目的入口文件
- `.gitignore`：`Git`忽略文件
- `babel.config.js`：`babel`的控制文件
- `package-lock.json`：包锁定文件，锁定版本号，提升包安装速度
- `package.json`：包说明文件
- `READEME.md`：说明文档

### 不同版本的Vue

- `vue.js`与`vue.runtime.xxx.js`的区别：
  - `vue.js`是完整版的`Vue`，包含：核心功能+模板解析器
  - `vue.runtime.xxx.js`是运行版的`Vue`，只包含核心功能，没有模板解析器
- 因为`vue.runtime.xxx.js`没有模板解析器，所有不能使用`template`配置项，需要使用`render`函数接收到的`createElement`函数去指定渲染的具体内容

### 默认配置

- `Vue`默认隐藏了配置文件，可通过输入命令查看配置文件：

```shell
vue inspect > output.js
```

#### 修改默认配置

- 在根目录新建`vue.config.js`
- [配置参考](https://cli.vuejs.org/zh/config/)
