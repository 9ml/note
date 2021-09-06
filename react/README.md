# React

> `React`是一个用于构建用户界面的`JavaScript`库。
> 从`MVC`角度来看，`React`负责视图层的渲染，而非提供了完整的`M`和`C`的功能。
> `React`起源于`Facebook`的内部项目，后来用于架设`Instagram`的网站，于`2013`年`5`月开源。

## 特点

### 声明式

- 只需描述`UI`看起来什么样，与写`HTML`相同。
- `React`负责渲染`UI`，并在数据变化时更新`UI`。

### 基于组件

- 组件是`React`中最重要的内容。
- 组件是表示页面中的部分内容。

### 应用

- `React`：开发`Web`应用。
- `React-Native`：开发移动端原生应用。
- `React360`：开发`VR`虚拟现实应用。
- ......

## 起步

### 安装

- 安装命令

```shell
npm i react react-dom
```

- `react`包是核心，提供创建元素、组件等功能。
- `react-dom`包提供`DOM`相关功能。

### 示例

```html
<div id="app"></div>
<!-- 1. 引包，注意顺序 -->
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

<script>
  /**
   * 2. 创建 React 元素
   * 参数1：元素名称
   * 参数2：元素属性，没有节点可为 null
   * 参数3：元素节点（文本节点/元素节点）
   * 
  */
  const title = React.createElement('h1', { id: 'h1', title: '标题' }, 'Hello React')
  /**
   * 3. 渲染 React 元素
   * 参数1：要渲染的 React 元素
   * 参数2：挂载点 DOM 对象，用于指定渲染到页面中的位置
  */
  ReactDOM.render(title, document.getElementById('app'))
</script>
```

## 脚手架

> 脚手架是开发现代`Web`应用的必备工具。
> 利用`Webpack`、`Babel`、`ESLint`等工具辅助开发。
> `React`脚手架零配置，无需手动繁琐的工具即可创建`React`应用。

### 初始化

- 初始化项目

> `npx`是`npm v5.2.0`引入的一条命令
> 目的为了提升包内提供的命令行工具的使用体验
>
> - 原来需要全局安装脚手架，才能使用这个包提供的命令。
> - 现在无需全局安装脚手架就可以直接使用这个包提供的命令。
> 推荐使用`npx`命令初始化项目。

```shell
npx create-react-app demo
npm init react-app demo
yarn create react-app demo
```

- 启动命令

```shell
npm start
```

- 打包命令

```shell
npm build
```

### 使用

- `./src/index.js`文件

```javascript
// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'
// 2. 创建 React 原生
const title = React.createElement('h1', null, 'Hello World.')
// 3. 渲染原生
ReactDOM.render(title, document.getElementById('root'))
```

- `createElement`的问题

> - 繁琐不简洁。
> - 不直观，无法一眼看出所描述的结构。
> - 不够优雅

## JSX

### 简介

> `JSX`是`JavaScript XML`的简写，表示在`JavaScript`中写`XML(HTML)`格式的代码。
> 优势：声明语法更加直观，与`HTML`结构相同，降低了学习成本，提升开发效率。
> `JSX`是`React`的核心内容。
>
> - `JSX`不是标准的`ECMAScript`语法，它是`ECMAScript`的语法扩展。
> - 需要使用`babel`编译处理后才能在浏览器环境中使用。
> - `create-react-app`脚手架中已经默认配置了`JSX`，编译包名为`@babel/preset-react`。

### JSX的使用

```javascript
// 1. 使用 JSX 创建 react 元素：
const title = (<h1 className="test">Hello World</h1>)
// 2. 渲染好创建的元素
ReactDOM.render(title, root)
```

### 注意点

- `React`元素的属性名使用驼峰命名语法。
- 特殊属性名：
  - `class` => `className`
  - `for` => `htmlFor`
  - `tabindex` => `tabIndex`
- 没有子节点的`React`原生可以使用`/>`结束。
- 推荐小括号包裹`JSX`，避免`JS`中的自动插入分号的陷阱。

### 嵌入JS表达式

> 数据存储在`JS`中，语法：
> `{ JavaScript 表达式 }`

```javascript
const name = 'Tom'
const dv = (
  <div>{ name }</div>
)
```

注意点：

- 单大括号中可以使用任意的`JavaScript`表达式
- `JSX`自身也是`JS`表达式
- `JS`中对象是一个例外，一般只会出现在`style`属性中
- 不能在`{}`中出现语句，如`if/for`等

### 条件渲染

- 函数中做判断return
- 三元表达式
- 逻辑与

### 列表渲染

- 使用数组的`map`方法。
- 注意：渲染列表时应该添加`key`属性，`key`属性的值要保证唯一。
- 原则：`map`遍历谁，就给谁添加`key`属性。
- 注意：尽量避免使用下标索引作为`key`。

```javascript
const users = [
  {id: 1, name: '张三1'},
  {id: 2, name: '张三2'},
  {id: 3, name: '张三3'},
  {id: 4, name: '张三4'},
]

const list = (
  <ul>
    { users.map(item => <li key={item.id}>{ item.name }</li>) }
  </ul>
)
```

### 样式处理

- 行内样式`style`。

```javascript
<h1 style={ { color: 'red',backgroundColor: 'skyblue' } }></h1>
```

- 类名`className`，推荐使用。

## 组件

> 组件是`React`中的一等公民，使用`React`就是使用组件。
> 组件表示页面中的部分功能，组合多个组件实现完整的页面功能。

### 组件特点

- 可复用、独立、可组合

### 函数组件

> 使用`JS`的函数创建的组件
>
> - 函数名称必须以大写字母开头
> - 函数组件必须有返回值，表示该组件的结构，如果返回`null`则表示不渲染任何内容。
> - 渲染函数组件：用函数名作为组件的标签名，可以是双标签也可以是单标签。

```javascript
function Hello() {
  return (
    <div>Hello</div>
  )
}

ReactDOM.render(<Hello />, root)
```

### 类组件

> 使用`ES6`的`class`类创建组件。
>
> - 类名称必须以大写字母开头。
> - 类组件应该继承`React.Component`父类，从而可以使用父类中提供的方法或属性。
> - 类组件必须提供`render()`方法。
> - `render()`方法必须要有返回值，表示该组件的结构。

```javascript
class Hello extends React.Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

ReactDOM.render(<Hello />, root)
```

### 抽离组件

- 创建`Hello.js`文件
- 在`Hello.js`中导入`React`
- 创建组件
- 在`Hello.js`中导出该组件
- 在`index.js`中导入`Hello`组件
- 渲染组件

```javascript
// Hello.js
import React from 'react'

class Hello extends React.Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}
export default Hello

// index.js
import Hello from './Hello'
ReactDOM.render(<Hello />, root)
```

### 事件处理

> `React`事件绑定语法与`DOM`事件语法相似
> 语法：`on+事件名={事件处理程序}`，例如：`onClick={() => {}}`
> 注意：`React`事件采用的是驼峰命名法，比如`onMouseEnter、onFocus`

```javascript
// class 类
class App extends React.Component {
  handleClick() {
    console.log('单击事件触发了')
  }
  render() {
    return (
      <button onClick={ this.handleClick }>点击</button>
    )
  }
}

// 函数
function App() {
  function handleClick() {
    console.log('单击事件触发了')
  }
  return (
    <button onClick={ this.handleClick }>点击</button>
  )
}
```

#### 事件对象

> 通过事件处理程序的参数获取到事件对象。
> `React`中的事件对象叫做：合成事件（对象）。
> 合成事件：兼容所有的浏览器，无需担心浏览器兼容问题。

```javascript
class App extends React.Component {
  handleClick(e) {
    // 通过事件对象阻止浏览器的默认行为
    e.preventDefault()
    console.log('单击事件触发了', e)
  }
  render() {
    return (
      <a href="https://www.baidu.com" onClick={ this.handleClick }>点击</a>
    )
  }
}
```

### 状态组件

> 状态：`state`即数据：
>
> - 类组件叫做**有状态组件**：
>   - 类组件有自己的状态，负责更新`UI`界面，让页面**动**起来。
> - 函数组件叫做**无状态组件**：
>   - 函数组件没有自己的状态，只负责数据展示（静）。

#### State

> 状态（`state`）即数据，是组件内部的**私有数据**，只能在组件内部使用。
> `state`值是对象，表示一个组件中可以有多个数据。

```javascript
class Hello extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>有状态组件</div>
    )
  }
}
```
