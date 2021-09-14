# Vue

## 简介

> 一套用于`构建用户界面`的**渐进式**框架。
>
> - `构建用户界面`：数据驱动视图（界面）。
> - **渐进式**：`Vue`可以自底向上逐层的应用。
>   - 简单应用：只需一个轻量小巧的核心库。
>   - 复杂应用：可以引入各式各样的`Vue`插件。
> - 后起之秀，生态完善，已然成为前端工程师必备技能。

### 特点

- 采用**组件化**模式，提高代码复用率、且让代码更好维护。
- **声明式**编码，让编码人员无需直接操作`DOM`，提高开发效率。

```javascript
/* 命名式编码： */
// 准备html字符串
let htmlStr = ''
// 遍历数据拼接html字符串
persons.forEach(p => {
  htmlStr += `<li>${p.id} - ${p.name} - ${p.age}</li>`
})
// 获取list元素
let list = document.getElementById('list')
// 修改内容
list.innerHtml = htmlStr

/* 声明式编码： */
<ul>
  <li v-for="p in persons">
    {{p.id}} - {{p.name}} - {{p.age}}
  </li>
</ul>
```

- 虚拟`DOM`+优秀的`Diff`算法，尽量复用`DOM`节点。
  - 数据 => 虚拟`DOM` => 页面真实`DOM`。
  - 数据变化 => 根据`Diff`算法对比新旧虚拟`DOM` => 复用重复的虚拟`DOM`
