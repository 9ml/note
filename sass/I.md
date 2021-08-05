# Sass

> `Sass/Scss`基础篇。

## CSS预处理

### 定义

> `CSS`预处理器定义了一种新的语言，其基本思想是用一种专门的编程语言，为`CSS`增加了一些编程的特性，将`CSS`作为目标生成文件，然后开发者就只要使用这种语言就可进行编码工作。
>
> 通俗的说，`CSS`预处理器是用一种专门的编程语言，进行`Web`页面样式设计，然后再编译成正常的`CSS`文件以供项目使用；`CSS`预处理器为`CSS`增加一些编程的特性，无需考虑浏览器的兼容性问题。
>
> - 例如你可以在`CSS`中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的`CSS`更加简洁、适应性更强、可读性更佳、更利于代码的维护等诸多好处。

### 其他CSS预处理语言

- `Sass`(`SCSS`)
- `Less`
- `Stylus`
- `Turbine`
- `Swithch CSS`
- `CSS Cacheer`
- `DT CSS`

## 简介

### 定义

> `Sass`是一门高于`CSS`的元语言，它能用来清晰地、结构化地描述文件样式，有着比普通`CSS`更加强大的功能。
>
> `Sass`能够提供更简洁、更优雅的语法，同时提供多种功能来创建可维护和管理的样式表。

### 前世今生

> `Sass`是最早的`CSS`预处理语言，有比`Less`更为强大的功能，不过其一开始的缩进式语法并不能被大众接受，不过由于其强大的功能和`Ruby on Rails`的大力推动，还是有很多开发者选择了`Sass`。
>
> `Sass`是采用`Ruby`语言编写的一款`CSS`预处理语言，它诞生于2007年，是最大最成熟的`CSS`预处理语言；最初它是为了配合`HTML`而设计的，因此有着和`HTML`一样的缩进式风格。

### 基本使用

```scss
$num: 6px;
$side: left;

.test{
    border-#{$side}-radius: $num;
}
```

### Sass、SCSS与CSS

> `Sass`与`SCSS`其实是一个东西，我们平时都称之为`Sass`，不同之处有：
>
> - 文件扩展名不同，`Sass`是以`.sass`后缀为扩展名，而`SCSS`是以`.scss`后缀为扩展名。
> - 语法书写方式不同，`Sass`是以严格的缩进式语法规则来书写，不带大括号`{}`和分号`;`，而`SCSS`的语法书写和`CSS`语法书写方式非常类型。
> - 由于`Sass`是基于`Ruby`写出来的，所以延续了`Ruby`的书写规范，与`CSS`写法存在一定的差异。
> - `SCSS`与`CSS`写法无差别，可将现有的`.css`文件改成`.scss`即可使用。

#### 示例

- `Sass`语法：

```sass
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body
  font: 100% $font-stack
  color: $primary-color
```

- `SCSS`语法：

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body{
    font: 100% $font-stack;
    color: $primary-color;
}
```

- 编译出来的`CSS`：

```css
body{
    font: 100% Helvetica, sans-serif;
    color: #333;
}
```

## 环境安装

### Windows

> 在`Windows`系统下需要先安装`Rudy(http://rubyinstaller.org/downloads)`

## 基础

### 声明变量

> `Sass`的变量包括三个部分：
>
> - `$`声明变量的符号。
> - 变量名称。
> - 赋予变量的值。
> - 在值后面加上`!default`表示默认值，可根据需求来覆盖。

- `Sass`语法：

```scss
// SCSS
$w: 100px;
$h: 200px;
$h: 300px !default;
.text{
    width: $w;
    height: $h;
}
```

- 编译后的`CSS`：

```css
.test{
    width: 100px;
    height: 200px;
}
```

### 局部/全局变量

> `Sass`从`3.4`版本开始已经可以正确处理作用域的概念，并通过创建一个新的局部变量来替代。

- `Sass`语法：

```scss
// SCSS
$color: red; // 全局变量
.block{
    color: $color; // 全局变量
}

em{
    $color: blue; // 局部变量
    a{
        color: $color; // 局部变量
    }
}

span{
    color: $color; // 全局变量
}
```

### 嵌套

> `Sass`的嵌套分为三种：
>
> - 选择器嵌套。
> - 属性嵌套。
> - 伪类嵌套。

#### 选择器嵌套

- `HTML`代码结构：

```html
<header>
  <nav>
      <a>Home</a>
        <a>About</a>
        <a>Blog</a>
    </nav>
</header>
```

- `CSS`代码：

```css
nav a{
    color: red;
}

header nav a{
    color: green;
}
```

- `Sass`使用选择器写为：

```scss
nav {
  a {
    color: red;
    header & {
      color: green;
    }
  }
}
```

#### 属性嵌套

> `CSS`中有一些属性前缀相同，只是后缀不同时可使用属性嵌套写法：

- `CSS`样式代码：

```css
.box{
    border-top: 1px solid #000;
    border-bottom: 1px solid red;
}
```

- `Sass`使用属性嵌套：

```scss
.box{
    .border{
        top: 1px solid #000;
        bottom: 1px solid red;
    }
}
```

#### 伪类嵌套

> `Sass`中借助`&`符合实现伪类嵌套：

- `Sass`样式代码：

```scss
.clearFix{
    &:before,
    &:after {
        content: "";
        display: table;
    }
    &:after {
        clear: both;
        overflow: hidden;
    }
}
```

- 编译后的`CSS`：

```css
.clearFix:before,
.clearFix:after {
    content: "";
    display: table;
}
.clearFix:after {
    clear: both;
    overflow: hidden;
}
```

### 混合宏

> 如果网页中有几处小样式类似，可以在`Sass`中使用变量来统一处理；但当样式越来越复杂，需要重复使用大段的样式时，使用混合宏就变得非常有意义。
>
> - 在不同地方调用相同的混合宏时，并不能智能的将相同的样式代码合并在一起，也是`Sass`的不足之处。

#### 声明混合宏

> 在`Sass`中使用`@mixin`来声明一个混合宏，后面是混合宏的名称，大括号中时复用的样式代码。
>
> 使用`@include`来调用声明好的混合宏。

- 不带参数的混合宏：

```scss
@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}

button{
    @include border-radius;
}
```

- 带参数的混合宏：

```scss
@mixin border-radius($radius){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}

button{
    @include border-radius(5px);
}

// 可设置默认值，没传参时使用默认值，传参时替换默认值
@mixin border-radius($radius: 3px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
```

- 复杂混合宏：

> 可传多个参数。

```scss
@mixin center($w, $h){
    width: $w;
    height: $h;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -($h) / 2;
    margin-left: -($w) / 2;
}

.box-center{
    @include center(500px, 300px);
}
```

>`Sass`的混合宏可提供带有逻辑关系的，可使用`...`表示带有多个参数，`@if...@else`逻辑关系判断。

```scss
@mixin box-shadow($shadow...){
    @if length($shadow) >= 1{
        // 当的传参长度大于等于 1 时：
        -webkit-box-shadow: $shadow;
        box-shadow: $shadow;
    } @else {
        // 否则：
        $shadow: 0 0 4px rgba(0,0,0,.3);
        -webkit-box-shadow: $shadow;
        box-shadow: $shadow;
    }
}

// 调用
.box{
    @include box-shadow(0 0 1px rgba(#000, .5), 0 0 2px rgba(#000, .2));
}

// 编译为CSS
.box{
    -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.5),0 0 2px rgba(0,0,0,0.2);
    box-shadow: 0 0 1px rgba(0,0,0,0.5),0 0 2px rgba(0,0,0,0.2);
}
```

### 继承

> `Sass`中使用`@extend`来继承**已存在的类**样式块，从而实现代码继承。

- `Sass`代码：

```scss
// SCSS
.btn{
    border: 1px solid #ccc;
    padding: 6px 10px;
    font-size: 14px;
}

.btn-primary{
    background-color: #F36;
    color: #FFF;
    @extend .btn;
}

.btn-sec{
    background-color: orange;
    color: #000;
    @extend .btn;
}
```

- 编译后的`CSS`：

```css
/* 可继承样式块中所有的样式的代码，而且编译出来的 CSS 会将选择器合并在一起，形成组合选择器 */ 
.btn, .btn-primary, .btn-sec{
    border: 1px solid #ccc;
    padding: 6px 10px;
    font-size: 14px;
}

.btn-primary{
    background-color: #F36;
    color: #FFF;
}

.btn-sec{
    background-color: orange;
    color: #000;
}
```

### 占位符

> `Sass`中的占位符`%`placeholder功能时一个很强大，很实用的一个功能，可以取代`CSS`中基类造成的代码冗余的情形，因为`Sass`中`%`placeholder声明的代码，如果不被`@extend`调用的话，不会产生任何代码。

- `Sass`代码：

```scss
// 没有被 @extend 调用时，不会产生任何代码块
%mt{
    margin-top: 5px;
}
%pt{
    padding-top: 10px;
}

.btn{
    @extend %mt;
    @extend %pt;
}

.block{
    @extend %mt;
    span{
        @extend %mt;
    }
}
```

- 编译后的`CSS`：

```css
.btn, .block{
    margin-top: 5px;
}
.btn, .block span{
    padding-top: 10px;
}
```

### 混合宏、继承、占位符

> 使用场景。

#### -混合宏

- 缺点：

> 如果样式文件中调用同一个混合宏，会产生多个对应的样式代码，不会自动合成相同的样式代码，造成代码的冗余。

- 使用场景：

> 若代码块中涉及到变量，建议使用混合宏来创建相同的代码块。

#### -继承

> 使用继承会将编译出来的`CSS`代码块通过组合选择器的方式合并到一起。
>
> - 缺点是不能传变量参数。

- 使用场景：

> 若代码块不需要传任何变量参数，且有一个基类已经在文件中存在，建议使用继承。

#### -占位符

>编译出来的`CSS`代码和使用继承基本上是相同的，主要区别为：
>
>- 占位符是独立定义的，不调用的时候是不会在`CSS`中产生任何代码。
>- 继承是首先有一个基类存在，不管调用与不调用，基类的样式都会出现在编译后的`CSS`代码中。

### 插值

>使用`Sass`可以获得一个更好的结构体系，使用插值能写出更干净、高效和面向对象的`CSS`。

#### 设置属性值

- `Sass`代码：

```scss
$properties: (margin, padding);
@mixin set-value($side, $value){
    @each $prop in $properties {
        #{$prop}-#{side}: $value;
    }
}

.box{
    @include set-value(top, 14px);
}
```

- 编译后的`CSS`：

```css
.box{
    margin-top: 14px;
    padding-top: 14px;
}
```

#### 构建选择器

- `Sass`代码：

```scss
@mixin generate-sizes($class, $small, $medium, $big){
  .#{$class}-small{ font-size: $small; }
  .#{$class}-medium{ font-size: $medium; }
  .#{$class}-big{ font-size: $big }
}

@include generate-size("header-text", 12px, 20px, 40px);
```

- 编译出来的`CSS`：

```css
.header-text-small{
    font-size: 12px;
}
.header-text-medium{
    font-size: 20px;
}
.header-text-big{
    font-size: 40px;
}
```

#### 注意

- 不能使用插值替换变量名，会导致此变量删除。

```scss
$margin-big: 40px;

@mixin set-value($size){
    margin-top: $margin-#{$size}
}

.box{
    @include set-value(big)
}

// 报错：error style.scss (Line 5: Undefined variable: “$margin-".)
```

- 不能使用插值替换混合宏名称。

```scss
@mixin update-status{
    margin-top: 20px;
    background: #FFF;
}

$flag: "status";

.box{
    @include update-#{$flag};
}

// 报错：error style.scss (Line 7: Invalid CSS after "...nclude updated-": expected "}", was "#{$flag};")
```

- 可以在`@extend`中使用插值。

```scss
%updated-status{
    margin-top: 20px;
    background: #FFF;
}
.selected-status{
    font-weight: bold;
}

$flag: "status";
.box{
  @extend %updated-#{$flag};
  @extend .selected-#{$flag};
}

// @extend 中可正常使用。
```

### 注释

> - 类似`CSS`的注释方式，使用`/* 这是一个注释 */`，编译后会在`CSS`中显示。
> - 类似`JS`的注释方式，使用`// 这是一个注释`，编译后不会在`CSS`中显示。

### 数据类型

> `Sass`和`JS`语言类似，也具有自己的数据类型：
>
> - 数字，如`1 2 13 10px`等。
> - 字符串，有 / 无引号字符串，如 `"foo" 'bar' baz`等。
> - 颜色，如 `blue #FFF rgba(255,0,0,0.5)`等。
> - 布尔型，如 `true false`。
> - 空值，如`null`。
> - 值列表，空格或者逗号分开，如`1.5em 1 2px`、`sans-serif,Helvetica,Arial`等。

#### 字符串

> `SassScript`支持`CSS`的两种字符串类型：
>
> - 有引号字符串。
> - 无引号字符串。
>
> 在编译`CSS`文件时不会改变其类型，只有使用`#{}`插值表达语句时，有引号字符串会被编译为无引号字符串；当`deprecated = property syntax`时，所有字符串都将被编译为无引号字符串。

- `Sass`代码：

```scss
@mixin firefox-message($selector){
    body.firefox #{$selector}:before {
        content: "Hi Firefox users!";
    }
}

@include firefox-message(".header");
```

- 编译后的`CSS`：

```css
body.firefox .header:before{
    content: "Hi Firefox users!";
}
```

#### 值列表

> 通过空格或者逗号分隔的一系列的值：
>
> - `margin: 10px 15px 0 0`
> - `font-face: Helvetica, Arial, sans-serif`
>
> `Sass`列表函数赋予了值列表更多功能：
>
> - `nth`函数（`nth function`）可以直接访问值列表中的某一项。
> - `join`函数（`join function`）可以将多个值列表连接在一起。
> - `append`函数（`append function`）可以在值列表中 添加值。
> - `@each`规则（`@each rule`）能够给值列表中的每一项添加样式。
>
> `()`表示空的列表，但是这样不可以直接编译成`CSS`，只有一个`()`会报错，多个时将清除空值。

## 运算

> 程序中的运算是常见的一件事情，但在`CSS`中能做运算的目前仅有`calc()`函数。
>
> 在`Sass`中可以做各种数学计算，运算只是基本特性之一。

### 加/减

> `Sass`在变量或属性中都可以做加/减法运算。

- `Sass`代码：

```scss
$full-height: 960px;
$side-height: 100px;
.box {
  width: 20px + 8in;
  height: $full-height - $side-height;
}
```

- 编译出来的`CSS`：

```css
.box {
  width: 788px;
  height: 860px;
}
```

- 携带不同类型的单位时计算会报错：

```scss
.box{
  width: 20px + 1em;
}
// 报错：Incompatible units: 'em' and ‘px'.
```

### 乘/除

> 乘/除法运算与加/减法运算略有不同：
>
> - `Sass`直接使用`/`符号作为除号时，将不会生效。
> - 单独除法运算需要搭配`()`使用。
> - 已有的数学表达式中运算不需要使用`()`。
> - 用于变量计算不需要使用`()`。

- `Sass`代码：

```scss
$num: 200px;
.box {
  width: 10px * 2;
  height: (100px / 5);
  margin-left: 100px / 2 + 2in;
  margin-top: round(1.5) / 2;
  padding-right: $num / 10;
}
```

- 编译后的`CSS`：

```css
.box {
  width: 20px;
  height: 20px;
  margin-left: 242px;
  margin-top: 4;
  padding-right: 20px;
}
```

- 同一单位或不同单位运算时会报错：

```scss
.box {
  width: 10px * 2px; // 报错：20px*px isn't a valid CSS value.
  height: 20px * 4em; // 40em*px isn't a valid CSS value.
}
```

### 变量计算

> `Sass`中除了可以使用数值进行运算之外，还可以使用变量进行计算。

- `Sass`代码：

```scss
$c-width: 720px;
$s-width: 220px;
$gutter: 20px;

.container{
  width: $c-width + $s-width + $gutter;
}
```

- 编译后的`CSS`：

```css
.container{
  width: 960px;
}
```

### 数字运算

> `Sass`中可以通过`()`来修改运算的先后顺序。

- `Sass`代码：

```scss
.box{
  width: ((220px + 720px) - 11 * 20) / 12;
}
```

- 编译后的`CSS`：

```css
.box{
    width: 60px;
}
```

### 颜色运算

> 所有算数运算都支持颜色值，使用红、绿、蓝各颜色分段单独进行运算。

- `Sass`代码：

```scss
p{
    color: #010203 + #040506;
    background: #010203 * 2;
}
```

- 编译后的`CSS`：

```css
p{
    color: #050709;
    background: #020406;
}
```

### 字符运算

> `Sass`中可以通过`+`号来对字符串进行连接。

- `Sass`代码：

```scss
$content: "Hello" + "" + "Sass!";
.box:before{
    content: " #{$content} ";
}

div{
    cursor: e + -resize;
    font-family: sans- + "serif";
}
```

- 编译后的`CSS`：

```css
.box:before{
    content: " Hello Sass! ";
}

div{
    cursor: e-resize;
    font-family: sans-serif;
}
```
