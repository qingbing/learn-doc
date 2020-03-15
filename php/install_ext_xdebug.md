# 安装 xdebug 扩展

### 下载、解压
```
wget http://xdebug.org/files/xdebug-2.9.2.tgz
tar -xzvf xdebug-2.9.2.tgz
cd xdebug-2.9.2
```

### 编译安装
```
# 如果php配了环境变量则不需要php-config的路径
/usr/local/product/php/bin/phpize .
./configure --with-php-config=/usr/local/product/php/bin/php-config
make && make install
```

### 在php.ini里面添加扩展

```
; 扩展 xdebug
zend_extension = /usr/local/product/php7.1.30/lib/php/extensions/debug-non-zts-20160303/xdebug.so


; 以下可以不要
; 开启性能监控（一般在正式环境不建议开启）
xdebug.profiler_enable=on
; 程序执行顺序日志
xdebug.trace_output_dir="/usr/local/product/php7.1.30/var/log/xdebug_trace"
; 程序执行性能日志
xdebug.profiler_output_dir="/usr/local/product/php7.1.30/var/log/xdebug_profiler"
```

### 重启php


# ****** 问题 ******
#### 1、如何选择当前php版本应该用那个xdebug版本
```
# 使用Xdebug提供的向导功能
1、使用php -i命令或者输出phpinfo()的内容到浏览器
2、粘贴输出内容到向导页面（https://xdebug.org/wizard）的输入框
3、点击"Analyse my phpinfo() output"按钮，进入结果页面
4、结果页面中 "Instructions" 下，就是需要下载的Xdebug版本

```