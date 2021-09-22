# Class

> `ES6`中提供了更接近传统语言的写法，引入了`class`类的概念，并作为对象的模板，通过`class`关键字可以定义类
> `ES6`的`class`可以看作是一个语法糖，它的绝大部分功能`ES5`都可以做到，新的`class`只是让对象原型的写法更加清晰、更像面向对象编程的语法

- 知识点：
  - `class`声明类
  - `constructor`定义构造函数初始化，实例化时会自动执行
  - `extends`继承父类
  - `super`调用父级构造方法
  - `static`定义静态方法和属性
  - 父类方法可以重写

- `ES5`

```javascript
// 声明构造函数
function Phone(brand, price) {
  this.brand = brand
  this.price = price
}
// 添加方法
Phone.prototype.call = function() {
  console.log('打电话')
}
// 实例化对象
let iPhone = new Phone('Apple', 9999.00)
console.log(iPhone)
```

- `ES6`

```javascript
class Phone {
  // 构造方法
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
  // 添加方法，必须使用该语法，不能使用 ES5 的对象完整格式
  call() {
    console.log('打电话')
  }
}
// 实例化
let oPhone = new Phone('OnePlus', 6666)
console.log(oPhone)
```

## 静态成员

- `ES5`

```javascript
function Phone() {}
// 添加静态属性和方法
Phone.name = 'OnePlus'
Phone.change = function() {
  console.log('改系统啊')
}
// 实例化对象
let newPhone = new Phone
console.log(newPhone.name) // undefined
```

- `ES6`

```javascript
class Phone {
  static name = 'OnePlus'
  static change() {
    console.log('改系统啊')
  }
}
let newPhone = new Phone()
console.log(newPhone.name) // undefined
```

## 对象继承

- `ES5`

```javascript
// 父类：手机
function Phone(brand, price) {
  this.brand = brand
  this.price = price
}
// 添加方法
Phone.prototype.call = function() {
  console.log('打电话')
}
// 子类：智能手机
function SmartPhone(brand, price, color, size) {
  Phone.call(this, brand, price)
  this.color = color
  this.size = size
}
// 设置子类构造函数的原型
SmartPhone.prototype = new Phone
// 校正
SmartPhone.prototype.constructor = SmartPhone
// 声明子类的方法
SmartPhone.prototype.photo = function() {
  console.log('拍照')
}
SmartPhone.prototype.play = function() {
  console.log('玩游戏')
}
// 实例化对象
let oldPhone = new SmartPhone('OnePlus', 1999, 'black', '5.5inch')
console.log(oldPhone)
```

- `ES6`

```javascript
class Phone {
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }
  call() {
    console.log('打电话')
  }
}

class SmartPhone extends Phone {
  constructor(brand, price, color, size) {
    super(brand, price) // Phone.call(this, brand, price)
    this.color = color
    this.size = size
  }
  photo() {
    console.log('拍照')
  }
  play() {
    console.log('玩游戏')
  }
  // 方法重写
  call() {
    console.log('视频电话')
  }
}
// 实例化对象
let oldPhone = new SmartPhone('OnePlus', 1999, 'black', '5.5inch')
console.log(oldPhone)
```

## Get和Set

```javascript
class Phone {
  get price() {
    console.log('价格属性被读取了')
    return 99999
  }
  set price(Val) {
    console.log('价格属性被修改了')
  }
}

let sPhone = new Phone()
console.log(sPhone.price) // 价格属性被读取了， 9999
s.price = 'free' // 价格属性被修改了
```
