'use strict';

/*
Object

1、Object.is(v1, v2) : 判断两个数据是否完全相等
2、Object.assign(target, source1, source2..) : 将源对象的属性复制到目标对象上
3、直接操作 __proto__(隐式原型) 属性 :
 let obj2 = {};
 obj2.__proto__ = obj1;
*/

console.log(0 == -0); // true
console.log(NaN == NaN); // false : 知识点，NaN 和任意值对比都是false

// Object.is(v1, v2) 的使用，以下两种是特殊的反例，对比的是字符串，其他的正常
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true

console.log(Object.is(1, 1)); // true

// Object.assign(target, source1, source2..) 的使用
let obj = {};
let obj1 = {username: 'qingbing', 'age': 33};
let obj2 = {sex: '男'};
Object.assign(obj, obj1, obj2);
console.log(obj); // {username: "qingbing", age: 33, sex: "男"}

// 直接操作 __proto__(隐式原型) 的示例代码
let obj3 = {};
let obj4 = {money: 11};
obj3.__proto__ = obj4;
console.log(obj3.money);







