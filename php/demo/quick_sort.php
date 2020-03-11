<?php
/**
 * Created by PhpStorm.
 * User: charles
 * Date: 2020/3/11
 * Time: 下午12:34
 *
 *
 * 基本算法 —— 快速排序
 * 快速排序：是对冒泡排序的一种改进,通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序
 */
function quickSort($arr)
{
    $len = count($arr);
    if ($len <= 1) {
        return $arr;
    }
    $key = $arr[0];
    $left_arr = [];
    $right_arr = [];
    for ($i = 1; $i < $len; $i++) {
        if ($key <= $arr[$i]) {
            array_push($right_arr, $arr[$i]);
        } else {
            array_push($left_arr, $arr[$i]);
        }
    }
    $left_arr = quickSort($left_arr);
    $right_arr = quickSort($right_arr);
    return array_merge($left_arr, [$key], $right_arr);
}

$arr = [4, 6, 9, 7, 2, 5, 8];
var_dump($arr);
$arr = quickSort($arr);
var_dump($arr);