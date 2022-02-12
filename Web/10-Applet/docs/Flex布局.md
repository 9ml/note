# Display布局

## DisPlay属性

- `block`：指定元素为块级元素，默认值。
- `inline`：指定元素为行内元素，设置宽高无效。
- `inline-block`：指定元素为行内元素且可设置宽高。
- `flex`：指定元素为弹性盒子。
- `inline-flex`：指定元素为弹性盒子且为行内元素。

```css
.demo {
  display: block | inline | inline-block | flex | inline-flex;
}
```

## Flex布局

> `Flex`是`Flex Box`的缩写，意为弹性布局。

### flex-direction属性

> 指定元素的排列方式：水平/垂直、正序/倒序排列。

- `row`：水平正序排列。
- `row-reverse`：水平倒序排列。
- `column`：垂直正序排列。
- `column-reverse`：垂直倒序排列。

```css
.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### justify-content属性

> 水平方向`X`轴元素的排列方式。

- `flex-start`：头部对齐。
- `center`：居中对齐。
- `flex-end`：尾部对齐。
- `space-between`：两边对齐。
- `space-around`：等距对齐。

```css
.container {
  display: flex;
  justify-content: flex-start | center | flex-end | space-between | space-around;
}
```

### align-items属性

> 垂直方向`Y`轴元素的排列方式。

- `flex-start`：头部对齐。
- `center`：居中对齐。
- `flex-end`：尾部对齐。
- `baseline`：根据子元素中文字的基线对齐。
- `stretch`：当子元素没有设置高度时，子元素将继承父元素的高度。

```css
.container {
  display: flex;
  align-items: flex-start | center | flex-end | baseline | stretch;
}
```

### 主轴与交叉轴

> 二维平面中，分别有`X`轴与`Y`轴，而`Flex`中的主轴与交叉轴的定义取决于`flex-direction`的取值。

- `flex-direction: row;`时，内部元素水平排列，起点在左端，主轴为`X`轴，`Y`轴为交叉轴，`row-reverse`相同，起点在右端。
  - `justify-content`属性决定主轴上元素的排列方式，`align-items`属性决定交叉轴。
- `flex-direction: column;`时，内部元素垂直排列，起点在左端，主轴为`Y`轴，`X`轴为交叉轴，`column-reverse`相同，起点在右端。
  - `align-items`属性决定主轴上元素的排列方式，`justify-content`属性决定交叉轴。

### flex-wrap属性

> 当多个子元素的宽度大于总宽度时换行。

- `nowrap`：不换行，默认值。
- `wrap`：换行。
- `wrap-reverse`：换行颠倒。
