'use strict';

/*
Class

1、通过class定义类/实现类的继承
2、在类中通过constructor定义构造方法
3、通过new来创建类的实例
4、通过extends来实现类的继承
5、通过super调用父类的构造方法
6、重写从父类中继承的方法
*/

class Person {
    // 构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 其他普通函数
    info() {
        console.log(`name : ${this.name}; age : ${this.age}`);
    }
}

let p1 = new Person('qingbing', 34);
console.log(p1);
p1.info();

class Worker extends Person {

    constructor(name, age, sex) {
        super(name, age); // 如果子类必须要 contructor 的话，第一行必须使用 super 函数调用父类
        this.sex = sex;
    }

    // 重写父类方法
    info() {
        console.log(`name : ${this.name}; age : ${this.age}, sex : ${this.sex}`);
    }
}

let w1 = new Worker('qingbing', 34, 'nan');
console.log(w1);
w1.info();








