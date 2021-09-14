# Sass

> `Sass/Scss`进阶篇。

## 控制命令

### @if

> `@if`指令是一个`SassScript`，它可以根据条件来处理样式块，如果条件为`true`返回一个样式块，反之`false`返回另一个样式块。在`Sass`中除了`@if`之外，还可以配合`@else if`和`@else`一起使用。

- 假设要控制一个元素隐藏或显示，我们就可以定义一个混合宏，通过`@if...@else...`来判断进行参数的值来控制`display`的值。

```scss
// SCSS
@mixin blockOrHidden($boolean: true) {
    @if $boolean {
        @debug "$boolean is #{$boolean}"
        display: block;
    } @else {
        @debug "$boolean is #{$boolean}"
        display: none;
    }
}

.block {
    @include blockOrHidden;
}

.hidden {
    @include blockOrHidden(false);
}

// 编译出来的 CSS
.block {
    display: block;
}
.hidden {
    display: none;
}
```

### @for

#### 理解

> 在制作网格系统的时候，应该对`.col1~col12`这样的印象较深。在`CSS`中你需要一个一个去书写，但在`Sass`中，可以使用`@for`循环来完成。在`Sass`的`@for`循环中有两种方式。

```scss
@for $i from <start> through <end>
@for $i from <start> to <end>
```

- `$i`表示变量。
- `start`表示起始值。
- `end`表示结束值。

> 区别：
>
> - `through`表示包括`end`这个数。
> - `to`表示不包括`end`这个数。

- `through`：

```scss
// SCSS
@for $i from 1 through 3 {
    .item-#{$i} { width: 2em * $i; }
}

// CSS
.item-1 { width: 2em; }
.item-2 { width: 4em; }
.item-3 { width: 6em; }
```

- `to`：

```scss
// SCSS
@for $i from 1 to 3 {
    .item-#{$i} { width: 2em * $i; }
}

// CSS
.item-1 { width: 2em; }
.item-2 { width: 4em; }
```

#### 进阶

> `@for`应用在网格系统生成各个格子`class`：

```scss
// SCSS
$grid-prefix: span !default; 
$grid-width: 60px !default;
$grid-gutter: 20px !default;

%grid {
    float: left;
    margin-left: $grid-gutter / 2;
    margin-right: $grid-gutter / 2;
}

@for $i from through 6 {
    .#{$grid-prefix}#{$i} {
        width: $grid-width * $i + $grid-gutter * ($i - 1);
        @extend %grid;
    }
}

// CSS
.span1, .span2, .span3, .span4, .span5, .span6 {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
}

.span1 {
    width: 60px;
}
.span2 {
    width: 140px;
}
.span3 {
    width: 220px;
}
.span4 {
    width: 300px;
}
.span5 {
    width: 380px;
}
.span6 {
    width: 460px;
}
```

### @while

> `@while`指令也需要`SassScript`表达式，并且会生成不同的样式代码块，直到表达式值为`false`时停止循环，这个和`@for`指令很相似，只要`@while`后面的条件为`true`就会执行。

```scss
// SCSS
$types: 4;
$type-width: 20px;

@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}

// CSS
.while-4 { width: 24px; }
.while-3 { width: 23px; }
.while-2 { width: 22px; }
.while-1 { width: 21px; }
```

### @each

> `@each`循环就是去遍历一个列表，然后从列表中取出对应的值。

- `@each`循环指令的形式：

```scss
@each $var in <list>
```

> `$var`表示一个变量名，`<list>`表示一个`SassScript`表达式，它将返回一个列表值，变量`$var`会在列表中做遍历，并且遍历出与`$var`对应的样式块。

- 示例：

```scss
// SCSS
$list: adam john wynn mason kuroir;

@mixin author-images {
    @each $author in $list {
        .photo-#{$author} {
            background: url("/images/#{$author}.png") no-repeat;
        }
    }
}

.author-bio {
    @include author-images;
}

// CSS
.author-bio .photo-adam { background: url("/images/avatars/adam.png") no-repeat; }
.author-bio .photo-john { background: url("/images/avatars/john.png") no-repeat; }
.author-bio .photo-wynn { background: url("/images/avatars/wynn.png") no-repeat; }
.author-bio .photo-mason { background: url("/images/avatars/mason.png") no-repeat; }
.author-bio .photo-kuroir { background: url("/images/avatars/kuroir.png") no-repeat; }
```

## 函数

> 在`Sass`中除了可以定义变量，具有`@extend`、`%placeholder`和`mixins`等特性外，还自备了一系列的函数功能：
>
> - 字符串函数
> - 数字函数
> - 列表函数
> - 颜色函数
> - `Introspection`函数
> - 三元函数等
>
> 除了自备的函数功能之外，我们还可以根据自己的需求定义函数功能，常常称之为自定义函数。

### 字符串函数

> 用来处理字符串的函数。
>
> - `unquote($string)`：删除字符串中的引号。
> - `quote($string)`：给字符串添加引号。
> - `to-upper-case()`：将字符串小写字母转换成大写字母。
> - `to-lower-case()`：将字符串大写字母转换成小学字母。

#### unquote

> 用来删除一个字符串中的引号，如果这个字符串没有带引号，将返回原生的字符串。
>
> - 只能删除字符串最前面的和最后面的引号，无法删除字符串中间的引号。
> - 字符串没有带引号将返回字符串本身。

```scss
// SCSS
.test1 {
    content: unquote('Hello Sass!');
}
.test2 {
    content: unquote("'Hello Sass!'");
}
.test3 {
    content: unquote('"Hello Sass!"');
}
.test4 {
    content: unquote("I'm Web Designer");
}
.test5 {
    content: unquote(Hello Sass!);
}

// CSS
.test1 {
    content: Hello Sass!;
}
.test2 {
    content: 'Hello Sass!';
}
.test3 {
    content: "Hello Sass!";
}
.test4 {
    content: I'm Web Designer
}
.test5 {
    content: Hello Sass!;
}
```

#### quote

>与`unquote()`函数功能相反，主要用来给字符串添加引号。
>
>如果字符串自身带有引号会统一换成双引号`""`。

```scss
// SCSS
.test1 {
    content: quote('Hello Sass!');
}
.test2 {
    content: quote("Hello Sass!");
}
.test3 {
    content: quote(Hello);
}
.test4 {
    content: quote('  ');
}

// CSS
.test1 {
    content: "Hello Sass!";
}
.test2 {
    content: "Hello Sass!";
}
.test3 {
    content: "Hello";
}
.test4 {
    content: "";
}
```

- 注意：

> 使用`quote()`函数只能给字符串增加双引号，而且字符串中间有单引号、特殊符号或者空格时，需要用单引号或者双引号括起，否则编译的时候将会报错，如：

```scss
.test1 {
    content: quote(Hello Sass);
}
// error style.scss (Line 13: $string: ("Hello""Sass") is not a string for `quote')
```

#### to-upper-case

> 将字符串小写字母转换成大写字母。

```scss
// SCSS
.test {
    text: to-upper-case(aaa);
    text: to-upper-case(a-Aa-aAa);
}

// CSS
.test {
    text: AAA;
    text: A-AA-AAA;
}
```

#### to-lower-case

> 将字符串转换成小写字母。

```scss
// SCSS
.test {
    text: to-lower-case(AAA);
    text: to-lower-case(A-Aa-AaA);
}

// CSS
.test {
    text: aaa;
    text: a-aa-aaa;
}
```

### 数字函数

> `Sass`中的数字函数主要针对数字方面提供一系列的函数功能。
>
> - `percentage($value)`：将一个不带单位的数转换成百分比值。
> - `round($value)`：将数值四舍五入，转换成一个最接近的整数。
> - `ceil($value)`：向上取整。
> - `floor($value)`：向下取整。
> - `abs($value)`：返回一个数的绝对值。
> - `min($num...)`：几个数值中取最小值。
> - `max($num...)`：几个数值中取最大值。
> - `random()`：获取随机数。

#### percentage

> 将一个不带单位的数字转换成百分比的形式。

```scss
percentage(.2) // 20%
percentage(2px / 10px) // 20%
percentage(2em / 10em) // 20%
percentage(2em / 10px) // 报错

// SCSS
.footer {
    width: percentage(.2);
}

// CSS
.footer {
    width: 20%;
}
```

#### round

> 将一个数四舍五入为一个最接近的整数。
>
> - 可以携带单位的任何数值。

```scss
round(12.3) // 12
round(2px / 3px) // 1
round(3px / 2em) // 2px/em

// SCSS
.footer {
    width: round(12.3px);
}
.footer {
    width: 12px;
}
```

#### ceil

> 将一个数向上取整。

```scss
ceil(2.0) // 2
ceil(2.1) // 3

// SCSS
.footer {
    width: ceil(12.3px);
}

// CSS
.footer {
    width: 13px;
}
```

#### floor

> 向下取整。

```scss
floor(2.1) // 2
floor(2.9) // 2

// SCSS
.footer {
    width: floor(12.3px);
}

// CSS
.footer {
    width: 12px;
}
```

#### abs

> 返回一个数的绝对值。

```scss
abs(-10) // 10
abs(-1px) // 1px

// SCSS
.footer {
    width: abs(-12.3px);
}

// CSS
.footer {
    width: 12.3px;
}
```

#### min/max

> `min()`函数功能主要是在多个数之中找到一个最小值。
>
> `max()`函数用于在多个数值中找到一个最大值。
>
> - 可设置任意多个参数。
> - 函数中同时出来两种不同类型的单位将会报错。

```scss
// min
min(1, 2, 12px, 10, 30px) // 1
// max
max(1%, 100, 66%, 10, 3) // 100
```

#### random

```scss
random() // 0.56231
```

### 列表函数

> 列表函数主要包括一些对列表参数的函数使用，分为：
>
> - `length($list)`：返回一个列表的长度值。
> - `nth($list,$n)`：返回一个列表中指定的某个标签值。
> - `join($list1,$list2,[$separator])`：将两个列连接在一起，变成一个列表。
> - `append($list1,$val,[$separator])`：将某个值放在列表的最后。
> - `zip($lists...)`：将几个列表结合成一个多维的列表。
> - `index($list,$value)`：返回一个值在列表中的位置值。

#### length

> `length()`函数主要用来返回一个列表中有几个值。
>
> - 函数中的列表参数直接使用空格隔开，不能使用逗号。

```scss
length(10px) // 1
length(10px 20px (border 1px solid) 2em) // 4
```

#### nth

> `nth()`函数用来指定列表中某个位置的值。不过在`Sass`中，`nth()`函数和其他语言不同，列表中第一个标签值是从`1`开始，以此类推。
>
> - 语法：`nth($list, $n)`
> - 注意：`$n`必须是大于`0`的整数。

```scss
nth(10px 20px 30px,1) // 10px
nth((A,B,C), 2) // B
```

#### join

> `join()`函数是将两个列表连接合并成一个列表。
>
> - 只能将两个列表连接成一个列表，两个以上将会报错。

```scss
join(10px 20px, 30px 40px) // (10px 20px 30px 40px)
join((blue,red), (#abc #def)) // (#0000ff, #ff0000, #aabbcc, #ddeeff)
```

- 需要连接多个列表时可将多个`join()`函数合并在一起使用。

```scss
join((blue, red), join((#abc #def), (#dee, #eff)))
```

- `join()`中可设置`$separator`参数，用来给列表函数设置分隔符号，默认值是`auto`，可设置`comma`（逗号）和`space`（空格）

```scss
join(blue, red, comma) // (#0000ff, #ff0000)
```

- 不设置`$separator`参数，会有多种情形发生。

> - 如果第一个列表中每个值直接使用的是逗号分隔，那么`join()`函数合并的列表中使用逗号分隔。
> - 如果第一个列表中只有一个列表项，那么`join()`函数合并的列表分隔符会根据第二个列表项的分隔符分隔。
> - 当两个列表项都只有一位时，使用空格分隔。

#### append

> `append()`函数是用来将某个值插入到列表中，并且处于最末位。
>
> 可设置`$separator`参数：
>
> - `comma`以逗号分隔列表项。
> - `space`以空格分隔列表项。

```scss
append(10px 20px, 30px) // (10px, 20px, 30px)
append((10px, 20px), 30px) // (10px, 20px, 30px)
append(green, red) // (#008000 #ff0000)
append(red, (green, blue)) // (#ff0000 (#008000, #0000ff))

append((blue, green), red, comma) // (#0000ff, #008000, #ff0000)
append((blue, green), red, space) // (#0000ff #008000 #ff0000)
```

- 没有明确指定`$sepatator`参数值，其默认值是`auto`

> - 如果列表只有一个列表项时，那么插入进来的值将和原来的值会以空格的方式分隔。
> - 如果列表中列表项时以空格分隔列表项，那么插入进来的列表项也将已空格分隔。
> - 如果列表中列表项是以逗号分隔，那么插入进来的列表项也将以逗号分隔。

#### zip

> `zip()`函数将多个列表值转成一个多维的列表。
>
> - 在使用`zip()`函数时，每个单一的列表个数值必须是相同的。
> - `zip()`函数中每个单一列表的值对应的取其相同位置值。

```scss
zip(1px 2px 3px, solid, dashed, dotted, green, blue, red)
// ((1px "solid" #008000), (2px "dashed" #0000ff), (3px "dotted", #ff0000))
```

#### index

> `index()`函数类似于索引一样，主要让你找到某个值在列表中所处的位置。
>
> 在`Sass`中，第一个值就是`1`，第二个值就是`2`，以此类推。
>
> 如果指定的值不在列表中，那么返回的值将是`false`。

```scss
index(1px solid red, 1px) // 1
index(1px solid red, solid) // 2
index(1px solid red, red) // 3
index(1px solid red, blue) // false
```

### Introspection函数

> `Introspection`函数包括了几个判断型函数：
>
> - `type-of($value)`：返回一个值的类型。
> - `unit($number)`：返回一个值的单位。
> - `unitless($number)`：判断一个值是否带有单位。
> - `comparable($number-1, $number-2)`：判断连个值是否可以做加、减和合并。

#### type-of

> `type-of()`函数主要用来判断一个值是属于什么类型。
>
> - `number`为数值型。
> - `string`为字符串型。
> - `bool`为布尔型。
> - `color`为颜色型。

```scss
type-of(100) // "number"
type-of(100px) // "number"
type-of("asdf") // "string"
type-of(asdf) // "string"
type-of(true) // "bool"
type-of(#fff) // "color"
type-of(blue) // "color"
```

#### unit

> `unit()`函数主要是用来获取一个值所使用的单位，碰到复杂的计算时，其能根据运算得到一个"多单位组合"的值，不过只允许**乘/除**运算。

```scss
unit(100) // ""
unit(100px) // "px"
unit(20%) // "%"
unit(1em) // "em"
unit(10px * 3em) // "px*em"
unit(10px / 3em) // "px/em"
unit(10px * 2em / 3cm / 1rem) // "em/rem"
```

- 但**加/减**碰到不同单位时，`unit()`函数将会报错，除`px/cm/mm`运算之外。

```scss
unit(1px + 1cm) // "px"
unit(1px - 1cm) // "px"
unit(1px + 1mm) // "px"
unit(10px * 2em - 3cm / 1rem) // SyntaxError: Incompatible units: 'cm' and 'px*em'.
```

- `unit()`函数对于单位运算相对来说也是没有规律，而且有些单位无法整合成一个单位，对于我们在`CSS`中运用中并不合适。

```scss
unit(10px * 3em) // "em*px"
unit(10px / 3em) // "px/em"
unit(10px * 2em / 3cm / 1rem) // "em/rem"
// 以上运算出来的单位，对于在 CSS 中使用将是没有任何意义的。
```

#### unitless

> `unitless`相对来说简单明了，只是用来判断一个值是否带有单位，如果不带单位返回的值为`true`，带单位返回的值为`false`。

```scss
unitless(100) // true
unitless(100px) // false
unitless(100em) // false
unitless(100%) // false
unitless(1 / 2) // true
unitless(1 / 2 + 2) // true
unitless(1px / 2 + 2) // false

@mixin adjust-location($x, $y){
    @if unitless($x) {
        $x: $x * 1px
    }
    @if unitless($y) {
        $y: $y * 1px
    }
    position: relative;
    left: $x;
    top: $y;
}

.button {
    @include adjust-location(20px, 30)
}
```

#### comparable

> `comparable()`函数主要用来判断两个数是否可以进行**加/减/合并**，如果可以返回`true`，否则返回`false`。

```scss
comparable(2px, 1px) // true
comparable(2px, 1%) // false
comparable(2px, 1em) // false
```

### Miscellaneous函数

> `Miscellaneous`函数称为三元条件函数，主要因为和`JavaScript`中的三元判断非常的相似，它有两个值，当条件不成立时返回另一种值。

```scss
if($condition, $if-true, $if-false)
// 当 $condition 成立时，返回的值为 $if-true，否则返回的是 $if-false 值。

if(true, 1px, 2px) // 1px
if(false, 1px, 2px) // 2px
```

### Map函数

> `Sass`的`map`常常被称为**数据地图**，也有人称其为**数组**，因为是以`key: value`成对出现的，但其更像是一个`JSON`数据。

- `JavaScript JSON` 数据：

```json
{
    "employees": [
      { "firstName": "John", "lastName": "Doe" },
      { "firstName": "Anna", "lastName": "Smith" },
      { "firstName": "Peter", "lastName": "Jones" }
    ]
}
```

- `Sass map`数据：

> 首先有一个类似于`Sass`的变量一样，用个`$`加上命名空间来声明`map`，后面紧接是一个小括号`()`，将数据以`key: value`的形式赋予，其中`key`和`value`是成对出现的，并且每对之间使用逗号分隔。

```scss
$map: (
  $key1: value1,
  $key2: value2,
  $key3: value3
);
```

- 其中键`key`是用来查找相关联的值`value`，使用`map`可以很容易收集键的值和动态插入。

```scss
// Sass 中常用这种方式定义变量：
$default-color: #fff !default;
$primary-color: #22ae39 !default;

// 使用 map 可以更好的管理：
$color: (
  default: #fff,
    primary: #22ae39,
    negative: #d9534f
);
```

- 还可以让`map`嵌套`map`。

```scss
$map: (
  key1: value1,
    key2: (
      key2-1: value2-1,
        key2-2: value2-2
    ),
    key3: value3
);
    
$theme-color: (
    default: (
        bgcolor: #fff,
        text-color: #444,
        link-color: #39f
    ),
    primary:(
        bgcolor: #000,
        text-color:#fff,
        link-color: #93f
    ),
    negative: (
        bgcolor: #f36,
        text-color: #fefefe,
        link-color: #d4e
    )
);

// 一些 map 老教程中会有这种格式：
$map: (
    key1 value1,
    key2 value2,
    key3 value3
);
// 可以正常编译但不建议使用。
```

> 除了使用`map`来管理变量，还使用`map`函数来获取变量，或者对`map`做更多有意义的操作。
>
> - `map-get($map, $key)`：根据给定的`key`值，返回`map`中相关的值。
> - `map-merge($map1, $map2)`：将两个`map`合并成一个新的`map`。
> - `map-remove($map, $key)`：从`map`中删除一个`key`，返回一个新`map`。
> - `map-keys($map)`：返回`map`中所有的`key`。
> - `map-values($map)`：返回`map`中所有的`value`。
> - `map-has-key($map, $key)`：根据给定的`key`值判断`map`是否有对应的`value`值，如果有返回`true`，否则返回`false`。
> - `keywords($args)`：返回一个函数的参数，这个参数可以动态的设置`key`和`value`。

#### map-get

> `map-get($map, $key)`函数的作用是根据`$key`参数，返回`$key`在`$map`中对应的`value`值。如果`$key`不存在`$map`中，将返回`null`值，此函数包括两个参数：
>
> - `$map`：定义好的`map`。
> - `$key`：需要遍历的`key`。

- 示例：

```scss
// 假定一个 $colors 的 map：
$colors: (
  c1: #ea4c89,
  c2: #3b5998,
  c3: #171515,
  c4: #db4437,
  c5: #55acee
);

// 获取 c3 键值对应的值 #171515 就可以通过 map-get() 函数实现：
.btn1 {
  color: map-get($colors, c3);
}

// 编译出来的 CSS：
.btn1 {
  color: #171515;
}

// 假设要在 $colors 这个 map 上取没有的键值：
.btn2 {
  font-size: 12px;
  color: map-get($colors, c6);
}

// 编译的 CSS：
.btn2 {
  font-size: 12px;
}

```

> 由此示例的知，如果`$key`不在`$map`中，便不会编译`CSS`，但其实在`Sass`返回一个`null`值，如有特殊情况可定义函数加个判断。

#### map-has-key

> `map-has-key($map, $key)`函数将返回一个布尔值，当`$map`中有这个`$key`返回`true`，否则返回`false`。
>
> 在`map-get($map, $key)`函数中，当`$key`不在`$map`中时将返回一个`null`值，但对于开发人员，并看不到任何提示信息；如果使用`map-has-key($map, $key)`函数就可以改变这一状态，如：

```scss
// SCSS
$colors: (...);
@if map-has-key($colors, c3) {
    .btn {
      color: map-get($colors, c3);
    }        
} @else {
  @warn "No color found for faceboo in $social-colors map. Property ommitted.";      
}

// 编译出来的 CSS
.btn {
    color: #171515;
}

// 如果没有便会执行 @else
```

- 可以简单封装一下：

```scss
// 封装函数
@function getColor($c) {
    @if not map-has-key($colors, $c) {
        @warn "No color found for faceboo in $social-colors map. Property ommitted.";
    }
    @return map-get($colors, $c);
}

// 调用
.btn1 {
    color: getColor(c1);
}
.btn2 {
    color: getColor(c2);
}
```

#### map-keys

> `map-keys($map)`函数将返回`$map`中所有的`key`。这些值赋予给一个值，就是一个列表。

```scss
$colors: (
  c1: #ea4c89,
  c2: #3b5998,
  c3: #171515,
  c4: #db4437,
  c5: #55acee
);

$list: map-key($colors);
// $list: c1, c2, c3, c4, c5;
```

- 可以配合`Sass`的`list`做很多事情，如获取颜色的示例：

```scss
// 封装
@function getColor($c) {
    $names: map-get($colors);
    @if not index($names, $c) {
        @warn "Waring: `#{$c} is not a valid color name.`";
    }
    @return map-get($colors, $c);
}

// 调用
.btn {
    color: getColor(c2);
}

// @each
@each $name in map-keys($colors) {
    .btn-#{$name} {
        color: getColor($name)
    }
}

// @for
@for $i from 1 through length(map-get($colors)) {
    .btn-#{nth(map-keys($colors), $i)} {
        color: getColor(nth(map-keys($colors), $i));
    }
}

// CSS
.btn-c1 {
  color: #ea4c89;
}

.btn-c2 {
  color: #3b5998;
}

.btn-c3 {
  color: #171515;
}

.btn-c4 {
  color: #db4437;
}

.btn-c5 {
  color: #55acee;
}
```

#### map-values

> `map-values($map)`函数类似于`map-keys($map)`函数的功能，不同的是`map-values($map)`是`$map`中所有`value`值取出来，也是一个列表。
>
> - `map-values($map)`中如果有相同的值，也将会全部取出来。

```scss
// SCSS
$colors: (...);

$list: map-value($colors);
// $list: #ea4c89, #3b5998, #171515, #db4437, #55acee 值与值之间同样使用逗号分隔。
```

#### map-merge

> `map-merge($map1, $map2)`函数是将`$map1`和`$map2`合并，然后得到一个新的`$map`，如果要快速将新的值插入到`$map`中，可以使用此方法。
>
> - 如果`$map1`与`$map2`有相同的`key`，那么`$map2`中的`key`会取代`$map1`中的`key`。

```scss
$colors: (
    text: #f36,
    link: #f63,
    border: #ddd,
    background: #fff
);

$typo: (
    font-size: 12px,
    line-height: 1.6，
    background: #000
);

$newmap: map-merge($colors, $typo);

// 将会生成一个新map：
$newmap: (
    text: #f36,
    link: #f63,
    border: #ddd,
    font-size: 12px,
    line-height: 1.6，
    background: #000
);
```

#### map-remove

> `map-remove($map, $key)`函数是删除`$map`中某一个`$key`值，返回一个新的`map`。
>
> - 若删除的`key`并不存在`$map`中，那么返回的`map`与之前的一样。

```scss
$colors: (
  c1: #ea4c89,
  c2: #3b5998,
  c3: #171515,
  c4: #db4437,
  c5: #55acee
);

$map: map-remove($colors, c2);

// 得到一个新map：
$map: (
  c1: #ea4c89,
  c3: #171515,
  c4: #db4437,
  c5: #55acee
);
```

#### keywords

> `keywords($arg)`函数可以动态创建`map`，可以通过混合宏或者函数的参数创建`map`。
>
> - 参数需要成对出现，`$args`变成`key`（会自动去掉`$`符号），而`$args`对应的值就是`value`。

```scss
@mixin map($args...) {
    @debug keywords($args);
}

@include map(
 $dribble: #ea4c89,
 $facebook: #3b5998,
 $github: #171515,
 $google: #db4437,
 $twitter: #55acee
);

// 在命令终端可以看到输出的@debug信息：
// DEBUG: (dribble: #ea4c89, facebook: #3b5998, github: #171515, google: #db4437, twitter: #55acee)
```

### 颜色函数

> 在`Sass`的官方文档中，列出了`Sass`的颜色函数清单，常用的主要分为`RGB`，`HSL`和`Opcity`三大函数。

#### RGB

> `RGB`颜色只是颜色的一种表达式，分别代表`Red`、`Green`和`Blue`。在`Sass`中`RGB`颜色提供六种函数：
>
> - `rgb($red, $green, $blue)`：根据红、绿、蓝三个值创建一个颜色。
> - `rgba($red, $green, $blue, $alpha)`：根据红、绿、蓝和透明度值创建一个颜色。
> - `red($color)`：获取一个颜色中的红色值。
> - `green($color)`：获取一个颜色中的绿色值。
> - `blue($color)`：获取一个颜色中的蓝色值。
> - `mix($color1, $color2, [$weight])`：把两种颜色混合在一起。

##### RGBA

> `rgba()`函数主要用来将一个颜色根据透明度转换成`rgba`颜色。
>
> 语法有两种格式：
>
> - `rgba($red, $green, $blue, $alpha)`：将一个`rgba`颜色转译出来。
> - `rgba($color, $alpha)`：将一个`Hex`颜色转换成`rgba`颜色。
>
> 其中`rgba($color, $alpha)`函数作用更大，假如在实际开发中有一个`f36`或者`red`颜色值，给颜色设置透明度时需要分别拿到它的`R`、`G`、`B`值，而不能直接使用，这时候便可使用`rgba($color, $alpha)`函数来处理。

```scss
// CSS
color: rgba(#f36, .5); // 在 CSS 中是无效写法。

// SCSS
$color: #f36;

.rgba {
    color: rgba($color, .5);
}
```

##### Red/Green/Blue

> `red($color)`、`green($color)`和`blue($color)`这三个函数非常简单，用来获取一个颜色中的值是多少。

```scss
$color: #f36;

red($color); // 255
green($color); // 51
blue($color); // 102
```

##### Mix

> `mix($color1, $color2, $weight)`是将两种颜色根据一定的比例混合在一起，生成另一种颜色。
>
> - `$color1`和`$color2`是需要合并的颜色，可以是任何表达式或者变量。
> - `$weight`是合并的比例，根据每个`RBG`的百分比来衡量，默认值是`50%`，意味着两个颜色各占一半，如果指定是`25%`，这意味着第一个颜色比例为`25%`，第二个颜色为`75%`。

```scss
mix(#f00, #00f); // #7f007f
mix(#f00, #00f, 25%); // #3f00bf
mix(rgba(255, 0, 0, .5), #00f); // rgba(63, 0, 191, .75)
```

#### HSL

> 在`Sass`中提供了一系列有关于`HSL`的颜色函数，其中常用的有：
>
> - `hsl($hue, $saturation, $lightness)`：通过色相(`$hue`)、饱和度(`$saturation`)和亮度(`$lightness`)的值创建一个颜色。
> - `hsla($hue, $saturation, $lightness, $alpha)`：通过色相(`$hue`)、饱和度(`$saturation`)、亮度(`$lightness`)和透明度(`$alpha`)的值创建一个颜色。
> - `hue($color)`：从一个颜色中获取色相(`hue`)值。
>
> - `saturation($color)`：从一个颜色中获取饱和度(`saturation`)值。
> - `lightness($color)`：从一个颜色中获取亮度(`lightness`)值。
> - `adjust-hue($color, $degress)`：改变一个颜色的色相值，创建一个新颜色。
> - `lighten($color, $amount)`：改变一个颜色的亮度值，让颜色变亮，创建一个新颜色。
> - `darken($color, $amount)`：改变一个颜色的亮度值，让颜色变暗，创建一个新颜色。
> - `saturate($color, $amount)`：改变一个颜色的饱和度，让颜色饱和度增加，创建一个新颜色。
> - `desaturate($color, $amount)`：改变一个颜色的饱和度，让颜色饱和度减少，创建一个新颜色。
> - `grayscale($color)`：将一个颜色变成灰色，相当于`desaturate($color, 180deg)`。
> - `complement($color)`：返回一个补充色，相当于对`adjust-hue($color, 180deg)`。
> - `invert($color)`：返回一个反相色，红、绿、蓝色值倒过来，而透明度不变。
>
> 在`HSL`函数中，`hsl()`和`hsla()`函数主要是通过颜色的`H`、`S`和`L`或者`A`几个参数获取一个`rgb`或`rgba`表达的颜色，这两个函数与`CSS`中的无太大区别，只是使用这两个函数能帮助你知道颜色的十六进制表达式和`rgba`表达式。
>
> 而`hue()`、`saturation()`和`lightness()`函数主要是用来获取指定颜色中的色相值、饱和度和亮度值。对于颜色表达没有太多的实际作用。
>
> `HSL`函数中`lightness()`、`darken()`、`saturate()`、`desaturate()`、`grayscale()`、`complement()`和`invert()`几个函数是最常见的。

##### lighten

> `lighten($color, $amount)`是围绕颜色的亮度值做调整的，会让颜色变得更亮，亮度值在`0~1`之间，常用`3%~20%`之间。

```scss
$baseColor: #ad141e;

// SCSS
.lighten {
    background: lighten($baseColor, 10%);
}

// CSS
.lighten {
    background: #db1926;
}
```

##### darken

> `darken($color, $amount)`是围绕颜色的亮度值进行调整的，会让颜色变得更暗，亮度值在`0~1`之间，常用`3%~20%`之间。

```scss
$baseColor: #ad141e;

// SCSS
.darken {
    color: darken($baseColor, 10%);
}

// CSS
.darken {
    color: #7f0f16;
}
```

- 总结：

> `lighten()`和`darken()`函数只是在原始颜色的基础上对亮度值进行运算操作，但是生成出来的新颜色在*色相*和*饱和度*上会有略微的变化。
>
> 不管什么颜色，当其亮度值趋近于`0`时，颜色会越来越暗，直到变成黑色；反之趋近于`100%`时，颜色会越来越亮，直到变成白色。

##### saturate / desaturate

> `saturate()`、`desaturate()`是通过改变颜色的饱和度来得到一个新的颜色，当饱和度超过`100%`时按`100%`计算。

```scss
// SCSS
$bg: #ad141e;

.saturate {
    background: saturate($bg, 30%); // 在原色饱和度基础上增加饱和度。
}

.desaturate {
    background: desaturate($bg, 39%); // 在原色饱和度基础上减少饱和度。
}
```

##### adjust-hue

> `adjust-hue()`是通过调整颜色的色相换算出一个新颜色，它需要一个颜色和色相度数值。
>
> - 度数值通常在`-360deg ~ 360deg`之间，也可以使用百分比。

```scss
$bg: #ad141e;

.adjust-hue-deg {
    color: adjust-hue($bg, 30deg);
}

.adjust-hue-per {
    color: adjust-hue($bg, 30%);
}
```

##### grayscale

> `grayscale()`函数会将颜色的饱和度值直接调至`0%`，所以此函数与`desaturate($color, 100%)`的功能是一样的。
>
> - 一般这个函数能将彩色转换成不同程度的灰色，处理过的颜色最大特征就是颜色的饱和度为`0`。

```scss
$bg: #ad141e;

.grayscale {
    background: grayscale($bg);
}

.desaturate {
    background: desaturate($bg, 100%);
}
```

#### Opacity

> 在`CSS`中除了可以使用`rgba`、`hsla`、和`transform`来控制颜色透明度之外，还可以使用`opacity`来控制，只不过前者只是针对颜色上的透明通道处理，而`opacity`是控制整个元素的透明度。
>
> 在`SCSS`中也提供了系列透明函数，主要用来处理颜色的透明度。
>
> - `alpha($color) / opacity($color)`：获取颜色透明度值。
> - `rgba($color, $alpha)`：改变颜色的透明度值。
> - `opacify($color, $amount) / fade-in($color, $amount)`：使颜色更不透明。
> - `transpatentize($color, $amount) / fade-out($color, $amount)`：使颜色更加透明。

## @ 规则

> `Sass`支持`CSS3`的`@`规则以及一些`Sass`专属的规则，也被称为“指令（`directive`）”。这些规则在`Sass`中具有不同的功效。

### @import

> `Sass`扩展了`CSS`的`@import`规则，让它能够引入`SCSS`和`CSS`文件。所有引入的`SCSS`和`Sass`文件都会被合并并输出到一个单一的`CSS`文件，被导入的文件中所定义的变量或者`mixins`都可以在主文件中使用。
>
> `Sass`会在当前目录下寻找其他`Sass`文件，如果是`Rack`、`Rails`或`Merb`环境中则是`Sass`文件目录。也可以通过`:load_paths`选项或者在命令行中使用`--load-path`选项来指定额外的搜索目录。
>
> `@import`根据文件名引入。默认情况下，它会寻找`Sass`文件并直接引入，但是在一下几种情况下，它会编译成`CSS`的`@import`规则：
>
> - 如果文件的扩展名是`.css`。
> - 如果文件名是以`http://`开头。
> - 如果文件名是`url()`。
> - 如果`@import`包含了任何媒体查询`media queries`。
>
> 如果上述情况都没有出现，并且扩展名是`.scss`或`.sass`，该名称的`Sass`或`Scss`文件就会被引入。如果没有扩展名，`Sass`将试着找出具有`.sass`或`.scss`扩展名的同名文件并将其引入。如：
>
> - `@import "foo.scss";`
> - `@import "foo";`
>
> 两者都将引入`foo.scss`文件。

```scss
// 此情况下编译为 CSS 不变。
@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
```

- 使用`@import`引入多个文件：

```scss
@import "rounded-corners", "text-shadow";
```

- 假如你有一个`SCSS`或`Sass`文件需要引入，但是你又不希望它被编译为一个`CSS`文件，可以在文件名前加一个`_`下划线，将告诉`Sass`不要编译成`CSS`文件，就能避免被编译，可以像往常一样引入这个文件，而且可以省略文件名前面的`_`下划线。

> 假如有个文件叫做`_color.scss`，这样就不会编译生成`_color.css`文件；而且引入不需要加下划线：
>
> - 注意：在同一目录下不能同时存在带下划线和不带下划线的同名文件。

```scss
@import "color";
```

- 嵌套`@import`。

> 除了在顶层文件中使用`@import`引入文件，还可以把它们包含在`CSS`规则和`@media`规则中：

```scss
// example.scss 文件
.example {
    color: red;
}

// 引用
#main {
    @import "example";
}

// 编译出来的 CSS
#main .example {
    color: red;
}
```

### @media

> `Sass`中的`@media`指令和`CSS`的使用规则一样，但它有另外的功能，可以嵌套在`CSS`规则中。有点类似`JS`的冒泡功能，如果在样式中使用`@media`指令，它将冒泡到外面。
>
> - 示例：

```scss
// SCSS
.sidebar {
    width: 300px;
    @media screen and (orientation: landspace) {
        width: 500px;
    }
}

// 编译后的CSS
.sidebar {
    width: 300px;
}
@media screen and (orientation: landspace) {
    .sidebar {
        width: 500px;
    }
}
```

- `@media`可以嵌套`@media`：

```scss
// SCSS
@media screen {
    .sidebar {
        @media (orientation: landspace) {
            width: 500px;
        }
    }
}

// 编译后的CSS
@media screen and (orientation: landspace) {
    .sidebar {
        width: 500px;
    }
}
```

- `@media`可以使用插件`#{}`：

```scss
// SCSS
$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;

@media #{$media} and ($feature: $value) {
    .sidebar {
        width: 500px;
    }
}

// 编译后的CSS
@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
    .sidebar {
        width: 500px;
    }
}
```

### @extend

> `SCSS`中的`@extend`是用来**扩展选择器**或**占位符**的，可理解为**继承**。

```scss
// SCSS
.error {
    border: 1px #f00;
    background-color: #fdd;
}

.error .intrusion {
    background-image: url("/image/bg.png");
}

.seriousError {
    @extend .error;
    border-width: 3px;
}

// 编译后的CSS
.error, .seriousError {
    border: 1px #f00;
    background-color: #fdd;
}

.error .intrusion, .seriousError .intrusion {
    background-image: url("/image/bg.png");
}

.seriousError {
    border-width: 3px;
}
```

- 扩展选择器

> `@extend`不止扩展类选择器，还可以扩展任何选择器。

```scss
// SCSS
.hoverlink {
    @extend a:hover;
}

a:hover {
    text-decoration: underline;
}

// 编译后的CSS
a:hover, .hoverlink {
    text-decoration: underline;
}
```

> 复杂型：

```scss
// SCSS
.hoverlink {
    @extend a:hover;
}
.comment a.user:hover {
    font-weight: bold;
}

// 编译后的 CSS
.comment a.user:hover, .comment .user.hoverlink {
    font-weight: bold;
}
```

- 多个扩展

> 假如某个样式要继承多个地方的样式，那么可以使用`@extend`来继承多个选择器或占位符的样式。

```scss
// SCSS
.error {
    border: 1px #f00;
    background-color: #fdd;
}
.attention {
    font-size: 3em;
    background-color: #ff0;
}

.seriousErroe {
    @extend .error;
    @extend .attention;
    border-width: 3px;
}

// 编译后的 CSS
.error, .seriousError {
    border: 1px #f00;
    background-color: #fdd;
}

.attention, .seriousError {
    font-size: 3em;
    background-color: #ff0;
}

.seriousError {
    border-width: 3px;
}
```

- 扩展单一选择器

> `%placeholder`不使用`@extend`显示调用是不会生成任何样式代码的，在选择器中使用占位符也一样。

```scss
// SCSS
// 这段代码在不调用之前不产生任何代码，只有 @extend 调用之后才生成代码
#context a%extreme {
    color: blue;
    font-weight: bold;
    font-size: 2em;
}
// 调用
.notice {
    @extend %extreme; 
}

// 编译后的 CSS
#context a.notice {
    color: blue;
    font-weight: bold;
    font-size: 2em;
}
```

### @at-root

> `@at-root`跳出根元素。当选择器嵌套多层之后，想让某个选择器跳出嵌套就可以使用`@at-root`。

```scss
// SCSS
.a {
    color: red;
    .b {
        color: orange;
        .c {
            color: yellow;
            @at-root .d {
                color: green;
            }
        }
    }
}

// 编译后的 CSS
.a {
    color: red;
}
.a .b {
   color: orange; 
}
.a .b .c {
    color: yellow;
}
.d {
    color: green;
}
```

### @debug

> `@debug`在`Sass`中是用来调试的，当在`Sass`的源码中使用了`@debug`指令之后，`Sass`代码在编译时会在命令终端输出你设置的提示`Bug`。

```scss
// SCSS
@debug 10em + 12em;

// 会在命令终端输出：Line 1 DEBUG: 22em
```

### @warn

> `@warn`和`@debug`功能类似，用来帮助我们更好的调试`Sass`。

```scss
@mixin adjust-location($x, $y) {
  @if unitless($x) { //unitless是内置函数，判断数值是否有“单位”
    @warn "Assuming #{$x} to be in pixels";
    $x: 1px * $x;
  }
  @if unitless($y) {
    @warn "Assuming #{$y} to be in pixels";
    $y: 1px * $y;
  }
  position: relative; left: $x; top: $y;
}

.botton{
    @include adjust-location(20px, 30);
}
```

### @error

> `@error`与`@debug`、`@warn`功能相同。

```scss
// SCSS
@mixin error($x){
  @if $x < 10 {
    width: $x * 10px;
  } @else if $x == 10 {
    width: $x;
  } @else {
    @error "你需要将#{$x}值设置在10以内的数";
  }

}

.test {
  @include error(15);
}

// 编译时输出：你需要将15值设置在10以内的数 on line 7 at column 5
```
