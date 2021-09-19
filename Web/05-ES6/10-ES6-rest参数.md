# REST参数

> `ES6`中引入`rest`参数，用于获取函数的实参，用来代替`arguments`

- `ES5`中的`arguments`
  - 原型是对象，不能使用数组的原型方法

```javascript
function fn() {
  console.log(arguments)
}

fn('Tom', 18) // ['Tom', 18] 原型是对象
```

- `ES6`中的`rest`
  - 原型是数组，可以使用数组的原型方法，如`filter、some、every、map`

```javascript
function fn(...args) {
  console.log(args)
}

fn('Tom', 18) // ['Tom', 18] 原型是数组
```

## 注意

- 如果参数有多个，`rest`参数必须放在最后，否则会报错

```javascript
function fn(a, b, ...args) {
  console.log(a) // 1
  console.log(b) // 2
  console.log(args) // [3, 4, 5, 6]
}

fn(1, 2, 3, 4, 5, 6)
```
