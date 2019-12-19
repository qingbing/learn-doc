// 单文件，多模块定义
define("a", function () {
    return {
        id: "multi-module-idA",
        say: function () {
            console.log("I am " + this.id);
        }
    };
});

define("b", function () {
    return {
        id: "multi-module-idB",
        say: function () {
            console.log("I am " + this.id);
        }
    };
});



requirejs.config({
    // 加载模块的根路径
    baseUrl: 'js',
    // 声明文件模块，一个文件可以有多个模块，当一个文件有多个模块时，必须用这个配置
    // 对于声明了bundle的模块，require时直接require 对应的模块ID即可
    bundles: {
        "app/multi-module": ["a", "b"]
    }
});