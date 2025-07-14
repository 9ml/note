// CountInterface 接口
interface CountInterface {
  (a: number, b: number): number
}

const count: CountInterface = (x, y) => {
  return x + y
}

count(3, 9)

export {}
