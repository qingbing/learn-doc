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

/**
 * 递归删除目录及文件
 *
 * @param {string} path
 * @returns {boolean}
 */
/*
var rmdir = function (path) {
    // 读取文件列表
    var fileList = fs.readdirSync(path);
    fileList.forEach(function (v, i) {
        // 拼接文件信息
        var file = `${path}/${v}`;
        // 读取文件信息
        var stat = fs.statSync(file);
        if (stat.isFile()) {
            // 删除文件
            fs.unlinkSync(file);
        } else {
            // 是目录，需要递归调用删除
            rmdir(file);
        }
    });
    // 删除空目录
    fs.rmdirSync(path);
    return true;
};

var status = rmdir('./testdir');
console.log(status);
*/


/*
// 创建读取流
var readStream = fs.createReadStream('./data/data.txt');

// 读取流事件 : open，错误事件
readStream.on('open', function () {
    console.log('=== 打开了 ===');
});

// 读取流事件 : ready，错误事件
readStream.on('ready', function () {
    console.log('=== 准备好了 ===');
});

// 读取流事件 : data，数据读取阶段 《常用事件》
readStream.on('data', function (data) {
    console.log('=== 读的过程 ===');
    console.log(data.length);
    console.log(readStream.bytesRead);
});

// 读取流事件 : end，完成事件 《常用事件》
readStream.on('end', function () {
    console.log('=== 读完了 ===');
});

// 读取流事件 : close，完成事件
readStream.on('close', function () {
    console.log('=== 关闭了 ===');
});

// 读取流事件 : error，错误事件 《常用事件》
readStream.on('error', function (err) {
    console.log('=== 发生错误 ===');
    throw err;
});
*/

/*
// 创建写入流
var writeStream = fs.createWriteStream('./data/data1.txt');

// 写入流事件 : finish，完成事件
writeStream.on('finish', function () {
    console.log('=== 写完了 ===');
});

// 写入流事件 : error，错误事件
writeStream.on('error', function (err) {
    console.log('=== 发生错误 ===');
    throw err;
});

// 写入数据
writeStream.write("This is a brana");
writeStream.write("This is an apple");
writeStream.write("This is an orange");
writeStream.write("This is a 哈哈");

// 以流的方式写入，必须显示的声明结束
writeStream.end();
*/


/*
// 创建读取流
var readStream = fs.createReadStream('./data/data.txt');

// 创建写入流
var writeStream = fs.createWriteStream('./data/data1.txt');

// 读取流事件 : data，数据读取阶段 《常用事件》
readStream.on('data', function (data) {
    console.log('=== 文件读取中 ===');
    writeStream.write(data);
});

// 读取流事件 : end，完成事件 《常用事件》
readStream.on('end', function () {
// 以流的方式写入，必须显示的声明结束
    writeStream.end();
    console.log('=== 文件复制完成 ===');
});
*/


/*
// 创建读取流
var readStream = fs.createReadStream('./data/data.txt');

// 创建写入流
var writeStream = fs.createWriteStream('./data/data1.txt');

// 将读取流读出的数据直接用在写入流上
readStream.pipe(writeStream);
*/


/*
// 声明压缩模块
var zlib = require('zlib');

// 创建读取流
var readStream = fs.createReadStream('./data/data.txt');

// 创建写入流
var writeStream = fs.createWriteStream('./data/data1.txt.zip');

// 将readStream读出的数据采用zlib的压缩后写入writeStream上
readStream.pipe(zlib.createGzip()).pipe(writeStream);
*/


















