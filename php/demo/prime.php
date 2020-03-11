<?php
/**
 * Created by PhpStorm.
 * User: charles
 * Date: 2020/3/11
 * Time: 下午12:34
 *
 *
 * 基本算法 —— 求素数（质数）
 * 素数：又叫质数，约数只有1和它本身的正整数
 * 基本思想：从2开始到sqrt(n)进行模运算，只要有一个结果为0表示为素数，终止程序返回true
 */
function isPrime($num)
{
    // 不是整数
    if (!is_integer($num)) {
        return false;
    }
    // 小于1的数不是素数
    if ($num <= 1) {
        return false;
    }
    // 2是素数，直接返回
    if (2 === $num || 3 === $num) {
        return true;
    }
    // 大于3的数判断
    $i = 2;
    $max = sqrt($num);
    while (true) {
        if (0 === $num % $i) {
            return false;
        }
        $i++;
        if ($i > $max) {
            return true;
        }
    }
    return false;
}

//var_dump(isPrime(24));

/**
 * 求100以内的素数
 */
$R = [];
$n = 2;
array_push($R, $n);
$n++;
for (; $n < 100; $n += 2) {
    if (isPrime($n)) {
        array_push($R, $n);
    }
}
var_dump($R);