<?php
/**
 * Created by PhpStorm.
 * User: charles
 * Date: 2020/3/11
 * Time: 下午12:34
 *
 *
 * 基本算法 —— 选择排序
 * 选择排序：每一次从数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置
 */
function selectSort($arr)
{
    $n = count($arr) - 1;
    for ($i = 0; $i < $n; $i++) {
        $minI = $i;
        $minX = $arr[$i];
        for ($j = $i + 1; $j <= $n; $j++) {
            if ($minX > $arr[$j]) {
                $minI = $j;
                $minX = $arr[$j];
            }
        }
        if ($minI != $i) {
            $arr[$minI] = $arr[$i];
            $arr[$i] = $minX;
        }
    }
    return $arr;
}

$arr = [4, 6, 9, 7, 2, 5, 8];
var_dump($arr);
$arr = selectSort($arr);
var_dump($arr);