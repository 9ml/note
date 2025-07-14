function Demo(target: Function) {
  // 装饰器有返回值时, 该返回值会替换掉被装饰的类
  return class {
    test() {
      console.log(200)
      console.log(300)
    }
  }
}

@Demo
class Person {
  test() {
    console.log(100)
  }
}

console.log(Person)

export {}
