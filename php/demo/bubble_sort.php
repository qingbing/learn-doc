<?php
/**
 * Created by PhpStorm.
 * User: charles
 * Date: 2020/3/11
 * Time: 下午12:34
 *
 *
 * 基本算法 —— 冒泡排序
 * 冒泡排序：依次比较两个相邻的元素，如果顺序（如从大到小、首字母从Z到A）错误就把他们交换过来
 */
function bubbleSort($arr)
{
    $n = count($arr) - 1;
    for ($i = 0; $i <= $n - 2; $i++) {
        for ($j = 0; $j <= $n - 1; $j++) {
            if ($arr[$j] > $arr[$j + 1]) {
                $t = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $t;
            }
        }
    }
    return $arr;
}

$arr = [4, 6, 9, 7, 2, 5, 8];
var_dump($arr);
$arr = bubbleSort($arr);
var_dump($arr);