/**
 * 普通方法
 * @param target 类的 prototype 原型
 * @param key 类的方法名
 * @param descriptor 控制函数
 * 
 * 静态方法 static
 * @param target 类的构造函数
 * @param key 类的方法名
 * @param descriptor 控制函数
 * 
 */
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  // console.log(target)
  // console.log(key)
  // descriptor.writable = false // 设置不可重写方法
  descriptor.value = function() { // 更改原方法
    return 'decorator'
  }
}


class TestA {
  name: string
  constructor(name: string) {
    this.name = name
  }
  @getNameDecorator
  getName() {
    return this.name
  }
}

const testA = new TestA('9ml')
// testA.getName = () => { // 重写方法
//   return '123'
// }
console.log(testA.getName())
