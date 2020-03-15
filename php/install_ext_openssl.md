# 安装 openssl 扩展

### openssl 扩展在php安装的源码包自带
```
cd ../src/{php}
cd ext
cd openssl
cp config0.m4 config.m4(安装时提示没有config.m4)
```

### 编译安装
```
/usr/local/product/php/bin/phpize .
./configure --with-php-config=/usr/local/product/php/bin/php-config
make && make install
```

### 配置php.ini，添加openssl扩展
```
extension=openssl.so
```

### 重启php
