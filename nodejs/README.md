# 一、什么是 Node.js
一个基于 Chrome V8 引擎的 JavaScript 运行原环境

# 二、links
- 中文官网 ： http://nodejs.cn/
- 英文官网 ： http://nodejs.org/
- 菜鸟教程 ： https://www.runoob.com/nodejs/nodejs-tutorial.html


# 三、安装(linux)
## 1. 下载：在官网下载linux binaries(x64)
```
wget https://cdn.npm.taobao.org/dist/node/v12.13.1/node-v12.13.1-linux-x64.tar.xz
```

## 2. 安装
```
# 解压，进入目录
tar -xvf node-v12.13.1-linux-x64.tar.xz
cd node-v12.13.1-linux-x64

# 先备份，养成修改重要文件之前备份的习惯
cp /etc/profile /etc/profile.bak

# 修改环境变量
vim /etc/profile; 在末尾加入："export PATH=$PATH:{{nodejs-root}}/bin"

# 让环境变量立即生效
source /etc/profile
```

## 3. 检查安装状态
```
node -v
```

# 四、 运行模式
## 1. repl模式，在命令后输入"node"命令，在里面写入代码
退出
ctrl+C 两次

## 2. 文件运行模式， "node filename"