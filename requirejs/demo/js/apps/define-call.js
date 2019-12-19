// 函数式的模块定义 - 返回一个函数
define(function () {
    return function () {
        console.log("I am define-call");
    };
});
// 或者 带有参数 require
define(function (require) {
    // 使用 require("module/name")();
    return function () {
        console.log("I am define-call");
    };
});