# Symbol

> `ES6`中引入了一种新的数据类型`Symbol`，表示独一无二的值。
> 是`JavaScript`语言的第`7`种数据类型，是一种类似于字符串的数据类型。

- `USONB`：`You are so niubility`
  - `u`：`undefined`
  - `s`：`string、symbol`
  - `o`：`object`
  - `n`：`null、number`
  - `b`：`boolean`

## 特点

- `Symbol`的值是独一无二的
- `Symbol`的值不能与其他数据进行运算
- `Symbol`定义的对象属性不能使用`for...in`循环遍历，但是可以使用`Reflect.ownKeys`来获取对象的所有键名

## 创建

- 创建一个`Symbol`的值需要使用`Symbol()`函数，而不能使用`new`命令
- 由于生成的`Symbol`是一个值而不是对象，所有不能为其添加属性
- `Symbol()`函数可以接受一个字符串作为参数，表示对该值的描述，因此即使定义`Symbol`使用相同的参数互相之间也不是相同的

```javascript
let s = Symbol()
console.log(s, typeof s) // Symbol()  'symbol'

let s_1 = Symbol('9ml')
let s_2 = Symbol('9ml')
console.log(s_1 === s_2) // false

// 不能运算
let res1 = s + 1 // 报错
let res2 = s + s // 报错
let res3 = s > 1 // 报错
```

## Symbol.for()、Symbol.keyFor()

### Symbol.for()

- 如果我们需要重复使用一个`symbol`值时，可以用`Symbol.for()`方法
- `Symbol.for()`方法接收一个字符串参数，会在全局中搜索有没有以该参数命名的`symbol`的值
- 如果查找到就返回这个值，否则会重新生成一个`symbol`值，并将该值以参数名称注册到全局

```javascript
let s_1 = Symbol.for('9ml') // 没有查找到，创建
let s_2 = Symbol.for('9ml') // 查找到该值，返回
console.log(s_1, typeof s_1) // Symbol(9ml)  'symbol'
console.log(s_1 === s_2) // true
```

- `Symbol.for()`和`Symbol()`方法都会生成新的`symbol`类型的值，不同的是`Symbol.for()`方法会查找命名参数是否在全局中注册过
- 如果注册过的就不会创建新的值，而是会直接返回，所有我们可以使用到相同的`symbol`值
- 但使用`Symbol()`方法每次都会创建一个新的值，且不会注册到全局

### Symbol.keyFor()

- `Symbol.keyFor()`方法表示获取一个`symbol`的值在全局中注册的命名参数`key`，只有使用`Symbol.for()`创建的值才会有注册的命名参数，使用`Symbol()`生成的值没有

```javascript
let s_1 = Symbol('sym')
let s_2 = Symbol.for('sym')

Symbol.keyFor(s_1) // undefined
Symbol.keyFor(s_2) // sym
```

- [详见](./doc/symbol.md)

## Symbol应用

> 给对象中添加`Symbol`类型的属性和方法，表示独一无二的

- 向对象中添加方法：`up、down`
  - 假设不知道对象`game`对象中有什么属性和方法，需要添加两新方法，不破坏对象原有的属性和方法

```javascript
let game = {
  name: '俄罗斯方块',
  age: 10,
  up() {
    console.log('向上')
  },
  down() {
    console.log('向下')
  }
}

// 声明一个对象
let methods = {
  up: Symbol(),
  down: Symbol()
}

// 添加方法
// 类似于 game['up']
game[methods.up] = function() {
   console.log('我可以向上移动')
}
game[methods.down] = function() {
   console.log('我可以向下移动')
}

// 调用
game[methods.up] // 我可以向上移动

let paly = {
  name: '9ml',
  [Symbol('say')]: function() {
    console.log('干净卫生')
  }
}
```
