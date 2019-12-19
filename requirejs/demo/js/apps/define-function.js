// 函数式的模块定义 - 返回键值对
define(function () {
    return {
        id: 'function',
        say: function () {
            console.log("I am " + this.id);
        }
    };
});