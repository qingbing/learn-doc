'use strict';


/*
Generator 函数
    概念：
        1、ES6提供的解决异步编程的方案之一
        2、Generator函数是一个状态机，内部封装了不同状态的数据
        3、用来生成遍历对象
        4、可暂停函数（惰性求值），yield 可暂停，next方法可启动，每次返回的是yield后的表达式结果
    特点：
        1、function 与函数名之间有一个星号（*）
        2、内部用yield表达式定义不同的状态
        3、generator函数返回的是指针对象，而不会执行函数内部的逻辑
        4、调用next方法函数内部逻辑开始执行，遇到yield表达式停止，返回{value:yield后的表达式结果/undefined，done}
        5、再次调用next方法会从上一次停止时的yield处开始执行，直到最后
        6、yield语句返回结果通常为undefined，当调用next方法时传参内容会作为启动时yield语句的返回值

 */


// 普通使用
/*
function* mGenerator() {
    console.log('一哥');
    yield 'first';
    console.log('二哥');
    yield 'second';
    console.log('三弟');
}

let mg = mGenerator();
console.log(mg);
mg.next();
mg.next();
mg.next();
*/

// 返回值作为最后一个yield使用

/*
function* myGenerator() {
    let first = yield 'first';
    console.log(first);
    let second = yield 'second'; // second 的值可以用过 mg.next(实参) 进行赋值，赋值以后后面的yeild都可以使用
    console.log(first);
    console.log(second);
    return 'aaa'; // 可以判断当my.next().value === returnVal 时，其实已经遍历完成，默认返回的是undefined
}

let mg = myGenerator();
console.log(mg.next('11'));
console.log(mg.next('22'));
console.log(mg.next('33'));
console.log(mg.next('44'));
console.log('5555');
*/

// 通用 ajax 方法
let myAjax = (url, success, failure) => {
    // promise 状态为 pending：初始化
    // 创建xmlHttp实例对象
    let xmlHttp = new XMLHttpRequest();
    // 监听xmlHttp的状态
    xmlHttp.onreadystatechange = () => { // 有5中状态
        if (xmlHttp.readyState === 4) {
            if (xmlHttp.status === 200) {
                // 请求成功
                if (typeof success === 'function') {
                    success(JSON.parse(xmlHttp.response)); // 或者 xmlHttp.responseText
                }
            } else {
                // 请求失败
                if (typeof  failure === 'function') {
                    failure('暂时没有新数据');
                }
            }
        }
    };

    // xmlHttp.open 设置请求的方式和url
    xmlHttp.open('GET', url);
    // xmlHttp发送请求
    xmlHttp.send();
};

// 获取新闻内容
function getNews(url) {
    myAjax(url, data => {
        console.log(data);
        // 请求评论内容
        let url = `data/comments.json?_=id=${data.id}&` + Math.random();
        // 遍历sender，获取评论信息
        sender.next(url);
    }, errMsg => {
    });
}

// 定义 sender 发送ajax 遍历流程
function* sendJson(url) {
    let commentUrl = yield getNews(url);
    yield getNews(commentUrl);
}

// 使用
let url = `data/news.json?_=` + Math.random();
let sender = sendJson(url);
sender.next();

