// 封装 common js
define(function (require, exports, module) {
    // 在commonjs中同步加载
    // 中括号内所有都是commonJs的原生代码
    let md5 = require('md5');
    console.log(md5(2345));

    // 异步加载模式
    require(["app/define-function"], function (func) {
        func.say();
    });

    // common js 对外暴露接口
    exports.say = function () {
        console.log("common js a");
    };
});
