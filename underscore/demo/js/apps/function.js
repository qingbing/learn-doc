define(["require", "underscore", "jquery"], function (require, _, $) {
    /**
     * _.bind(function, object, *arguments)
     *      在一个函数上绑定一个对象，之后，无论何时调用函数，函数里的this都指向这个对象
     */
    // var say = _.bind(function (what) {
    //     return this.name + ' say ' + what;
    // }, {name: 'qingbing', sex: 'nan'}, 'hello');
    // var word = say();
    // console.log(word); // qingbing say hello

    /**
     * _.bindAll(object, *methodNames)
     *      将对象上的部分函数强制绑定函数内部this指针为该对象
     *
     */
    // let bindData = {
    //     label: "Test .bindAll",
    //     clickEvent: function () {
    //         // 经过bindAll，this指向object对象
    //         console.log(this); // bindData->{object}
    //     },
    //     hoverEvent: function () {
    //         // 未经过bindAll，this指向元素
    //         console.log(this); // <input type=​"button" value=​"Bind All" id=​"bindAll">​
    //     },
    // };
    // // bindAll
    // _.bindAll(bindData, 'clickEvent');
    // $('#bindAll').bind('click', bindData.clickEvent);
    // $('#bindAll').bind('mouseover', bindData.hoverEvent);

    /**
     * _.partial(function, *arguments)
     *      为函数设置填充值，一旦设置，该值将不能改变
     *      对于不填充的形参，用"_"代替
     */
    // var subtract = function (a, b) {
    //     return a - b;
    // };
    // var sub = _.partial(subtract, 5); // 设置函数第一个参数, 等同与 {_.partial(subtract, 5, _)}
    // var _sub = sub(20); // 因为第一个参数已经设置，这里直接传入第二个三叔
    // console.log(_sub);
    //
    // var sub = _.partial(subtract, _, 5); // 设置函数第二个参数， 第一个参数不填充用"_"代替
    // var _sub = sub(20); // 因为第一个参数已经设置，这里直接传入第二个三叔
    // console.log(_sub);

    /**
     * _.memoize(function, [hashFunction])
     *      缓存函数的计算结果(已经计算过的数据将不在计算，直接使用以前计算的结果)
     */
    // var leiji = _.memoize(function (n) {
    //     // console.log(n);
    //     if (1 === n) {
    //         return 1;
    //     }
    //     return n * leiji(n - 1);
    // });
    // console.log(leiji(3));
    // console.log(leiji(5));

    /**
     * _.delay(function, wait, *arguments)
     *      将 function 延迟 wait 毫秒再执行，*arguments 是传递给function的参数
     */
    // var mylog = _.bind(console.log, console);
    // _.delay(mylog, 1000, 'haha'); // 本句将1秒后输出haha，相当于setTimeOut

    /**
     * _.defer(function, *arguments)
     *      延迟0毫秒(不同系统的最小值)再执行function，*arguments 是传递给function的参数
     */
    // _.defer(function () {
    //     console.log(111111);
    // })
    // console.log(222222); // 先输出 222222 再输出 111111

    /**
     * _.throttle(function, wait, [options])
     *      当重复调用一个函数时，通过wait控制函数被调用的最低频率
     *      window.scroll滚动时非常有用
     */
    // let xx = _.throttle(function () {
    //     console.log(222);
    // }, 1000);
    // for (let i = 0; i < 5; i++) {
    //     setTimeout(function () {
    //         xx();
    //     }, 500 * i);
    // }

    // var throttled = _.throttle(updatePosition, 100);
    // $(window).scroll(throttled)

    /**
     * not test
     * _.debounce(function, wait, [immediate])
     *      返回 function 函数的防反跳版本, 将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 wait 毫秒之后. 对于必须在一些输入（多是一些用户操作）停止到达之后执行的行为有帮助。 例如: 渲染一个Markdown格式的评论预览, 当窗口停止改变大小之后重新计算布局, 等等.
     */
    // var lazyLayout = _.debounce(calculateLayout, 300);
    // $(window).resize(lazyLayout);

    /**
     * _.once(function)
     *      创建一个只能执行一次的函数
     */
    // var init = _.once(function () {
    //     console.log('This sentence can only be called once.');
    // });
    // init();
    // init();

    /**
     * _.after(count, function)
     *      只有在运行了 count 次(包括count)之后才有效果
     */
    // var count = 1;
    // var afterFn = _.after(3, function () {
    //     console.log(`count : ${count}`);
    // });
    // for (; count < 5; count++) {
    //     // console.log(`fn-count : ${count}`);
    //     afterFn();
    // }

    /**
     * _.before(count, function)
     *      函数能执行的次数小于count次
     */
    // var count = 1;
    // var beforeFn = _.before(3, function () {
    //     console.log(`count : ${count}`);
    // });
    // for (; count < 5; count++) {
    //     // console.log(`fn-count : ${count}`);
    //     beforeFn();
    // }

    /**
     * _.wrap(function, wrapper)
     *      将第一个函数 function 封装到函数 wrapper 里面, 并把函数 function 作为第一个参数传给 wrapper
     */
    // var hello = _.wrap(function (name) {
    //     return `Hello ${name}`;
    // }, function (func) {
    //     let sentence = `Will say ${func('qingbing')}`;
    //     console.log(sentence);
    // });
    // hello();

    /**
     * _.negate(predicate)
     *      返回一个新的predicate函数的否定版本
     */
    // var isFalsy = _.negate(Boolean);
    // var r_data = _.find([null, -1, 0, 1, 2], isFalsy);
    // console.log(r_data);

    /**
     * _.compose(*functions)
     *      返回函数集 functions 组合后的复合函数, 也就是一个函数执行完之后把返回的结果再作为参数赋给下一个函数来执行
     *      函数执行顺序，从后往前执行
     */
    var fn = _.compose(function (num) {
        console.log(`1 ${num}`);
        return num + 2;
    }, function (num) {
        console.log(`2 ${num}`);
        return num * 3;
    }, function (num) {
        console.log(`3 ${num}`);
        return num * 5;
    });
    var r_data = fn(5);
    console.log(r_data); // 5*5*3+2 = 77

    return {};
});

































































































