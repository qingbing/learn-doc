function sayHi() {
    console.log('hello world');
}

define(function () {
    return { // 导出，外部才能使用
        sayHi: sayHi
    };
});