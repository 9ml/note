// a 能存储的类型是 非原始类型
let a: object;

// 以下代码将 非原始类型 赋值给 a, 所以均符合要求
a = {};
a = { name: "张三" };
a = [1, 2, 3];
a = function () {};
a = new String("123");
class PersonA {}
a = new PersonA();

// 以下代码将 原始类型 赋值给 a, 有警告
// a = 1; // 不能将类型“number”分配给类型“object”
// a = true; // 不能将类型“boolean”分配给类型“object”
// a = "Halo"; // 不能将类型“string”分配给类型“object”
// a = null; // 不能将类型“null”分配给类型“object”
// a = undefined; // 不能将类型“undefined”分配给类型“object”

// ==============================
// b 能存储的类型是可以调用到 Object 方法的类型
let b: Object

// 以下代码将 Object 的实例对象赋值给 a, 均无警告
b = {};
b = { name: "张三" };
b = [1, 2, 3];
b = function () {};
b = new String("123");
class PersonB {}
b = new PersonB();
b = 1;
b = true;
b = "Halo";

// null 和 undefined 不是 Object 的实例对象, 会有警告
// b = null // 不能将类型“null”分配给类型“Object”
// b = undefined // 不能将类型“undefined”分配给类型“Object”

export {};
