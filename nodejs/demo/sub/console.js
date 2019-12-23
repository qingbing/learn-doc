console.log("普通消息打印"); // 用于输出普通信息
let obj = {id:4, sex : 'nv'};
console.dir(obj); // 该DOM结点以DOM树的结构进行输出，可以详细查对象的方法发展
console.info('info - 用于输出提示性信息'); // 用于输出提示性信息
console.debug('debug - 用于输出调试信息'); // 用于输出调试信息
console.warn('warn - 用于输出警示信息'); // 用于输出警示信息
console.error('error - 用于输出错误信息'); // 用于输出错误信息
console.time('t1'); // 计时开始
console.timeEnd('t1');  // 计时结束
// 断言，console.assert（表达式， 表达式为false的打印输出字符）
console.assert(1>2, '1>2 是错误的');
