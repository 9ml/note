// PersonInterface 接口
interface PersonInterface {
  name: string,
  age: number
}

// StudentInterface 接口继承 PersonInterface 接口
interface StudentInterface extends PersonInterface {
  grade: string
}

const stu: StudentInterface = {
  name: '张三',
  age: 18,
  grade: '3'
}

export {}
