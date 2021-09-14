/**
 * 参数装饰器
 * @param target 原型
 * @param key 方法名
 * @param paramIndex 参数所在的位置
 * 一个参数只能对应一个参数修饰器
 */
 function paramDecorator(target: any, key: string, paramIndex: number) {
  console.log(target, key, paramIndex)
}

class TestD {
  getInfo(@paramDecorator name: string, age: number) {
    console.log(name, age)
  }
}

const testD = new TestD()
testD.getInfo('9ml', 18)
