# TypeScript

## 起步

### 环境搭建

#### 安装`Node`

- 官网`https://nodejs.org/zh-cn/`，建议下载长期维护版。
- 傻瓜式安装。
- 命令行输入`node --version`校验是否安装成功并查看`Node`版本。
- 命令行输入`npm --version`校验是否安装成功并查看`npm`版本。

#### 安装`TypeScript`

##### 全局安装`TypeScript`

```shell
npm i typescript -g
```

- 命令行输入`tsc --version`校验是否安装成功并查看`TypeScript`版本号。
- 使用`tsc demo.ts`编译`ts`文件。

##### 全局安装`TypeScript`编译工具

```shell
npm i ts-node -g
```

- 命令行输入`ts-node --version`校验是否安装成功并查看`ts-node`版本号。
- 使用`ts-node demo.ts`编译文件。

### 基础类型

- `Number`
- `String`
- `Null`
- `Undefined`
- `Boolean`
- `Symbol`
- `Void`

```typescript
const num: number = 123
const str: string = 'Hello World'

let number: number | string = 123
number = 'Hello'
```

### 对象类型

- `Object`
- `Array`
- `Class`
- `Function`

```typescript
const obj: {
  name: string,
  age: number
} = {
  name: 'Demo',
  age: 18
}

const numbers: number[] = [1, 2, 3]

class Person {}
const xm: Person = new Person()

const total: () => number = () => {
  return 123
}

const date/*: Date*/ = new Date()
```

#### 函数

```typescript
function fn1() {  }

const fn2 = function() {  }

const fn3 = () => {  }

function getTotal(x: number, y: number): number {
  return x + y
}
const sum = getTotal(1, 2)

// void 表示返回值是空，return 会报错
function sayHi(): void {
  console.log('Hello')
  // return 'Hello'
}

// never 表示此函数永远不会执行到最后
function error(): never {
  throw new Error('Error.')

  while (true) {

  }
}

const func1 = (str: string): number => {
  return +str
}

const func2: (str: string) => number = (str) => {
  return +str
}

function add({x, y}: {x: number, y: number}): number {
  return x + y
}
const total = add({x: 1, y: 2})

interface Point {
  x: number,
  y: number
}
function demo(data: Point/*{x: number, y: number}*/): number {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

```

#### 数组

```typescript
// 类型推断
const arr1 = [1, 2, 3]
// 类型注解
const arr2: string[] = ['a', 'b', 'c']
const arr3:(number | string)[] = [1, '2', 3]
const objArr: {name: string, age: number}[] = [ {name: 'Tom', age: 18} ]
```

#### 元组

- `tuple`：元组
- 一个固定长度固定类型的数组。

```typescript
const user: [string, string, number] = ['Dell', 'male', 18]

// CSV
const list: [string, string, number][] = [
  ['Tom', 'male', 18],
  ['Sun', 'female', 18],
  ['Jun', 'male', 18]
]
```

### 类型

#### 类型注解

- `type annotation`：告诉`TypeScript`变量是什么类型。

```typescript
const num: number
num = 123
```

#### 类型推断

- `type inference`：`TypeScript`会自动的分析变量的类型。

```typescript
const num = 123
```

- 结论

> - 如果`TypeScript`能够自动分析变量的类型，就不需要再进行类型注解。
> - 如果`TypeScript`无法自动分析变量的类型，就需要使用类型注解。

```typescript
// 不需要类型注解
const num1 = 1
const num2 = 2
const total = num1 + num2

const obj = {
  name: '9ml',
  age: 18
}

// 需要类型注解
function getTotal(x: number, y: number): number {
  return x + y
}
const sum = getTotal(1, 2)

function add({x, y}: {x: number, y: number}): number {
  return x + y
}
const total = add({x: 1, y: 2})

interface Point {
  x: number,
  y: number
}
function demo(data: Point/*{x: number, y: number}*/): number {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

```

#### 类型别名

- `type alias`：类型别名

```typescript
// 常规定义
const user1: {name: string, age: number}[] = [ {name: 'Tom', age: 18} ]

// 使用类型别名
type User = {
  name: string
  age: number
}
const user2: User[] = [ {name: 'Tom', age: 18} ]

// 使用 class
class Teacher {
  name: string,
  age: number
}

const teacher: Teacher[] = [
  new Teacher(),
  {
    name: 'Jack',
    age: 18
  }
]

// 使用接口
interface Student {
  name: string,
  age: number
}

```

### 接口

- `interface`：接口，与`type`类型别名类型。
- 与`type`类型别名的区别
  - `type Person = string`
  - `interface Person = { name: string }`
  - 优先使用`interface`接口

```javascript
interface Person {
  name: string,
  age?: number,  // ?表示非必填
  readonly sex: 1,  // readonly 表示只读，不可改值
  [propName: string]: any,  // 表示可新增任意类型，name 为 string 类型，值为任意类型
  say(): string,  // 可传入方法，返回值为 string 类型
}

const getPersonName = (person: Person) => {
  console.log(person.name)
}

const setPersonName = (person: Person, name: string) => {
  person.name = name
}

const person = {
  name: 'Jack',
  say() {
    return 'Hello'
  }
}

// 报错，字面量严格按照接口的数据格式，传人变量名则不会
// getPersonName({
//   name: 'test',
//   xxx: 'Hi'
// })

getPersonName(person)
setPersonName(person)

// class 类应用接口，必须具备接口中的属性
class User implements Person {
  name: string
  say() {
    return 'Hello'
  }
}

```

#### 类继承接口

- `class`类继承接口，必须具备接口中的属性

```typescript
interface Person {
  name: string,
  age?: number,
  readonly sex: 1,
  [propName: string]: any,
  say(): string,
}

// class 类应用接口，必须具备接口中的属性
class User implements Person {
  name: string
  say() {
    return 'Hello'
  }
}
```

#### 类继承

- 继承类里面所有的属性和方法，同时可以定义自己的属性和方法。

```typescript
interface Person {
  name: string,
  age?: number,
  readonly sex: 1,
  [propName: string]: any,
  say(): string,
}

interface Teacher extends Person {
  teach(): string
}
```

#### 类函数

```typescript
interface Say {
  (word: string): string
}

const sayHi: Say = (word: string) => {
  return 'string'
}

```

### 类

- `super`指向父类，当子类的方法重写时可通过`super`调用父类的方法。

```typescript
class Person {
  name = 'Jack'
  getName() {
    return this.name
  }
}

const person = new Person()
console.log(person.getName())

// 继承
class Student extends Person {
  getStuName() {
    return 'student'
  }
  // 子类重写父类属性
  getName() {
    return 'Tom And ' + super.getName() // super 指向父类，当子类的方法重写时可通过 super 调用父类的方法
  }
}

const stu = new Student()
console.log(stu.getName())
console.log(stu.getStuName())
```

- `public`：表示允许属性和方法在类的内外被调用，属性和方法默认为`public`公有访问类型。
- `private`：只允许在类的内部被调用，在类的外部无法使用。
- `protected`：允许在类的内部及继承的子类中被调用。
- `static`：将方法和属性直接挂载在类上面，而不是类的实例。

```typescript
class Person {
  public name: string
  private age = 18
  say() {
    console.log(this.age)
    console.log('Hi')
  }
  protected doi() {
    console.log(1111)
  }
}

class Stu extends Person {
  iss() {
    this.name = '123'
    this.doi()
  }
}

const person = new Person()
person.name = 'Jack'
console.log(person.name) // Jack
person.say() // 'Hi'
```

- `constructor`：创建实例时会自动执行此方法

```typescript
class Person {
  // 传统写法
  // private name: string
  // constructor(name: string) { 
  //   this.name = name
  // }
  // 简化写法
  constructor(public name: string) {}
}

const person = new Person('Jack')
console.log(person.name)
```

- 子类继承相关
- 如果父类有`constructor`构造器，子类也需要有`constructor`构造器时，子类构造器中需要手动调用一下父类的`constructor`构造器即`super()`，若父类构造器中有传参数，`super()`中也必须传参，即`super(xxx)`。

```typescript
class Person {
  constructor(public name: string) {}
}

class Student extends Person {
  constructor(public age: number) {
    super('Jack')
  }
}

const stu = new Student(18)
```

- `Getter`和`Setter`使用

```typescript
class Animal {
  constructor(private _name: string) {  }
  get name() {
    return this._name + ' Jack'
  }
  set name(name: string) {
    const realName = name.split(' ')[0]
    this._name = realName
  }
}

const dog = new Animal('Tom')
// dog.name // name 是私有属性 无法获取
console.log(dog.name) //Tom Jack getter 不需要使用 ()
dog.name = 'Sum Jump'
console.log(dog.name)

```

- 设计模式：单例模式
- 一个类只允许初始化一个实例

```typescript
class Demo {
  private static instance: Demo
  private constructor () { }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo()
    }
    return this.instance
  }
}

const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
```

- 抽象类
- `abstract`：将共用的属性和方法抽离出来，变成抽象的类，里面可以有抽象的方法或者实际的方法和属性
- 抽象类，只能被继承，不能实例化
- 抽象类中的抽象方法必须手动实现
- 使用

```typescript
abstract class Geom {
  width: number
  getType() {
    return 'Geom'
  }
  abstract getArea(): number
}



class Circle extends Geom {
  getType() {
    return 123
  }
}

class Square {

}

```

- `readonly`限制属性只能读，不能写

```typescript
class Person {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const person = new Person('Tom')
// person.name = 'Jack' 
console.log(person.name)

```
