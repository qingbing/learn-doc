'use strict';

/**
 *
 ES5 给 object 扩展了一些静态方法，常用的有两个

 1、Object.create(prototype, [descriptors])
 作用 ： 以指定对象为原型创建新的对象，指定对象会在新对象的 "__proto__" 中显示
 为新的对象指定新的属性，并对属性进行描述
 - value ： 指定值
 - writable ： 标识当前属性是否可以修改，默认false
 - configurable ： 标识当前属性是否可以被删除，默认false
 - enumerable ： 标识当前属性是否能用for in 枚举，默认false

 2、Object.defineProperties(object, descriptors)
 作用 ： 为指定对象扩展多个属性
 - get ： 用来获取当前属性值的回调函数
 - set ： 修改当前属性值的回调函数，并且实参即为修改后的值
 - 存取器属性 ： setter，getter 一个用以存值，一个用以取值

 ES5 给 object 对象本上有两个方法
 get propertyName(){} 用来得到当前属性值的回调函数
 set propertyName(val){} 用来监视当前属性值变化的回调函数

 */

/*
let obj = {
    name: 'qingbing',
    age: 19
};

// 以对象为原型，扩展新对象，会在 __proto__ 中查看到原型对象信息，可以根据原型对象对新对象进行引用
let obj1 = Object.create(obj);
console.log(obj1);
console.log(obj1.name);
obj1.name = '1234';
console.log(obj1.name);

// 扩展新对象，并创建新属性，注意需要对新属性进行对应的描述
let obj2 = Object.create(obj, {
    sex: {
        writable: true, // 是否可以修改，不设置为 false
        configurable: true, // 是否可以被删除，不设置为 false
        enumerable: true, // 是否能用for in 枚举，不设置为 false
        value: 'nan'
    }
});
console.log(obj2);
*/

/*
let obj = {
    firstName: 'qingbing',
    lastName: 'du'
};

Object.defineProperties(obj, {
    fullName: {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (data) {
            let t = data.split(" ");
            this.firstName = t[0];
            this.lastName = t[1];
        }
    }
});
console.log(obj);

obj.fullName = 'Xiaowu Zhang';
console.log(obj.fullName);
console.log(obj.firstName);
*/

// 声明变量
let obj = {
    firstName: 'qingbing',
    lastName: 'du',
    get fullName() { // 定义fullName属性的get方法
        return this.firstName + " " + this.lastName;
    },
    set fullName(data) { // 定义fullName属性的set方法
        let t = data.split(" ");
        this.firstName = t[0];
        this.lastName = t[1];
    },
};

console.log(obj);

obj.fullName = 'Xiaowu Zhang'; // 设置，调用set
console.log(obj.fullName); // 获取，调用get
console.log(obj.firstName);



