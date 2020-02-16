'use strict';

/*
Object

对数据/对象的拷贝分为两种
    浅拷贝 ： 拷贝的引用，修改拷贝以后的数据会影响到原数据，使得原数据不安全
    深拷贝（深度克隆） ： 拷贝的时候生成新数据，修改拷贝以后的数据不会影响到原数据

拷贝数据：
    基本数据类型：
        拷贝后会生成一份新的数据，修改拷贝以后的数据不会影响原数据
    对象/数组
        拷贝后不会生成一份新的数据，而是拷贝的引用，修改拷贝以后的数据会影响原数据
        拷贝数组/对象时，不是生成新的数据而是复制了一份引用



    let obj = {username : 'qingbing'}
    let obj1 = obj; // obj1 复制了obj在栈内存的引用
2. 常用的拷贝技术
    1、arr.concat() : 数组浅拷贝
    2、arr.slice() : 数组浅拷贝
    3、JSON.parse(JSON.stringify(arr/obj)) : 数组或对象深拷贝，但不能处理函数数据
    4、浅拷贝包含函数的对象/数组
    5、深拷贝包含函数的对象/数组

*/

/*

//
let str = 'abcd';
let str1 = str;
str1 = '';
console.log(str); // abcd

//
let bool = true;
let bool1 = bool;
bool1 = false;
console.log(bool); // true


let obj = {username: 'qingbing', age: 22};
let obj1 = obj;
obj1.username = 'user';
console.log(obj); // {username: "user", age: 22}

let arr = [1, 3, 6, 7];
let arr1 = arr;
arr1[0] = 'qingibng';
console.log(arr); // ["qingibng", 3, 6, 7]

*/

/*

拷贝数据的方法：
    1、直接赋值给一个变量 // 浅拷贝
    2、Object.assign() // 浅拷贝
    3、Array.prototype.contact() :  // 浅拷贝
    4、Array.prototype.slice() :  // 浅拷贝
    5、JSON.parse(JSON.stringify(arr/obj))  // 深拷贝，拷贝的数据里不能有函数，处理不了

 */
/*

let obj = {username: 'user'};
let obj2 = Object.assign(obj);
obj2.username = 'qingbing';
console.log(obj);

let arr = [1, 2, {username: 'user'}];
let arr2 = arr.concat(); // 合并数组，没有参数就等同于复制数组
arr2[0] = 'test0';
arr2[2].username = 'qingbing';
console.log(arr); // [1, 2, {username: "qingbing"] // 数组中的基本数据为深拷贝，数组/对象为浅拷贝



let arr3 = arr.slice(); // 拷贝从startIndex, endIndex的数据成一个新的数组，当不传参数就等同于复制数组
arr3[0] = 'test0';
arr3[2].username = 'haha';
console.log(arr); // [1, 2, {username: "haha"] // 数组中的基本数据为深拷贝，数组/对象为浅拷贝


let arr4 = JSON.parse(JSON.stringify(arr));
arr4[0] = 'test0';
arr4[2].username = '567';
console.log(arr); // [1, 2, {username: "haha"]
console.log(arr4); // ['test0', 2, {username: "567"]
*/


/*
思考：
    如何实现深度拷贝（克隆）
    拷贝的数据有对象/数组
    拷贝的数据里不能有对象/数组
    即使有对象/数组可以继续遍历对象/数组拿到里面的每一项值，一直到拿到基本数据类型，然后再去复制，这就是深度拷贝

知识点储备
    如何判断数据类型：arr ---> Array  null ---> Null
    1、typeof 返回的数据类型 ： String， Number， Boolean， Undefined，Object（null返回的是Object），Function
    2、Object.prototype.toString.call(obj) : 获取数据类型
    3、for in 循环遍历，对象（属性名）/数组（下标）

 */

console.log(Object.prototype.toString.call(1).slice(8, -1)); // Number
console.log(Object.prototype.toString.call(1.1).slice(8, -1)); // Number
console.log(Object.prototype.toString.call(NaN).slice(8, -1)); // Number
console.log(Object.prototype.toString.call(Infinity).slice(8, -1)); // Number
console.log(Object.prototype.toString.call(false).slice(8, -1)); // Boolean
console.log(Object.prototype.toString.call('ab').slice(8, -1)); // String
console.log(Object.prototype.toString.call(null).slice(8, -1)); // Null
console.log(Object.prototype.toString.call({}).slice(8, -1)); // Object
console.log(Object.prototype.toString.call([]).slice(8, -1)); // Array
console.log(Object.prototype.toString.call(() => {}).slice(8, -1)); // Function



function clone(data) {
    // 初始化变量，成为最终克隆的数据
    let R;
    let type = Object.prototype.toString.call(data).slice(8, -1);
    if ('Object' === type) {
        R = {};
    } else if ('Array' === type) {
        R = [];
    } else {
        return data;
    }

    // 利用for in循环对象/数组
    for (let i in data) {
        R[i] = clone(data[i]);
    }
    return R;
}

let data = {
    'user': 'user',
    show() {
        console.log(this.user);
    },
    'data': [{
        course: '语文',
        score: 99,
    }, {
        course: '数学',
        score: 99,
    }]
};

let data1 = clone(data);
data1.data[0].score = 100;
console.log(data);
console.log(data1);


