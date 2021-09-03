/**
 * 类的装饰器
 * 装饰器本身是一个函数
 * 装饰器通过 @ 符号来使用，会在类创建好之后立即执行
 * 类装饰器接收的参数是构造函数 constructor
 * 一个类可定义多个装饰器
 */

function testDecorator1(constructor: any) {
 constructor.prototype.getName = () => {
   console.log('This is a test.')
 }
}

function testDecorator2(flag: boolean) {
  if (flag) {
    return function(constructor: any) {
      constructor.prototype.getName = () => {
        console.log('This is a test.')
      }
    }
  }
  return function(constructor: any) { }
}


@testDecorator1
@testDecorator2(true)
class Test {}

const test = new Test()




