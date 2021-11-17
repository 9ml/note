# React

- 用于构建用户界面的`JavaScript`库
  - `React`是一个将数据渲染为`HTML`视图的开源`JavaScript`库
- 由`Facebook`开发并开源
- 原生`JavaScript`痛点：
  - 原生`JavaScript`操作`DOM`繁琐、效率低（`DOM-API`操作`UI`）
  - 使用`JavaScript`直接操作`DOM`，浏览器会进行大量的**重绘重排**
  - 原生`JavaScript`没有**组件化**编码方式，代码复用率低
- `React`特点：
  - 采用**组件化**模式、**声明式编码**，提高开发效率及组件复用率
  - 在`React Native`中可以使用`React`语法进行**移动端开发**
  - 使用虚拟`DOM`和优秀的`Diffing`算法，尽量减少与真实`DOM`的交互
- 原生`JavaScript`渲染`DOM`：

![原生JS渲染DOM](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/react/js-dom-code.png)
![原生JS渲染DOM](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/react/js-dom.png)

- `React`渲染`DOM`：

![React渲染DOM](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/react/react-dom.png)

- `React`高效的原因：
  - 使用虚拟`DOM`，不总是直接操作页面的真实`DOM`
  - `DOM Diffing`算法，最小化页面重绘
- `React`官网：
  - [英文官网](https://reactjs.rog/)
  - [中文官网](https://react.docschina.org/)

- React入门
