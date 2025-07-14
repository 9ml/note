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

export {}
