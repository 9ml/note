# Vue-v1

## MVVM

- `M`：模型`Model`，对应`data`中的数据
- `V`：视图`View`，对象页面模板
- `VM`：视图模型`ViewModel`，对应`Vue`实例对象
- 图示：

![代码实例](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/mvvm-code.jpg)

![MVVM](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/mvvm.jpg)

## 数据代理

> 双向数据绑定
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

## Vue监视数据的原理

- `Vue`会监视`data`中所有层次的数据

### 监视对象

- 通过`setter`实现监视，且要在`new Vue`时就传入要监视的数据
  - 通过`obj.xxx`添加的属性，`Vue`默认不做响应式处理
  - 如需给后添加的属性做响应式，需要使用如下`API`：

```javascript
Vue.set(target, key, value)
vm.$set(target, key, value)
```

### 监视数组

- 通过包裹数组更新元素的方法实现，本质就是做了如下两件事：
  - 调用原生对应的方法对数组进行处理更新
  - 重新解析模板，进而更新页面

### 在Vue中修改数组

- `API`:
  - `push()`
  - `pop()`
  - `shift()`
  - `unshift()`
  - `splice()`
  - `sort()`
  - `reverse()`
- `Vue.set(target, key, value)`或`vm.$set(target, key, value)`

### 特别注意

- `Vue.set()`和`vm.$set()`不能给`vm`或`vm`的根数据对象添加属性！！！
- 将`Vue`实例中的`data`改为`_data`中的数据及`getter`和`setter`的形式叫做数据劫持

## 收集表单中的数据

- `<input type="text" />`中`v-model`收集的是`value`的值，用户输入的就是`value`值
- `<input type="radio" />`中`v-model`收集的是`value`的值，需要给标签配置`value`值
- `<input type="check" />`中
  - 若没有配置`input`的`value`属性，那么收集的就是`checked`勾选`true`，未勾选`false`
  - 配置`value`属性：
    - `v-model`的初始化是非数组，那么收集的就是`checked`勾选`true`，未勾选`false`
    - `v-model`的初始值是数组，那么收集的就是`value`组成的数组
- `v-model`的三个修饰符
  - `lazy`：失去焦点再收集数据
  - `number`：输入字符串转为有效的数字
  - `trim`：输入首尾的空格过滤

## 过滤器

- 定义：对要显示的数据进行特定格式化后再显示，适用于一些简单逻辑的处理
- 语法：
  - 注册过滤器：`Vue.filter(name, callback)`或`new Vue({filters: {...}})`
  - 使用过滤器：`{{ xxx | 过滤器名 }}`或`v-bind:属性=" xxx | 过滤器名 "`
- 备注：
  - 使用过滤器也可以接收额外参数，多个过滤器之间可以串联
  - 并没有改变原数据，是参数新的对象数据
  - 过滤器不能搭配`v-model`使用
  - 全局过滤器必须在`new Vue({})`创建实例之前定义好

## 指令

> `Vue`模板语法有`2`大类：
>
> - 插值语法：
>   - 功能：用于解析标签体内容
>   - 写法：`{{xxx}}`，`xxx`是`js`表达式，且可以直接读取到`data`中的所有属性
> - 指令语法：
>   - 功能：用于解析标签，包括标签属性、标签体内容、绑定事件等

### 内置指令

- `v-bind`：单向数据绑定，可简写为`:xxx`
- `v-model`：双向数据绑定，完整写法为`v-model:value`
- `v-for`：遍历数组/对象/字符串
- `v-on`：绑定事件监听，可简写为`@xxx`
- `v-if/v-else-if/v-lese`：条件渲染，动态控制`DOM`节点是否存在
- `v-show`：添加渲染，动态控制`CSS`样式展示
- `v-text`：向其所在的标签中插入文本，会替换节点中的内容
- `v-html`：向指定节点中渲染包含`HTML`结构的内容，会替换掉节点中的内容
  - 可以识别`HTML`结构
  - 注意：在网站上动态渲染任何`HTML`结构是非常危险的，容易导致`XSS`攻击，一定要在可信的网站上使用，永远不要用在用户提交上
- `v-cloak`：本质上是一个特殊属性，`Vue`实例创建完毕并接管容器后会删除`v-cloak`属性
  - 使用`css`配合`v-cloak`可以解决网速过慢时页面展示出未经解析的模板代码的问题
- `v-once`：`v-once`所在的节点在初次动态渲染后，就视为静态内容了，以后数据的改变不会引起`v-once`所在结构的更新，可以用于优化性能
- `v-pre`：跳过所在节点的编译过程，可利用它跳过没有使用指令语法、没有使用插值语法的节点，会加快编译

### 自定义指令

#### 定义自定义指令

- 局部指令
  - `this`指向是`window`

```javascript
new Vue({
  directive: {
    // 完整写法
    xxx: {
      // 指令与元素成功绑定时调用
      bind(element, binding) {
        console.log('bing', this)
      },
      // 指令所在元素被插入页面时调用
      inserted(element, binding) {
        console.log('inserted', this)
      },
      // 指令所在的模板被重新解析时调用
      update(element, binding) {
        console.log('update', this)
      }
    },
    // 简写：指令与元素成功绑定时 或 指令所在的模板被重新解析时调用
    xxx(element, binding) {

    }
  }
})
```

- 全局指令

```javascript
// 完整写法
Vue.directive('xxx', {
  // 指令与元素成功绑定时调用
  bind(element, binding) {
    console.log('bing', this)
  },
  // 指令所在元素被插入页面时调用
  inserted(element, binding) {
    console.log('inserted', this)
  },
  // 指令所在的模板被重新解析时调用
  update(element, binding) {
    console.log('update', this)
  }
})
// 简写
Vue.directive('xxx', function(element, binding) {
  element.innerText = binding.value * 10
})
```

- 自定义指令配置对象中常用的三个回调：
  - `bind(){...}`：指令与元素成功绑定时调用
  - `inserted(){...}`：指令所在元素被插入页面时调用
  - `update(){...}`：指令所在模板结构被重新解析时调用
- 备注：
  - 指令定义时不加`v-`，但使用时需要加`v-`
  - 自定义指令名如果是多个单词组合，要使用`aaa-bbb`命名方法，不用使用`aaaBbb`驼峰命名

## Vue声明周期

> 生命周期又名：生命周期回调函数、生命周期函数、生命周期钩子
> 指的是`Vue`在关键时刻帮我们调用的一些特殊名称的函数
> 生命周期函数的名字不可更改，但函数的具体内容是开发者根据需求编写的
> 生命周期函数中的`this`指向的是`Vue`实例对象
