# Java基础

- `Java`基础是学习`JavaEE`、大数据、`Android`开发的基石！
- `Java`基础知识图解：

![Java基础知识图解](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/java/study-java-basic.png)

[toc]

## 软件开发介绍

- 软件：即一系列按照特定顺序组织的计算机数据和指令的集合，有系统软件和应用软件之分
- 人机交互方式：
  - 图形化界面`Graphical User Interface, GUI`这种方式简单直观，使用者易于接受，容易上手操作
  - 命令行方式`Command Line Interface, CLI`需要有一个控制台，输入特定的指令，让计算机完成一些操作，较为麻烦，需要记住一些指令
  - `Pascal`之父`Nicklaus Wirth`：`Algorithms+Data Structures=Programs`
- 常用的`DOS`命令：
  - `dir`：列出当前目录下的文件以及文件夹
  - `md`：创建目录
  - `rd`：删除目录
  - `cd`：进入指定目录
  - `cd..`：退回到上一级目录
  - `cd\`：退回到根目录
  - `del`：删除文件
  - `exit`：退出`dos`命令行
- 常用快捷键：
  - `← →`：移动光标
  - `↑ ↓`：调阅历史操作命令
  - `Delete`和`Backspace`：删除字符

## 计算机编程语言介绍

- 语言：是人与人之间用于沟通的一种方式，例如中国人之间用普通话沟通，与外国人沟通就需要学习英语
- 计算机语言：人与计算机交流的方式
  - 如果人要与计算机沟通，就要学习计算机语言
  - 计算机语言有很多种，如：`C、C++、Java、PHP、Kotlin、Python、Scala`等
- 第一代语言：机器语言，指令以二进制代码形式存在
- 第二代语言：汇编语言，使用助记符表示一条机器指令
- 第三代语言：高级语言
  - `C、Pascal、Fortran`面向过程的语言
  - `C++`面向过程/面向对象的语言
  - `Java`跨平台的纯面向对象的语言
  - `.NET`跨平台的语言
  - `Python、Scala...`
- 安卓系统架构

![安卓系统架构](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/java/Google-Android.jpg)

- [流行编程语言排行](https://www.tiobe.com/tiobe-index/)

## Java语言概述

- `Java`是`SUN`（`Stanford University Network`，斯坦福大学网络公司）`1995`年推出的一门高级编程语言
- 是一种面向`Internet`的编程语言，`Java`一开始富有吸引力是因为`Java`程序可以在`Web`浏览器中运行，这些`Java`程序被称为`Java`小程序（`applet`），`applet`使用现代的图形用户界面与`Web`用户进行交互，`applet`内嵌在`HTML`代码中
- 随着`Java`技术在`web`方面的不断成熟，已经成为`Web`应用程序的首选开发语言
  - 后台开发：`Java`、`PHP`、`Python`、`Go`、`Node.js`

### Java语言简史

- `1991`年`Green`项目，开发语言最初命名为`Oak`（橡树）
- `1994`年，开发组意识到`Oak`非常适合于互联网
- `1996`年，发布`JDK 1.0`，约`8.3`万个网页应用`Java`技术来制作
- `1997`年，发布`JDK 1.1`，`JavaOne`会议召开，创当时全球同类会议规模之最
- `1998`年，发布`JDK 1.2`，同年发布企业平台`J2EE`
- `1999`年，`Java`分成`J2SE`、`J2EE`和`J2ME`，`JSP/Servlet`技术诞生
- `2004`年，发布里程碑式版本：`JDK 1.5`，为突出此版本的重要性，更名为`JDK 5.0`
- `2005`年，`J2SE -> JavaSE`，`J2EE -> JavaEE`，`J2ME -> JavaME`
- `2009`年，`Oracle`公司收购`SUN`，交易价格`74`亿美元
- `2011`年，发布`JDK 7.0`
- `2014`年，发布`JDK 8.0`，是继`JDK 5.0`以来变化最大的版本
- `2017`年，发布`JDK 9.0`，最大限度实现模块化
- `2018`年`3`月，发布`JDK 10.0`，版本号也称为`18.3`
- `2018`年`9`月，发布`JDK 11.0`，版本号也称为`18.9`
