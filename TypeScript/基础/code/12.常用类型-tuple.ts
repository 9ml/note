// 第一个元素必须是 string 类型, 第二个元素必须是 number 类型
let arrA: [string, number]
// 第一个元素必须是 number 类型, 第二个元素是可选的, 如果有则必须是 boolean 类型
let arrB: [number, boolean?]
// 第一个元素必须是 number 类型, 后面的元素可以是任意数量的 string 类型
let arrC: [number, ...string[]]

// 赋值
arrA = ['123', 321]
arrB = [100]
arrB = [200, false]
arrC = [10, '1', '2', '3']
arrC = [20]

// 不可以赋值, arrA 声明是两个元素, 赋值是三个
// arrA = ['Halo', 123, false] // 不能将类型“[string, number, boolean]”分配给类型“[string, number]”

export {}