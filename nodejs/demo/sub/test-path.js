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














// <li>path.dirname(pa) : 返回路径中代表文件夹的部分</li>
// <li>path.basename(pa) : 返回路径中的最后一部分，包含文件名和扩展名</li>
// <li>path.extname(pa) : 返回路径中的后缀部分，及最后一个"."后的部分，如果路径中不包含"."，或该路径只有一个"."，且这个点为路径的第一个字符，返回空字符串</li>
// <li>path.parse(pa) : 返回路径字符串的对象</li>
// <li>path.format(paObj) : 从对象中返回路径字符串，和path.parse 相反</li>
//
//






























































































