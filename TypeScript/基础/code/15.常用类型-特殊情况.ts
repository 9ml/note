// 代码段1
function demo(): void {
  // 返回 undefined 合法
  return undefined

  // 以下返回均不合法
  // return 100
  // return false
  // return null
  // return []
}
demo()

// 代码段2
type LogFunc = () => void
const f1: LogFunc = () => {
  return 100 // 允许返回非空值
}

const f2: LogFunc = () => 200 // 允许返回非空值

const f3: LogFunc = function() {
  return 300 // 允许返回非空值
}

// let res = f1()
// if (res) { // 无法测试 "void" 类型的表达式的真实性

// }


const src = [1,2,3]
const dst = [0]
src.forEach(el => dst.push(el))

export {}