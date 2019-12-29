let fs = require('fs');

let p1 = new Promise(function (resolve, reject) {
    fs.readFile('./data/promise_01.txt', function (err, data) {
        if (err) {
            reject("promise_01.txt 读取错误");
        } else {
            resolve(data.toString());
        }
    });
});



let p2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/promise_02.txt', function (err, data) {
        if (err) {
            reject("promise_02.txt 读取错误");
        } else {
            resolve(data.toString());
        }
    });
});

// 利用 Promise.all 只要有一个err发生，将不进行then里面的方法
// 利用 Promise.all 方法可以实现手动调整异步输出的顺序，相当于把异步变成了同步
Promise.all([p2, p1]).then(function (datas) {
    for (let i = 0; i < datas.length; i++) {
        console.log(datas[i]);
    }
}, function (errs) {
    console.log(errs);
});
