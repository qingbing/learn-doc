// 创建指定长度的缓存区
let buf = Buffer.alloc(10); // 创建5个字节的缓存区

// 读取缓存区
// let out = buf.toString();

let buf1 = Buffer.alloc(20);
buf.write('张三');
buf.copy(buf1);
console.log(buf);
console.log(buf1);

// buf.write('00');
//
// console.log(buf);
// console.log(buf1);


// 向缓存区写入数据
// buf.write('张三'); // 在nodejs中，默认使用utf-8编码，一个中文占三个字节
