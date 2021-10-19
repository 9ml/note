# Vue3

[toc]

## Vue3简介

- `2020-09-18``Vue`发布了`3.0`版本，代号：`One Piece`海贼王
- 耗时`2`年多、`2600+`次提交、`30+`个`RFC`、`600+`次`PR`、`99`位贡献者
- [Github上的tags地址](https://github.com/vuejs/vue-next/releases/tag/v3.0.0)

### Vue3带来了什么

- 打包大小减少`41%`
- 初次渲染快`55%`，更新渲染快`133%`
- 内存减少`54%`
- ...

### Vue3源码的升级

- 使用`Proxy`替换`Object.defineProperty`实现响应式
- 重写虚拟`DOM`的实现和`Tree-Shaking`
- ...

### 拥抱TypeScript

- `Vue3`可以更好的支持`TypeScript`

### 新的特性

- `Composition API`：组合`API`
  - `setup`配置
  - `ref`与`reactive`
  - `watch`与`watchEffect`
  - `provide`与`inject`
  - ...
- 新的内置组件
  - `Fragment`
  - `Teleport`
  - `Suspense`
- 其他改变：
  - 新的生命周期钩子
  - `data`选项应始终被声明为一个函数
  - 移除`keyCode`支持作为`v-on`的修饰符
  - ...

## 创建Vue工程

- 创建`Vue3`项目工程共有两种方式

### 使用vue-cli创建

```shell
# 查看 @vue/cli 版本，确保 @vue/vli 版本在 4.5.0 以上
vue --version
# 安装或升级 @vue/cli
npm install -g @vue/cli
# 创建工程
vue create vue_test
# 启动
cd vue_test
npm run serve
```

### 使用vite创建

- [官方文档](https://v3.cn.vuejs.org/gulde/installation.html#vite)
- [vite官网](https://vitejs.cn)
- `vite`：新一代前端构建工具
- 优势：
  - 开发环境中，无需打包操作，可以快速的冷启动
  - 轻量快速的热重载`HMR`
  - 真正的按需编译，不再等待整个应用编译完成
- 传统构建与`vite`构建的对比：

![传统构建与vite构建的对比]()
