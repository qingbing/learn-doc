/*
requirejs(["helper/util"], function (util) {
    util.sayHi();
});
*/


// JS最终加载路径拼接规则 ： baseUrl + path[{key}] + ".js"
requirejs.config({
    // 加载模块的根路径
    baseUrl: 'js',
    // 导出有两种方式
    //   - 定义目录别名
    //   - 定义具体的某个模块
    paths: {
        // 定义具体模块
        jquery: 'libs/jquery-3.2.1.min',
        md5: 'libs/md5',
        animal: 'skim/animal',

        // 定义到目录
        app: 'apps',
        commonjs: 'commonjs',
        lib: 'libs',
        helper: 'helper',
        rely: 'rely',

        // 强制命名空间, 不太建议用的方式(一旦使用，必须在config.path中配置key相同的命名空间，并指定路径，在require时也必须使用该命名空间来引用)
        "test/hasName": "apps/define-with-name",
    },
    // 声明文件模块，一个文件可以有多个模块，当一个文件有多个模块时，必须用这个配置
    // 对于声明了bundle的模块，require时直接require 对应的模块ID即可
    bundles: {
        "app/multi-module": ["a", "b"]
    },
    // 声明不规范的模块，require时使用键
    shim: {
        "underscore": {
            // 模块的依赖
            deps: [],
            // 导出（提供的对外变量名）
            exports: "_",
        },
        animal: {
            deps: ["skim/cat", "skim/dog"],
            init : function () {
                console.log('init');
            }
        }
    },
    // 加载依赖
    deps: ["helper/util"],
    // 回调，加载完后执行
    callback: function (util) {
        console.log("require load over : " + util);
    },
});
/*
// 调用
requirejs(['jquery', 'md5', 'app/hello', 'app/sub'], function ($, md5, hello, sub) {
    console.log(md5('222'));
    console.log($('body'));
    hello.say();
    sub.hello();
});
*/


/*
// 调用
require(["app/define-rely","app/define-call"], function (rely, call) {
    // rely.say();
    call();
});
*/


/*
// 调用封装的commonjs
require(['commonjs/a', 'commonjs/b'], function (a, b) {
    a.say();
    b.say();
});
*/

/*
// 定义带一个名字
require(['test/hasName'], function (a) {
    console.log(a.id);
});
*/


/*
// 循环引用，在被依赖模块中对主模块使用require
// 使用commonjs的加载的方式，每个模块都用require，也可以解决undefined的问题
require(["rely/a"], function (a) {
    console.log("config:a --- > " + a);
    a.say();
});
*/

/*
// bundles : 单个文件多模块定义
require(["a", "b"], function (a, b) {
    a.say();
    b.say();
    console.log(a);
    console.log(b);
});
*/

// shim ： 不规范的
require(['animal'], function (animal) {
    animal.sayAll();
});
