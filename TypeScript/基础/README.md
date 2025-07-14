# TypeScript

> 以下将`TypeScript`简写为`TS`, `JavaScript`简写为`JS`

## TS 简介

1. `TS`是由微软公司开发, 基于`JS`的一个扩展语言
2. `TS`包含了`JS`的所有内容, 即: `TS`是`JS`的超集
3. `TS`增加了: 静态类型检查, 接口, 泛型等很多现代开发特性, 因此更适合大型项目开发
4. `TS`需要编译为`JS`, 然后交给浏览器或者其他`JS`运行环境执行

## 为何使用 TS

### 今非昔比的 JS

- JS 诞生时的定位是浏览器**脚本语言**, 用于在网页中嵌入一些**简单的逻辑**, 而且代码量很少
- 随着时间的推移, JS 变得越来越流行, 如今的 JS 已经可以进行**全栈编程**了
- 现如今的 JS **应用场景**比以前**丰富**得多, **代码量**也比当年大很多, 随便一个 JS 项目的代码量, 可以轻松达到几万行甚至更多
- 然而 JS 当年**出生简陋**, 没考虑到如今的应用场景和代码量, 逐渐就出现**很多困扰**

### JS 中的困扰

> 以下`JS`代码放到`TS`文件中会之间爆红提示报错

- 不清不楚的数据类型

```js
let welcome = 'hello'
welcome() // 报错: TypeError: welcome is not a function
```

- 有漏洞的逻辑

```js
const str = Date.now() % 2 ? '奇数' : '偶数'

if (str !== '奇数') {
  alert('Halo')
} else if (str === '偶数') { // 此条件永远不会成立
  alert('World')
}
```

- 访问不存在的属性

```js
const obj = { width: 10, height: 15 }
const area = obj.width * obj.weight // 不存在的属性
```

- 低级的拼写检查

```js
const msg = 'Halo World'
msg.toUperCase() // 没有拼写检查
```

### 静态类型检查

- 在代码运行前进行检查, 发现代码的错误或者不合理之处, 减少运行时异常出血的几率, 这种检查称为**静态类型检查**, `TS`的核心就是静态类型检查, 简而言之就是将运行时的错误前置
- 同样的功能, `TS`的代码量要大于`JS`, 但由于`TS`的代码结构更加清晰, 在后期代码的维护中`TS`远胜于`JS`

## 编译 TS

> 浏览器不能直接运行`TS`代码, 需要编译为`JS`再交给浏览器解析器执行

### 安装 TS

```shell
# 全局安装 TypeScript
npm i typescript -g
```

### 命令行编译

> 使用命令行工具将`.ts`文件编译为`.js`文件, 每更改`.ts`文件都需要重新编译

- 新建`index.ts`文件

```ts
const person = {
  name: '张三',
  age: 18
}
console.log(`我叫${person.name}, 我${person.age}岁了`)
```

```shell
# 命令行编译
tsc index.ts
```

### 自动化编译

- 创建`TS`编译控制文件

> 工程中会生成一个`tsconfig.json`配置文件, 其中包含很多编译时的配置项
> 观察发现, 默认编译的`JS`版本是`ES7`, 也可以调整为其他版本

```shell
tsc --init
```

- 监视目录中的`.ts`文件变化

```shell
tsc --watch
```

- 优化: 当编译出错时不生成`.js`文件

> 也可以修改`tsconfig.json`中的`noEmitOnError`配置

```shell
tsc --noEmitOnError --watch
```

## 类型声明

> 对变量或者函数形参进行类型声明

```ts
let a: string;
let b: number;
let c: boolean;

// a = 9
// a = false
a = "Halo World";
b = 99;
c = true;

function count(x: number, y: number): number {
  return x + y;
}

let res = count(1, 2);
console.log(res);

// 在 : 后也可以写字面量类型, 不过实际开发中很少使用
let x: 'Halo'
let y: 100

x = 'Halo'
b = 100
```

## 类型推断

> `TS`会根据代码进行类型推导
> ⚠️ 注意: 类型推断不是万能的, 面对复杂类型时推断容易出问题, 所以尽量明确的编写类型声明

```ts
let a = 99

// a = 'Halo'
a = 1
```

## 类型总览

### JS 中的数据类型

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `bigint`
- `symbol`
- `object`
  - `Array`
  - `Function`
  - `Date`
  - `Error`
  - ...

### TS 中的数据类型

- `JS`所有数据类型
- `6`个新类型:
  - `any`
  - `unknown`
  - `never`
  - `void`
  - `tuple`
  - `enum`
- 两个用于自定义类型的方式:
  - `type`
  - `interface`

### 注意点

> 在`JS`中的这些内置构造函数: `Number`, `String`, `Boolean`, 它们用于创建对应的包装对象, 在日常开发中**很少使用**
> 在`TS`中也是同理, 所以在`TS`中进行类型声明时, 通常都是小写的`number`, `string`, `boolean`

```ts
let strA: string // 官方推荐写法
strA = 'Halo'
// strA = new String("World") // 不能将类型“String”分配给类型“string”。 “string”是基元，但“String”是包装器对象。如可能首选使用“string”

let strB: String
strB = 'Halo'
strB = new String("World")

console.log(typeof strA) // string
console.log(typeof strB) // object
```

#### 原始类型和包装对象

- 原始类型: 如`number`, `string`, `boolean`, 在`JS`中是简单数据类型, 它们在内存中占用空间少, 处理速度快
- 包装对象: 如`Number`对象, `String`对象, `Boolean`对象, 是复杂类型, 在内存中占用更多空间, 在实际开发中很少使用包装对象创建对象

#### 自动装箱

> `JS`在必要时会自动将原始类型包装成对象, 以便调用方法或者访问属性

```js
// 原始类型字符串
let str = 'Halo World'

// 当访问 str.length 时, JS 引擎做了以下工作
let size = (function() {
  // 1. 自动装箱，创建一个临时的 String 对象包装原始字符串
  let tempStringObject = new String(str);
  // 2. 访问 String 对象的 length 属性
  let lengthValue = tempStringObject.length;
  // 3. 销毁临时对象，返回长度值，JS引擎会自动处理对象销毁，开发中无感知
  return lengthValue;
})();
```

## 常用类型

### any

> `any`的含义是**任意类型**, 一旦将变量限制为`any`, 那就意味着放弃了对该变量的类型限制
> ⚠️ 注意: `any`类型的变量可以赋值给任意类型的变量

```ts
// 显式的any: 明确声明 a 是 any
let a: any
a = 100
a = 'Halo'
a = false

// 隐式的any: 没有明确的表示 b 的类型是 any, TS 主动推断出的 any
let b

b = 100
b = 'Halo'
b = false

// 注意: any 类型的变量可以赋值给任意类型的变量
let x: string

x = a // 无警告
console.log(x) // false
```

### unknown

> `unknown`的含义是**未知类型**

- `unknown`可以理解为一个类型安全的`any`, 适用于不确定数据的具体类型

```ts
// 设置 a 的类型为 unknown
let a: unknown

// 以下对 a 赋值均正常
a = 100
a = 'Halo'
a = false

// 设置 x 的数据类型为 string
let x: string

x = a // 警告: 不能将类型“unknown”分配给类型“string”。

// 第一种方法: 判断类型
if (typeof a === 'string') {
  x = a
}

// 第二种方法: 类型断言
x = a as string
x = <string>a
```

- `unknown`会强制开发者在使用之前进行类型检查, 从而提供更强的类型安全性

```ts
let strA: string
strA = 'Halo'
strA.toUpperCase() // 无警告

let strB: any
strB = 'Halo'
strB.toUpperCase() // 无警告

let strC: unknown
strC = 'Halo'
strC.toUpperCase() // 警告: “strC”的类型为“未知”

// 使用类型断言强制指定 strC 的类型为 string
(strC as string).toUpperCase() // 无警告
```

### never

> `never`的含义是**任何值都不是**, 简而言之就是不能有值, `undefined`, `null`, `''`, `false`, `0`都不行

- 几乎不用`never`去直接限制变量, 因为没有意义

```ts
// 指定 a 的类型为 never, 那就意味着 a 以后不能赋值任何数据
let a: never

// 以下对 a 的所有赋值都会有警告
a = 1
a = false
a = ''
a = undefined
a = null
```

- `never`一般是`TS`主动推断出来的

```ts
// 指定 x 的类型为 string
let x: string
x = 'Halo'

if (typeof x === 'string') {
  console.log(x.toUpperCase())
} else {
  console.log(x) // TS 会推断出此处的 x 是 never, 因为没有任何一个值符合此处的逻辑
}
```

- `never`可用于限制函数的返回值

```ts
// 限制 throwError 函数不需要用任何返回值, 任何值都不行
function throwError(str: string): never {
  throw new Error(`程序异常退出: ${str}`)
}
```

### void

- `void`通常用于函数返回值, 含义是表示函数不返回任何值, 调用者也不应依赖其返回值进行任何操作

> ⚠️ 注意: 如果函数中没有`return`去指定函数的返回值, 那么函数是没有**显式返回值**的, 但会有一个**隐式返回值**, 就是`undefined`
> 虽然`logMessage`函数的返回类型为`void`, 但也可以接受`undefined`的, 即: `undefined`是`void`可以接受的一种**空值**

```ts
function logMessage(msg: string): void {
  console.log(msg)
}
logMessage('Halo')
```

- 以下写法均符合规范

```ts
// 无警告
function logMessageA(msg: string): void {
  console.log(msg)
}

// 无警告
function logMessageB(msg: string): void {
  console.log(msg)
  return
}

// 无警告
function logMessageC(msg: string): void {
  console.log(msg)
  return undefined
}
```

- 限制函数返回值`void`和`undefined`的区别

```ts
function demoA(): void {
  console.log('@')
}
let resA = demoA()
if (resA) { // 警告: 无法测试 "void" 类型的表达式的真实性

}

function demoB(): undefined {
  console.log('@')
}
let resB = demoB()
if (resB) { // 无警告

}
```

#### void 和 undefined

- `void`是一个广泛的概念, 用来表达**空值**, 而`undefined`则是这种**空值**的具体实现之一, 因此可以说`undefined`是`void`能接受的**空**状态的一种具体形式
- `void`包含`undefined`, 但`void`表达的语义超越了单纯的`undefined`, 它是一种意图上的约定, 而不仅仅是特定值的限制

#### void 总结

> 若函数返回类型为`void`

- 从语义上讲, 函数是可以返回`undefined`的, 至于显式返回还是隐式返回无所谓
- 函数调用者不应关心函数的返回值, 也不应依赖返回值进行任何操作, 即使返回了`undefined`

### object

> 关于小写`object`和大写`Object`, 实际开发中使用相对较少, 因为范围太大了

#### 小写 object

> `object`的含义是: 所有非原始类型, 可存储对象, 函数, 数组等, 由于**限制的范围比较宽泛**, 在实际开发中使用**相对较少**

```ts
// a 能存储的类型是 非原始类型
let a: object;

// 以下代码将 非原始类型 赋值给 a, 所以均符合要求
a = {};
a = { name: "张三" };
a = [1, 2, 3];
a = function () {};
a = new String("123");
class Person {}
a = new Person();

// 以下代码将 原始类型 赋值给 a, 有警告
a = 1; // 不能将类型“number”分配给类型“object”
a = true; // 不能将类型“boolean”分配给类型“object”
a = "Halo"; // 不能将类型“string”分配给类型“object”
a = null; // 不能将类型“null”分配给类型“object”
a = undefined; // 不能将类型“undefined”分配给类型“object”
```

#### 大写 Object

- 官方描述: 所有可以调用`Object`方法的类型
- 简单记忆: 除了`undefined`和`null`的任何值
- 由于限制的范围太大了, 所以实际开发中使用频率较低

```ts
// b 能存储的类型是可以调用到 Object 方法的类型
let b: Object

// 以下代码将 Object 的实例对象赋值给 a, 均无警告
b = {};
b = { name: "张三" };
b = [1, 2, 3];
b = function () {};
b = new String("123");
class PersonB {}
b = new PersonB();
b = 1;
b = true;
b = "Halo";

// null 和 undefined 不是 Object 的实例对象, 会有警告
b = null // 不能将类型“null”分配给类型“Object”
b = undefined // 不能将类型“undefined”分配给类型“Object”
```

#### 声明对象类型

- 实际开发中限制一般对象, 通常使用以下形式

```ts
// 声明对象类型 person 必须有 name 和 age 属性, gender 为可选属性
let personA: { name: string, age: number, gender?: string }

personA = { name: '张三', age: 18 }

// 含义同上, 可以用 ; 分号分隔
let personB: { name: string; age: number; gender?: string }

// 含义同上, 可以用换行分隔
let personC: {
  name: string
  age: number
  gender?: string
}
```

- 索引签名: 允许定义对象可以具有任意数量的属性, 这些属性的键和类型是可变的, 常用于描述类型不确定的属性, 具有动态属性的对象

```ts
// 声明对象类型 person 必须有 name 和 age 属性, gender 为可选属性, 同时可以有任意数量, 任意类型
let personD: {
  name: string
  age: number
  gender?: string
  [key: string]: any // 索引签名, 可以将 key 替换为其他单词
}

personD = {
  name: '李四',
  age: 20,
  gender: '男',
  score: 60,
  email: '123@xx.com'
}
```

#### 声明函数类型

- `TS`中的`=>`在函数类型声明时表示**函数类型**, 描述其**参数类型**和**返回类型**
- `JS`中的`=>`是一种定义函数的语法, 是具体的函数实现
- 函数类型声明还可以使用接口, 自定义类型等方式

```ts
let count: (a: number, b: number) => number

count = function(x, y) {
  return x + y
}
```

#### 声明数组类型

```ts
let arrA: string[]
arrA = ['a', 'b', 'c']

let arrB: Array<number> // <number> 泛型指定类型
arrB = [1, 2, 3]
```

### tuple

> 元组`tuple`是一种特殊的数组类型, 可以存储固定数量的元素, 并且每个元素的类型是已知的且可以不同
> 元组用于精确描述一组值的类型, `?`表示可选元素

```ts
// 第一个元素必须是 string 类型, 第二个元素必须是 number 类型
let arrA: [string, number]
// 第一个元素必须是 number 类型, 第二个元素是可选的, 如果有则必须是 boolean 类型
let arrB: [number, boolean?]
// 第一个元素必须是 number 类型, 后面的元素可以是任意数量的 string 类型
let arrC: [number, ...string[]]

// 赋值
arrA = ['123', 321]
arrB = [100]
arrB = [200, false]
arrC = [10, '1', '2', '3']
arrC = [20]

// 不可以赋值, arrA 声明是两个元素, 赋值是三个
arrA = ['Halo', 123, false] // 不能将类型“[string, number, boolean]”分配给类型“[string, number]”
```

### enum

> 枚举`enum`可以定义一组命名常量, 枚举可以增强代码的可读性, 让代码更好维护

```ts
/**
 * 根据调用 walk 函数时传入的不同参数，执行不同的逻辑，存在的问题是调用 walk 传参时没有任何提示，开发者很容易写错字符串内容
 * 并且用于判断逻辑的 up down left right 是连续且相关的一组值，此时就特别适合使用枚举
 */

function walk(str: string) {
  switch (str) {
    case "up":
      console.log("向上");
      break;
    case "down":
      console.log("向下");
      break;
    case "left":
      console.log("向左");
      break;
    case "right":
      console.log("向右");
      break;
    default:
      console.log('未知方向');
      break;
  }
}

walk('up')
walk('down')
walk('left')
walk('right')
```

#### 数字枚举

> 数字枚举是最常见的枚举类型, 其成员的值会自动递增, 且数字枚举还具备反向映射的特点, 可以通过值来获取对应的枚举成员名称

```ts
// 定义枚举
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

// 打印信息
console.log(Direction)
/*
  {
    0: 'UP',
    1: 'DOWN',
    2: 'LEFT',
    3: 'RIGHT',
    'UP': 0,
    'DOWN': 1,
    'LEFT': 2,
    'RIGHT': 3
  }
*/

// 反向映射
console.log(Direction.UP) // 0
console.log(Direction[0]) // UP

// 无法为“UP”赋值，因为它是只读属性
Direction.UP = 'UPUP'
```

- 可以指定枚举成员的初始值, 其后的成员值会自动递增

```ts
enum Direction {
  UP = 6,
  DOWN,
  LEFT,
  RIGHT
}

console.log(Direction.UP) // 6
console.log(Direction.DOWN) // 7
```

- 使用枚举优化上例`walk`函数, 代码更加直观易读, 而且类型安全, 同时也更易于维护

```ts
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

function walk(str: Direction) {
  switch (str) {
    case Direction.UP:
      console.log("向上");
      break;
    case Direction.DOWN:
      console.log("向下");
      break;
    case Direction.LEFT:
      console.log("向左");
      break;
    case Direction.RIGHT:
      console.log("向右");
      break;
    default:
      console.log('未知方向');
      break;
  }
}
```

#### 字符串枚举

> 枚举成员的值是字符串
> ⚠️ 注意: 字符串枚举会丢失反向映射

```ts
// 字符串枚举
enum DirectionString {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

let dir: DirectionString = DirectionString.UP
console.log(dir) // UP
```

#### 常量枚举

> 官方描述: 常量枚举是一种特殊枚举类型, 它使用`const`关键字定义, 在编译时会被内联, 避免生成一些额外的代码
> 何为编译时内联?
> 所谓内联就是`TS`在编译时, 会将枚举成员引用替换为它们的实际值, 而不是生成额外的枚举对象, 这样可以减少生成的`JS`代码量, 并且提高运行时的性能

```ts
// 常量枚举 编译为 js 时会少很多代码
const enum DirectionConst {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

console.log(DirectionConst.UP)
```

### type

> `type`可以为任意类型创建别名, 让代码更简洁, 可读性更强, 同时能更方便的进行类型复用和扩展

#### type 基本用法

> 类型别名使用`type`关键字定义, `type`后跟类型名称, 如下代码中`num`是类型别名

```ts
type num = number

let age: num
age = 18
```

#### type 联合类型

> 联合类型是一种高级类型, 表示一个值可以是几种不同类型之一, **或**

```ts
// 联合类型
type Status = number | string
let a: Status = 100
let b: Status = '200'

type Gender = '男' | '女'
let x: Gender = '男'
let y: Gender = '女'
```

#### type 交叉类型

> 交叉类型`Intersection Types`允许将多个类型合并为一个类型, 合并后的类型将拥有所有被合并类型的成员, 交叉类型通常用于对象类型, **并且**

```ts
// 交叉类型
// 面积
type Area = {
  width: number; // 宽
  height: number; // 高
}

// 地址
type Address = {
  num: number // 楼号
  cell: number // 单元号
  room: string // 房间号
}

type House = Area & Address

const house: House = {
  width: 30,
  height: 3,
  num: 1,
  cell: 2,
  room: '3'
}
```

### 一种特殊情况

> 先观察如下两段代码

- 代码段1(正常): 在函数定义时, 限制函数返回值为`void`, 那么函数的返回值就必须是空

```ts
function demo(): void {
  // 返回 undefined 合法
  return undefined

  // 以下返回均不合法
  return 100
  return false
  return null
  return []
}
```

- 代码段2(特殊): 使用**类型声明**限制函数返回值为`void`时, `TS`并不会严格要求函数返回空

```ts
type LogFunc = () => void
const f1: LogFunc = () => {
  return 100 // 允许返回非空值
}

const f2: LogFunc = () => 200 // 允许返回非空值

const f3: LogFunc = function() {
  return 300 // 允许返回非空值
}

let res = f1()
if (res) { // 警告: 无法测试 "void" 类型的表达式的真实性

}
```

> 为什么会这样?
> 是为了确保如下代码成立, `Array.prototype.push`方法的返回是一个数字, 而`Array.prototype.forEach`方法期望其回调的返回类型是`void`
> 为了兼容`JS`箭头函数简写时会默认`return`的语法格式

```ts
const src = [1,2,3]
const dst = [0]
src.forEach(el => dst.push(el))
```

### 类相关知识

#### 类

```ts
class Person {
  // 属性声明
  name: string
  age: number
  // 构造器
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  // 方法
  speak() {
    console.log(`我叫${this.name}, 今年${this.age}岁`)
  }
}

const man = new Person('张三', 18)
console.log(man)
man.speak()
```

#### 类的继承

```ts
class Student extends Person {
  grade: string
  constructor(name: string, age: number, grade: string){
    // 调用父类构造器
    super(name, age)
    this.grade = grade
  }
  // 方法
  study() {
    console.log(`${this.name}正在努力学习中......`)
  }
  // 重写父类方法
  override speak() {
    console.log(`我是学生, 我叫${this.name}, 今年${this.age}岁, 在读${this.grade}年级`)
  }
}

const stu = new Student('李四', 12, '初三')
console.log(stu)
stu.speak()
stu.study()
```

### 属性修饰符

| 修饰符      | 含义     | 具体规则                     |
| :---------- | -------- | ---------------------------- |
| `public`    | 公开的   | 类内部, 子类, 类外部可以访问 |
| `protected` | 受保护的 | 类内部, 子类可以访问         |
| `private`   | 私有的   | 类内部可以访问               |
| `readonly`  | 只读属性 | 属性无法修改                 |

#### public 修饰符

```ts
class Person {
  // 属性声明
  public name: string
  public age: number
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  public speak() {
    // 类内部访问
    console.log(`我叫${this.name}, 今年${this.age}岁`)
  }
}

class Student extends Person {
  study() {
    // 子类访问
    console.log(`${this.name}正在努力学习中......`)
  }
}

const man = new Person('张三', 18)
// 类外部访问
console.log(man.name)
```

#### 属性的简写形式

> ⚠️ 注意: 简写必须要写修饰符

```ts
class Person {
  /* 简写前
  public name: string
  public age: number
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  */

  // 简写后
  constructor(public name: string, public age: number) {
    
  }
}
```

#### protected 修饰符

```ts
class Person {
  constructor(
    protected name: string,
    protected age: number
  ) {}
  protected getDetail() {
    // 类内部可以访问
    return `我叫${this.name}, 今年${this.age}岁`
  }
  introduce() {
    console.log(this.getDetail())
  }
}

const man = new Person('Tom', 18)

// 类外部无法访问
man.name
man.age
man.getDetail()

class Student extends Person {
  study() {
    this.introduce()
    // 子类可以访问
    console.log(`${this.name}正在学习...`)
  }
}
```

#### private 修饰符

```ts
class Person {
  constructor(
    public name: string,
    public age: number,
    private IDCard: string
  ) {}
  getInfo() {
    return `我叫${this.name}, 今年${this.age}岁`
  }
  private getPrivateInfo() {
    // 类内部可以访问
    return `身份证号码: ${this.IDCard}`
  }
  getFullInfo() {
    return `${this.getInfo()}, ${this.getPrivateInfo()}`
  }
}

const man = new Person('Tom', 18, '110114567544323454')
// 类外部无法访问
man.IDCard
man.getPrivateInfo()

class Student extends Person {
  study() {
    // 子类无法访问
    console.log(this.IDCard)
    this.getPrivateInfo()
  }
}
```

#### readonly 修饰符

```ts
class Person {
  constructor(
    public name: string,
    readonly age: number
  ) {}
}

const man = new Person('张三', 18)
man.name = '李四'
man.age = 20 // 无法为“age”赋值，因为它是只读属性
```

### 抽象类

> 概述: 抽象类是一种无法被实例化的类, 专门用来定义类的结构和行为, 类中可以写抽象方法, 也可以写具体实现, 抽象类主要用来为其派生类提供一个基础结构, 要求其派生类必须实现其中的抽象方法
> 简记: 抽象类不能实例化, 其意义是可以被继承, 抽象类里可以用普通方法, 也可以有抽象方法

通过以下场景理解抽象类

- 定义一个抽象类`Package`, 表示所有包裹的基本结构, 任何包裹都有重量属性`weight`, 包裹都需要计算运费, 但是不同类型的包裹(标准, 特快)有不同的运费计算方式, 因此用于计算运费的`caleculate`方法是一个抽象方法, 必须由具体的子类来实现

```ts
// 声明抽象类
abstract class Package {
  // 构造器
  constructor(public weight: number) {}
  // 声明抽象方法
  abstract calculate(): number
  // 具体方法
  printPackage() {
    console.log(`包裹重量为: ${this.weight}kg, 运费为: ${this.calculate()}元`)
  }
}
```

- 标准`StandardPackage`类继承了`Package`, 实现`caleculate`方法

```ts
// 标准
class StandardPackage extends Package {
  constructor(
    weight: number,
    public unitPrice: number
  ) {
    super(weight)
  }
  calculate(): number {
    return this.weight * this.unitPrice
  }
}

const sp = new StandardPackage(10, 5)
sp.printPackage()
```

- 特快`ExpressPackage`类继承了`Package`, 实现`caleculate`方法

```ts
// 特快
class ExpressPackage extends Package {
  constructor(
    weight: number,
    public unitPrice: number,
    public additional: number,
  ) {
    super(weight)
  }
  calculate(): number {
    if (this.weight > 10) {
      return 10 * this.unitPrice + (this.weight - 10) * this.additional
    }
    return this.weight * this.unitPrice
  }
}

const ep = new ExpressPackage(16, 10, 2)
ep.printPackage()
```

#### 抽象类总结

> 何时使用抽象类?

1. 定义通用接口: 为一组相关的类定义通用的行为, 如方法或属性
2. 提供基础实现: 在抽象类中提供某些方法或为其提供基础实现, 这样派生类就可以继承这些实现
3. 确保关键实现: 强制派生类实现一些关键行为
4. 共享代码和逻辑: 当多个类需要共享部分代码时, 抽象类可以避免代码重复

### 接口

> 接口`interface`是一种定义结构的方式, 主要作用是为类, 对象, 函数等规定一种契约, 可以确保代码的一致性和安全性, 但要注意`interface`只能定义格式, 不能包含任何实现

#### 定义类结构

```ts
// PersonInterface 接口
interface PersonInterface {
  name: string
  age: number
  speak(n: number): string
}

class Person implements PersonInterface {
  constructor(
    public name: string,
    public age: number
  ) {}

  speak(n: number): string {
    console.log(n)
    return `我叫${this.name}, 今年${this.age}岁`
  }
}

const man = new Person('Tom', 18)
man.speak(3)
```

#### 定义对象结构

```ts
// UserInterface 接口
interface UserInterface {
  name: string
  age: number
  gender?: string
  readonly IDCard: string
  run: (n: number) => void
}

const user: UserInterface = {
  name: 'Tom',
  age: 18,
  gender: '男',
  IDCard: '110123341111',
  run(n) {
    for (let i = 0; i < n; i++) {
      console.log(`跑`)
    }
  }
}
```

#### 定义函数结构

```ts
// CountInterface 接口
interface CountInterface {
  (a: number, b: number): number
}

const count: CountInterface = (x, y) => {
  return x + y
}

count(3, 9)
```

#### 接口之间的继承

```ts
// PersonInterface 接口
interface PersonInterface {
  name: string,
  age: number
}

// StudentInterface 接口继承 PersonInterface 接口
interface StudentInterface extends PersonInterface {
  grade: string
}

const stu: StudentInterface = {
  name: '张三',
  age: 18,
  grade: '3'
}
```

#### 接口自动合并(可重复定义)

```ts
// PersonInterface 接口
interface PersonInterface {
  name: string,
  age: number
}

// 自动跟上面的合并
interface PersonInterface {
  gender: string
}

const p: PersonInterface = {
  name: '李四',
  age: 18,
  gender: '男'
}
```

#### 接口总结

> 何时使用接口?

1. 定义对象的格式: 描述数据模型, `API`响应格式, 配置对象等, 是实际开发中使用较多的场景
2. 类的契约: 规定一个类需要实现哪些属性和方法
3. 自动合并: 一般用于扩展第三方库的类型, 这种特性在大型项目中可能会用到

### 一些相似概念的区别

#### interface 和 type 的区别

- 相同点: `interface`和`type`都可以用于定义对象结构, 两者在许多场景中是可以互换的
- 不同点:
  1. `interface`更专注于定义对象和类的结构, 支持继承, 合并
  2. `type`可以定义类型别名, 联合类型, 交叉类型, 但不支持继承和合并

#### interface 和抽象类的区别

- 相同点: 都用于定义一个类的格式, 应该遵循的契约
- 不同点:
  1. 接口: 只能描述结构, 不能有任何实现代码, 一个类可以实现多个接口
  2. 抽象类: 既可以包含抽象方法, 也可以包含具体方法, 一个类只能继承一个抽象类

## 泛型

> 泛型允许在定义函数, 类或接口时, 使用类型参数来表示未指定的类型, 这些参数在具体使用时, 才被指定具体的类型, 泛型能让同一段代码适用于多种类型, 同时仍然保持类型的安全性
> 如下代码中`<T>`就是泛型, 设置泛型后即可在函数中使用`T`来表示该类型

### 泛型函数

```ts
// 形参指定类型
function logData(data) { // 警告: 参数“data”隐式具有“any”类型
  console.log(data)
}

function logData<T>(data: T) {
  console.log(data)
}

logData<number>(100)
logData<string>('123')
```

### 泛型可以有多个

```ts
// 多个泛型
function logInfo<T, U>(x: T, y: U): T | U {
  console.log(x, y)
  return Date.now() % 2 ? x : y
}

logInfo<number, string>(100, 'Halo')
logInfo<string, boolean>('Tom', false)
```

### 泛型接口

```ts
interface PersonInterface<T, S> {
  name: string,
  age: number,
  extraInfo: T,
  ddrInfo: S
}

let manA: PersonInterface<string, boolean> = {
  name: '张三',
  age: 18,
  extraInfo: 'Halo',
  ddrInfo: false
}

type Job = {
  title: string,
  company: string
}

let manB: PersonInterface<Job, string> = {
  name: '张三',
  age: 18,
  extraInfo: {
    title: 'HHH',
    company: 'atcat'
  },
  ddrInfo: '123'
}
```

### 泛型约束

```ts
interface PersonInterface {
  name: string,
  age: number,
}

function logData<T extends PersonInterface>(info: T): void {
  console.log(`我叫${info.name}, 今年${info.age}岁`)
}

logData({ name: '张三', age: 18 })
```

### 泛型类

```ts
class Person<T> {
  constructor(
    public name: string,
    public age: number,
    public other: T
  ) {}
  speak() {
    console.log(`我叫${this.name}, 今年${this.age}岁`)
    console.log(this.other)
  }
}

const manA = new Person<number>('张三', 18, 250)

type Job = {
  title: string,
  company: string
}

const manB = new Person<Job>('李四', 10, {title: 'XXX', company: '哈哈哈'})
```

## 类型声明文件

> 类型声明文件是`TS`中的一种特殊文件, 通常以`.d.ts`作为扩展名
> 主要作用是为现有的`JS`代码提供类型信息, 使得`TS`能够在使用这些`JS`库或者模块时进行类型检查和提示

- `demo.js`

```js
export function add(x, y) {
  return x + y
}

export function mul(x, y) {
  return x * y
}
```

- `demo.d.ts`

```ts
declare function add(x: number, y: number): number;
declare function mul(x: number, y: number): number;

export {add, mul}
```

- 使用

```ts
import {add, mul} from './demo.js'

console.log(add(5, 5))
console.log(mul(9, 9))
```

## 命名空间

> 防止命名冲突问题
> 使用`namespace`关键字定义, 在外部使用需要`export`导出

```ts
namespace aa {
  export class Person {
    constructor(
      public name: string,
      public age: number
    ){ }
  }
}

namespace bb {
  export class Person {
    constructor(
      public gender: string,
      public email: string
    ) {}
  }
}

let p1 = new aa.Person('张三', 18)
let p2 = new bb.Person('男', '123@qq.com')
```

## 访问修饰符

```ts
class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  set name(value) {
    this._name = value
  }
  get name() {
    return this._name
  }
}

class Student extends Person {
  logInfo() {
    console.log(this.name)
  }
}

const p = new Student('Tom')
p.logInfo()
```

## 设计模式

### 单例模式

> 让一个类只能产生一个对象, 不论外部调用多少次, 始终都是同一个对象
> 一般用于管理类, 如系统管理类, 声音管理类等

```ts
// 创建一个声音管理类 方式一
class SoundManager {
  // 在内部实例化
  static init = new SoundManager()
  // 将构造函数设置为私有的, 外部就无法通过 new 关键字实例化
  private constructor () {}
}

// 外部使用
SoundManager.init

// 创建一个敌人管理类 方式二(推荐), 相对节省内存
class EnemyManager {
  private static instance: EnemyManager
  private constructor() {}
  static Init() {
    // 当前单例是否产生, 懒加载, 不实用时节省内存
    if (!this.instance) {
      EnemyManager.instance = new EnemyManager()
    }
    return EnemyManager.instance
  }
}

// 外部使用
EnemyManager.Init()
```

### 代理模式

> 代理模式是一种结构型设计模式, 它允许你提供一个代理对象来控制对另一个对象的访问
> 代理可以在客户端和目标对象之间充当中间层, 用于增强功能, 控制访问或延迟初始化
> 代理模式是一对多

```ts
interface CalcInterface {
  cacl: (x: number, y: number) => number
}

class Person {
  // 代理
  delegate: CalcInterface;
  constructor(delegate: CalcInterface) {
    this.delegate = delegate
  }
  // 计算
  getRes(a: number, b: number) {
    let res = this.delegate.cacl(a, b)
    console.log(res)
  }
}

class DoneA implements CalcInterface {
  cacl(x: number, y: number) {
    return x + y
  }
}

class DoneB implements CalcInterface {
  cacl(x: number, y: number) {
    return x - y
  }
}

// 创建实例传入代理
const man = new Person(new DoneA())
man.getRes(3, 4)
```

### 观察者模式

> 一个对象中的状态可以被其他对象监听, 当对象中的状态改变时, 会通知所有监听的对象
> 观察者模式是多对一

```ts
// 定义协议, 谁监听就要遵循这个规范
interface IObserver {
  nameChangeed: (newName: string) => void
}

class Person {
  private _name: string
  // 观察者数组
  observers: IObserver[]
  constructor(name: string, observers: IObserver[]) {
    this._name = name
    this.observers = observers
  }

  get name() {
    return this._name
  }

  set name(v) {
    this._name = v
    // 发生变化时遍历观察者数组, 给数组中的每一个观察者发送通知
    for(let i of this.observers) {
      i.nameChangeed(this._name)
    }
  }
}

class Test implements IObserver {
  nameChangeed(newName: string) {
    console.log(`监听到变化, name变为: ${newName}`)
  }
}

// 实例化传入观察者
let p = new Person('张三', [new Test()])
p.name = '李四'
// 监听到变化, name变为: 李四
```

### 工厂模式

> 不关心过程, 只需要结果

```ts
// 汽车类型
enum CarType {
  BMW,
  Audi,
  Benz,
}

class Car {
  constructor(public name: string) {}
  // 工厂方法
  static create(type: CarType): Car {
    let car: Car;
    switch (type) {
      case CarType.BMW:
        car = new BWMCar("宝马");
        break;
      case CarType.Audi:
        car = new BWMCar("奥迪");
        break;
      case CarType.Benz:
        car = new BWMCar("奔驰");
        break;
    }
    return car;
  }
}

class BWMCar extends Car {}
class AudiCar extends Car {}
class BenzCar extends Car {}

const bmw = Car.create(CarType.BMW)
const audi = Car.create(CarType.Audi)
const benz = Car.create(CarType.Benz)
```

## 链表

```ts
class Person {
  next: Person | null = null;  // ✅ 推荐
  constructor(public name: string) {}
}

// 构建链表
let p = new Person('张三');
p.next = new Person('李四');
p.next.next = new Person('王五');

// 删除节点（跳过李四）
p.next = p.next.next;

// 添加节点（赵六插入到李四的位置）
const man = new Person('赵六');
man.next = p.next;
p.next = man;

// 安全遍历
let current: Person | null = p;  // 临时变量避免修改 p
while (current) {
  console.log(current.name);
  current = current.next;  // 自动处理 null
}
```
