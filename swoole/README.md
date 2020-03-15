# 一、什么是swoole?

# 二、links
- https://github.com/qingbing/php-swoole-doc
- https://wiki.swoole.com/
- https://www.runoob.com/html/html5-websocket.html

# 三、 安装

### 下载、解压
```
wget http://pecl.php.net/get/swoole-4.4.14.tgz
tar -xzvf swoole-4.4.14.tgz
cd swoole-4.4.14
```

### 编译安装
```
/usr/local/product/php5.6/bin/phpize .
./configure --with-php-config=/usr/local/product/php5.6/bin/php-config
make && make install
```

### 在php.ini里面添加扩展
```
extension=swoole.so
```

# 三、 开启防火墙端口
```shell
# 添加端口
firewall-cmd --zone=public --add-port=9502/tcp --permanent

# 重启防火墙
firewall-cmd --reload

# 查看防火墙端口
firewall-cmd --zone=public --list-ports
```




