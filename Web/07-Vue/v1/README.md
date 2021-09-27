# Vue-v1

## MVVM

- `M`：模型`Model`，对应`data`中的数据
- `V`：视图`View`，对象页面模板
- `VM`：视图模型`ViewModel`，对应`Vue`实例对象
- 图示：

![代码实例](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/mvvm-code.jpg)

![MVVM](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/mvvm.jpg)

## 数据代理

> 通过一个对象代理对另一个对象中属性的操作：读/写

### Object.defineProperty

> `Vue`数据双向绑定是使用`Object.defineProperty()`方法

- `Object.defineProperty()`接收三个参数：
  - 需要添加属性的对象
  - 需要添加的属性名
  - 属性的配置项：
    - `value`：添加属性的值，默认不可枚举（遍历）
    - `enumerable`：控制属性是否可以枚举，默认为`false`
    - `writable`：控制属性是否可以被修改，默认为`false`
    - `configurable`：控制属性是否可以被删除，默认为`false`
    - `get(getter)`方法：当读取对象的这个属性时，`get`方法会被触发，其返回值就是这个属性的值
    - `set(setter)`方法：当修改对象的这个属性时，`set`方法会被触发，且形参的值就是修改的值

```javascript
let person = {
  name: '张三',
  sex: '男'
}
let number = 19
/**
 * 传入三个参数：
 *  1. 需要添加属性的对象
 *  2. 需要添加的属性名
 *  3. 属性的配置项
*/
Object.defineProperty(person, 'age', {
  // 基本配置项
  // value: 18, // age 属性的值，默认不可枚举（遍历）
  // enumerable: true, // 控制属性是否可以枚举（遍历），默认为 false
  // writable: true, // 控制属性是否可以被修改，默认为 false
  // configurable: true, // 控制属性是否可以被删除，默认为 false
  
  // 高级配置项
  // 当读取 person 的 age 属性时，get(getter) 函数会触发，返回值就是 age 的值
  get: function() {
    console.log('触发了getter函数')
    return number
  },
  // 当修改 person 的 age 属性时，set(setter) 函数会触发，且形参会收到修改的具体值
  set: function(value) {
    console.log('触发了setter函数，值为：' + value)
    number = value
  }
})
console.log(person)
```

### 数据代理示例

```javascript
let obj_1 = { x: 100 }
let obj_2 = { y: 200 }
// 通过 obj_2 能够读取或修改 obj_1 中的 x
Object.defineProperty(obj_2, 'x', {
  get() {
    return obj_1.x
  },
  set(value) {
    obj_1.x = value
  }
})
```

### Vue中数据代理

> 通过`vm`对象来代理`data`对象中属性的读写操作
> `Vue`中数据代理的好处：更加方便的操作`data`中的数据

#### 基本原理

- 通过`Object.defineProperty()`把`data`对象中所有属性添加到`vm`实例上
- 为每一个添加到`vm`上的属性都指定一个`getter`和`setter`方法
- 在`getter`和`setter`内部去读写操作`data`中对应的属性
