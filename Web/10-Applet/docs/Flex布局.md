# Display布局

## DisPlay属性

- `block`：指定元素为块级元素，默认值
- `inline`：指定元素为行内元素，设置宽高无效
- `inline-block`：指定元素为行内元素且可设置宽高
- `flex`：指定元素为弹性盒子

```css
.demo {
  display: block;
  display: inline;
  display: inline-block;
  display: flex;
}
```

## Flex布局

> `Flex`是`Flex Box`的缩写，意为弹性布局

### flex-direction属性

> 指定元素的排列方式：水平/垂直、正序/倒序排列

- `row`：水平正序排列
- `row-reverse`：水平倒序排列
- `column`：垂直正序排列
- `column-reverse`：垂直倒序排列

```css
.container {
  display: flex;
  flex-direction: row;
  flex-direction: row-reverse;
  flex-direction: column;
  flex-direction: column-reverse;
}
```

### justify-content属性

- `flex-start`：头部对齐
- `flex-end`：尾部对齐
- `center`：居中对齐
- `space-between`：两边对齐
- `space-around`：等距对齐

```css
.container {
  display: flex;
  justify-content: flex-start;
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
}
```

### 主轴与交叉轴

> 二维平面中，分别有`X`轴与`Y`轴，而主轴与交叉轴的定义取决于`flex-direction`的取值。

- `flex-direction: row;`时，内部元素水平排列，主轴为`X`轴，`Y`轴为交叉轴。
- `flex-direction: column;`时，内部元素垂直排列，主轴为`Y`轴，`X`轴为交叉轴。
