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
- 图示：

![数据代理](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/data-object-defineProperty.png)

## 计算属性

- `computed`

### 定义

> 计算属性是要用的属性不存在，需要通过已有的属性计算得来。

### 原理

> 底层借助了`Object.defineProperty()`方法提供的`getter`和`setter`

- `getter`执行时机：
  - 初次读取时会执行一次
  - 当依赖的数据发生改变时调用执行

```javascript
new Vue({
  data: {
    firstName: '张',
    lastName: '三'
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName}-${this.lastName}`
      },
      set(value) {
        const arr = value.split('-')
        this.cFirstName = arr[0]
        this.cFirstName = arr[1]
      }
    }
  }
})
```

### 优势

> 与`methods`实现相比，计算属性`computed`内部有缓存机制，可复用，效率更高，调用方便

### 备注

- 计算属性最终会出现在`Vue`实例对象中，直接调用读取使用即可
- 如果计算属性要被修改，则必须写`set`函数去响应修改，且`set`中要引起计算时依赖的数据发生改变

## 监视属性

- `watch`
- 当被监视的属性变化时，`handler`回调函数自动调用进行相关操作
  - `handler`函数有两个参数：`newValue`和`oldValue`
- 监视的属性必须在`data`中存在才能进行监视
- 监视的两种写法：

```javascript
// 1
new Vue({
  el: '#app',
  data: {
    isChange: true
  },
  watch: {
    isChange: {
      handler(newValue, oldValue) {
        console.log('isChange change', newValue, oldValue)
      }
    }
  }
})

// 2
const vm = new Vue({
  el: '#app',
  data: {
    isChange: true
  }
})
vm.$watch('isChange', {
  handler(newValue, oldValue) {
    console.log('isChange change', newValue, oldValue)
  }
})
```

### 深度监视

- `Vue`中的`watch`默认不监视对象内部值的改变
- 配置`deep: true`可以监视对象内部值改变
- 备注：
  - `Vue`自身可以监视对象内部值的变化，但是`Vue`提供的`watch`默认不可以
  - 使用`watch`时根据数据的具体结构来决定是否采用深度监视

## 计算属性和监视属性的区别

> `computed`和`watch`的区别

- `computed`能完成的功能，`watch`都可以完成
- `watch`能完成的功能，`computed`不一定能完成，如`watch`可以进行异步操作

## 小原则

- 所被`Vue`所管理的函数，最好写成普通函数，这样`this`的指向才是当前实例对象
- 不被`Vue`所管理的函数最好写成回调函数，这样`this`的指向才是当前实例对象

## 列表渲染内部原理

> `v-for`中的`key`原理

### 虚拟DOM中key的作用

- `key`是虚拟`DOM`对象的标识，当状态中的数据发生变化时，`Vue`会根据**新数据**生成**新的虚拟`DOM`**
- 随后`Vue`将**新虚拟`DOM`**与**旧虚拟`DOM`**进行差异比较

### 对比规则

- 旧虚拟`DOM`中找到了与新虚拟`DOM`相同的`key`:
  - 若虚拟`DOM`中内容没变，为了节省性能会直接使用之前的真实`DOM`，不会重新渲染
  - 若虚拟`DOM`中内部变了，则生成新的真实`DOM`，随后替换掉页面中之前的真实`DOM`
- 旧虚拟`DOM`中未找到与新虚拟`DOM`相同的`key`：
  - 创建新的真实`DOM`，随后渲染到页面中

### 使用下标作为key的问题

- 若对数据进行逆向添加、逆向删除等破坏顺序的操作时：
  - 会产生没有毕要的真实`DOM`更新，页面效果没问题但效率低
- 若结构中包含输入类的`DOM`时:
  - 会产生错误的`DOM`更新，页面会出问题

### 如何渲染key

- 最好使用每条数据的唯一标识作为`key`，比如`id`、手机号、身份证号、学号等唯一值
- 如果不存在对数据的逆向添加、逆向删除等破坏顺序的操作，仅用于渲染列表展示，使用下标`index`作为`key`是没有问题的

### 图示

- 将下标`index`作为`key`时：

![将下标index作为key时](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/v-for-key-index.png)

- 将唯一`id`作为`key`时：

![将唯一id作为key时](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/v-for-key-id.png)
