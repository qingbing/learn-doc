# links [跟山地人学RequireJS系列教程]
- https://search.bilibili.com/all?keyword=%E8%B7%9F%E5%B1%B1%E5%9C%B0%E4%BA%BA%E5%AD%A6RequireJS%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B&from_source=nav_search

# chapter-00 : 如何引入一个util模块下的sayHi 方法
# chapter-01 : requirejs.config 使用，配置如何加载文件
# chapter-02 : data-main 加载的顺序问题（require加载完后，才会拿data-main的文件），异步问题
- require.js
    - data-main
        require-module*
- other.js

如果不是都用require来管理js，容易出现异步加载问题
# chapter-03 : RequireJS中如何定义模块-上
- define
- define commonJs

# chapter-04 : RequireJS中如何定义模块-下



## 1. 定义模块
- 键值对的定义方式
```javascript
define({key:value})
```
- 函数式的定义方式
```
define(function (){
    return {
        key : value
    };
});
```
- 依赖式定义
```
def
```
- 一个模块一个文件（强烈建议）
## 2. 使用
// 使用
require(["moduleA", "moduleB"], function(instanceA,instanceB){
    
});