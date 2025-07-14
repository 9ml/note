class Person {
  // 属性声明
  public name: string
  public age: number
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  public speak() {
    // 类内部访问
    console.log(`我叫${this.name}, 今年${this.age}岁`)
  }
}

class Student extends Person {
  study() {
    // 子类访问
    console.log(`${this.name}正在努力学习中......`)
  }
}

const man = new Person('张三', 18)
// 类外部访问
console.log(man.name)

export {}