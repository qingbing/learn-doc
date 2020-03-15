# 安装 swoole 扩展

### 下载、解压
```
wget http://pecl.php.net/get/swoole-4.4.14.tgz
tar -xzvf swoole-4.4.14.tgz
cd swoole-4.4.14
```

### 编译安装
```
/usr/local/product/php/bin/phpize .
./configure --with-php-config=/usr/local/product/php/bin/php-config
make
make install
```

### 在php.ini里面添加扩展
```
; swoole 扩展
extension=swoole.so
```

# 三、 开启防火墙端口，可用于websocket 端口
```shell
# 添加端口
firewall-cmd --zone=public --add-port=9502/tcp --permanent

# 重启防火墙
firewall-cmd --reload

# 查看防火墙端口
firewall-cmd --zone=public --list-ports
```
