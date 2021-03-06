# React

> `React`是一个用于构建用户界面的`JavaScript`库。
> 从`MVC`角度来看，`React`负责视图层的渲染，而非提供了完整的`M`和`C`的功能。
> `React`起源于`Facebook`的内部项目，后来用于架设`Instagram`的网站，于`2013`年`5`月开源。

[toc]

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
  {id: 4, name: '张三4'}
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

#### Context

> 作用：跨组件传递数据，比如：主题、语言。

##### 步骤

- 调用`React.createContext()`创建`Provider`（提供数据）和`Consumer`（消费数据）两个组件。

```javascript
const { Provider, Consumer } = React.createContext()
```

- 使用`Provider`组件作为父节点。

```javascript
<Provider>
 <div className="App">
  <Child />
 </div>
</Provider>
```

- 设置`value`属性，表示要传递的数据。

```javascript
<Provider value="pink">
</Provider>
```

- 调用`Consumer`组件接收数据。

- 示例：

```javascript
// 创建 context 得到两个组件
const { Provider, Consumer } = React.createContext()

class App extends React.Component {
  render() {
    return (
      <Provider value="pink">
        <div className="App">
          <Node />
        </div>
      </Provider>
    )
  }
}

const Node = props => {
  return (
    <div className="node">
      <SubNode />
    </div>
  )
}

const SubNode = props => {
  return (
    <div className="subnode">
      <Child />
    </div>
  )
}

const Child = props => {
  return (
    <div className="child">
      <Consumer>
        {
          data => <span>父组件传递的数据：{ data }</span>
        }
      </Consumer>
    </div>
  )
}
```

##### 总结

- 如果两个组件是远房亲戚，比如嵌套多层时可以使用`Context`实现组件通讯。

### Props深入

#### children属性

> 表示组件标签的子节点，当组件标签有子节点时，`props`就会有该属性。
> `children`属性与普通的`props`一样，值可以是任意值：文本、`React`元素、组件、函数等。

```javascript
function Hello(props) {
  return (
    <div>
      组件的子节点：{ props.children }
    </div>
  )
}

<Hello>我是子节点</Hello>
```

#### props校验

- 对于组件来说，`props`是外来的，无法保证组件使用者传入什么格式的数据，如果传入的数据格式不对，可能会导致组件内部报错。
- 关键问题：组件的使用者不知道明确的错误原因。

> `props`校验：允许在创建组件的时候就指定`props`的类型、格式等。
> 作用：捕获使用组件时因为`props`导致的错误，给出明确的错误提示，增加组件的健壮性。

##### props校验使用

- 安装包`prop-types`

```shell
npm i prop-types
yarn add prop-types
```

- 导入`prop-types`包
- 使用`组件名.propTypes = {}`来给组件的`props`条件校验规则。
- 校验规则通过`propTypes`对象来指定。

```javascript
import PropTypes from 'prop-types'

const App = props => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={ item.id }>{ item.name }</li>)
  return <ul>{ lis }</ul>
}

// 添加 props 校验
App.propTypes = {
  colors: PropTypes.array
}

React.render(
  <App colors={ [{
    id: 1,
    name: 'red'
  }] } />,
  root
)
```

##### 约束规则

- 常见类型：
  - `array`：数组
  - `bool`：布尔值
  - `func`：函数
  - `number`：数值
  - `object`：对象
  - `string`：字符串
- `React`元素类型：
  - `element`
- 必填项：
  - `isRequired`
- 特定结构的对象：
  - `shape({})`

```javascript
App.propTypes = {
  // 常见类型
  list: PropTypes.array,
  isTrue: PropTypes.bool,
  fn: PropTypes.func,
  num: PropTypes.number,
  obj: PropTypes.object,
  str: PropTypes.string,
  // 元素类型
  html: PropTypes.element,
  // 必填项
  sure: PropTypes.bool.isRequired,
  // 特定结构的对象
  optionalObjectWithShape: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  })
}
```

##### props默认值

- 通过`Child.defaultProps = {  }`设置默认值。
- 作用：给`props`设置默认值，在未传入`props`时生效，传入时将替换为传入的值。

```javascript
const App = props => {
  return (
    <div>
      <h1>此处展示props的默认值：{ props.pageSize }</h1>
    </div>
  )
}

// 添加默认值
App.defaultProps = {
  pageSize: 10
}

React.render(<App />, root)

```

### 组件的生命周期

> 组件的生命周期有助于理解组件的运行方式，完成更复杂的组件功能、分析组件错误原因等。
> 组件从被创建到挂载到页面中运行，再到组件不用时卸载的过程叫做组件的生命周期。
> 生命周期的每个阶段总是伴随着一些方法调用，这些方法就是生命周期的钩子函数。
> 钩子函数的作用：为开发人员在不同阶段操作组件提供了时机。
> 只有类组件才有生命周期，共分为三个阶段。

- 每个阶段的执行时机。
- 每个阶段钩子函数的执行顺序。
- 每个阶段钩子函数的作用。

#### 创建时

> 创建时（挂载阶段）

- 执行时机：组件创建时（页面加载时）
- 执行顺序：`constructor()` => `render()` => `componentDidMount`
  - `constructor`：创建组件时最先执行，可以用来初始化`state`、为事件处理程序绑定`this`执行。
  - `render`：每次组件渲染都会触发，可以用来渲染`UI`（注意：不能调用`setState()`）
  - `componentDidMount`：组件挂载（完成`DOM`渲染）后触发，可以用来发送网络请求、操作`DOM`。

#### 更新时

> 更新时（更新阶段）

- 执行时机：组件更新时
- 执行顺序：`render()` => `componentDidUpdate`
  - `render()`：组件更新时渲染`UI`，与挂载阶段是同一个`render`。
  - `componentDidUpdate()`：更新渲染完成后触发，可以用来发送网络请求、操作`DOM`，如果需要`setState()`必须放在一个`if`条件中。
- 触发时机：`setState()`、`forceUpdate()`、组件接收到新的`props`，组件就会重新渲染。

#### 卸载时

> 卸载时（卸载阶段）

- 执行时机：组件从页面中消失时触发。
- 执行顺序：`componentWillUnmount`
  - `componentWillUnmount`：组件卸载，从页面中消失；可以执行清理工作，如定时器等。

#### 不常用钩子函数

## render props & 组件高级

> 如果两个组件中部分功能相似或相同，该如何处理？
> 处理方式：复用相似的功能，如函数封装
> 复用`state`和操作`state`的方法，组件状态逻辑
> 两种方式：
>
> - `render props`模式
> - 高阶组件`HOC`
> 这两种方式不是新的`API`，而是利用`React`自身特点的编码技巧演化而成的固定模式。

- 思路：将要复用的`state`和操作`state`的方法封装到一个组件中。
- 使用组件时添加一个值为函数的`props`，通过函数的参数来获取到复用的`state`，需在组件内部实现。
- 使用该函数的返回值作为要渲染的`UI`内容，需在组件内部实现。

```javascript
<Mouse render={ mouse => (
  <p>鼠标当前的位置 { mouse.x }, { mouse.y } </p>
) } />
```

### render props 使用步骤

- 创建`Child`组件，在组件中提供复用的状态逻辑代码（1. 状态；2. 操作状态的方法）。
- 将要复用的状态作为`props.render(state)`方法的参数，暴露到组件外部。
- 使用`props.render()`的返回值作为要渲染的内容。
- 注意：并不是该模式叫`render props`就必须使用名为`render`的`prop`，可以使用任意名称的`prop`
  - 只是把`prop`是一个函数并且告诉组件要渲染什么内容的技术叫做：`render props`。
  - 推荐使用`children`代替`render`属性。

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <Mouse children={ mouse => (<p>鼠标的位置：{mouse.x}, {mouse.y}</p>) } />
        { /* 根据子节点 children 属性可替换为： */ }
        <Mouse>
          { (x, y) => (<p>鼠标的位置：{x}, {y}</p>) }
        </Mouse>
      </div>
    )
  }
}

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }
  handleMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  // 监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  // 组件卸载时移除事件绑定
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
  render() {
    return this.props.children(this.state)
  }
}
// 添加 props 校验
Mouse.propTypes = {
  children: PropTypes.func.isRequired
}
```

### 高阶组件

> 高阶组件：`HOC: Higher-OrderComponent`，是一个函数，接收要包装的组件，返回增强后的组件。
> 高阶组件内部会创建一个类组件，在这个类组件中提供复用的状态逻辑代码，通过`prop`将复用的状态传递给被包装组件`WrappedComponent`
> 目的：实现状态逻辑复用。
> 采用包装（装饰）模式，相当于手机壳，通过包装组件来增强组件功能。

#### 高阶组件使用步骤

- 创建一个函数，名称约定以`with`开头。
- 指定函数参数，参数应该以大写字母开头，作为要渲染的组件。
- 在函数内部创建一个类组件，提供复用的状态逻辑代码并返回。
- 在该组件中渲染参数组件，同时将状态通过`prop`传递给参数组件。
- 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件并渲染到页面中。
- 示例：

```javascript
function withMouse(WrappedComponent) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }
    render() {
      return <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
    }
  }

  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}

function getDisplayName() {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const Position = props => {
  return ( <p>鼠标当前位置：{ props.x }, { props.y }</p> )
}

const MovePosition = withMouse(Position)

class App extends React.Component {
  render() {
    return (
      <div>
        <MovePosition />
      </div>
    )
  }
}

```

#### displayName

- 使用高阶组件存在的问题：得到的两个组件名称相同。
- 原因：默认情况下，`React`使用组件名称作为`displayName`
- 解决方法：为高阶组件设置`displayName`便于调试时区分不同的组件。
- 作用：用于设置调试信息。

## React原理

- 工作角度：应用第一，原理第二。
- 原理有助于更好的理解`React`的自身运行机制。

### setState 说明

#### setState 更新数据

> `setState()`是异步更新数据的。
> 注意：使用该语法时，后面的`setState()`不要依赖于前面的`setState()`。
> 可以调用多个`setState()`，只会触发一次`render()`渲染方法，提升性能。

```javascript
export default class DemoA extends React.Component {
  state = {
    count: 1
  }
  handleClick = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('count:', this.state.count) // 1：异步更新数据
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('count:', this.state.count) // 1：异步更新数据

    // 推荐语法
    this.setState((state, props) => {
      return {
        count: state.count + 1
      }
    })
    console.log(this.state.count) // 1：异步更新数据
    this.setState((state, props) => {
      console.log('第二次调用sate：', state)  // { count: 2 }
      return {
        count: state.count + 1
      }
    })
    console.log(this.state.count) // 2：异步更新数据
  }

  render() {
    console.warn('触发了render')
    return (
      <div>
        <h1>计数器：{ this.state.count }</h1>
        <button onClick={ this.handleClick }>+1</button>
      </div>
    )
  }
}
```

#### setState 推荐语法

> 多次调用时推荐使用`setState((state, props) => {})`语法，此语法也是异步更新`state`的。
>
> 参数`state`：表示最新的`state`数据。
> 参数`props`：表示最新的`props`数据。

```javascript
this.setState((state, props) => {
  return {
    count: state.count + 1
  }
})
```

#### setState 第二个参数

> 场景：在状态更新后（页面完成重新渲染后）理解执行某个操作。
> 语法：`setState(updater, [,]])`
> 相似于`componentDidUpdate`

```javascript
this.setState(
  (state, props) => {},
  () => { console.log('立即执行的函数') }
)
```

### JSX的转化过程

> `JSX` => `createElement()` => `React元素`
> `JSX`仅仅是`createElement()`方法的**语法糖**，简化语法。
> `JSX`会被`@babel/preset-react`插件编译为`createElement()`方法。
> `React`元素是一个对象，用来描述你希望在屏幕上看到的内容。

```javascript
const element_JSX = <h1 className="demo">Hello World</h1>
console.log(element_JSX) // 打印结果相同

const element_create = React.createElement('h1',
  {
    className: 'demo'
  },
  'Hello World'
)
console.log(element_create) // 打印结果相同
```

### 组件更新机制

- `setState()`的两个作用：
  - 修改`state`数据
  - 更新组件渲染`UI`视图
- 组件更新过程

> 父组件重新渲染时，也会重新渲染子组件。但是只会渲染当前组件子树（当前组件及其所有子组件）。

### 组件性能优化

#### 减轻 state

> `state`只存储跟组件渲染相关的数据。
> 注意：不用做渲染的数据不要放在`state`中。
> 需要在多个方法中用到的数据应该放在`this`中。

#### 避免不必要的重新渲染

- 组件更新机制：父组件更新会引起子组件也被更新。
- 如果子组件没有任何变化也会被重新渲染，需要避免不必要的重新渲染。
- 解决方式：使用钩子函数`shouldComponentUpdate(nextProps, nextState)`
- 作用：通过返回值决定该组件是否重新渲染，返回`true`表示重新渲染，`false`表示不重新渲染。
- 触发时机：更新阶段的钩子函数，组件重新渲染前执行（`shouldComponentUpdate => render`）。
- 参数`nextProps`：表示最新的`props`。
- 参数`nextState`：表示最新的`state`。

```javascript
class App extends React.Component {
  // 钩子函数
  shouldComponentUpdate(nextProps, nextState) {
    console.log('最新的props:', nextProps)
    console.log('最新的state:', nextState) // 最新的状态
    console.log('最新的state:', this.state.count) // 更新前的状态
    // 根据条件判断
    if (nextState.count === this.state.count) {
      // 返回 false 阻止组件重新渲染，render 不会执行
      return false
    }
    return true
  }
  render() {
    return null
  }
}
```

#### 纯组件

> 纯组件：`PureComponent`与`React.Component`功能相似。
> 区别：`PureComponent`内部自动实现了`shouldComponentUpdate`钩子函数，无需手动比较。
> 原理：纯组件内部通过分别对比前后两次`props`和`state`的值，来判断是否重新渲染组件。
>
> - 对于值类型来说：比较两个值是否相同，直接赋值即可
> - 对于引用类型来说：只对比对象的引用地址是否相同，修改时需直接修改对象，不要修改对象中单个属性，否则不会重新渲染。
> - 注意：`state`或`props`中属性值为引用类型时，应该创建新数据，不要直接修改原数据，否则不会重新渲染。

```javascript
class App extends React.PureComponent {
  state = {
    number: 0
  }
  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }
  render() {
    console.log('执行了render')
    return (
      <div>
        <h1>随机数：{ this.state.number }</h1>
        <button onClick={ this.handleClick }>生成随机数</button>
      </div>
    )
  }
}
```

- 说明：纯组件内部的对比是`shallow compare`浅层对比。
- 对于值类型来说：比较两个值是否相同，直接赋值即可。
- 对于引用类型来说：只对比对象的引用地址是否相同。
- 注意：`state`或`props`中属性值为引用类型时，应该创建新数据，不要直接修改原数据，否则不会重新渲染。
- 正确做法是创建新数据，不要用`push/unshift`等直接修改当前数组的方法，应该用`concat/slice`等返回新数组的方法。

```javascript
handleClick = () => {
  // 正确做法：创建新对象
  const newObj = {...this.state.obj, number: 4}
  const newArr = [...this.state.arr, {num: 1}]
  this.setState(() => {
    return {
      obj: newObj,
      arr: newArr
    }
  })
}
```

### 虚拟DOM和Diff算法

- `React`更新视图的思想是：只要`state`变化就重新渲染视图。
- 特点：思路非常清晰。
- 问题：组件中只有一个`DOM`元素需要更新时，也得把整个组件的内容重新渲染到页面中吗？不是
- 理想状态：部分更新，只更新变化的地方。
- `React`是通过虚拟`DOM`配合`Diff`算法来实现部分更新的。

#### 虚拟DOM

> 虚拟`DOM`：本质上就是一个`JS`对象，用来描述你希望在屏幕上看到的内容`UI`。
> `state + JSX => 虚拟 DOM`
> 虚拟`DOM`的真正价值从来都不是性能，而是让`React`脱离了浏览器的束缚。

```javascript
// 虚拟 DOM 对象
const element = {
  type: 'h1',
  props: {
    className: 'demo',
    children: 'Hello World'
  }
}
// 生成 HTML 结构
<h1 class="demo">
  Hello World
</h1>
```

#### Diff算法

- 初次渲染时，`React`会根据初始`state(Model)`，创建一个虚拟`DOM`对象（树）。
- 根据虚拟`DOM`生成真正的`DOM`渲染到页面中。
- 当数据发生变化后（`setState()`），`React`会重新根据新的数据创建新的虚拟`DOM`对象（树）。
- `React`内部会将新的虚拟`DOM`对象与旧虚拟`DOM`对象使用`Diff`算法对比（找不同），得到需要更新的内容。

#### 代码示例

- 组件`render()`调用后，根据状态和`JSX`结构生成虚拟`DOM`对象。
- `render()`方法调用并不意味着浏览器中的重新渲染。
- `render()`方法调用仅仅说明要进行`Diff`算法对比新旧两个虚拟`DOM`对象。

```javascript
render() {
  const el = (
    <div>
      <h1>生成随机数</h1>
      <p>{ this.state.number }</p>
      <button onClick={ this.handleClick }>重新生成</button>
    </div>
  )
  console.log(el)
  return el
}

// 虚拟 DOM 对象
{
  type: 'div',
  props: {
    children: [
      { type: 'h1', props: { children: '随机数' } },
      { type: 'p', props: { children: 0 } }
    ]
  }
}

// this.state.number 变化后只更新变化的内容
{ type: 'p', props: { children: 1 } }

```

## 路由

> 现代的前端应用大多都是`SPA`（单页面应用程序），也就是只有一个`HTML`页面的程序。因为它的用户体验更好、对服务器的压力更小，所以更受欢迎。为了有效的使用单个页面来管理多页面的功能，前端路由应运而生。
> `React`路由的一切都是组件，可以像思考组件一样思考路由。

- 前端路由的功能：让用户从一个视图（页面）导航到另一个视图（页面）。
- 前端路由是一套映射规则，在`React`中，是`URL`路径与组件的对应关系，就是在配置路径和组件（配对）。

### 路由基本使用

- 安装路由

```shell
npm i react-router-dom
yarn add react-router-dom
```

- 导入路由的三个核心组件：`Router/Route/Link`

```javascript
// as 别名
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
```

- 使用`Router`组件包裹整个应用。

```javascript
<Router>
  <div className="App">

  </div>
</Router>
```

- 使用`Link`组件作为导航菜单（路由入口）

```javascript
<Link to="/first">
  页面一
</Link>
```

- 使用`Route`组件配置路由规则`path`和要展示的组件`component`（路由出口）

```javascript
const First = () => <p>页面一的内容</p>
<Router>
  <div>
    <Link to="/first">页面一</Link>
    <Route path="/first" component={ First }>
  </div>
</Router>
```

#### 常用组件说明

- `Router`组件：包裹整个应用，一个`React`应用只需要使用一次。
- 两种常用`Router`：`HashRouter`和`BrowserRouter`（推荐）：
  - `HashRouter`：使用`URL`的哈希值实现（`localhost:3000/#/first`）
  - `BrowserRouter`：使用`H5`的`history API`实现（`localhost:3000/first`）
- `Link`组件：用于指定导航链接（`a`标签）
  - `to`属性：浏览器中的`pathname`(`location.pathname`)
- `Route`组件：指定路由展示组件相关信息。
  - `path`属性：路由规则
  - `component`属性：展示的组件

### 路由执行过程

- 点击`link`组件（`a`标签），修改了浏览器地址栏中的`url`。
- `React`路由监听到地址栏`url`的变化。
- `React`路由内部遍历所有的`Route`组件，使用路由规则（`path`）与`pathname`进行匹配。
- 当路由规则（`path`）能够匹配地址栏中的`pathname`时，就展示该`Route`组件的内容（`component`）。

### 编程式导航

> 通过`JavaScript`代码来实现页面跳转。
> `history`：`React`路由提供的，用于获取浏览器历史记录的相关信息。
> `push(path)`：跳转到某个页面，参数`path`表示要跳转的路径。
> `go(n)`：前进或后退到某个页面，参数`n`表示前进或后退的页面数据（比如：`-1`表示后退到上一个页面）。

```javascript
class Login extends React.Component {
  handleLogin = () => {
    this.props.history.push('/login')
  }
  handleBack = () => {
    this.props.go(-1)
  }
}
```

### 默认路由

> 默认路由：进入页面时就会匹配的路由，`path`为：`/`。

```javascript
<Route path="/" component={ Index } >
```

### 路由匹配模式

#### 模糊匹配模式

> 路由跳转时，默认路由`/`也会被匹配成功。
> 默认情况下，`React`路由是**模糊匹配模式**。
> 模糊匹配规则：只有`pathname`以`path`开头就会匹配成功。
> `/`：所有的`pathname`都能够匹配。
> `/first`：`/first`、`/first/a`、`/first/a/b...`能够匹配。

#### 精确匹配

> 精确匹配：只有当`path`和`pathname`完全匹配时才会展示该路由。
> 给`Route`组件添加`exact`属性，让其变为精确匹配模式，推荐使用精确匹配模式。

```javascript
<Router exact path="/" component={ Index } />
```

### 嵌套路由

> 嵌套路由：路由内部包含路由，嵌套路由的`path`格式要以父路由的`path`开头。
