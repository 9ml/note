// PersonInterface 接口
interface PersonInterface {
  name: string,
  age: number
}

// 自动跟上面的合并
interface PersonInterface {
  gender: string
}

const p: PersonInterface = {
  name: '李四',
  age: 18,
  gender: '男'
}

export {}
