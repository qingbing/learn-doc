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

// 定一个多个数求和的函数
let sum = (...val) => {
    let total = 0;
    val.forEach((value, index) => {
        total += value;
    });
    return total;
};
// 多个数求和
console.log(sum(5, 7, 9, 4, 3));
// 数组求和
console.log(sum(...[5, 7, 9, 4, 3]));


// --------- 形参默认
console.log('====== 形参默认 =========');
// 定义一个求和的函数，给最后一个参数指定默认值
let mySum = (a, b = 6) => {
    return a + b;
};
console.log(mySum(5));
console.log(mySum(5, 7));


// --------- Promise 承诺对象
/*
Promise
    理解：
        Promise对象代表未来将要发生的事件（通常时一个异步操作）
        有了 Promise对象，可以将异步的操作以同步的流程表达出来，避免了层层嵌套的回调函数（俗称"回调地狱"）
        es6的Promise对象是一个构造函数，需要用new来生成promise实例
    使用：
        // 创建 promise 实例
        let promise = new Promise((resolve, reject) => {
            // 初始化的promise实例状态为pending
            if (true) {
                resolve(data); // 修改 promise实例 的状态为 fullfilled
            } else {
                reject(errMsg); // 修改 promise实例 的状态为 rejected
            }
        });

        // 调用promise的then
        promise.then((data) => {
            console.log('success');
        }, (errMsg) => {
            console.log('failure');
        });
    promise 实例的三中状态
        pending ： 初始化状态
        fullfilled ： 成功状态
        rejected ： 失败状态

    应用
        使用 promise 实现超时处理
        使用 promise 封装处理ajax请求
            let request = new XMLHttpRequest();
            request.onreadystatechange = () => {
            };
            request.responseType = 'json';
            request.open('get', `${url}`);
            request.send();

 */

/*

console.log(111);
let promise = new Promise((resolve, reject) => {
    console.log(222);
    setTimeout(() => {
        console.log(444);
        if (true) {
            resolve('hello');
        } else {
            reject('error');
        }
    }, 1000);
});
console.log(333);
promise.then((data) => {
    console.log(data, ' success');
}, (errMsg) => {
    console.log(errMsg, ' failure');
});
*/


let ajax = url => {
    return new Promise((resolve, reject) => {
        // promise 状态为 pending：初始化
        // 创建xmlHttp实例对象
        let xmlHttp = new XMLHttpRequest();
        // 监听xmlHttp的状态
        xmlHttp.onreadystatechange = () => { // 有5中状态
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    // 请求成功，promise 状态为 fullfilled：成功
                    resolve(JSON.parse(xmlHttp.response)); // 或者 xmlHttp.responseText
                } else {
                    // 请求失败，promise 状态为 rejected：失败
                    reject('暂时没有新数据');
                }
            }
        };

        // xmlHttp.open 设置请求的方式和url
        xmlHttp.open('GET', url);
        // xmlHttp发送请求
        xmlHttp.send();
    });
};


// promise 的then的链式调用，必须在 then 中返回 一个promise
let url = `data/news.json?_=` + Math.random();
ajax(url).then(data => {
    console.log("消息内容 => ", data);

    // 请求评论内容
    let url = `data/comments.json?_=` + Math.random();
    return ajax(url);
}, err => {
    console.log("消息内容失败 => ", err);
}).then(data => {
    console.log("消息评论 => ", data);
}, err => {
    console.log("消息评论失败 => ", err);
});


// --------- Symbol 新增数据类型
/*
前言 ： ES5中对象的属性名都是字符串，容易造成重名，污染环境
Symbol
    概念：ES6中添加了一种原始的数据类型Symbol（已有的原始数据类型：String, Number, Boolean, Null, Undefined, Object）
    特点：
        1、Symbol属性值对应的值是唯一的，解决命名冲突问题
        2、Symbol值不能与其他数据进行计算，包括字符串拼接
        3、for in，for of 遍历时不会遍历Symbol的属性
    使用：
        1、调用Symbol函数得到symbol的值
            let symbol = Symbol();
            let obj = {};
            obj[symbol] = 'hello';
        2、传参标识
            let symbol1 = Symbol('One');
            let symbol2 = Symbol('Two');
            console.log(symbol1); // Symbol('One')
            console.log(symbol2); // Symbol('Two')
        3、内置symbol值
            除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，执行语言内部使用的方法
            - Symbol.iterator
            - 对象的 Symbol.iterator 属性，指向该对象的默认遍历器方法
 */

let symbol = Symbol();
let obj = {name: 'qingbing'};
obj[symbol] = 'hello';
console.log(obj);

for (let i in obj) { // for-in 不能遍历symbol
    console.log(i, obj[i]);
}


let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1 === symbol2); // false

// 可以指定常量值
const PERSON_KEY = Symbol('person_key');
console.log(PERSON_KEY);



// --------- iterator 遍历 for-of
/*
概念：iterator 是一种接口机制，为各种不同的数据结构提供统一的访问机制
作用：
    1、为各种数据结构提供一个统一的、简便的访问接口
    2、使得数据结构的成员能够按照某种次序排列
    3、ES6 创造了一种新的遍历命令 for...of循环，Iterator主要供for...of消费
工作原理：
    - 创建一个指针对象（遍历器对象），指向数据结构的开始位置
    - 第一次调用next方法，指针自动指向数据结构的第一个成员
    - 接下来不断调用next方法，指针会一直后移，直到数据结构的最后一个成员
    - 每调用next方法返回一个包含value和done的对象，{value : 当前成员, done : boolean值}
        - value ： 当前成员的值，
        - done ： 当前数据接口是否遍历结束
        - 当遍历结束时返回的value是undefined，done值为false

原生具备iterator接口的数据（可用for...of遍历）
扩展理解：
    1、当数据结构上部署了Symbol.iterator接口，该数据就是可以用 for...of 遍历
    2、当使用for...of 遍历数据时，该数据会自动去找Symbol.iterator 属性
    // Symbol.iterator 属性指向对象的默认遍历方法
        Array
        String
        arguments
        set 容器
        map 容器
 */

// 模拟指针对象（遍历器对象）
let myIterator = (arr) => {
    let curIndex = 0;
    return {
        next() {
            return curIndex < arr.length ? {value: arr[curIndex++], done: false} : {value: undefined, done: true};
        }
    };
};
// 定义数组
let arr = [9, 8, 6, 5, 4, 3];
let myIteratorObj = myIterator(arr);
while (true) {
    let item = myIteratorObj.next();
    console.log(item);
    if (item.done) {
        break;
    }
}

console.log(myIteratorObj.next());
console.log(myIteratorObj.next());
console.log(myIteratorObj.next());

console.log("===== for-of  ====== ");
// 循环遍历 Array
for (let i of arr) { // i 为值
    console.log(i);
}
console.log("===== for-in  ====== ");
// 循环遍历 Array
for (let i in arr) { // i 为索引
    console.log(arr[i]);
}


// 定义Object 数据
let obj = {
    username: 'qingbing',
    age: 22,
    [Symbol.iterator]: function () {
        let curIndex = 0;
        let _obj = Object.values(this);
        let len = _obj.length;
        return {
            next() {
                return curIndex < len ? {value: _obj[curIndex++], done: false} : {value: undefined, done: true};
            }
        };
    }
};

console.log("===== object for-in  ====== ");
console.log(1234);
// 循环遍历Object
for (let i of obj) {
    console.log(i);
}


console.log(1234);














