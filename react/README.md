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
// 完整写法
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

// 简化语法
class Hello extends React.Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>有状态组件</div>
    )
  }
}
```

#### setState

- 组件中的状态是可以改变的
- 语法：`this.setState({ data })`
- 注意：不要直接修改`state`中的值，这是错误的。
- 作用：修改`state`、更新`UI`。
- 思想：数据驱动视图。

```javascript
class Hello extends React.Component {
  state = {
    count: 0
  }
  handleAdd() {
    // this 指向为 undefined
    this.setState({
      count: this.state.count ++
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={ this.handleAdd }>+1</button>
      </div>
    )
  }
}
```

#### this指向

> 解决事件函数中`this`指向问题

##### 箭头函数

- 利用箭头函数自身不绑定`this`的特点。

```javascript
class Hello extends React.Component {
  state = {
    count: 0
  }
  handleAdd() {
    this.setState({
      count: this.state.count ++
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={ () => this.handleAdd }>+1</button>
      </div>
    )
  }
}
```

##### `Function.prototype.bind()`

- 利用`ES5`中的`bind`方法，将事件处理程序中的`this`与组件实例绑定到一起

```javascript
class Hello extends React.Component {
  constructor() {
    super()
    this.handleAdd = this.handleAdd.bind(this)
  }
  state = {
    count: 0
  }
  handleAdd() {
    this.setState({
      count: this.state.count ++
    })
  }.bind(this)
  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={ this.handleAdd }>+1</button>
      </div>
    )
  }
}
```

##### `class`的实例方法

- 利用箭头函数形式的`class`实例方法
- 推荐使用

```javascript
class Hello extends React.Component {
  state = {
    count: 0
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count ++
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={ this.handleAdd }>+1</button>
      </div>
    )
  }
}
```

### 表单处理

#### 受控组件

- `HTML`中的表单元素是可输入的，也就是有自己的可变状态，而`React`中可变状态通常保存在`state`中，并且只能通过`setState`方法来修改。
- `React`将`state`与表单元素值`value`绑定到一起，由`state`的值来控制表单元素的值。
- 受控组件：其值受到`React`控制的表单元素。
- 推荐使用

##### 使用步骤

- 在`state`中添加一个状态，作为表单元素的`value`值（控制表单元素值的来源）
- 给表单元素绑定`onChange`事件，将表单元素的值设置为`state`的值（控制表单元素值的变化）

```javascript
class Input extends React.Component {
  state = {
    text: ''
  }
  render() {
    return (
      <input type="text" value={ this.state.text } onChange={ e => this.setState({ text: e.target.value }) } />
    )
  }
}
```

##### 优化

> 每个表单元素都有一个单独的事件处理程序太过繁琐。

- 优化：使用一个事件处理程序同时处理多个表单元素。
  - 给表单元素添加`name`属性，名称与`state`相同
  - 根据表单元素类型获取对应的值
  - 在事件处理程序中通过`[name]`来修改对应的`state`

```javascript
class Input extends React.Component {
  state = {
    text: ''
  }
  handleInput = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      e.target.name: value
    })
  }
  render() {
    return (
      <input type="text" name="text" value={ this.state.text } onChange={ this.handleInput } />
    )
  }
}
```

#### 非受控组件

- 借助于`ref`，使用原生`DOM`方式来获取表单元素值
- `ref`作用：获取`DOM`或者组件

##### 使用步骤-ref

- 调用`React.createRef()`方法创建一个`ref`对象。
- 将创建好的`ref`对象添加到文本框中。
- 通过`ref`对象获取文本框的值。

```javascript
export default class App extends React.Component {
  constructor() {
    super()
    // 创建 Ref
    this.txtRef = React.createRef()
  }
  getValue = () => {
    console.log(this.txtRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={ this.txtRef } />
        <button onClick={ this.getValue }>获取input值</button>
      </div>
    )
  }
}
```

## 组件进阶

### 组件通讯

> 组件是独立且封闭的单元，默认情况下只能使用组件自己的数据。在组件化过程中，将一个完整的功能拆分成多个组件以更好的完成整个应用功能。
> 在这个过程中，多个组件之间不可避免的要共享某些数据，为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通，这个过程就叫做组件通讯。
> 组件是封闭的，要接收外部的数据应该通过`props`来实现。
> `props`的作用：接收传递给组件的数据。

- 传递数据：给组件标签添加属性
- 接收数据：类组件通过`this.props`接收数据；函数组件通过参数`props`接收数据。

```javascript
<Hello name="Jack" age={ 19 } />

// 函数组件接收数据
function Hello(props) {
  console.log(props.name, props.age)
}

// 类组件接收数据
class Hello extends React.Component {
  render() {
    console.log(this.props.name, this.props.age)
  }
}
```

#### props特点

- 可以给组件传递任意类型的数据。
- `props`是**只读**的对象，只能读取属性的值，无法修改对象。
- 注意：使用类组件时，如果写了构造函数`constructor`，应该将`props`传递给`super()`，否则无法在构造函数中获取到`props`

#### 父组件 => 子组件

- 父组件提供要传递的`state`数据
- 给子组件标签添加属性，值为`state`中的数据。
- 子组件通过`props`接收父组件中传递的数据。

```javascript
class Parent extends React.Component {
  state = {
    lastName: '王'
  }
  render() {
    return (
      <div className="parent">
        父组件
        <Child name={ this.state.lastName } />
      </div>
    )
  }
}

const Child = (props) => {
  return (
    <div>
      <p>子组件，接收到父组件的数据：{ props.name }</p>
    </div>
  )
}
```

#### 子组件 => 父组件

> 思路：利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数。
>
> - 父组件提供一个回调函数，用于接收数据。
> - 将该函数作为属性的值，传递给子组件。
> - 子组件调用`props`传递的回调函数，并将要传递的数据作为参数。

```javascript
class Parent extends React.Component {
  getMsg = msg => {
    console.log('接收到子组件的数据：', msg)
  }
  render() {
    return (
      <div>
       父组件
       <Child getMsg={ this.getMsg } />
      </div>
    )
  }
}

class Child extends React.Component {
  state = {
    msg: '刷抖音'
  }
  handleClick = () => {
    // 子组件调用父组件传递过来的回调函数
    this.props.getMsg(this.state.msg)
  }
  render() {
    return (
      <div>
        子组件：<button onClick={ this.handleClick }>点击给父组件传递数据</button>
      </div>
    )
  }
}
```

#### 兄弟组件

> 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态：状态提升。
> 公共父组件职责：
>
> - 提供共享状态。
> - 提供操作共享状态的方法。
> 要通讯的子组件只需要通过`props`接收状态或操作状态的方法。

```javascript
class Parent extends React.Component {
  // 提供共享状态
  state = {
    count: 0
  }
  // 提供修改状态的方法
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <ChildA count={ this.state.count } />
        <ChildB add={ this.addCount } />
      </div>
    )
  }
}

const ChildA = props => {
  return <h1>计数器：{ props.count }</h1>
}

const ChildB = props => {
  return <button onClick={ () => props.add() }>+1</button>
}

```
