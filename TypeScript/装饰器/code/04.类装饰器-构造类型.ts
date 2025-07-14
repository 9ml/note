/**
 * new 表示: 该类型是可以使用 new 关键字实例化
 * ...args 表示: 构造器可以接受[任意数量]的参数
 * any[] 表示: 构造器可以接受[任意类型]的参数
 * {} 表示: 返回类型是对象, 非 null, 非 undefined 的对象
 */
// 定义 Constructor 类型, 其含义是构造类型
type Constructor = new (...args: any[]) => {}

function test(fn: Constructor) {}

class Person{}

test(Person)
// test(() => {}) // 警告: 类型“() => void”提供的内容与签名“new (...args: any[]): {}”不匹配

// ========================
// 声明构造类型
type ConstructorStatic = {
  new (...args: any[]): {}
  wife: string
}

function demo(fn: ConstructorStatic) {}

class Persons {
  static wife = '123'
}

demo(Persons)

export {}
