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

export {}