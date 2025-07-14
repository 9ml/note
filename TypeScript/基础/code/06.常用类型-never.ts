// 指定 a 的类型为 never, 那就意味着 a 以后不能赋值任何数据
let a: never

// 以下对 a 的所有赋值都会有警告
// a = 1
// a = false
// a = ''
// a = undefined
// a = null


// ===================
// 指定 x 的类型为 string
let x: string
x = 'Halo'

if (typeof x === 'string') {
  console.log(x.toUpperCase())
} else {
  console.log(x) // TS 会推断出此处的 x 是 never, 因为没有任何一个值符合此处的逻辑
}

// ===================
// 限制 throwError 函数不需要用任何返回值, 任何值都不行
function throwError(str: string): never {
  throw new Error(`程序异常退出: ${str}`)
}

export {}