// 基本使用
type num = number
let age: num
age = 18

// =====================
// 联合类型
type Status = number | string
let a: Status = 100
let b: Status = '200'

type Gender = '男' | '女'
let x: Gender = '男'
let y: Gender = '女'

// =====================
// 交叉类型
// 面积
type Area = {
  width: number; // 宽
  height: number; // 高
}

// 地址
type Address = {
  num: number // 楼号
  cell: number // 单元号
  room: string // 房间号
}

type House = Area & Address

const house: House = {
  width: 30,
  height: 3,
  num: 1,
  cell: 2,
  room: '3'
}


export {}