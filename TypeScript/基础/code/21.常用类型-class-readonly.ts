class Person {
  constructor(
    public name: string,
    public readonly age: number
  ) {}
}

const man = new Person('张三', 18)
man.name = '李四'
// man.age = 20 // 无法为“age”赋值，因为它是只读属性


export {}