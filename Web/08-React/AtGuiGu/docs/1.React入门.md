# React入门

[toc]

## 起步

### React基本使用

#### React相关JS库

- `react.js`：`React`核心库
- `react-dom.js`：提供操作`DOM`的`React`扩展库
- `babel.min.js`：
  - `ES6+`转`ES5`
  - 解析`JSX`语法代码转为`JS`代码的库

#### HelloReact

- 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HelloReact</title>
</head>
<body>
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入React核心库 -->
  <script src="../js/old/react.development.js"></script>
  <!-- 引入React-dom  用于支持react操作dom -->
  <script src="../js/old/react-dom.development.js"></script>
  <!-- 引入babel  用于将jsx转为js -->
  <script src="../js/old/babel.min.js"></script>
  <!-- type 要写为 babel -->
  <script type="text/babel">
    // 1. 创建虚拟DOM
    const VDOM = <h1>Hello React</h1> // 不要写引号，因为不是字符串
    // 2. 渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
  </script>
</body>
</html>
```

### 虚拟DOM的两种创建方式

- 共有两种创建方式：
  - 使用`JS`创建，多层标签嵌套时较繁琐，一般不使用
  - 使用`JSX`创建，会自动转化为`JS`创建的方式，相当于`JS`创建虚拟`DOM`的语法糖，推荐使用

#### 使用JSX创建虚拟DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>使用JSX创建虚拟DOM</title>
</head>
<body>
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入React核心库 -->
  <script src="../js/old/react.development.js"></script>
  <!-- 引入React-dom  用于支持react操作dom -->
  <script src="../js/old/react-dom.development.js"></script>
  <!-- 引入babel  用于将jsx转为js -->
  <script src="../js/old/babel.min.js"></script>
  <!-- type 要写为 babel -->
  <script type="text/babel">
    // 1. 创建虚拟DOM，不要写引号，因为不是字符串
    const VDOM = (
      <h1>
        <span>Hello React</span>
      </h1>
    )
    // 2. 渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
  </script>
</body>
</html>
```

#### 使用JS创建虚拟DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>使用JS创建虚拟DOM</title>
</head>
<body>
  <!-- 准备好一个容器 -->
  <div id="test"></div>
  <!-- 引入React核心库 -->
  <script src="../js/old/react.development.js"></script>
  <!-- 引入React-dom  用于支持react操作dom -->
  <script src="../js/old/react-dom.development.js"></script>
  <!-- type 要写为 babel -->
  <script type="text/javascript">
    // 1. 创建虚拟DOM
    const VDOM = React.createElement('h1', { id: title }, React.createElement('span', {}, 'HelloReact'))
    // 2. 渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
  </script>
</body>
</html>
```

#### 虚拟DOM与真实DOM

- 虚拟`DOM`
  - 本质是`Object`类型的对象，即一般对象
  - 虚拟`DOM`比较轻，真实`DOM`较重，因为虚拟`DOM`是`React`内部在用，无需像真实`DOM`上那么多属性
  - 虚拟`DOM`最终会被`React`转换为真实`DOM`呈现在页面上

### JSX

- 全称：`JavaScript XML`
- `React`定义的一种类似于`XML`的`JS`扩展语法：`JS + XML`
- 本质上是`React.createElement`方法的语法糖
- 作用：用来简化创建虚拟`DOM`
- 注意：
  - 不是字符串，也不是`HTML/XML`标签
  - 最终产生的就是一个`JS`对象
- 标签名任意，`HTML`标签或其他标签

#### JSX语法规则

- 定义虚拟`DOM`时，不要写引号`""/''`
- 标签中混入`JS`表达式时要使用大括号`{ ... }`
- 样式类名的指定要使用`className`
- 内联样式要用`{{ key: value }}`的形式
- 只能有一个根标签
- 标签必须闭合
- 标签首字母
  - 若小写字母开头，则将该标签转为`HTML`中同名元素，如`HTML`中无该标签对应的同名元素则报错
  - 若大写字母开头，则将该标签当作组件渲染，若组件没有定义则报错

```jsx
const mId = '9ml'
const mData = 'Hello React'
// 创建虚拟DOM
const VDOM = (
  <div>
    <h1 className="title" id={mId}>
      <span style={ {color: 'white', fontSize: '30px'} }>{mData}</span>
    </h1>
    <input type="text" />
  </div>
)
// 渲染虚拟DOM到页面上
ReactDOM.render(VDOM, document.getElementById('xxx'))
```

#### JS语句与JS表达式

- `JS`表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方，如：
  - `a`
  - `a + b`
  - `demo(1)`
  - `arr.map()`
  - `function test() { ... }`
- `JS`语句：即`JS`代码，不会产生值
  - `if(...) { ... }`
  - `for (...) { ... }`
  - `switch(...) { case... }`

#### 扩展 - XML

- `XML`早期用于存储和传输数据：

```xml
<student>
  <name>Tom</name>
  <age>18</age>
</student>
```

- 后来由`JSON`替换：

```json
"student": {
  "name": "Tom",
  "age": 18
}
```

### 模块与组件、模块化与组件的理解

#### 模块

- 理解：向外提供特定功能的`JavaScript`程序，一般就是一个`JS`文件
- 为什么要拆成模块：随着业务逻辑的增加，代码越来越多且复杂
- 作用：复用`JS`，简化`JS`的编写，提高`JS`运行效率

#### 组件

- 理解：用来实现局部功能效果的代码和资源的集合，如`html/css/js/image`等
- 为什么：一个界面的功能更复杂
- 作用：复用代码，简化项目编码，提高运行效率

#### 模块化

- 当应用的`JS`都以模块来编写，这个应用就是一个模块化的应用

#### 组件化

- 当应用是以多组件的方式实现，这个应用就是一个组件化的应用
