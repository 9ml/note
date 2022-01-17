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

> 指定元素的排列方式：水平/垂直排列

- `row`：水平正序排列
- `row-reverse`：水平倒序排列
- `column`：垂直正序排列
- `column-reverse`：垂直倒序排列

```css
.container {
  display: flex;
  flex-direction: row;
  flex-direction: column;
}
```
