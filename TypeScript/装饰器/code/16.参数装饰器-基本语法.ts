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

export {}