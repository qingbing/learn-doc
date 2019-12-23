function show(what) {
    console.log("Display " + what);
}

// exports = show; // 这里实际上是不能用exports执行函数的，最终引用处得到的是{}
// 暴露函数正确的方式
module.exports = show;