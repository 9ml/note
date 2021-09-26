let names: any;
/**
 * 大手大脚按时那打开就能玩撒娇等我好安慰的静安寺
 */
names = '123'

/**
 * 类型保护
 */

// 联合类型
interface Bird {
  fly: boolean
  sing: () => {}
}

interface Dog {
  fly: boolean
  bark: () => {}
}

// 类型断言做类别保护
function trailAnimal1(animal: Bird | Dog) {
  // animal.sing() 不严谨 报错
  if (animal.fly) {
    return (animal as Bird).sing()
  }
  (animal as Dog).bark()
}

// in 方法做类型保护
function trailAnimal2(animal: Bird | Dog) {
  if ('sing' in animal) {
    return animal.sing()
  }
  animal.bark()
}

function add(x: number | string, y: number | string) {
  // return x + y 
  if (typeof x === 'string' || typeof y === 'string') {
    return `${x}${y}`
  }
  return x + y
}

// 使用 instanceof 做类型保护 需要使用 class 类来定义，不要使用 interface
class NumberObj {
  count: number
  constructor(num: number) {
    this.count = num
  }
}

function addSum(x: NumberObj | object, y: NumberObj | object) {
  if (x instanceof NumberObj && y instanceof NumberObj) {
    return x.count + y.count
  }
  return 0
}

addSum(new NumberObj(1), new NumberObj(2))


// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
//   ERROR: 3
// }

// 枚举
enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
  ERROR = 6
}

function getResult(status: number) {
  switch(status) {
    case Status.OFFLINE:
      return 'offline'
    break
    case Status.ONLINE:
      return 'online'
    break
    case Status.DELETED:
      return 'deleted'
    break
    default:
      return 'error'
  }
}

// console.log(getResult(Status.OFFLINE))

// 函数泛型

function joins1(x: string | number, y: string | number) {
  return `${x}${y}`
}

joins1(1, '2')
/**
 * 需求：要求 x 与 y 的类型相同，都为 string 或都为 number
 */

function joins<A>(x: A, y: A) {
  return `${x}${y}`
}

joins<string>('1', '2')
joins<number>(2, 1)

// 类泛型

// class DataManage {
//   constructor(private data: string[] | number[]) {  }
//   getItem(index: number): string |number {
//     return this.data[index]
//   }
// }

interface Item {
  name: string
}

class DataManage<T extends Item> {
  constructor(private data: T[]) {  }
  getItem(index: number): string {
    return this.data[index].name
  }
}

const data1 = new DataManage<Item>([{
  name:'123'
}])
data1.getItem(0)


const fn: <T>(data: T) => T = <T>(data: T) => {
  return data
}

