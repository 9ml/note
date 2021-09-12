/**
 * 浅拷贝：
 * 拷贝就是复制，就相当于把一个对象中的所有内容复制一份给另一个对象。
 * 就是把一个对象的地址给了另一个对象，它们的指向相同，两个对象之间有共同的属性和方法，都可以使用。
 * 
 */

var obj1 = {
  age: 10,
  sex: '男',
  car: ['奔驰','宝马']
}

var obj2 = {}

// 浅拷贝，把 a 对象中的属性复制到 b 中
function extend(a, b) {
  for (let key in a) {
    b[key] = a[key]
  }
}

extend(obj1, obj2)
console.dir(obj1); // 有属性
console.dir(obj2); // 空对象


