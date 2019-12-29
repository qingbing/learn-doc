define(['require', 'underscore'], function (require, _) {

    /**
     * _.each(list, iteratee, [context])
     *      遍历list的所有元素，不可以通过return 修改list的内容
     *      返回list指针
     *      回调函数{return false}不终止继续遍历
     *      s_list === r_list
     */
    // var s_list = [1, 2, 3];
    // var r_list = _.each(s_list, function (v, i) {
    //     console.log("index : " + i + "; v : " + v);
    // });
    // console.log(s_list, r_list); // [1, 2, 3] [1, 2, 3]
    // s_list[0] = 200;
    // console.log(s_list, r_list); // [200, 2, 3] [200, 2, 3]


    /**
     * _.map(list, iteratee, [context])
     *      遍历list的所有元素，可以通过return生成新的list
     *      要获取返回就必须在回调中return 每一个key对应的新值
     */
    // var s_list = [1, 2, 3];
    // var r_list = _.map(s_list, function (v, i) {
    //     console.log("index : " + i + "; v : " + v);
    // });
    // console.log(s_list, r_list); // [1, 2, 3] [undefined, undefined, undefined]
    // var r_list = _.map(s_list, function (v, i) {
    //     return v * 2;
    // });
    // console.log(s_list, r_list); // [1, 2, 3] [2, 4, 6]

    /**
     * _.reduce(list, iteratee, [memo], [context])
     *      遍历list，让每一个元素和memo进行操作，返回最后计算的结果
     *      没有memo传递给reduce的初始调用，iteratee不会被列表中的第一个元素调用。第一个元素将取代memo参数传递给列表中下一个元素调用的iteratee函数
     *
     */
    // var s_list = [2, 3, 4];
    // var r_num = _.reduce(s_list, function (memo, num, key, list) {
    //     return memo + num;
    // }, 6);
    // console.log(r_num); // 15
    // var r_num_2 = _.reduce(s_list, function (memo, num, key, list) {
    //     return memo * num;
    // }, 6);
    // console.log(r_num_2); // 144

    /**
     * _.reduceRight(list, iteratee, memo, [context])
     *      功能同 _.reduce，只是遍历的顺序从后面开始而已
     */
    // var s_list = ['a', 'b', 'c', 'd', 'e'];
    // var r_str = _.reduceRight(s_list, function (memo, value, key, list) {
    //     return memo + value;
    // }, 'xxxx');
    // console.log(r_str); // xxxxedcba

    /**
     * _.find(list, predicate, [context])
     *      通过 predicate 回调（返回bool），当回调返回 true时，返回对应值并终止遍历
     */
    // var s_list = ['a', 'b', 'c', 'd', 'e'];
    // var char = _.find(s_list, function (val, index, list) {
    //     return "c" == val;
    // });
    // console.log(char); // c
    // var char = _.find(s_list, function (val) {
    //     return "c" == val;
    // });
    // console.log(char); // c

    /**
     * _.filter(list, predicate, [context])
     *      通过 predicate 回调（返回bool），过滤并返回回调为 true 的值
     */
    // var s_list = [2, 3, 4, 5, 6, 7, 8, 9];
    // var r_arr = _.filter(s_list, function (val, index, list) {
    //     return 0 == val % 2;
    // });
    // console.log(r_arr); // [2, 4, 6, 8]

    /**
     * _.where(list, properties)
     *      查找二维属性数组，返回符合输入数组的数组成一个新二维数组。类似数据表的select-all
     */
    // var s_list = [
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var xx = _.where(s_list, {sex: "nv", age: 18});
    // console.log(s_list, xx); // [{name: "qingbing", sex: "nan", age: 22}, {name: "yongjing", sex: "nv", age: 21}, {name: "chengyi", sex: "nan", age: 20}, {name: "nianyi", sex: "nv", age: 18}] [{name: "nianyi", sex: "nv", age: 18}]

    /**
     * _.where(list, properties)
     *      查找二维属性数组，返回符合输入数组的数组。类似数据表的select-one
     */
    // var s_list = [
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var xx = _.findWhere(s_list, {sex: "nv"});
    // console.log(s_list, xx); // [{name: "qingbing", sex: "nan", age: 22}, {name: "yongjing", sex: "nv", age: 21}, {name: "chengyi", sex: "nan", age: 20}, {name: "nianyi", sex: "nv", age: 18}] {name: 'yongjing', sex: 'nv', age: 21}

    /**
     * _.reject(list, predicate, [context])   => 与 filter 相反
     *      通过 predicate 回调（返回bool），过滤并返回回调为 false 的值
     */
    // var s_list = [2, 3, 4, 5, 6, 7, 8, 9];
    // var r_arr = _.reject(s_list, function (val, index, list) {
    //     return 0 == val % 2;
    // });
    // console.log(r_arr); // [3, 5, 7, 9]

    /**
     * _.every(list, [predicate], [context])
     *      通过 predicate 回调（返回bool），当所有的回调都返回 true 时返回true，否则返回false
     */
    // var s_list = [true, 1, null, 'yes'];
    // var r_bool = _.every(s_list);
    // console.log(r_bool); // false
    //
    // var s_list = [true, 1, 'str'];
    // var r_bool = _.every(s_list);
    // console.log(r_bool); // true
    //
    // var s_list = [2, 4, 6, 8];
    // var r_bool = _.every(s_list, function (val, index, list) {
    //     return 0 == val % 2;
    // });
    // console.log(r_bool); // true

    /**
     * _.some(list, [predicate], [context])
     *      通过 predicate 回调（返回bool），只要有回调都返回 true 时返回true，否则返回false
     */
    // var s_list = [true, 1, null, 'yes'];
    // var r_bool = _.some(s_list);
    // console.log(r_bool); // true
    //
    // var s_list = [true, 1, 'str'];
    // var r_bool = _.some(s_list);
    // console.log(r_bool); // true
    //
    // var s_list = [2, 4, 6, 8];
    // var r_bool = _.some(s_list, function (val, index, list) {
    //     return 0 == val % 2;
    // });
    // console.log(r_bool); // true

    /**
     * _.contains(list, value, [fromIndex])
     *      判断list里面是否包含 value， 使用 "===" 来检测，如果list为数组，内部使用indexOf啦进行判断
     *      如果设置 fromIndex，将从这个索引位置开始进行检测
     */
    // var s_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // var r_index = _.contains(s_list, 2);
    // console.log(r_index); // true
    // var r_index = _.contains(s_list, 2, 4);
    // console.log(r_index); // false

    /**
     * _.invoke(list, methodName, *arguments)
     *      在list的每个元素上执行methodName方法，好想只能调用数据自身的方法
     *      s_list === r_list
     */
    // var s_list = [[4, 5, 3], [6, 7, 2], [8, 9, 7]];
    // var r_list = _.invoke(s_list, 'sort'); // 常用的methodName => reverse， sort， toString 等
    // console.log(r_list); // [[3, 4, 5] 2, 6, 7] [7, 8, 9]]

    /**
     * _.pluck(list, propertyName)
     *      萃取map数组对象中某属性值，返回一个数组
     */
    // var s_list = [
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_list = _.pluck(s_list, 'name'); // ["qingbing", "yongjing", "chengyi", "nianyi"]
    // console.log(r_list);
    // var r_list = _.pluck(s_list, 'sex'); // ["nan", "nv", "nan", "nv"]
    // console.log(r_list);

    /**
     * _.max(list, [iteratee], [context])
     *      返回list中的最大值
     *      如果传递 iteratee ，这个 iteratee 必须返回作为 max 对比的数据
     */
    // var s_list = [3, 6, 7, 8, 4, 5];
    // var r_max = _.max(s_list);
    // console.log(r_max); // 8
    // var s_list = [
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_max_member = _.max(s_list, function (val, index, list) {
    //     return val.age; // 返回对比的数据
    // });
    // console.log(r_max_member); // {name: "qingbing", sex: "nan", age: 22}

    /**
     * _.min(list, [iteratee], [context])
     *      返回list中的最小值
     *      如果传递 iteratee ，这个 iteratee 必须返回作为 min 对比的数据
     */
    // var s_list = [3, 6, 7, 8, 4, 5];
    // var r_min = _.min(s_list);
    // console.log(r_min); // 3
    // var s_list = [
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_min_member = _.min(s_list, function (val, index, list) {
    //     return val.age; // 返回对比的数据
    // });
    // console.log(r_min_member); // {name: "nianyi", sex: "nv", age: 18}

    /**
     * _.sortBy(list, iteratee, [context])
     *      将list排序
     *      如果传递 iteratee ，这个 iteratee 必须返回作为 sort 对比的数据
     */
    // var s_list = [3, 6, 7, 8, 4, 5];
    // var r_list = _.sortBy(s_list);
    // console.log(r_list); // 3
    // var s_list = [
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_list = _.sortBy(s_list, function (val, index, list) {
    //     return val.age;
    // });
    // console.log(s_list); // [{name: "nianyi", sex: "nv", age: 18}, {name: "chengyi", sex: "nan", age: 20}, {name: "yongjing", sex: "nv", age: 21}, {name: "qingbing", sex: "nan", age: 22}]

    /**
     * _.groupBy(list, iteratee, [context])
     *      通过 iteratee 将数组分成多个集合
     */
    // var s_list = [3, 6, 7, 8, 4, 5];
    // var r_list = _.groupBy(s_list, function (val, index, list) {
    //     return val % 2;
    // });
    // console.log(r_list); // [[6, 8, 4], [3, 7, 5]]
    // var s_list = [
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_list = _.groupBy(s_list, function (val, index, list) {
    //     return val.sex;
    // });
    // console.log(r_list); // {"nan":[{name: "chengyi", sex: "nan", age: 20}, {name: "qingbing", sex: "nan", age: 22}], "nv":[{name: "yongjing", sex: "nv", age: 21}, {name: "nianyi", sex: "nv", age: 18}]}

    /**
     * _.indexBy(list, iteratee, [context])
     *      为给定的list重新设置索引键
     */
    // var s_list = [3, 6, 7, 8, 4, 5];
    // var r_list = _.indexBy(s_list, function (val, index, list) {
    //     return val + 1;
    // });
    // console.log(r_list); // {4: 3, 5: 4, 6: 5, 7: 6, 8: 7, 9: 8}
    // var s_list = [
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_list = _.indexBy(s_list, function (val, index, list) {
    //     return val.name;
    // });
    // console.log(r_list); // {chengyi: {name: "chengyi", sex: "nan", age: 20}, nianyi: {name: "nianyi", sex: "nv", age: 18}, qingbing: {name: "qingbing", sex: "nan", age: 22}, yongjing: {name: "yongjing", sex: "nv", age: 21}}

    /**
     * _.countBy(list, iteratee, [context])
     *      排列一个列表组成多个数组，并返回各个组中对象的数量
     */
    // var s_list = [
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_stat = _.countBy(s_list, function (val, index, list) {
    //     return val.sex;
    // });
    // console.log(r_stat); // {nan: 2, nv: 2}

    /**
     * _.shuffle(list)
     *      返回一个随机乱序的 list 副本
     */
    // var s_list = [
    //     {name: 'chengyi', sex: 'nan', age: 20},
    //     {name: 'qingbing', sex: 'nan', age: 22},
    //     {name: 'yongjing', sex: 'nv', age: 21},
    //     {name: 'nianyi', sex: 'nv', age: 18},
    // ];
    // var r_list = _.shuffle(s_list);
    // console.log(r_list); // s_list 的副本，顺序随机

    /**
     * _.sample(list, [n])
     *      从list 中产生一个随机的样本，n表示返回样本的个数，不传将随机返回一个样本数据（非数组）
     */
    // var s_list = [3, 6, 7, 8, 4, 5];
    // var r_list = _.sample(s_list);
    // console.log(r_list); // 5
    // var r_list = _.sample(s_list, 3);
    // console.log(r_list); // [7, 6, 3]

    /**
     * _.toArray(list)
     *      把list(任何可以迭代的对象)转换成一个数组
     */
    // var arg = (function () {
    //     return _.toArray(arguments).slice(1);
    // })(1, 2, 3, 4);
    // console.log(arg); // [2, 3, 4]


    /**
     * _.size(list)
     *      返回list的长度
     */
    // var s_list = {name: 'qingbing', sex: 'nan', age: 22};
    // var r_num = _.size(s_list);
    // console.log(r_num); // 3

    /**
     * _.partition(array, predicate)
     *      拆分数组成两个，0数组满足 predicate， 1数组不满足
     */
    var s_list = [3, 6, 7, 8, 4, 5];
    var r_arr = _.partition(s_list, function (val, index, list) {
        return 0 === val % 3;
    });
    console.log(r_arr); // [[3, 6], [7, 8, 4, 5]]

    return {};
});