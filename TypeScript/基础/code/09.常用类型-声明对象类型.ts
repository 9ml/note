// 声明对象类型 person 必须有 name 和 age 属性, gender 为可选属性, 必须是 string
let personA: { name: string, age: number, gender?: string }

personA = { name: '张三', age: 18 }

// 含义同上, 可以用 ; 分号分隔
let personB: { name: string; age: number; gender?: string }

// 含义同上, 可以用换行分隔
let personC: {
  name: string
  age: number
  gender?: string
}

// =============================
// 声明对象类型 person 必须有 name 和 age 属性, gender 为可选属性, 必须是 string, 同时可以有任意数量, 任意类型
let personD: {
  name: string
  age: number
  gender?: string
  [key: string]: any // 索引签名, 可以将 key 替换为其他单词
}

personD = {
  name: '李四',
  age: 20,
  gender: '男',
  score: 60,
  email: '123@xx.com'
}



export {};
