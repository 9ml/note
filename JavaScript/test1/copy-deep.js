/**
 * 深拷贝：拷贝还是复制，深就是把一个对象中所有的属性和方法一个一个的找到
 * 并在另一个对象中开辟相应的空间，一个一个的存储到另一个对象中。
 * 
 */

var obj1 = {
  age: 10,
  sex: '男',
  car: ['奔驰','宝马'],
  dog: {
    name: '大黄',
    age: 5,
    color: '黑白色'
  }
}

var obj2 = {}

function extend(a, b) {
  for (let key in a) {
    let item = a[key]
    if (item instanceof Array) {
      b[key] = []
      extend(item, b[key])
    } else if (item instanceof Object) {
      b[key] = {}
      extend(item, b[key])
    } else {
      b[key] = item
    }
  }
}

extend(obj1, obj2)

console.dir(obj1)
console.dir(obj2)


