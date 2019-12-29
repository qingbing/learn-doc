// 声明文件系统
let fs = require('fs');
/*
// 异步读取文件内容
fs.readFile("./main.js", function (err, data) {
    if (err) {
        console.log("读取文件错误" + err);
    } else {
        console.log(data.toString());
    }
});
*/

/*
// 同步读取文件内容
let data = fs.readFileSync("./main.js");
if(data){
    console.log(data.toString());
}
*/

/*
// 异步写入文件内容
fs.writeFile("./index.html", "<h1>Hello node js!</h1>", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("文件写入成功");
    }
});
*/

// 同步写入文件内容，返回undefined
// fs.writeFileSync("./index.html", "<h1>Hello world!</h1>");

/*
// 异步读取文件信息
fs.stat('./main.js', function (err, stat) {
    if (err) {
        throw err;
    } else {
        console.log(stat);
    }
});
*/


/**
 * 同步读取文件信息
 *      size : 文件大小
 *      mtime : 文件修改时间
 *      birthtime : 文件创建时间
 *
 *      .isFile() : 判断查看的对象是否是文件
 *      .isDirectory() : 判断查看的对象是否是目录
 */
// var stat = fs.statSync('./main.js');
// console.log(stat);


/*
// 异步删除文件
fs.unlink('./11.js', function (err) {
    if (err) {
        throw  err;
    } else {
        console.log("文件删除成功");
    }
});
*/

/*
// 同步删除文件
var status = fs.unlinkSync('./22.js');
console.log(status);
*/

/*
// 异步创建目录
fs.mkdir('./testdir', function (err) {
    if (err) {
        throw err;
    }
});
*/


/*
// 同步创建目录
fs.mkdirSync('./testdi1r');
*/

/*
// 异步读取目录下文件目录及文件列表
fs.readdir('./testdir', function (err, list) {
    if (err) {
        throw  err;
    } else {
        console.log(list);
    }
});
*/

/*
// 同步读取目录下文件目录及文件列表
var list = fs.readdirSync('./testdir');
console.log(list);
*/


/*
// 异步删除空目录
fs.rmdir('./11', function (err, data) {
    if (err) {
        throw  err;
    } else {
        console.log(data);
    }
});
*/


/*
// 同步删除空目录
var status = fs.rmdirSync('./22');
console.log(status);
*/






