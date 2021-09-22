# Set

> `ES6`提供了新的数据结构：`Set`集合
> `Set`集合类似于数组，但成员的值都是唯一的，集合实现的`iterator`接口，可以使用`...`扩展运算符和`for...of`进行遍历

- `Set`集合的属性和方法
  - `size`：返回集合的元素个数
  - `add`：增加一个新元素
  - `delete`：删除元素，返回`Boolean`值
  - `has`：检测集合中是否包含某个元素，返回`Boolean`值
  - `clear`：清空集合

## 声明

```javascript
let s = new Set()
console.log(s, typeof s) // Set(0) {} "object"
let s_1 = new Set(['大', '小', '好', '坏'])
console.log(s_1) // Set(4) {'大', '小', '好', '坏'}
// 查
console.log(s_1.size) // 4
// 增
s_1.add('囍')
// 删
s_1.delete('坏')
// 检测
s_1.has('好') // true
// 清空
s_1.clear()
// 遍历
for (let v of s_1) {
  console.log(v) // '大', '小', '好', '坏', '囍'
}
```

## Set实际应用

- 数组去重
- 交集
- 并集
- 差集

```javascript
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
// 去重
let res = [...new Set(arr)]
// 交集
let _arr = [4, 5, 6, 5, 4]
let res = [...new Set(arr)].filter(item => new Set(_arr).has(item))
// 并集
let union = [...new Set([...arr, ..._arr])]
// 差集
let res = [...new Set(arr)].filter(item => !(new Set(_arr).has(item)))
```
