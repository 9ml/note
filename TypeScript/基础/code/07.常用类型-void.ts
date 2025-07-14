function logMessage(msg: string): void {
  console.log(msg)
}
logMessage('Halo')

// ===========================
// 无警告
function logMessageA(msg: string): void {
  console.log(msg)
}

// 无警告
function logMessageB(msg: string): void {
  console.log(msg)
  return
}

// 无警告
function logMessageC(msg: string): void {
  console.log(msg)
  return undefined
}

// ===========================
function demoA(): void {
  console.log('@')
}
let resA = demoA()
// if (resA) { // 警告: 无法测试 "void" 类型的表达式的真实性

// }

function demoB(): undefined {
  console.log('@')
}
let resB = demoB()
if (resB) { // 无警告

}


export {}