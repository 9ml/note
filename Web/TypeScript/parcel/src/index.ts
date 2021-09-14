/**
 * 泛型中 keyof 语法使用
 */
interface Person {
  name: string
  age: number
  gender: string
}

class Student {
  constructor(private info: Person) {}
  
  // getInfo(key: string) {
  //   // 类型保护
  //   if (key === 'name' || key === 'age' || key === 'gender') {
  //     return this.info[key]
  //   }
  // }

  /**
   * keyof 遍历循环的语法，循环每一项
   * ex: 可以直接定义类型为某个字符串，type Name = 'name' 使用：const test: Name = 'name'
   * T extends 'name' --- key: 'name' --- Person['name']
   * T extends 'age' --- key: 'age' --- Person['age']
   * T extends 'gender' --- key: 'gender' --- Person['gender']
   */
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key]
  }
}

const stu = new Student({
  name: 'Tom',
  age: 18,
  gender: 'male'
})

const res = stu.getInfo('name')
console.log(res)
