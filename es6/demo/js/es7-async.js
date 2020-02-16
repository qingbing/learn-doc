'use strict';

/*
async 函数（ES2017）

概念：真正意义上去结局异步回调的问题，同步流程表达异步操作
本质：Generator的语法糖
语法：
    async function foo() {
        await 异步操作;
        await 异步操作;
    }
特点：
    1、不需要想Generator那样去调用next方法，遇到await就等待，当前的异步操作完成就往下执行
    2、返回的总是 Promise 对象，可以用then方法进行下一步操作
    3、async取代generator函数的星号 * ，await 取代Generator函数的yield
    4、语意上更为明确，使用简单，就目前而言，尚无不良反应
    5、await 返回值
*/

// async 的基本使用
function foo() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
    });
}

async function test() {
    console.log('start', new Date().toTimeString());
    await foo();
    console.log('end', new Date().toTimeString());
    return '23456';
}

// test();


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
    return new Promise((resolve, reject) => {
        myAjax(url, data => resolve(data), err => resolve(false));

        // => 等同于以下代码
        // myAjax(url, function (data) {
        //     resolve(data);
        // }, function (err) {
        //     resolve(false);
        // });
    })
}

// async 异步获取数据
async function sendJson(url) {
    // 请求文章内容
    let data = await getNews(url);
    console.log(data);
    // 请求评论内容
    url = `data/comments.json?_=id=${data.id}&` + Math.random();
    data = await getNews(url);
    console.log(data);
}

// 使用
let url = `data/news.json?_=` + Math.random();
sendJson(url);






