/**
 * output :
 * 1111
 * 2222
 * t1: 652.319ms
 * 6666
 * 4444
 * 5555
 * 3333
 *
 *  结论 ：
 *      1. 异步代码是在所有的同步代码执行完以后才执行
 *      2. setTimeout定义的异步代码里面，会按照（定义的时间点+延后执行的时间）排序进行执行（时间越早越快执行）
 */
console.log(1111);
console.log(2222);

setTimeout(function () {
    console.log(3333);
}, 900);

// 时间在window系统中，最小是15ms，小于这个时间，会被自行修改成这个最小时间，不同的系统，这个最小时间不同，mac为10ms
setTimeout(function () {
    console.log(4444);
}, 80); // mac上为10ms，window系统中为15ms

console.time('t1');
for (let i = 0; i <= 999999999; i++) {

}
console.timeEnd('t1');

setTimeout(function () {
    console.log(5555);
}, 0);

console.log(6666);


