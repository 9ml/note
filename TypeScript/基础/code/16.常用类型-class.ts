class Person {
  // 属性声明
  name: string
  age: number
  // 构造器
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  // 方法
  speak() {
    console.log(`我叫${this.name}, 今年${this.age}岁`)
  }
}

const man = new Person('张三', 18)
console.log(man)
man.speak()

class Student extends Person {
  grade: string
  constructor(name: string, age: number, grade: string){
    // 调用父类构造器
    super(name, age)
    this.grade = grade
  }
  // 方法
  study() {
    console.log(`${this.name}正在努力学习中......`)
  }
  // 重写父类方法
  override speak() {
    console.log(`我是学生, 我叫${this.name}, 今年${this.age}岁, 在读${this.grade}年级`)
  }
}

const stu = new Student('李四', 12, '初三')
console.log(stu)
stu.speak()
stu.study()

export {}