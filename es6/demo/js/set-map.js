'use strict';


/*
Set 容器 ： 无序不可重复的多个value的集合体
    Set() :
    Set(array) :
    add(value) : 添加一个value
    delete(value) : 删除value
    has(value) : 容器是否包含value
    clear() : 清空容器
    size : 容器的长度

Map 容器 ： 无序的key，不重复的多个key-value的集合体
    Map() :
    Map(array) :
    set(key, value) : 设置key-value
    get(key) : 获取key
    delete(key) : 删除key
    has(key) : 容器是否包含key
    clear() : 清空容器
    size : 容器的长度
 */

let set = new Set([2, 3, 4, 5, 5, 4, 3, 2]);
set.add(7);
set.delete(2);
console.log(set.size);
console.log(set.delete(4));
set.clear();
console.log(set);


let map = new Map([['username', 'qingbing'], ['age', 12]]);
map.set('name', 'haha');
console.log(map.get('username'));
map.delete('age');

console.log(map);













