# 服务器部署

## 前言

> 博主是纯前端出身，后端语言只自学过[Node](https://nodejs.org/)，对服务器就是十窍通了九窍 —— 一窍不通；最近偶然看到[阿里云](https://www.aliyun.com/)购买服务器和域名有优惠，于是便心血来潮买了台服务器和域名，买的时候意气风发，买完之后就傻眼了，因为只是大概知道服务器的功能，并不知道怎么部署......
> 不过这当然难不倒无所不能的打工人，本着越挫越勇的精神开启了踩坑之路，于是便有了这篇文章。
> 本文记录的是使用两种不同的方式部署服务器`Node`环境，属于小白级别的教程，也欢迎各位大佬纠错指正，多多指教~

## 准备工作

### 服务器

服务器便是我们刚到手的服务器，能够在管理控制台找到公网的`IP`地址，能够在控制台进行远程连接即可，以阿里云为例：

![阿里云管理控制台](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/blog/server/aliyun-server-console.png)

### XShell

`XSell`用来在`Windows`界面下访问远端不同系统下的服务器，从而实现较好的远程控制终端的目的；是一个强大的安全终端模拟软件，支持`SSH1`、`SSH2`、`TELNET`等多种协议，这里用来远程控制我们的服务器。

- 下载：[百度网盘](https://pan.baidu.com/s/1WJFY0sDYe8lR5nmNWsmglQ)，提取码：`6666`。
- 连接：
  - 主机：服务器的公网`IP`地址
  - 用户名：默认为`root`
  - 密码：自己设置的密码，如未设置需去管理控制台中设置登录密码
- 图示：

![XShell图示](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/blog/server/xshell-example.png)

### Node环境

自己电脑上确认已经安装部署了`Node`环境，没有就去[Node官网](https://nodejs.org/)下载并安装`Nodejs`，推荐下载长期维护版。在此用来编写简单的`Node`服务便于测试。

## 使用宝塔部署

> 万事开头难，那就先讲最简单的，使用[宝塔](https://www.bt.cn/)配置服务器，这里直接上手，有兴趣的同学可以自行研究。

![宝塔](https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/blog/server/bt.png)

### 安装宝塔

```shell
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh 6dca892c
```

### 登录宝塔

### 宝塔配置环境

## 手动配置

### 下载Node

### 上传Node

- 连接`Linux`主机
- 输入命令测试是否已安装了`lrzsz`，若没有则安装

```shell
# 查看系统自带的软件包信息
yum provides */rz
# 确认 rz 包存在后安装 lrzsz
yum -y install lrzsz
# 检查是否安装成功
rpm -qa lrzsz
# 进入文件夹输入命令上传文件
rz
```

### 解压Node

```shell
# 下载 Node 压缩包
wget https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz
# 解压 Node 压缩包
tar -xvf node-xxx.tar.xz
# 将解压后的文件移动到指定目录
mv node-xxx nodejs
# 进入 nodejs 目录
cd nodejs
# 进入 bin 目录
cd bin
# 确认 nodejs 下 bin 目录中是否有 node 和 npm 文件
ls
```

- 建立软连接，相当于全局配置环境

```shell
# 建立 npm 软连接
ln -s /app/software/nodejs/bin/npm /usr/local/bin/
# 建立 node 软连接
ln -s /app/software/nodejs/bin/node /usr/local/bin/
```

- 检查`Node`是否安装成功

```shell
# 查看 Node 版本号
npm -v
```

### 安装pm2

```shell
# 安装 pm2
npm install pm2 -g
# 创建软连接
ln -s /app/software/nodejs/bin/pm2 /usr/local/bin/
# 查看进程
pm2 list
# 启动服务
pm2 start app.js
# 停止服务
pm2 stop app.js
```
