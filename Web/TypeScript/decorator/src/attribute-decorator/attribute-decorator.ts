/**
 * 属性装饰器
 */

/**
 * 
 * @param target 原型
 * @param key 属性名字
 */
 function nameDecorator(target: any, key: string): any {
  console.log(target, key)
  target[key] = 'Jack' // 修改的是原型上的 name
  const descriptor: PropertyDescriptor = {
    writable: false
  }

  return descriptor
}

// name 在实例上
class TestC {
  @nameDecorator
  name = '9ml'
}

const testC = new TestC()
// testC.name = 'Tom'
console.log(testC.name)
