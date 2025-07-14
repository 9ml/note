let a: string;
let b: number;
let c: boolean;

// a = 9
// a = false
a = "Halo World";
b = 99;
c = true;

function count(x: number, y: number): number {
  return x + y;
}

let res = count(1, 2);
console.log(res);

// 在 : 后也可以写字面量类型, 不过实际开发中很少使用
let x: 'Halo'
let y: 100

x = 'Halo'
b = 100

export {}
