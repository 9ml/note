# Vue3

[toc]

## Vue3简介

- `2020-09-18``Vue`发布了`3.0`版本，代号：`One Piece`海贼王
- 耗时`2`年多、`2600+`次提交、`30+`个`RFC`、`600+`次`PR`、`99`位贡献者
- [Github上的tags地址](https://github.com/vuejs/vue-next/releases/tag/v3.0.0)

### Vue3带来了什么

- 打包大小减少`41%`
- 初次渲染快`55%`，更新渲染快`133%`
- 内存减少`54%`
- ...

### Vue3源码的升级

- 使用`Proxy`替换`Object.defineProperty`实现响应式
- 重写虚拟`DOM`的实现和`Tree-Shaking`
- ...

### 拥抱TypeScript

- `Vue3`可以更好的支持`TypeScript`

### 新的特性

- `Composition API`：组合`API`
  - `setup`配置
  - `ref`与`reactive`
  - `watch`与`watchEffect`
  - `provide`与`inject`
  - ...
- 新的内置组件
  - `Fragment`
  - `Teleport`
  - `Suspense`
- 其他改变：
  - 新的生命周期钩子
  - `data`选项应始终被声明为一个函数
  - 移除`keyCode`支持作为`v-on`的修饰符
  - ...

## 创建Vue3工程

- 创建`Vue3`项目工程共有两种方式

### 使用vue-cli创建

```shell
# 查看 @vue/cli 版本，确保 @vue/vli 版本在 4.5.0 以上
vue --version
# 安装或升级 @vue/cli
npm install -g @vue/cli
# 创建工程
vue create <project-name>
# 进入工程目录
cd <project-name>
# 启动
npm run serve
```

### 使用vite创建

- [官方文档](https://v3.cn.vuejs.org/gulde/installation.html#vite)
- [vite官网](https://vitejs.cn)
- `vite`：新一代前端构建工具
- 优势：
  - 开发环境中，无需打包操作，可以快速的冷启动
  - 轻量快速的热重载`HMR`
  - 真正的按需编译，不再等待整个应用编译完成
- 传统构建与`vite`构建的对比：

![传统构建](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/build-webpack.png)
![vite构建](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/build-vite.png)

- 构建项目

```shell
# 创建工程
npm init vite-app <project-name>
# 进入工程目录
cd <project-name>
# 安装依赖
npm install
# 运行
npm run dev
```

## 常用Composition API

- [常用组合式API](https://v3.cn.vuejs.org/api/composition-api.html)

### 拉开序幕的Setup

#### 理解Setup

- `setup`是`Vue3.0`中一个新的配置项，值为一个函数
- `setup`是所有`Composition API`**表演的舞台**
- 组件中所用到的数据、方法等等均要写在`setup`中
- `setup`函数的两种返回值：
  - 若返回一个对象，则对象中的属性、方法在模板中均可以直接使用 - 重点关注
  - 若返回一个渲染函数，则可以自定义渲染内容 - 了解

#### Setup注意点

- 尽量不要与`Vue2.x`配置混用
  - `Vue2.x`配置`data`、`methods`、`computed`等属性中可以方法到`setup`中的属性和方法
  - 但是`setup`中无法访问到`Vue2.x`配置的`data`、`methods`、`computed`等属性
  - 如果属性和方法重名，优先获取`setup`中的数据
- `setup`不能是一个`async`函数，因为返回值不再是`return`的对象，而是`promise`，模板看不到`return`对象中的属性

### ref函数

- 作用：定义一个响应式的数据
- 语法：

```javascript
import { ref } from 'vue'
setup() {
  // 创建一个包含响应式数据的引用对象（reference对象，简称：ref对象）
  const xxx = ref(initValue)
  // 操作数据
  xxx.value = otherValue
  // 返回
  return {
    xxx
  }
}
// 模板中读取数据，不需要 .value
<div>{{xxx}}</div>
```

- 注意：`ref`接收的数据可以是基本数据类型，也可以是对象（引用）数据类型
  - 基本数据类型：响应式依然是使用`Object.defineProperty()`的`getter`和`setter`
  - 对象数据类型：内部使用了`Vue3.0`中的新函数`reactive`函数

### reactive函数

- 作用：定义一个**对象类型**的响应式数据 => 基本数据类型不要使用`reactive`函数，使用`ref`函数
- 语法：`const 代理对象 = reactive(源对象)`，接收一个对象或数组，返回一个代理对象（`Proxy`的实例对象，简称`Proxy`对象）

```javascript
import { reactive } from 'vue'
setup() {
  // 创建代理对象数据
  const person = reactive({
    name: 'Tom',
    age: 18,
    job: {
      type: 'WEB',
      salary: '30k'
    },
    hobby: ['抽烟', '喝酒', '烫头']
  })
  // 操作数据
  person.name = '9ml'
  person.job.salary = '100k'
  person.hobby[0] = '学习'
  // 返回
  return {
    person
  }
}
// 模板中读取数据
<div>{{person.name}}，{{person.job.salary}}，{{person.hobby[0]}}</div>
```

- `reactive`定义的响应式数据是**深层次的**
- 内部基于`ES6`的`Proxy`实现，通过**代理对象**操作**原对象**内部数据进行操作

### Vue3.0中的响应式原理

#### Vue2.x的响应式原理

- 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截，叫做**数据劫持**
- 数组类型：通过重写更新数组的一系列方法来实现拦截，对数组的变更方法进行了包裹，如：`push`、`unshift`等`API`

```javascript
Object.defineProperty(data, 'count', {
  get() { ... },
  set() { ... }
})
```

- 存在问题：
  - 新增、删除属性界面不会更新
  - 直接通过下标修改数组，界面不会更新
- 解决问题：
  - 新增属性：`this.$set()`
  - 删除属性：`this.$delete()`

#### Vue3.0的响应式原理

- 通过`Proxy`代理：拦截对象中任意属性的变化，包括：属性值的读写、添加、删除等操作
  - [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- 通过`Reflect`反射：对被代理（源）对象的属性进行操作，不会影响后续代码代码运行，对封装框架更加友好
  - [Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

```javascript
new Proxy(data, {
  // 拦截读取属性值
  get(target, propName) {
    return Reflect.get(target, propName)
  },
  // 拦截修改或添加属性值
  set(target, propName, value) {
    Reflect.set(target, propName, value)
  },
  // 拦截删除属性值
  deleteProperty(target, propName) {
    return Reflect.deleteProperty(target, propName)
  }
})
```

### reactive与ref对比

- 从定义数据的角度对比：
  - `ref`用于定义：基本类型数据
  - `reactive`用于定义：对象或数组引用类型数据
  - 备注：`ref`也可以用来定义对象或数组类型数据，它内部会自动通过`reactive`转为代理对象
- 从原理角度对比：
  - `ref`通过`Object.defineProperty()`的`getter`和`setter`数据劫持来实现响应式
  - `reactive`通过使用`Proxy`数据劫持来实现响应式，并通过`Reflect`操作**源对象**内部的数据
- 从使用角度对比：
  - `ref`定义的数据操作时需要`.value`，读取时模板中直接读取，不需要`.value`
  - `reactive`定义的数据操作或读取时都不需要`.value`

### setup的注意点

- `setup`执行的时机：
  - 在`beforeCreate`之前执行一次，`this`是`undefined`
- `setup`的参数：
  - `props`：值为对象，包含组件外部传递过来的数据，且组件内部声明了接收的属性
  - `context`：上下文对象
    - `attrs`：值为对象，包含：组件外部传递过来的，但没有在`props`配置中声明的属性，相当于`this.$attrs`
    - `slots`：收到的插槽内容，相当于`this.$slots`，`Vue3.0`定义命名插槽废弃了`slot="xxx"`，只能使用`v-slot:xxx`
    - `emit`：分发自定义事件的函数，相当于`this.$emit`

### 计算属性computed函数

- `Vue3.0`中的`computed`函数与`Vue2.x`中`computed`配置功能一样
- 示例：

```javascript
import { reactive, computed } from 'vue'
setup() {
  const person = reactive({
    firstName: '9'
    lastName: 'ml'
  })
  // 计算属性简写
  let fullName = computed(() => {
    return `${person.firstName}-${person.lastName}`
  })
  // 计算属性完整写法
  let fullName = computed({
    get() {
      return `${person.firstName}-${person.lastName}`
    },
    set(value) {
      person.firstName = value.split('-')[0]
      person.lastName = value.split('-')[1]
    }
  })
}
```

### watch函数
