interface PersonInterface {
  name: string,
  age: number,
}

function logData<T extends PersonInterface>(info: T): void {
  console.log(`我叫${info.name}, 今年${info.age}岁`)
}

logData({ name: '张三', age: 18 })


export {}
