# 一、什么是 php?
- 超文本预处理器，是一种通用开源脚本语言
- PHP是在服务器端执行的脚本语言，与C语言类似，是常用的网站编程语言
- PHP独特的语法混合了C、Java、Perl以及 PHP 自创的语法

# 二、links
- [下载] https://www.php.net/releases/

# 三、 安装
- 准备安装
```
yum -y install libxml2 libxml2-devel libcurl libcurl-devel

yum -y install libpng libpng-devel libjpeg libjpeg-devel freetype freetype-devel
```

- 下载、复制安装包并解压
```
cd /usr/local/src
tar -xzvf php-7.1.30.tar.gz
cd php-7.1.30
```

- 配置参数
```
./configure --prefix=/usr/local/product/php7.1.30 --enable-fpm --enable-debug --disable-short-tags --enable-bcmath --enable-calendar --enable-exif --enable-ftp --enable-mbstring --enable-opcache --enable-pcntl --enable-shmop --enable-soap --enable-sockets --enable-sysvsem --enable-zip --enable-mysqlnd --with-mysql=mysqlnd --with-pdo-mysql=mysqlnd --with-mysqli=mysqlnd --with-gd --with-jpeg-dir --with-png-dir --with-freetype-dir --with-zlib --enable-gd-native-ttf --enable-gd-jis-conv


#  --enable-opcache 可能在5.5以上能安装
```

- 编译并安装

```
make && make install
```

- 制作开机启动

```
# 制作 PHP 目录的软连接
ln -s /usr/local/product/php7.1.30 /usr/local/product/php

# 在 /etc/rc.local 末尾加入启动命令
/usr/local/product/php/sbin/php-fpm

## 如果在启动时找不到php-fpm.conf，进入“/usr/local/product/php/etc/”进行对应处理即可，将default修改后缀
```


- 进入php的bin目录执行相应操作
```
# 进入目录
cd /usr/local/product/php/bin

# 查看帮助
./php -h

# 查看扩展
./php -m

# 查看ini目录文件路径
./php -i|grep ini

# 查看编译时参数（在编译扩展时有用）
./php -i|grep "Configure Command"

```

- 需要的配置

```
# 配置timezone
[Date]
date.timezone = PRC
```

# ****** 问题 ******
#### 1、ERROR: failed to open configuration file '/usr/local/product/php7.1.30/etc/php-fpm.conf': No such file or directory
##### 原因：缺少 php-fpm.conf 配置文件
```
cd {php}/etc

cp php-fpm.conf.default php-fpm.conf
```

#### 2、WARNING: Nothing matches the include pattern '/usr/local/product/php7.1.30/etc/php-fpm.d/*.conf' from /usr/local/product/php7.1.30/etc/php-fpm.conf at line 125
##### 原因：php-fpm.d 下缺少 ".conf" 配置文件
```
cd {php}/etc/php-fpm.d

cp ?.conf.default ?.conf
```


