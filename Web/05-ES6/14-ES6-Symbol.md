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

```javascript
let s = Symbol()
console.log(s, typeof s) // Symbol()  'symbol'

let s_1 = Symbol('9ml')
let s_2 = Symbol('9ml')
console.log(s_1 === s_2) // false
```

## Symbol.for创建

- 此时`Symbol`是一个对象，可以通过描述字符串得出唯一的`symbol`值，可以进行比较

```javascript
let s_1 = Symbol.for('9ml')
let s_2 = Symbol.for('9ml')
console.log(s_1, typeof s_1) // Symbol(9ml)  'symbol'
console.log(s_1 === s_2) // true
```

## 不能运算

```javascript
let s = Symbol(123)

let res1 = s + 1 // 报错
let res2 = s + s // 报错
let res3 = s > 1 // 报错
```
