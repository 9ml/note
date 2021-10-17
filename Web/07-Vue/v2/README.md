# Vue-v1

[toc]

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

## Vue生命周期

> 生命周期又名：生命周期回调函数、生命周期函数、生命周期钩子
> 指的是`Vue`在关键时刻帮我们调用的一些特殊名称的函数
> 生命周期函数的名字不可更改，但函数的具体内容是开发者根据需求编写的
> 生命周期函数中的`this`指向的是`Vue`实例对象

[生命周期图解](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/lifecycle.png)

### 生命周期各个阶段

- 将要创建 ==> 调用`beforeCreate`函数
- 创建完成 ==> 调用`created`函数
- 将要挂载 ==> 调用`beforeMount`函数 ==> 重要的钩子函数
- 挂载完成 ==> 调用`mounted`函数
- 将要更新 ==> 调用`beforeUpdate`函数
- 更新完成 ==> 调用`updated`函数
- 将要销毁 ==> 调用`beforeDestroy`函数 ==> 重要的钩子函数
- 销毁完毕 ==> 调用`destroyed`函数

### 总结

- 常用的生命周期钩子函数：
  - `mounted`：发送`ajax`请求、启动定时任务、绑定自定义事件、订阅消息等初始化操作
  - `beforeDestroy`：清除定时器、解绑自定义事件、取消订阅消息等收尾工作
- 关于销毁`Vue`实例：
  - 销毁后借助`Vue`开发者工具看不到任何信息
  - 销毁后自定义事件会失效，但原生`DOM`事件依然有效
  - 一般不会在`beforeDestroy`中操作数据，即使操作数据也不会再触发更新流程

## 组件

### 理解组件

#### 传统方式编写应用

![传统方式编写应用](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/components-a.jpg)

- 存在的问题：
  - 依赖关系混乱，不好维护
  - 代码复用率不高

#### 组件方式编写应用

> 用来实现局部功能效果的代码集合

![组件方式编写应用](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/components-b.jpg)
![组件方式编写应用](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/components-c.jpg)

- 优点：
  - 复用代码
  - 简化项目编码
  - 提高运行效率

- 模块化：
  - 当应用中的`JS`都以模块来编写，那这个应用就是一个模块化应用
- 组件化：
  - 当应用中的功能都是多组件的方式编写的，那这个应用就是一个组件化的应用

### 使用组件

- `Vue`中使用组件的三个步骤：
  - 定义组件（创建组件）
  - 注册组件
  - 使用组件（写组件标签）

#### 定义组件

- 使用`Vue.extend(options)`创建组件，其中`options`和`new Vue(options)`时传入的那个`options`几乎一致，区别如下：
  - 不需要`el`配置项，因为最终所有组件都要经过一个`Vue`实例来管理，由实例中的`el`来决定服务于哪个容器
  - `data`必须写成函数，避免组件被复用时，数据存在引用关系
  - 使用`template`可以配置组件结构

#### 注册组件

- 局部注册：在`new Vue(options)`时传入`components`选项
- 全局注册：使用`Vue.component('组件名', 组件)`

#### 编写组件标签

```html
<hello></hello>
```

#### 注意点

- 关于组件名：
  - 一个单词组成：
    - 第一种写法：`user`
    - 第二种写法：`User`
  - 多个单词组成：
    - 第一种写法：`my-user`
    - 第二种写法：`MyUser`，需要`Vue`脚手架支持
  - 备注：
    - 组件名尽可能回避`HTML`中已有的元素名称，例如：`p、h1、H1`等都不可以使用
    - 可以使用`name`配置项指定组件在开发者工具中呈现的名字
- 关于组件标签：
  - 第一种写法：`<user></user>`
  - 第二种写法：`<User></User>`
  - 第三种写法：`<User />`，注意不使用脚手架时，这种写法会导致后续组件不能渲染
- 简写方式：
  - `const app = Vue.extend(options)`可简写为：`const app = options`

### 非单文件组件

> 一个组件中包含多个组件

### 单文件组件

> 一个组件中只包含一个组件

### VueComponent

- 组件本质是一个名为`VueComponent`的构造函数，且不是开发者定义的，是`Vue.extend`生成的
- 开发者只需写`<user></user>`或`<user />`，`Vue`解析时会帮我们创建`user`组件的实例对象，及执行：`new VueComponent(options)`
- 特别注意：每次调用`Vue.extend`时，返回的都是一个全新的`VueComponent`
- 关于`this`指向：
  - 组件配置中`data`函数、`methods`中的函数、`watch`中的函数、`computed`中的函数的`this`均是`VueComponent`实例对象
  - `new Vue`中`data`函数、`methods`中的函数、`watch`中的函数、`computed`中的函数的`this`均是`Vue`实例对象
- `VueComponent`的实例对象，简称`vc`也可成为组件实例对象
- `Vue`的实例对象，简称`vm`。

### 一个重要的内置关系

> 让组件实例对象`vc`可以访问到`Vue`原型上的属性、方法

```javascript
VueComponent.prototype.__proto__ === Vue.prototype
```

[图示](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/VueComponent.jpg)

## 脚手架

[详看脚手架目录](./4.Vue脚手架/README.md)

## ref属性

- 被用来给元素或子组件注册引用信息，可理解为`id`的替代者
- 应用在`HTML`标签上获取的是真实`DOM`元素
- 应用在组件标签上是组件的实例对象`vc`
- 使用方式：
  - 标识：`<h1 ref="title">Hello World</h1>`
  - 获取：`this.$refs.title`

## props属性

> 功能：让组件接收外部传过来的数据
> `props`属性优先级高于`data`

### 传递数据

```template
<Demo name="xxx" age="yyy" />
```

### 接收数据

- 第一种方式：只接收数据

```javascript
props: ['name', 'age']
```

- 第二种方式：接收并限制数据类型

```javascript
props: {
  name: String,
  age: Number
}
```

- 第三中方式：接收并限制数据类型、默认值、必要性

```javascript
props: {
  name: {
    type: String,
    required: true // 必传
  },
  age: {
    type: Number,
    default: 99 // 默认值
  }
}
```

### props注意

- `props`是只读的，`Vue`底层会监测你对`props`的修改，如果进行了修改会发出警告
- 若业务需求需要修改，可以复制`props`的内容到`data`中，然后去修改`data`中的数据

## mixin混合属性

> `mixin`：混合、混入

- 功能：可以把多个组件共用的配置提取成一个混入对象

### 使用混合

- 定义混合：

```javascript
export const show = {
  data() {...},
  methods: {...}
}
```

- 使用混合

```javascript
import { xxx } from './mixin'
// 全局混入
Vue.mixin(xxx)
// 局部混入
mixin: [xxx]
```

## 插件

- 功能：用于增强`Vue`
- 本质：包含`install`方法的一个对象，`install`的第一个参数是`Vue`，后面的参数是插件使用者传递的数据
- 定义插件：

```javascript
export default {
  install(Vue) {
    // 添加全局过滤器
    Vue.filter(...)
    // 添加全局指令
    Vue.directive(...)
    // 配置全局混入
    Vue.mixin(...)
    // 添加实例方法
    Vue.prototype.$methods = () => {...}
  }
}
```

- 使用插件

```javascript
// 引入插件
import plugins from './plugins'
// 使用插件
Vue.use(plugins)
```

## scoped样式属性

- 功能：让样式局部生效，防止冲突
- 写法：

```html
<style scoped>
  ...
</style>
```

## TodoList案例

### 组件编码流程

- 拆分静态组件：组件要按照功能点拆分，命名不要与`HTML`元素冲突
- 实现动态组件：考虑好数据的存放位置，数据是单个组件还是多个组件使用
  - 单个组件：数据放在自身组件即可
  - 多个组件：数据放在他们共同的父组件上 => 状态提升
- 实现交互：从绑定事件开始

### props适用情况

- 父组件 => 子组件通信
- 子组件 => 父组件通信 => 需要父给子一个方法，通过回调传参方式

### 使用v-model时注意

- `v-model`绑定的值不能是通过`props`传递过来的值，因为`props`中的数据是不能被修改的
- `props`传过来的数据是引用类型时，修改其中属性的值`Vue`不会报错，但是不推荐这种做

## WebStorage

- 浏览器端通过`window.sessionStorage`和`window.localStorage`属性来实现本地存储机制
- 存储内容大小一般在`5MB`左右

### 相关API

- `.setItem(key, value)`：该方法接收一个键和值作为参数，会把键值对添加到存储中，若键名已存在则更新对应的数据
- `.getItem(key)`：该方法接收一个键名作为参数，返回键名对应的值
- `.removeItem(key)`：该方法接收一个键名作为参数，并把该键名从存储中删除
- `.clear()`：该方法会清空存储中的所有数据

### WebStorage注意点

- `sessionStorage`存储的内容会随着浏览器窗口关闭而清空
- `localStorage`存储的内容需要手动清除才会消失，而且可跨窗口读取
- `.getItem(key)`如果`key`的值不存在，返回值为`null`

## 组件自定义事件

- 一种组件间的通信方式，适用于：子组件 => 父组件

### 使用场景

- `A`是父组件，`B`是子组件，`B`组件需要向`A`组件传递数据，就要在`A`组件中给`B`组件绑定自定义事件，事件的回调在**父组件**中

### 绑定自定义事件

- 第一种方式：
  - 在父组件中给子组件实例对象绑定`show`自定义事件，并定义事件的触发回调方法
  - 子组件中通过`this.$emit('show', xxx)`向父组件中传参，参数可多个

```html
<!-- 父组件 -->
<template>
  <Demo @show="getMsg" />
</template>
<script>
  new Vue({
    methods: {
      getMsg(msg) {
        console.log(msg)
      }
    }
  })
</script>
<!-- 子组件 -->
<template>
  <button @click="sendMsg">向父组件传参</button>
</template>
<script>
  new Vue({
    data() {
      return {
        msg: 'Hello World'
      }
    }
    methods: {
      sendMsg() {
        this.$emit('show', this.msg)
      }
    }
  })
</script>
```

- 第二种方式:
  - 在父组件中通过`ref`获取子组件的实例对象，并在`mounted`生命周期中通过`$on`绑定自定义事件触发函数
  - 子组件中通过`this.$emit('show', xxx)`向父组件中传参，参数可多个

```html
<!-- 父组件 -->
<template>
  <Demo ref="demo" />
</template>
<script>
  new Vue({
    mounted() {
      this.$refs.demo.$on('show', this.getMsg)
    },
    methods: {
      getMsg(msg) {
        console.log('msg')
      }
    }
  })
</script>
<!-- 子组件 -->
<template>
  <button @click="sendMsg">向父组件传参</button>
</template>
<script>
  new Vue({
    data() {
      return {
        msg: 'Hello World'
      }
    }
    methods: {
      sendMsg() {
        this.$emit('show', this.msg)
      }
    }
  })
</script>
```

### 组件自定义事件扩展

- 若想让自定义事件只触发一次，可以使用`@show.once="getMsg"`或`this.$refs.demo.$once('show', this.getMsg)`绑定方法
- 触发自定义事件：`this.$emit('xxx', 数据)`
- 解绑自定义事件：
  - 解绑单个：`this.$off('xxx')`
  - 解绑多个：`this.$off(['xxx', 'yyy'])`
  - 解绑全部：`this.$off()`
- 组件上也可以绑定原生`DOM`事件，需要加事件修饰符`native`，如：`<Demo @click.native="xxx" />`
- 注意：通过`this.$refs.demo.$on('show', 回调)`绑定自定义事件时，回调要么调用`methods`中的方面，要么使用箭头函数，否则回调函数中的`this`指向是组件的实例对象

## 全局事件总线

> `GlobalEventBus`：一种组件间通信的方式，适用于**任意组件间通信**

### 安装全局事件总线

```javascript
// main.js
new Vue({
  ...
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线，$bus 就是当前应用的 vm
  }
  ...
})
```

### 使用事件总线

- 接收数据：`A`组件想接收数据，则在`A`组件中给`$bus`绑定自定义事件，事件的回调在`A`组件中

```javascript
mounted() {
  this.$bus.$on('xxx', (data) => { ... })
}
```

- 提供数据

```javascript
methods: {
  doSomething() {
    this.$bus.$emit('xxx', 数据)
  }
}
```

- 图示

![全局事件总线](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/$bus.png)

### 全局事件总线注意项

- 在`beforeDestroy`钩子函数中用`$off`去解绑**当前组件所用到的事件**：

```javascript
beforeDestroy() {
  this.$bus.$off('xxx')
}
```

## 消息订阅与发布

> 一种组件间的通信方式，适用于**任意组件间通信**
> 需要借助第三方库实现

### 消息订阅与发布使用步骤

- 安装`pubsub-js`第三方库：

```shell
npm i pubsub-js
```

- 消息订阅：
  - 在需要订阅消息的页面引入`pubsub-js`
  - 通过`pubsub.subscribe('msgName', (name, data) => { ... })`订阅消息，其中回调中有两个参数
    - `name`：订阅消息的名称
    - `data`：订阅消息发布的数据
  - 注意：最好在组件销毁前取消订阅，需要通过`id`来取消订阅
  - 示例：

```javascript
import pubsub from 'pubsub-js'
export default {
  mounted() {
    this.pubId = pubsub.subscribe('msgName', (name, data) => { ... })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.punId)
  }
}
```

- 消息发布：
  - 在需要发布消息的页面引入`pubsub-js`
  - 通过`pubsub.publish('msgName', data)`发布消息
  - 示例：

```javascript
export default {
  methods: {
    doSomething() {
      pubsub.publish('msgName', this.msg)
    }
  }
}
```

## $nextTick函数

- 作用：在下一次`DOM`更新结束后执行其指定的回调
- 语法：`this.nextTick(回调函数)`
- 当改变数据后，要基于更新后的`DOM`进行某些操作时，要在`nextTick`所指定的回调函数中执行

## 过渡与动画

- 作用：在插入、更新或移除`DOM`元素时，在合适的时候给元素添加样式类名
- 图示：

![动画与过渡](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/transition.png)

- [官方示例](https://cn.vuejs.org/v2/guide/transitions.html)
- 使用第三方动画库

```shell
npm i animate.css
```

## Vue脚手架配置代理

### 方式一

- 在`vue.config.js`中添加配置：

```javascript
module.exports = {
  devServer: {
    proxy: 'https://www.baidu.com'
  }
}
```

- 说明：
  - 优点：配置简单，请求资源时直接发给前端即可
  - 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
  - 工作方式：
    - 当请求了前端已存在的资源时，会直接从前端拿去数据，不会转发给服务器
    - 当请求了前端不存在的资源时，那么该请求会转发给服务器
    - **优先匹配前端资源**

### 方式二

- 在`vue.config.js`中添加配置：

```javascript
devServer: {
  proxy: {
    '/api': {
      target: 'https://www.baidu.com',
      pathRewrite: {'^/api': ''}, // 根据正则匹配路径并重新
      ws: true, // 支持 websocket，默认 true
      changeOrigin: true // 控制请求头中的 host 值，默认 true
    },
    '/demo': {
      target: 'https://www.jd.com',
      pathRewrite: {'^/demo': ''},
      ws: true,
      changeOrigin: true
    }
  }
}
```

- 说明：
  - 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
  - 缺点：配置略微繁琐，请求资源时必须加前缀

## Vue-resource

- 安装

```shell
npm i vue-resource
```

- `main.js`配置

```javascript
// 引入
import vueResource from 'vue-resource'
// 使用
Vue.use(vueResource)
```

- 使用

```javascript
getData() {
  this.$http.get('https://www.xxx.com').then(res => {
    console.log('请求成功', res)
  }, err => {
    console.log('请求失败', err)
  })
}
```

## 插槽

- 作用：让父组件可以想子组件指定位置插入`HTML`结构，也是一种组件间的通信方式，适用于：`父 => 子`
- 分类：
  - 默认插槽
  - 具名插槽
  - 作用域插槽

### 默认插槽

```html
<!-- 父组件中 -->
<Demo>
  <div>HTML结构</div>
</Demo>

<!-- 子组件中 -->
<template>
  <div>
    <slot>当组件没有传递具体的结构时展示</slot>
  </div>
</template>

```

### 具名插槽

```html
<!-- 父组件中 -->
<Demo>
  <template slot="header">
    <div>HTML结构1</div>
  </template>
  <template v-slot:footer>
    <div>HTML结构2</div>
  </template>
</Demo>

<!-- 子组件中 -->
<template>
  <div>
    <slot name="header">当组件没有传递具体的结构时展示</slot>
    <slot name="footer">当组件没有传递具体的结构时展示</slot>
  </div>
</template>
```

### 作用域插槽

- 说明：数据在子组件中，但根据数据生成的结构要在父组件中决定，需要在父组件中获取子组件中的数据进行插槽内容渲染
- 可结合具名插槽使用

```html
<!-- 父组件中 -->
<Demo>
  <template scope="data">
    <div>{{data.msg}}</div>
  </template>
</Demo>
<Demo>
  <template scope="{msg}">
    <div>{{msg}}</div>
  </template>
</Demo>
<Demo>
  <template slot-scope="{msg}">
    <div>{{msg}}</div>
  </template>
</Demo>

<!-- 子组件中 -->
<template>
  <div>
    <slot :msg="data">当组件没有传递具体的结构时展示</slot>
  </div>
</template>
```

## Vuex

- 概念：专门在`Vue`中实现**集中式状态、数据管理**的一个`Vue`插件，对`Vue`应用中多个组件的共享状态进行集中式的管理：**读、写**
- 一种组件间通信的方式，适用于任意组件间通信
- [Github](https://github.com/vuejs/vuex)
- 图示：

![Vuex](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/vuex.jpg)

### Vuex使用时机

- 多个组件依赖同一状态
- 来自不同组件的行为需要变更同一状态

### Vuex工作原理

- `Vuex`分为三部分：
  - `Actions`：用来处理异步回调获取数据的模块，如调用后端`API`，如果没有异步操作可跳过`Actions`直接调用`Mutations`中的方法处理数据
  - `Mutations`：用来处理`State`中数据的模块
  - `State`：用来存储数据的模块，类型组件中的`data`属性

![Vuex](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/vuex.png)

### 搭建Vuex

- 安装`Vuex`:

```shell
npm i vuex
```

- 应用`Vuex`并创建`store`：
  - 需要在`Vue.use(Vuex)`应用`Vuex`之后才能创建`store`实例，且模块化会将`import`语句提前，所有没有在`main.js`中应用`Vuex`
  - 在`src`目录新建`store`文件夹，并在文件夹中新建`index.js`文件，并编写如下内容：

```javascript
// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 应用 Vuex
Vue.use(Vuex)
// 创建 actions => 响应组件中的动作
const actions = { ... }
// 创建 mutations => 操作 state 中的数据
const mutations = { ... }
// 创建 state => 存储数据
const state = { ... }
// 创建并导出 store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
```

- 在`main.js`中将`store`挂载到`Vue`中
  - 注意：应用`Vuex`与创建`store`实例的顺序问题，不用在`main.js`中应用`Vuex`，因为`import`的`store`会先执行

```javascript
import store from './store'
new Vue({
  el: '#app',
  store
})
```

### Vuex基本使用

- 组件中读取`Vuex`中的数据：
  - `$store.state.value`
- 组件中修改`Vuex`中的数据：
  - `$store.dispatch('actions中的方法名', 参数数据)`
  - `$store.commit('mutations中的方法名', 参数数据)`
- 若没有网络请求或其他业务逻辑，组件中可以越过`actions`，直接使用`commit`调用`mutations`中的方法

- 组件中示例代码：

```javascript
export default {
  data: {
    n: 1
  },
  methods: {
    add() {
      this.$store.commit('addNormal', this.n)
    },
    addByWait() {
      this.$store.dispatch('addWait', this.n)
    }
  }
}
```

- `store`中示例代码：

```javascript
// 创建并导出 store
export default new Store({
  actions: {
    // 响应动作调用操作 mutations 中的事件
    addWait() {
      setTimeout(() => {
        context.commit('addNormal', value)
      }, 1000)
    }
  },
  mutations: {
    // 执行事件
    addNormal(state, value) {
      state.sum =+ value
    }
  },
  state: {
    sum: 0
  }
})
```

### Getters

- 概念：用来加工`state`中的数据，相似于组件中的`computed`计算属性，当`state`中的数据需要加工时使用
- 在`store`中配置`getters`:

```javascript
export default new Store({
  getters: {
    newSum(state) {
      return state.sum * 10
    }
  }
})
```

- 组件中读取数据：`this.$store.getters.newSum`

### Vuex中Map方法的使用

- 注意：使用以下`map`方法需要先在组件中引入：`import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'`

#### mapState方法

- 用于映射`state`中的数据为计算属性，共有两种写法：
  - 对象写法：`{key: value}`形式，`key`和`value`一致或不一致时都可使用，页面中使用`key`获取数据
  - 数组写法：`['xxx', 'yyy']`，数组中的元素要与`state`中的属性名一致，页面中使用数组中元素获取数据
- 示例：

```javascript
computed: {
  // 对象写法
  ...mapState({getName: 'name', getAge: 'age'})
  // 数组写法
  ...mapState(['name', 'age'])
}
```

#### mapGetters方法

- 用于映射`getters`中的数据为计算属性，共有两种写法：
  - 对象写法：与上述`mapState`方法一致
  - 数组写法：与上述`mapState`方法一致
- 示例：

```javascript
computed: {
  // 对象写法
  ...mapGetters({newName: 'name', newAge: 'age'})
  // 数组写法
  ...mapGetters(['name', 'age'])
}
```

#### mapActions方法

- 用于生成与`actions`对话的方法，即包含`$store.dispatch(xxx)`的函数，共有两种写法：
  - 对象写法：`{key: value}`形式，`key`和`value`一致或不一致时都可使用，其中`key`用于页面中的绑定事件处理函数
  - 数组写法：`['xxx', 'yyy']`，数组中的元素要与`state`中的属性名一致，数组中元素用于页面中的绑定事件处理函数
- 注意：如需传参要在页面绑定事件时传递参数，如`<button @click="getName(xxx)">获取名字</button>`，否则参数是默认的事件对象`$event`
- 示例：

```javascript
methods: {
  // 对象写法
  ...mapActions({getName: 'getUserName', getAge: 'getUserAge'})
  // 数组写法
  ...mapActions(['getName', 'getAge'])
}
```

#### mapMutations

- 用于生成与`mutations`对话的方法，即包含`$store.commit(xxx)`的函数，共有两种写法：
  - 对象写法：与上述`mapActions`方法一致
  - 数组写法：与上述`mapActions`方法一致
- 传参：与上述`mapActions`方法一致
- 示例：

```javascript
methods: {
  // 对象写法
  ...mapMutations({update: 'handleUpdate', del: 'handleDel'})
  // 数组写法
  ...mapMutations(['update', 'del'])
}
```

### Vuex模块化

- 目的：让代码更好维护，让多种数据分类更加明确

#### 模块化使用步骤

- 在`store`文件夹新建`modules`文件夹
- 在`modules`文件夹中新建不同模块的`.js`文件
- 在`.js`文件中分别配置`actions`、`mutations`和`state`等并导出模块，需要开启命名空间：`namespaced: true`
- 在`store/index.js`文件中分别引入模块，并配置到`modules`对象中
- 代码示例：

```javascript
// store/modules/count.js 文件
export default {
  namespaced: true,
  actions: {
    addWait(context, value) {
      setTimeout(() => {
        context.commit('ADD', value)
      }, 1000)
    }
  },
  mutations: {
    ADD(state, value) {
      state.sum += value
    }
  },
  state: {
    sum: 0
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}

// store/index.js 文件
import Vue from 'vue'
import Vuex from 'vuex'

import count from './modules/count.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // count: count
    count
  }
})

```

#### 使用不同模块中的方法

- 组件中获取模块`count`中`state`的数据

```javascript
computed: {
  // 直接获取
  sum() {
    return this.$store.state.count.sum
  }
  // 使用 mapState 获取
  ...mapState('count', ['sum'])
}
```

- 组件中获取模块`count`中`getters`的数据

```javascript
computed: {
  // 直接获取
  bigSum() {
    return this.$state.getters('count/bigSum')
  }
  // 使用 mapGetters 获取
  ...mapGetters('count', [' '])
}
```

- 组件中调用模块`count`中`actions`的方法

```javascript
methods: {
  // 直接调用
  handleAddWait() {
    this.$store.dispatch('count/addWait')
  }
  // 使用 mapActions 调用
  ...mapActions('count', { handleAddWait: 'addWait' })
}
```

- 组件中调用模块`count`中`mutations`的方法

```javascript
methods: {
  // 直接调用
  handleAdd() {
    this.$store.commit('count/ADD')
  }
  // 使用 mapMutations 调用
  ...mapMutations('count', { handleAdd: 'ADD' })
}
```

## 路由

- 现实生活中的路由：

![生活中的路由](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/router-live.png)

- `Vue`中的路由：
  - 为了完成`SPA(single page web application)`单页面应用

![Vue中的路由](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/router-vue.png)

### 理解

#### Vue-router

- `Vue`的一个插件库，专门用来实现`SPA`应用

#### SPA应用

- 单页面`WEB`应用（`single page web application`）：`SPA`
- 整个应用只有**一个完整的页面**
- 点击页面中的导航链接**不会刷新页面**，只会做页面的**局部更新**
- 数据需要通过`AJAX`请求获取

#### 路由的理解

- 路由：一个路由就是一组映射关系：`key-value`
  - `key`：路由
  - `value`是`function`或`component`

#### 路由的分类

- 后端路由：
  - 理解：`value`是`function`，用于处理客户端提交的请求
  - 工作流程：服务器接收到一个请求时，根据**请求路径**找到匹配的**函数**来处理请求，返回响应数据
- 前端路由：
  - 理解：`value`是`component`，用于展示页面
  - 工作流程：当浏览器的路径改变时，对应的组件就会展示1111
