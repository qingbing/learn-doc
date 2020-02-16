'use strict';

/*
Array

1、Array.from(v) : 将伪数组对象或可遍历对象转换为真数组
2、Array.of(v1, v2, v3) : 将一系列值转换成数组
3、find(function(value, index, arr){return true;}) : 找出第一个满足条件返回true的元素
4、findIndex(function(value, index, arr){return true;}) : 找出第一个满足条件返回true的元素下标


*/


// Array.from(v) 的使用示例
function sum(...val) {
    console.log(arguments);
    /*
    arguments.forEach((item, index) => { // error
    });
    */
    Array.from(arguments).forEach((item, index) => {
        console.log(item);
    });
}

sum(2, 3, 4, 5, 6, 7, 8);

// Array.of(v1, v2, v3) 的使用示例
let arr = Array.of(1, '13', 45, 'a');
console.log(arr);


// find(function(value, index, arr){return true;}) 的使用示例
let arr2 = [2, 2, 4, 9, 9, 3, 6, 3, 7, 6, 5, 8];
let val = arr2.find(function (val, index) {
    return val > 3;
});
console.log(val);

// findIndex(function(value, index, arr){return true;}) 的使用示例
let index = arr2.findIndex(function (val, index) {
    return val > 3;
});
console.log(index);








