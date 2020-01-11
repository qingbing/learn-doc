'use strict';

/*
 * 所有变量必须先声明再使用
// 下面直接使用将报错 "{variable} is not defined"
test = '12';
 */

/*
 * 禁止自定义的函数中的 this 指向 window
function Person(name, age) {
    // 函数中的this默认执行函数本身
    this.name = name;
    this.age = age;
}

// 构造函数需要使用 new 类实例化
var p = new Person('qingbing', 30);
// 以下自调用会报错，这种调用，函数内部的 this 将指向 window
// var p = Person('qingbing', 30);
*/

/*
 * 创建eval作用域
var name = 'qingbing';
// 以下语句再非严格模式下，会将全局的name值改变，在严格模式下，eval内定义的作用域只在本 eval 中有效
eval("var name = 'test'; console.log(name);");
console.log(name);
*/

/*
 * 对象不能有重名属性
// 以下重名定义在语法上会提示错误
var obj = {
    name : 'qingbing',
    name : 'qingbing',
};
*/


