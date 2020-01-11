'use strict';

/**
 Array.prototype.indexOf(value) : 得到值在数组中的第一个下标
 Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
 Array.prototype.forEach(function (item, index) {}) : 遍历数组
 Array.prototype.map(function (item, index) {}) : 遍历数组，返回一个新的数组，返回加工之后的值
 Array.prototype.filter(function (item, index) {}) : 遍历过滤出一个新数组，返回条件为true的值
 */


let arr = [2, 4, 3, 1, 2, 5, 5, 4];

// Array.prototype.indexOf(value) : 得到值在数组中的第一个下标
console.log(arr.indexOf(4));

// Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
console.log(arr.lastIndexOf(4));

// Array.prototype.forEach(function (item, index) {}) : 遍历数组
arr.forEach(function (item, index) {
    console.log(index + " : " + item);
});

// Array.prototype.map(function (item, index) {}) : 遍历数组，返回一个新的数组，返回加工之后的值
let arr2 = arr.map(function (item, index) {
    return item + 10;
});
console.log(arr2);

// Array.prototype.filter(function (item, index) {}) : 遍历过滤出一个新数组，返回条件为true的值
let arr3 = arr.filter(function (item, index) {
    return 0 === item % 2;
});
console.log(arr3);





















