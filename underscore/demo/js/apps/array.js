/**
 * 判断一个数是否是质数
 * @param {int} num
 * @returns {boolean}
 */
function isPrime(num) {
    let i = 2;
    let rest;
    do {
        if (0 === num % i) {
            return false;
        }
        rest = Math.ceil(num / i);
        if (i >= rest) {
            return true;
        }
        i++;
    } while (true);
}

define(["require", "underscore"], function (require, _) {
    var s_array = [9, 8, 7, 6, 5, 4, 3];
    /**
     * _.first(array, [n])
     *      从0索引开始筛选数据
     *          不给n参数返回第一个数据
     *          给了n参数，返回有n个数据的数组，当n大于array.length时，返回整个数组
     */
    // var r_first = _.first(s_array);
    // console.log(r_first); // 9
    // var r_first = _.first(s_array, 3);
    // console.log(r_first); // [9, 8, 7]
    // var r_first = _.first(s_array, 13);
    // console.log(r_first); // [9, 8, 7, 6, 5, 4, 3]

    /**
     * _.last(array, [n])
     *      从最大索引开始向前筛选数据
     *          不给n参数返回最大索引数据
     *          给了n参数，返回有n个数据的数组，当n大于array.length时，返回整个数组
     */
    // var r_last = _.last(s_array);
    // console.log(r_last); // 3
    // var r_last = _.last(s_array, 3);
    // console.log(r_last); // [5, 4, 3]
    // var r_last = _.last(s_array, 13);
    // console.log(r_last); // [9, 8, 7, 6, 5, 4, 3]

    /**
     * _.initial(array, [n])
     *      获取一个排除尾部n个元素以后得到的数组，n默认为1
     */
    // var r_array = _.initial(s_array);
    // console.log(r_array); // [9, 8, 7, 6, 5, 4]
    // var r_array = _.initial(s_array, 2);
    // console.log(r_array); // [9, 8, 7, 6, 5]

    /**
     * _.rest(array, [index])
     *      从传递的索引 index 位置开始，返回剩余元素的数组，不传index默认为1
     */
    // var r_array = _.rest(s_array);
    // console.log(r_array); // [8, 7, 6, 5, 4, 3]
    // var r_array = _.rest(s_array, 2);
    // console.log(r_array); // [7, 6, 5, 4, 3]

    /**
     * _.compact(array)
     *      返回一个排除所有false值的数组副本
     */
    // var t_array = [0, 1, false, 2, '', 3, null, undefined];
    // var r_array = _.compact(t_array);
    // console.log(r_array); // [1, 2, 3]

    /**
     * _.flatten(array, [shallow])
     *      将一个嵌套多层的数组转换成只有一层的数组
     *      但是，如果传递了shallow参数为true，数组将只减少一维的嵌套
     */
    // var t_array = [1, [2], [3, [[4]]]];
    // var r_array = _.flatten(t_array);
    // console.log(r_array); // [1, 2, 3, 4]
    // var r_array = _.flatten(t_array, true);
    // console.log(r_array); // [1, 2, 3, [[4]]]

    /**
     * _.union(*arrays)
     *      返回多个数组的并集，按出现的先后顺序排列，不重复
     */
    // var r_array = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    // console.log(r_array); // [1, 2, 3, 101, 10]

    /**
     * _.intersection(*arrays)
     *      返回多个数组的交集，返回数组内不重复
     */
    // var r_array = _.intersection([1, 2, 3, 2], [101, 2, 1, 10, 2], [2, 1, 2]);
    // console.log(r_array); // [1, 2]

    /**
     * _.without(array, *values)
     *      使用 === 做相等测试，删除所有测试为true的数据并返回剩下的副本
     */
    // var t_array = [1, 2, 1, 0, 3, 1, 4];
    // var r_array = _.without(t_array, 1, 0);
    // console.log(r_array); // [2, 3, 4]

    /**
     * _.difference(array, *others)
     *      类似于without，返回存在与array而不在other数组的元素
     */
    // var r_array = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
    // console.log(r_array); // [1, 3, 4]

    /**
     * _.uniq(array, [isSorted], [iteratee])
     *      返回去重后的数组，使用 === 做相等测试
     *      如果确定 array 已经排序, 那么给 isSorted 参数传递 true值, 此函数将运行的更快的算法
     *      如果要处理对象元素, 传递 iteratee函数来获取要对比的属性
     */
    // var r_array = _.uniq([1, 2, 1, 3, 1, 4]);
    // console.log(r_array); // [1, 2, 3, 4]

    /**
     * _.zip(*arrays)
     *      将每个数组按照对应的位置合并成一个二维数组
     */
    // var t1 = ["qingbing", "yongjing"];
    // var t2 = ["nan", "nv"];
    // var t3 = ["34", "30"];
    // var r_array = _.zip(t1, t2, t3);
    // console.log(r_array); // [["qingbing", "nan", "34"], ["yongjing", "nv", "30"]]

    /**
     * _.unzip(*arrays)
     *      _.zip 的逆操作
     */
    // var t_array = [["qingbing", "nan", "34"], ["yongjing", "nv", "30"]];
    // var r_array = _.unzip(t_array);
    // console.log(r_array); // [["qingbing", "yongjing"], ["nan", "nv"], ["34", "30"]]

    /**
     * _.object(list, [values])
     *      将数组转换成对象,参数传递两种方式
     *          1、两个一维数组
     *          2、n个键值对数组
     */
    // var r_array = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
    // console.log(r_array); // {moe: 30, larry: 40, curly: 50}
    // var r_array = _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
    // console.log(r_array); // {moe: 30, larry: 40, curly: 50}

    /**
     * _.indexOf(array, value, [isSorted])
     *      返回value在array中的索引，如果不存在返回-1
     *      如果确定array是排序过的，传入true有利于更快搜索
     */
    // var r_index = _.indexOf(s_array, 3);
    // console.log(r_index); // 6

    /**
     * _.lastIndexOf(array, value, [fromIndex])
     *      返回value在array中的索引，从后向前搜索，找不到返回-1；
     *      如果给定formIndex，将从这个索引开始向前搜索
     */
    // var r_index = _.lastIndexOf(s_array, 3);
    // console.log(r_index); // 6

    /**
     * _.sortedIndex(list, value, [iteratee], [context])
     *      使用二分查找确定value在list中的位置序号，value按此序号插入能保持list原有的排序
     *      如果提供iterator函数，返回将作为list排序的依据
     *      iterator也可以是字符串的属性名用来排序(比如length)
     */
    // var r_index = _.sortedIndex([10, 20, 30, 40, 50], 35);
    // console.log(r_index); // 3
    // var r_index = _.sortedIndex([{name: 'moe', age: 40}, {name: 'curly', age: 60}], {name: 'larry', age: 50}, 'age');
    // console.log(r_index); // 1

    /**
     * _.findIndex(array, predicate, [context])
     *      类似 _.indexOf, 当predicate 回调为真时，返回第一个索引值，否则返回-1
     */
    // var r_index = _.findIndex([4, 6, 8, 12], isPrime);
    // console.log(r_index); // -1
    // var r_index = _.findIndex([4, 6, 7, 12], isPrime);
    // console.log(r_index); // 2

    /**
     * _.findLastIndex(array, predicate, [context])
     *      类似 _.findIndex, 反向查找，直到当predicate 回调为真时，返回索引值，否则返回-1
     */
    // var users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
    //     {'id': 2, 'name': 'Ted', 'last': 'White'},
    //     {'id': 3, 'name': 'Frank', 'last': 'James'},
    //     {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
    // var r_index = _.findLastIndex(users, {
    //     name: 'Ted'
    // });
    // console.log(r_index); // 3

    /**
     * _.range([start], stop, [step])
     *      创建整数灵活编号的列表的函数，返回一个从start 到stop的整数的列表，用step来增加 （或减少）
     *      省略start则默认为 0;step 默认为 1
     */

    var r_array = _.range(10);
    console.log(r_array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var r_array = _.range(1, 11);
    console.log(r_array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var r_array = _.range(0, 30, 5);
    console.log(r_array); // [0, 5, 10, 15, 20, 25]
    var r_array = _.range(0, -10, -1);
    console.log(r_array); // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
    var r_array = _.range(0);
    console.log(r_array); // []

    return {};
});