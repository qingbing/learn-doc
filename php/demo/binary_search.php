<?php
/**
 * Created by PhpStorm.
 * User: charles
 * Date: 2020/3/11
 * Time: 下午12:34
 *
 *
 * 基本算法 —— 二分查找位置
 * 二分查找：折半查找，在一组有序的数组中查找一个数是否存在
 */
function binarySearch($arr, $num, $low = null, $high = null)
{
    // 确定最大索引和最小索引
    null === $low && $low = 0;
    null === $high && $high = count($arr) - 1;
    // 寻找$num应该插入的位置
    while ($low <= $high) {
        $mid = intval(($low + $high) / 2);
        if ($arr[$mid] > $num) {
            $high = $mid - 1;
        } else if ($arr[$high] < $num) {
            $low = $mid + 1;
        } else {
            return $mid;
        }
    }
    return -1;
}

$arr = [1, 2, 4, 5, 7, 9, 17];
var_dump(binarySearch($arr, 8));
var_dump(binarySearch($arr, 9));
var_dump(binarySearch($arr, 20));

