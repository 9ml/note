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
  - 注意：可以配合`Suspense`和异步引入使用`Promise`

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

- `Vue3.0 watch`函数与`Vue2.x watch`配置功能相同
- 两个小坑：
  - 监视`reactive`定义的响应式数据时：`oldValue`无法正确获取，强制开启了**深度监视**且`deep`配置无效
  - 监视`reactive`定义的响应式数据中对象的某个属性时：`deep`有效且需配置`deep: true`才可监视
- 共有`6`中情况

#### watch函数监视`ref`定义的一个响应式数据

```javascript
import { ref, watch } from 'vue'
setup() {
  let sum = ref(0)
  watch(sum, (newValue, oldValue) => {
    console.log('sum changed:', newValue, oldValue)
  })
  return {
    sum
  }
}
```

#### watch函数监视`ref`定义的多个响应式数据

- `immediate: true`表示初始化自动监视

```javascript
import { ref, watch } from 'vue'
setup() {
  let sum = ref(0)
  let msg = ref('Hello World')
  watch([sum, msg], (newValue, oldValue) => {
    console.log('sum or msg changed:', newValue, oldValue)
  }, {immediate: true})
  return {
    sum,
    msg
  }
}
```

#### watch函数监视`reactive`定义的响应式数据-全部属性

- 注意：
  - 此处无法获得正确的`oldValue`
  - 强制开启了深度监视且`deep`配置无效

```javascript
import { reactive, watch } from 'vue'
setup() {
  let person = {
    name: 'Tom',
    age: 18,
    job: {
      j1: {
        salary: 30
      }
    }
  }
  watch(person, (newValue, oldValue) => {
    console.log('person changed:', newVal, oldVal)
  })
  return {
    person
  }
}
```

#### watch函数监视`reactive`定义的响应式数据-某个属性

- 注意：
  - 此处可以获得正确的`oldValue`
  - 强制开启了深度监视且`deep`配置无效

```javascript
import { reactive, watch } from 'vue'
setup() {
  let person = {
    name: 'Tom',
    age: 18,
    job: {
      j1: {
        salary: 30
      }
    }
  }
  watch(() => person.age, (newValue, oldValue) => {
    console.log('person.age changed:', newVal, oldVal)
  })
  return {
    person
  }
}
```

#### watch函数监视`reactive`定义的响应式数据-多个属性

- 注意：
  - 此处可以获得正确的`oldValue`
  - 强制开启了深度监视且`deep`配置无效

```javascript
import { reactive, watch } from 'vue'
setup() {
  let person = {
    name: 'Tom',
    age: 18,
    job: {
      j1: {
        salary: 30
      }
    }
  }
  watch([() => person.name, () => person.age], (newValue, oldValue) => {
    console.log('person.name or person.age changed:', newVal, oldVal)
  })
  // 或
  watch(() => [person.name, person.age], (newValue, oldValue) => {
    console.log('person.name or person.age changed:', newVal, oldVal)
  })
  return {
    person
  }
}
```

#### watch函数监视`reactive`定义的响应式数据-对象中的某个属性

- 注意：
  - 此处可以获得正确的`oldValue`
  - 强制开启了深度监视且`deep`配置有效，且不配置`deep: true`无法监视

```javascript
import { reactive, watch } from 'vue'
setup() {
  let person = {
    name: 'Tom',
    age: 18,
    job: {
      j1: {
        salary: 30
      }
    }
  }
  watch(() => person.job, (newValue, oldValue) => {
    console.log('person.job changed:', newVal, oldVal)
  }, {immediate: true, deep: true})
  return {
    person
  }
}
```

#### watch函数监视`ref`定义的基本类型与对象类型响应式数据时`.value`的问题

- `ref`定义的基本类型数据发生改变时是`.value`属性的变化，`watch`函数可以直接监视到，且`.value`表示具体的值，所以监视时不要使用`.value`
- `ref`定义的对象类型数据发生变化时是`.value`中的`Proxy`中的属性变化，`watch`函数监视不到，所以需要加上`.value`表示监视`Proxy`中的属性，或不使用`.value`直接开启`deep: true`深度监视

```javascript
import { ref, watch } from 'vue'
setup() {
  let sum = ref(0)
  let person = ref({
    name: 'Tom',
    age: 18
  })
  // ref 基本类型的数据 不需要 .value
  watch(sum, (newValue, oldValue) => {
    console.log('sum changed:', newValue, oldValue)
  })
  // ref 对象类型的数据 需要 .value
  watch(person.value, (newValue, oldValue) => {
    console.log('person changed:', newValue, oldValue)
  })
  // ref 对象类型的数据 需要开启深度监视
  watch(person, (newValue, oldValue) => {
    console.log('person changed:', newValue, oldValue)
  }, { deep: true })

  return {
    sum,
    person
  }
}
```

### watchEffect函数

- `watch`：既要指定监视的属性，也要指定监视的回调
- `watchEffect`：不用指定监视的属性，监视的回调中用到了哪个属性就监视哪个属性
- `watchEffect`类似于`computed`，不同点：
  - `computed`注重计算出来的值，即回调函数的返回值，所有必须写返回值
  - `watchEffect`注重的是过程，即回调函数的函数体，所以不用写返回值
- 示例：

```javascript
import { ref, reactive, watchEffect } from 'vue'
setup() {
  let sum = ref(0)
  let person = reactive({
    name: 'Tom',
    age: 18
  })
  // watchEffect 所指定的回调中用到的数据只要发生变化，则重新执行回调
  watchEffect(() => {
    const test1 = sum.value
    const test2 = person.name
    console.log('watchEffect配置的回调执行了')
  })
  return {
    sum,
    person
  }
}
```

### 生命周期

- `Vue3`生命周期图示：

![Vue3生命周期](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/lifecycle-Vue3.svg)

#### 配置项的形式使用生命周期

- `Vue3.0`中可以继续使用`Vue2.x`中的生命周期钩子，但有两个被更名：
  - 销毁前：`beforeDestroy` => 卸载前：`beforeUnmount`
  - 销毁后：`destroyed` => 卸载后：`unmounted`
- 示例：

```javascript
export default {
  name: 'Demo',
  setup() {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
```

#### 组合式API的形式使用生命周期

- `Vue3`也提供了`Composition API`形式的生命周期钩子，与`Vue2.x`中钩子对应关系如下：
  - `beforeCreate` => `setup()`
  - `created` => `setup()`
  - `beforeMount` => `onBeforeMount`
  - `mounted` => `onMounted`
  - `beforeUpdate` => `onBeforeUpdate`
  - `updated` => `onUpdated`
  - `beforeUnmount` => `onBeforeUnmount`
  - `unmounted` => `onUnmounted`
- 注意：`Composition API`形式的生命周期钩子比配置项形式的执行时机更早，优先级更高
- 示例：

```javascript
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
  setup() {
    onBeforeMount(() => { ... })
    onMounted(() => { ... })
    onBeforeUpdate(() => { ... })
    onUpdated(() => { ... })
    onBeforeUnmount(() => { ... })
    onUnmounted(() => { ... })
  }
}
```

### 自定义hook函数

- `hook`：本质上是一个函数，把`setup`函数中使用的`Composition API`进行了封装，类似于`Vue2.x`中的`mixin`
- 优势：复用代码，让`setup`中的逻辑更清晰易懂
- 示例：

```javascript
// hooks/usePoint.js
import { reactive, onMounted, onBeforeUnmount } from 'vue'
export default function() {
  // 数据
  let point = reactive({
    x: 0,
    y: 0
  })
  // 方法
  let savePoint = (e) => {
    point.x = e.pageX
    point.y = e.pageY
  }
  // 生命周期
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })
  return point
}

// Demo.vue
import { ref } from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let point = usePoint()
    return {
      sum,
      point
    }
  }
}
```

### toRef

- 作用：创建一个`ref`对象，其`value`值指向另一个对象中的某个属性
- 语法：`const name = toRef(person, 'name')`
- 应用：要将响应式对象中的某个属性单独提供给外部使用
- 扩展：`toRefs`与`toRef`功能一致，`toRefs`可以批量创建多个`ref`对象
- 示例：

```javascript
import { reactive, toRef, toRefs } from 'vue'
export default {
  setup() {
    let person = reactive({
      name: 'Tom',
      age: 18,
      job: { j1: { salary: 20 } }
    })
    ...
    return {
      name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary')

      ...toRefs(person)
    }
  }
}
```

## 其他Composition API

### shallRef与shallReactive

- `shallRef`：只处理基本数据类型的响应式，不进行对象的响应式处理
- `shallReactive`：只处理对象最外层属性的响应式，浅响应式
- 使用时机：
  - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换时，使用`shallRef`
  - 如果有一个对象数据，结构比较深但变化时只是外层属性变化时，使用`shallReactive`

### readonly与shallReadonly

- `readonly`：让一个响应式数据变为只读的，数据中的任何属性都不能更改，深只读
- `shallReadonly`：让一个响应式数据变为只读的，数据中多次对象可以更改，浅只读
- 应用场景：不希望数据被修改时使用

### toRaw与markRaw

- `toRaw`：将一个由`reactive`生成的**响应式对象**转为普通对象
  - 使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
  - 注意：由`ref`生成的基本类型数据无法转换
- `markRaw`：标记一个对象，使其永远不会再成为响应式对象
  - 有些值不应该被设置为响应式的，如复杂的第三方类库等
  - 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能

### customRef自定义ref

- 作用：创建一个自定义的`ref`，并对其依赖项跟踪和更新触发进行显式控制
- 实例：

```javascript
  import { ref, customRef } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 自定义 ref
      const myRef = (value, delay) => {
        let timer
        return customRef((track, trigger) => {
          return {
            get() {
              console.log(`监听到从myRef中读取了数据，返回了${value}`)
              track() // 通知 Vue 追踪数据的变化（在 return 之前提前告知 getter 这个 value 是有用的）
              return value
            },
            set(newValue) {
              console.log(`监听到从myRef中修改了数据，值为${newValue}`)
              clearTimeout(timer)
              timer = setTimeout(() => {
                value = newValue
                trigger() // 通知 Vue 去重新解析模板
              }, delay)
            }
          }
        })
      }
      // let keywords = ref('Hello') // 使用 Vue 提供的 ref
      let keywords = myRef('Hello', 500) // 使用自定义的 ref
      return {
        keywords
      }
    }
  }
```

### provide与inject

- 作用：实现**祖孙/跨级组件间**通信
- 方式：父组件有一个`provide`选项来提供数据，后代组件有一个`inject`选项来开始使用这些数据
- 图示：

![provide与inject](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/components_provide.png)

- 示例：

```javascript
// 父组件
import { provide, reactive, toRefs } from 'vue'
import Child from './components/Child'
export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    let car = reactive({ name: '奔驰', price: '50W' })
    provide('car', car) // 给自己的后代组件传递数据
    return { ...toRefs(car) }
  }
}

// 后代组件
import { inject } from 'vue'
export default {
  name: 'Son',
  setup() {
    let car = inject('car')
    return { car }
  }
}
```

### 响应式数据的判断

- `isRef`：检查一个值是否为一个`ref`对象
- `isReactive`：检查一个对象是否是由`reactive`创建的响应式代理
- `isReadonly`：检查一个对象是否是由`readonly`创建的只读代理
- `isProxy`：检查一个对象是否是由`reactive`或者`readonly`方法创建的代理

## Composition API的优势

### Options API存在的问题

- 使用传统`Options API`配置项`API`时，新增或者修改一个需求，就需要分别在`data/methods/computed`等配置项里修改
- 图示：

![Options API存在的问题](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/Vue-options-api-1.image)
![Options API存在的问题](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/Vue-options-api-2.image)

### Composition API的优点

- 使用`Composition API`组合式`API`可以更加优雅的组织我们的代码、函数等，让相关功能的代码更加有序的组织在一起
- 图示：

![Composition API的优势](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/Vue-composition-api-1.image)
![Composition API的优势](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/Vue-composition-api-2.image)

## Vue3.0新组件

### Fragment

- 在`Vue2.x`中：组件必须有一个根标签
- 在`Vue3.0`中：组件可以没有根标签，内部会将多个标签包含在一个`Fragment`虚拟元素中，是不参与渲染的
- 好处：减少标签层级，减少内存占用

### Teleport

- 作用：`Teleport`是一种能够将我们的组件`HTML`结构移动到指定位置的技术
- 位置：
  - `body`
  - `html`
  - `class`选择器：需要用`.xxx`指定
  - `id`选择器：需要用`#xxx`指定

```html
<!-- 将弹窗移动到 body 上 -->
<teleport to="body">
  <div v-if="isShow" class="mask">
    <div class="dialog">
      <h3>弹窗</h3>
      <h4>Lorem ipsum dolor sit.</h4>
      <button @click="isShow = false">关闭弹窗</button>
    </div>
  </div>
</teleport>
```

### Suspense

- 等待异步组件时渲染一些额外的内容，让应用有更好的用户体验

#### Suspense使用步骤

- 异步引入组件：

```javascript
// 静态引入
// import Child from './components/Child'
// 引入定义异步组件的 API
import { defineAsyncComponent } from 'vue'
// 异步引入 动态引入
const Child = defineAsyncComponent(() => import('./components/Child'))
export default {
  name: 'App',
  components: {
    Child
  }
}
```

- 使用`Suspense`包裹组件并配置好`default`与`fallback`

```html
<template>
  <div class="app">
    <h2>App组件</h2>
    <Suspense>
      <!-- 异步组件引入完成展示 -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 异步组件未引入完成时展示 -->
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>
```

## 其他

### 全局API的转移

- `Vue2.x`有许多全局`API`和配置，如：

```javascript
// 全局注册组件
Vue.component('MyButton', {
  data: () => ({
    cont: 0
  }),
  template: '<button @click="count ++">{{count}}</button>'
})
// 全局注册指定
Vue.directive('focus', {
  inserted: el => el.focus()
})
```

- 在`Vue3.0`中对这些`API`做出了调整：
  - 将全局的`API`，即：`Vue.xxx`调整到了应用实例`app`上：

|   Vue2.x全局API：`Vue`   |    Vue3.x实例API：`app`     |     备注      |
| :----------------------: | :-------------------------: | :-----------: |
|      Vue.config.xxx      |       app.config.xxx        | 添加默认配置  |
| Vue.config.productionTip |            移除             | 关闭生产提示  |
|      Vue.component       |        app.component        | 注册全局组件  |
|      Vue.directive       |        app.directive        | 注册全局指令  |
|        Vue.mixin         |          app.mixin          | 注册全局mixin |
|         Vue.use          |           app.use           |  全局使用API  |
|      Vue.prototype       | app.config.globalProperties | 原型添加方法  |

### 其他改变

- `data`选项应始终被声明为一个函数
- 过渡类名的更改：

```css
/* Vue2.x */
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-leave,
.v-enter-to {
  opacity: 1;
}

/* Vue3.x */
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-leave-from,
.v-enter-to {
  opacity: 1;
}
```

- **移除**`keyCode`作为`v-on`的修饰符，同时也不再支持`config.keyCodes`
- **移除**`v-no:native`修饰符
  - 父组件中绑定事件：

```javascript
<my-component
  v-on:close="handleComponentEvent"
  v-on:click="handleNativeClickEvent"
/>
```

-
  - 子组件中声明自定义事件

```javascript
<script>
  export default {
    emits: ['close']
  }
</script>
```

- 移除过滤器：
  - 过滤器虽然看起来很方便，但它需要一个自定义语法，打破大括号内**只是`JavaScript`表达式**的假设，这不仅有学习成本，而且有实现成本，建议用方法调用或计算属性去替换过滤器
