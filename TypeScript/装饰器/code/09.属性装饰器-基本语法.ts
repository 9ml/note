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

export {}
