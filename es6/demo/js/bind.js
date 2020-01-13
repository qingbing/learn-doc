// 'use strict';


/**
 * 将函数的this指针指向obj的三种方式
 * fn.call(obj, p1, p2...) : 绑定函数this，并马上执行
 * apply(obj, [p1, p2...]) : 绑定函数this，并马上执行
 * fn.bind(obj, p1, p2...) : 绑定函数this，不立即执行，而是将函数返回
 */


// 指定绑定对象
let obj = {
    name: undefined,
    age: 30,
};

// 指定需要绑定的函数
function init(name, age) {
    // 该函数如果不绑定指针，this将默认指向window，函数将报错
    this.name = name;
    if ('undefined' !== typeof age) {
        this.age = age;
    }
}

// 用 call 绑定函数的this指针并执行
init.call(obj, 'qingbing', 33);
console.log(obj);

// 用 apply 绑定函数的this指针并执行
init.apply(obj, ['qingbing', 34]);
console.log(obj);

// 用 bind 绑定函数的this指针，等待执行
let init1 = init.bind(obj, 'what', 100);
init1();
console.log(obj);

// bind常用于回调函数中绑定函数this
setTimeout(function () {
    console.log(this);
}.bind(obj), 1000);














