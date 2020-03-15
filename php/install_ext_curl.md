# 安装 curl 扩展

### curl 扩展在php安装的源码包自带
```
cd ../src/{php}
cd ext
cd curl
```

### 编译安装
```
/usr/local/product/php/bin/phpize .
./configure --with-php-config=/usr/local/product/php/bin/php-config
make && make install
```

### 配置php.ini，添加curl扩展
```
extension=curl.so
```

### 重启php