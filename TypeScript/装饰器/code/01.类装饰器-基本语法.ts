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

export {}
