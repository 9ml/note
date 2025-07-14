# 装饰器

## 简介

> 虽然`TypeScript5.0`种可以之间使用类装饰器, 但为了确保其他装饰器可用, 现阶段使用时, 仍建议使用`experimentalDecorators`配置来开启装饰器支持, 而且不排除在未来的版本中, 官方会进一步调整装饰器的相关语法

1. 装饰器本质是一种特殊的函数, 可以对类, 属性, 方法, 参数进行扩展, 同时能让代码更简洁
2. 装饰器自`2015`年在`ECMAScript-6`中被提出到现在, 已有`10`年
3. 截止目前, 装饰器依然是实验性特性, 需要开发者手动调整配置来开启装饰器支持
4. 装饰器有`5`种:
   1. 类装饰器
   2. 属性装饰器
   3. 方法装饰器
   4. 访问装饰器
   5. 参数装饰器

## 类装饰器

### 基本语法

> 类装饰器时一个应用在类声明上的函数, 可以为类添加额外的功能, 或添加额外的逻辑

```ts
/**
 * Demo 函数会在 Person 类定义时执行
 * 参数说明: target 参数是被修饰的类, 即 Person
 */
function Demo(target: Function) {
  console.log(target)
}

@Demo
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
```

### 类装饰器应用举例

> 需求: 定义一个装饰器, 实现`Person`实例调用`toString`时返回`JSON.stringify`的执行结果

```ts
function CustomString(target: Function) {
  target.prototype.toString = function() {
    return JSON.stringify(this)
  }
  // 封锁
  Object.seal(target)
}

@CustomString
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const man = new Person('张三', 18)
// console.log(man.toString()) // [object Object]
// console.log(JSON.stringify(man)) // "{"name": "张三", "age": 18}"

console.log(man.toString()) // "{"name": "张三", "age": 18}"

interface Person {
  x: number
}
// 封锁后不能向原型上添加属性
Person.prototype.x = 99
```

### 关于返回值

- 类装饰器有返回值: 若类装饰器返回一个新的类, 那这个新类将替换掉被装饰的类
- 类装饰器无返回值: 若类装饰器无返回值或者返回`undefined`, 那被装饰的类不会被替换

```ts
function Demo(target: Function) {
  // 装饰器有返回值时, 该返回值会替换掉被装饰的类
  return class {
    test() {
      console.log(200)
      console.log(300)
    }
  }
}

@Demo
class Person {
  test() {
    console.log(100)
  }
}

console.log(Person)
```

### 关于构造类型

> 在`TS`中, `Function`类型所表示的范围非常广泛, 包括: 普通函数, 箭头函数, 方法等等
> 但并非所有`Function`类型的函数都可以被`new`关键字实例化, 如箭头函数是不能被实例化的
> 那么`TS`中如何声明一个构造类型呢?

- 仅声明构造类型

```ts
/**
 * new 表示: 该类型是可以使用 new 关键字实例化
 * ...args 表示: 构造器可以接受[任意数量]的参数
 * any[] 表示: 构造器可以接受[任意类型]的参数
 * {} 表示: 返回类型是对象, 非 null, 非 undefined 的对象
 */
// 定义 Constructor 类型, 其含义是构造类型
type Constructor = new (...args: any[]) => {}

function test(fn: Constructor) {}

class Person{}

test(Person)
test(() => {}) // 警告: 类型“() => void”提供的内容与签名“new (...args: any[]): {}”不匹配
```

- 声明构造类型并指定静态属性

```ts
// 定义一个构造器，并且包含一个静态属性 wife
type ConstructorStatic = {
  new (...args: any[]): {} // 构造签名
  wife: string // wife 静态属性
}

function demo(fn: ConstructorStatic) {}

class Person {
  static wife = 'Person'
}

demo(Person)
```

### 替换被装饰的类

> 对于高级一些的装饰器, 不仅仅是覆盖一个原型上的方法, 还要有更多功能, 例如添加新的方法和状态

- 需求: 设计一个`LogTime`装饰器, 可以给实例添加一个属性, 用于记录实例对象的创建时间, 再添加一个方法用于读取创建时间

```ts
// 定义 Constructor 类型, 其含义是构造类型
type Constructor = new (...args: any[]) => {}

interface User {
  getTime(): string
}

function LogTime<T extends Constructor>(target: T) {
  return class extends target {
    createTime: Date;
    constructor(...args: any[]) {
      super(...args)
      this.createTime = new Date()
    }
    getTime() {
      return `该对象创建时间为: ${this.createTime}`
    }
  }
}

@LogTime
class User {
  constructor(
    public name: string,
    public age: number
  ) {}
  speak() {
    console.log(`我是${this.name}, 今年${this.age}岁`)
  }
}

const man = new User('张三', 17)
console.log(man.getTime())
```

## 装饰器工厂

> 装饰器工厂是一个返回装饰器函数的函数, 可以为装饰器添加参数, 可以更灵活的控制装饰器的行为

- 需求: 定义一个`LogInfo`类装饰器工厂, 实现`Person`实例可以调用到`introduce`方法, 且`introduce`中输出内容的次数, 由`LogInfo`接收的参数决定

```ts
type Constructor = new (...args: any[]) => {}

interface Person {
  introduce(): void
}

// 装饰器工厂, 接收一个参数 n, 返回一个类装饰器
function LogInfo(n: number) {
  // 返回的是装饰器
  return function (target: Constructor) {
    target.prototype.introduce = function() {
      for (let i = 0; i < n; i++) {
        console.log(`我是${this.name}, 今年${this.age}岁`)
      }
    }
  }
}

@LogInfo(3)
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
  speak() {
    console.log('Halo')
  }
}

const man = new Person('张三', 18)
man.introduce()
```

## 装饰器组合

> 装饰器可以组合使用

### 装饰器组合执行顺序

> 执行顺序为: 先**由上到下**的执行所有的装饰器工厂, 依次获取到装饰器, 然后再**由下到上**执行所有的装饰器

```ts
// 装饰器
function DemoA(target: Function) {
  console.log('DemoA')
}

// 装饰器工厂
function DemoB() {
  console.log('DemoB 工厂')
  return function (target: Function) {
    console.log('DemoB')
  }
}

// 装饰器工厂
function DemoC() {
  console.log('DemoC 工厂')
  return function (target: Function) {
    console.log('DemoC')
  }
}

// 装饰器工厂
function DemoD(target: Function) {
  console.log('DemoD')
}


@DemoA
@DemoB()
@DemoC()
@DemoD
class Person {}

/**
 * 执行顺序:
 * 1. DemoB 工厂
 * 2. DemoC 工厂
 * 
 * 3. DemoD
 * 4. DemoC
 * 5. DemoB
 * 6. DemoA
 */
```

### 装饰器组合应用

```ts
interface Person {
  introduce: () => void
  getTime: () => string
}
type Constructor = new (...args: any[]) => {}

// 装饰器
function CustomString(target: Constructor) {
  target.prototype.toString = function() {
    return JSON.stringify(this)
  }
  // 封锁 target 的原型链属性
  Object.seal(target.prototype)
}

// 装饰器工厂
function LogInfo(n: number) {
  // 返回的是装饰器
  return function (target: Constructor) {
    target.prototype.introduce = function() {
      for (let i = 0; i < n; i++) {
        console.log(`我是${this.name}, 今年${this.age}岁`)
      }
    }
  }
}

// 装饰器
function LogTime<T extends Constructor>(target: T) {
  return class extends target {
    createTime: Date;
    constructor(...args: any[]) {
      super(...args)
      this.createTime = new Date()
    }
    getTime() {
      return `该对象创建时间为: ${this.createTime}`
    }
  }
}

@CustomString
@LogInfo(3)
@LogTime
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
  speak() {
    console.log('Halo')
  }
}

const man = new Person('张三', 18)
man.speak()
console.log(man.toString())
man.introduce()
console.log(man.getTime())
```

## 属性装饰器

### 属性装饰器基本语法

```ts
/**
 * 参数说明
 * @param target 对于静态属性来说值是类, 对于实例属性来说值是类的原型对象
 * @param propertyKey 属性名
 */
function Demo(target: object, propertyKey: string) {
  console.log(target, propertyKey) // {} 'name'
}

class Person {
  // 静态属性
  @Demo static school: string
  // 实例属性
  @Demo name: string
  @Demo age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log('Halo')
  }
}
```

### 关于属性遮蔽

> 如下代码中, 当构造器中的`this.age = age`试图再实例上赋值时, 实际上是调用了原型上的`age`属性的`set`方法

```ts
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
let value = 99
// 使用 Object.defineProperty 给 Person 原型添加 age 属性, 并配置对应的 get 和 set 方法
Object.defineProperty(Person.prototype, 'age', {
  get() {
    return value
  },
  set(v) {
    value = v
  },
})
const man = new Person('张三', 16)
console.log(man)
```

### 属性装饰器应用举例

- 需求: 定义一个`State`属性装饰器, 监听属性的修改

```ts
function State(target: object, propertyKey: string) {
  // let value: any
  let key = `__${propertyKey}`
  Object.defineProperty(target, propertyKey, {
    get() {
      // return value
      return this[key]
    },
    set(v) {
      console.log(`${propertyKey}的最新值是: ${v}`)
      this[key] = v
      // value = v
    },
    enumerable: true, // 可枚举性
    configurable: true // 可配置性
  })
}

class Person {
  name: string
  @State age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const man1 = new Person('张三', 18)
const man2 = new Person('李四', 20)

man1.age = 30
man2.age = 40
// console.log(man1.age, man2.age) // 40, 40
console.log(man1.age, man2.age) // 30, 40
```

## 方法装饰器

### 方法装饰器基本语法

```ts
/**
 * 参数说明
 * @param target 对于静态方法来说值是类, 对于实例方法来说值是原型对象
 * @param propertyKey 方法的名称
 * @param descriptor 方法的描述对象, 其中 value 属性是被装饰的方法
 */
function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
}

class Person {
  constructor(
    public name: string,
    public age: number
  ) { }
  // 实例方法
  @Demo speak() {
    console.log(`我是${this.name}, 今年${this.age}岁`)
  }
  // 静态方法
  @Demo static isAdult(age: number) {
    return age >= 18
  }
}

const man = new Person('张三', 20)
man.speak()
```

### 方法装饰器应用举例

- 需求:
  - 定义一个`Logger`方法装饰器, 用于在方法执行前和执行后, 均追加一些额外逻辑
  - 定义一个`Validate`方法装饰器, 用于验证数据

```ts
function Logger(_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
  // 存储原始方法
  const original = descriptor.value
  // 替换原始方法
  descriptor.value = function(...args: any[]) {
    console.log(`${propertyKey}开始执行...`)
    // 执行原函数
    const res = original.call(this, ...args)
    console.log(`${propertyKey}执行完毕...`)
    return res
  }
}

function Validate(maxAge: number) {
  return function(_target: object, _propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始方法
    const original = descriptor.value
    // 替换原始方法
    descriptor.value = function(...args: any[]) {
      if (args[0] > maxAge) {
        throw new Error('年龄非法!')
      }
      return original.apply(this, args)
    }
  }
}

class Person {
  constructor(
    public name: string,
    public age: number
  ) { }
  // 实例方法
  @Logger speak() {
    console.log(`我是${this.name}, 今年${this.age}岁`)
  }
  // 静态方法
  @Validate(120) static isAdult(age: number) {
    return age >= 18
  }
}

const man = new Person('张三', 20)
man.speak()
```

## 访问器装饰器

### 访问器装饰器基本语法

```ts
/**
 * 参数说明
 * @param target 对于实例访问器来说值是[所属类的原型对象], 对于静态访问器来说值是[所属类]
 * @param propertyKey 访问器的名称
 * @param descriptor 描述对象
 */
function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target)
  console.log(propertyKey)
  console.log(descriptor)
}

class Person {
  @Demo
  get address() {
    return '北京'
  }
  @Demo
  static get country() {
    return '中国'
  }
}
```

### 访问器装饰器应用举例

- 需求: 对`Weather`类的`temp`属性的`set`访问器进行限制, 设置最低温度为`-50`, 最高温度为`50`

```ts
function RangeValidate(min: number, max: number) {
  return function(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始的 setter 方法, 以便在后续调用中使用
    const originalSetter = descriptor.set
    // 重写 setter 方法, 加入温度范围验证逻辑
    descriptor.set = function (v: number) {
      // 检查设置的值是否在指定的最小值和最大值之间
      if (v < min || v > max) {
        throw new Error(`${propertyKey}的值应该在${min} - ${max}之间!`)
      }

      // 如果值在范围内, 且原始的 setter 方法存在, 则调用原始的 setter 方法
      if (originalSetter) {
        originalSetter.call(this, v)
      }
    }
  }
}

class Weather {
  private _temp: number
  constructor(temp: number) {
    this._temp = temp
  }

  @RangeValidate(-50, 50)
  set temp(v) {
    this._temp = v
  }
  get temp() {
    return this._temp
  }
}

const w = new Weather(25);
console.log(w)
w.temp = 70
console.log(w)
```

## 参数装饰器

### 参数装饰器基本语法

```ts
/**
 * 参数说明
 * @param target 如果修饰的是实例方法的参数, target 是类的[原型对象], 如果修饰的是静态方法的参数, target 是[类]
 * @param propertyKey 参数所在的方法的名称
 * @param parameterIndex 参数在函数参数列表中的索引, 从 0 开始
 */
function Demo(target: object, propertyKey: string, parameterIndex: number) {
  console.log(target)
  console.log(propertyKey)
  console.log(parameterIndex)
}


class Person {
  constructor(public name: string) {}
  speak(@Demo msgA: any, msgB: any) {
    console.log(`${this.name}想说: ${msgA}, ${msgB}`)
  }

  static run(@Demo speed: number) {
    console.log(`${this.name}能跑${speed}`)
  }
}
```

### 参数装饰器应用举例

- 需求: 定义方法装饰器`Validate`, 同时搭配参数装饰器`NotNumber`, 来对`speak`方法的参数类型进行限制
