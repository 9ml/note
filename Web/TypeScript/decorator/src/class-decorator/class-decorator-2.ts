/**
 * (...args: any[]) => {} ：函数（接收很多参数，参数的每一项都是 any 类型） => 返回值是一个对象类型
 * new：代表这个函数是一个构造函数 ↑
 * T extends：T 继承这个构造函数  ↑
 * 
 */

 function testDecorator<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    name = '9ml'
    getName() {
      return this.name
    }
  }
}
 
@testDecorator
class Test1 {
  name: string
  constructor(name: string) {
    console.log(111)
    this.name = name
    console.log(222)
  }
}
 
const test1 = new Test1('Tom')
// console.log(test1.getName())
