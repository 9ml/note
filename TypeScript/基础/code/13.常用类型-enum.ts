/**
 * 根据调用 walk 函数时传入的不同参数，执行不同的逻辑，存在的问题是调用 walk 传参时没有任何提示，开发者很容易写错字符串内容
 * 并且用于判断逻辑的 up down left right 是连续且相关的一组值，此时就特别适合使用枚举
 */

// function walk(str: string) {
//   switch (str) {
//     case "up":
//       console.log("向上");
//       break;
//     case "down":
//       console.log("向下");
//       break;
//     case "left":
//       console.log("向左");
//       break;
//     case "right":
//       console.log("向右");
//       break;
//     default:
//       console.log('未知方向');
//       break;
//   }
// }

// walk('up')
// walk('down')
// walk('left')
// walk('right')

// ====================
// 定义枚举
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

console.log(Direction)
console.log(Direction.UP) // 0
console.log(Direction[0]) // UP


// Direction.UP = 'UPUP' // 无法为“UP”赋值，因为它是只读属性

function walk(str: Direction) {
  switch (str) {
    case Direction.UP:
      console.log("向上");
      break;
    case Direction.DOWN:
      console.log("向下");
      break;
    case Direction.LEFT:
      console.log("向左");
      break;
    case Direction.RIGHT:
      console.log("向右");
      break;
    default:
      console.log('未知方向');
      break;
  }
}

walk(Direction.UP)
walk(Direction.DOWN)
walk(Direction.LEFT)
walk(Direction.RIGHT)

// ====================
// 字符串枚举
enum DirectionString {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

let dir: DirectionString = DirectionString.UP
console.log(dir) // UP

// ====================
// 常量枚举
const enum DirectionConst {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

console.log(DirectionConst.UP)

export {};
