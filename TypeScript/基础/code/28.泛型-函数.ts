// 形参指定类型
// function logData(data) { // 警告: 参数“data”隐式具有“any”类型
//   console.log(data)
// }

function logData<T>(data: T) {
  console.log(data)
}

logData<number>(100)
logData<string>('123')

// =======================
// 多个泛型
function logInfo<T, U>(x: T, y: U): T | U {
  console.log(x, y)
  return Date.now() % 2 ? x : y
}

logInfo<number, string>(100, 'Halo')
logInfo<string, boolean>('Tom', false)

export {}
