// require 项目配置
require.config({
    // 加载模块的根路径
    baseUrl: 'js',
    paths: {
        // 定义具体模块
        underscore: 'libs/underscore/underscore-min',
        jquery: 'libs/jquery-3.2.1.min',

        // 定义到目录
        app: 'apps',
        lib: 'libs'
    }
});

// 集合测试
// require(['app/collection'], function (col) {
//
// });

// 数组测试
// require(['app/array'], function (col) {
//
// });

// 与函数有关的函数测试
// require(['app/function'], function (col) {
//
// });

// object的测试
require(['app/object'], function (col) {

});