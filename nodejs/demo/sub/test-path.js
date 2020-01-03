// 声明path系统模块
let path = require('path');

/*
var path1 = './xx/yy/../../pa/pb/a/./../b/c/dd';
// 格式化（简化、美化）路径
var path2 = path.normalize(path1);
console.log(path2); // pa/pb/b/c/dd
*/

/*
// 拼接路径
var pa = path.join(__dirname, 'xx');
console.log(pa); // /mnt/hgfs/Vhosts/learn.us/learn-doc/nodejs/demo/sub/xx
var pa = path.join('web', 'xx', 'yy');
console.log(pa); // web/xx/yy
*/


var pa = './data/note.txt';
console.log(path.dirname(pa)); // ./data
console.log(path.basename(pa)); // note.txt
console.log(path.extname(pa)); // .txt
console.log(path.parse(pa));
/*
output :
{
  root: '',
  dir: './data',
  base: 'note.txt',
  ext: '.txt',
  name: 'note'
}
 */
