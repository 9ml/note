# Map

> `ES6`提供了`Map`数据结构，它类似于对象，也是键值对的集合
> 但是`键`的范围不限于字符串，各种类型的值都可以当作键，包括对象
> `Map`也实现了`iterator`接口，可以使用`...`扩展运算符和`for...of`进行遍历

- `Map`的属性和方法
  - `size`：返回`Map`的元素个数
  - `set`：增加一个新元素，返回当前`Map`
  - `get`：返回键名对象的键值
  - `has`：检测`Map`中是否包含某个元素，返回`Boolean`值
  - `delete`：删除集合中的元素
  - `clear`：清空集合，返回`undefined`

## 示例

```javascript
// 声明
let m = new Map()
// 添加元素
m.set('name', '9ml')
m.set('say', function() {
  console.log('Hello')
})
let _key = {
  age: 18
}
m.set(_key, [19, 20, 21])
// 查看元素个数
console.log(m.size)
// 删除
m.delete('name')
// 获取
m.get('say')
// 清空
m.clear()
```
