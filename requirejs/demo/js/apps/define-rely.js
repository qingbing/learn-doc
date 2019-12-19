// 依赖式模块定义，依赖的引入依赖与data-main的路径和requirejs.config定义
define(['app/define-function'], function (df) {
    df.say();
    return {
        id: 'rely-define',
        say: function () {
            console.log("I am " + this.id);
        }
    };
});