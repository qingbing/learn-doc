'use strict';

let obj = {
    name: 'qingbing',
    age: 33
};

// 将json对象转换成JSON字符串
let json_str = JSON.stringify(obj);
console.log(json_str);

// 将JSON字符串转换成对象或数组
let obj1 = JSON.parse(json_str);
console.log(obj1);