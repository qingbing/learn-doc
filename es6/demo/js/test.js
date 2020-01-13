'use strict';


// --------- 解构赋值
/**
 * 解构赋值 —— 从对象中
 * let {propertyName1, propertyName2} = obj; // 变量必须是 obj 的属性
 */
let {username, age} = {
    username: 'qingbing',
    sex: 'nan',
    age: 33,
};
console.log(username, age);

/**
 * 解构赋值 —— 从数组中
 * let [var1, var2] = array; // 变量随意命名，从前往后开始匹配
 */
let [a, b] = [1, 2, 3];
console.log(a, b);

/**
 * 解构赋值 —— 为多个形参赋值
 * let [var1, var2] = array; // 变量随意命名，从前往后开始匹配
 */
function show({username, age}) {
    console.log("username : " + username + "; age : " + age);
}

let person = {
    username: 'zhangsan',
    sex: 'nan',
    age: '22',
};
show(person);
show({username: 'qingbing', age: '19'});


// --------- 模板字符串
// 定义变量
let {name, sex} = {
    name: "qingbing",
    sex: "nan",
};
// 定义模板字符串
let msg = `My name is ${name}, I'm ${sex}`;
// 输出
console.log(msg);

// --------- 对象的简写
// 定义变量
let {className, gradeName} = {
    gradeName: 'Grade Two',
    className: 'Class One',
};
// 根据变量定义对象的常见方法
let info1 = {
    className: className,
    gradeName: gradeName,
    seat: 'One',
    getInfo: function () { // 可以省略函数的function
        return this.className;
    }
};
console.log(info1);
// 根据变量定义对象的简化方法（前提：变量和对象的属性名一样才可以）
let info2 = {
    className, // 变量同名的属性可以省略不写
    gradeName,
    seat: 'One',
    getInfo() { // 可以省略函数的 function 标识不写
        return this.className;
    }
};
console.log(info2);


// --------- 箭头函数

/*
作用：定义匿名函数
基本语法：
- 参数
    - 无参数 ： () => console.log('xxx');
    - 一个参数 （箭头左边的小括号可以省略）： i=> i+2
    - 多有一个参数 （箭头左边的小括号不可以省略）： (i, j) => i+j;

- 函数体
    - 函数体只有一条语句或者表达式的时候 {} 可以省略， 自动返回语句执行的结果或者表达式的结果
    - 函数体用 {} 包含的时候(函数体有多条语句，必须用{}包含)，如果需要返回结果，需要在{} 中手动return

使用场景：
- 多用于定义回调函数

箭头函数的特点
- 简洁
- 箭头函数没有字节的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this
- 扩展理解
    - 箭头函数的this看外层是否有函数
    - 如果有，外城函数的this就是箭头函数的this
    - 如果无，那么this就是window
 */

// 无形参的箭头函数
let fun = () => console.log('箭头函数');
fun();
// 1个形参的箭头函数，当只有一个参数的时候，箭头左边的小括号可以省略
let fun1 = i => i + 3;
console.log(fun1(3));

// 多个形参的箭头函数，箭头左边的小括号不可以省略
let fun3 = (i, j) => i + j;
console.log(fun3(3, 4));

// 用 {} 包含，fun4 === fun3
let fun4 = (i, j) => {
    return i + j;
};

// 利用箭头函数变量数组，forEach的简写
[9, 8, 7, 6, 5].forEach((val, index) => {
    console.log(`${index} : ${val}`);
});


// --------- 三点运算符
/*
用途
1. rest（可变，剩下所有）参数
- 用来取代 arguments， 但比arguments 灵活，只能是最后部分形式参数(arguments是伪数组，不能使用array的常规方法)
2. 扩展运算符
- 相当于把数组展开表示

 */
console.log('====== ... =========');

// ... 表示所有参数
let fun5 = function (...val) {
    val.forEach((item, value) => {
        console.log(item, value);
    })
};

// ... 表示除了前面显示定义变量外剩下的所有参数
let fun6 = function (name, age, ...val) {
    val.forEach((item, value) => {
        console.log(item, value);
    })
};

fun5(2, 3);
fun6('qingbing', '19', 3, 4, 5, 6);

let arr = [1, 6];
let arr1 = [2, 3, 4, 5];
// ... 相当于遍历后插入
arr = [arr[0], ...arr1, arr[1]];
console.log(arr);
// ... 相当于遍历打印
console.log(...arr);


// [ 'a', 'b', 'c', 'd', 'e' ]


//


// 转伪数组为真数组



































