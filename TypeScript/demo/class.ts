class Person {
  name = 'Jack'
  getName() {
    return this.name
  }
}

const person = new Person()
console.log(person.getName())

// 继承
class Student extends Person {
  getStuName() {
    return 'student'
  }
  // 子类重写父类属性
  getName() {
    return 'Tom And ' + super.getName() // super 指向父类，可通过`super`调用父类的属性和方法
  }
}

const stu = new Student()
console.log(stu.getName())
console.log(stu.getStuName())


class Persons {
  public name: string
  private age = 18
  say() {
    console.log(this.age)
    console.log('Hi')
  }
  protected doi() {
    console.log(1111)
  }
}

class Stu extends Persons {
  iss() {
    this.name = '123'
    this.doi()
  }
}


class Person2 {
  // 传统写法
  // private name: string
  // constructor(name: string) { 
  //   this.name = name
  // }
  // 简化写法
  constructor(public name: string) {}
}

const person3 = new Person2('Tom')
console.log(person3.name)
