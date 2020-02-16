'use strict';

/*
Number

1、二进制和八进制数值表示方法 ： 二进制用 0b, 八进制用 0o
2、Number.isFinite(i) : 判断是否是有限大的数
3、Number.isNaN(i) : 判断是否是NaN
4、Number.isInteger(i) : 判断是否是整数
5、Number.parseInt(str) : 将字符串转换为对应的数值
6、Math.trunc(i) : 直接去除小数部分
*/

console.log(0b1010); // 10

console.log(0o56); // 46

console.log(Number.isFinite(Infinity)); // false

console.log(Number.isNaN(NaN)); // true

console.log(Number.isInteger(123.1)); // false
console.log(Number.isInteger(123.0)); // true
console.log(Number.isInteger(123)); // true

console.log(Number.parseInt('123sdf')); // 123
console.log(Number.parseInt('a123sdf')); // NaN

console.log(Math.trunc(123.1)); // 123
console.log(Math.trunc(123.6)); // 123








