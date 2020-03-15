# 安装 mysql-5.7.24

## 查询mysql 版本
客户端：select version()

## 下载地址
https://downloads.mysql.com/archives/community/
选择：版本 -> Source Code -> Generic Linux，如果是高版本，建议下载带有boost的包

https://cdn.mysql.com/archives/mysql-5.7.24/mysql-boost-5.7.24.tar.gz

## 安装参考
https://blog.csdn.net/qq_29837161/article/details/82022218


## 编译前准备
```
# 安装编译工具
yum -y install gcc gcc-c++ ncurses ncurses-devel cmake make perl gcc autoconf automake zlib libxml libgcrypt libtool bison

```

## 安装

```
# 进入安装目录
tar -xzvf mysql-boost-5.7.24.tar.gz
cd mysql-5.7.24
mv boost /usr/local/product/boost

# 查看编译参数
cmake . -LH or ccmake . 

# 清理查看编译参数时的缓存
make clean && rm CMakeCache.txt

# 编译安装
cmake -DCMAKE_INSTALL_PREFIX=/usr/local/product/mysql-5.7.24 -DMYSQL_DATADIR=/usr/local/product/mysql-5.7.24/data -DWITH_INNOBASE_STORAGE_ENGINE=1  -DWITH_ARCHIVE_STORAGE_ENGINE=1 -DWITH_BLACKHOLE_STORAGE_ENGINE=1 -DWITH_READLINE=1 -DENABLED_LOCAL_INFILE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DMYSQL_TCP_PORT=3306 -DEXTRA_CHARSETS=all -DDEFAULT_CHARSET=utf8 -DDEFAULT_COLLATION=utf8_general_ci -DWITH_BOOST=/usr/local/product/boost

make && make install

# 给安装目录创建一个易记的别名
cd /usr/local/product
ln -s mysql-5.7.24 mysql

```

## 配置MySql

- 配置mysql用户和用户组
```
# 查看用户是否拥有mysql的用户和用户组
cat /etc/passwd // 查看用户列表
cat /etc/group // 查看用户组列表

# 如果没有mysql的用户和用户组需要创建
groupadd mysql
useradd -g mysql mysql

# 修改/usr/local/product/mysql-5.7.24 权限
chown -R mysql:mysql /usr/local/product/mysql
chown -R mysql:mysql /usr/local/product/mysql-5.7.24
```

- 初始化
```
# 在初始化之前，务必保证指定的“datadir”已经创建，并切是空的
# 如果已经存在其他版本的mysql，请确认"/etc/my.cnf"不存在，否则会按照"/etc/my.cnf"中的设置进行初始化而使得datadir读取另一个mysql实例的路径而导致报错，如果遇到此情况，可将原来的mysql暂停，将"/etc/my.cnf"剪切此实例对应的datadir目录中，再启动此实例，然后重新进行初始化命令
# 初始化成功后，会答应临时的管理员密码“...root@localhost: dwIGa)s__5jm”

mv /etc/my.cnf /etc/my.cnf.bak
/usr/local/product/mysql/bin/mysqld --initialize --user=mysql --basedir=/usr/local/product/mysql --datadir=/usr/local/product/mysql/data

# 记录下临时密码，马上进入修改，修改成功后，退出重新登录
```

- 重置默认密码
```
# 启动mysql
/usr/local/product/mysql/support-files/mysql.server restart

# 进入mysql控制台
cd /usr/local/product/mysql/bin
mysql -uroot -p（临时管理密码）

# 修改root用户密码
SET PASSWORD = PASSWORD('123456'); # 再次进入mysql(mysql -uroot -p123456)

# 若要设置root用户可以远程访问，执行
# password为远程访问时，root用户的密码，可以和本地不同
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'ww111111' WITH GRANT OPTION;
```


- 启动脚本做成服务（选做）
```
cp /usr/local/product/mysql/support-files/mysql.server /etc/init.d/mysql
chkconfig mysql on  //设置服务自动启动

service mysql start // 启动服务
service mysql restart // 重启服务
service mysql stop // 停止服务
```


- 创建软链接（选做）
```
# 系统默认会查找/usr/bin下的命令
# 如果这个命令不在这个目录下，当然会找不到命令，我们需要做的就是映射一个链接到/usr/bin目录下，相当于建立一个链接文件。

ln -s /usr/local/product/mysql/bin/mysql /usr/bin

```


- 远程连接配置（选做）
```
# 首先需要开放 3306 端口，这里参考防火墙端口设置
# 为root添加远程连接的能力，连接账号为root
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'ww111111' WITH GRANT OPTION;

```


- 开启防火墙端口
```
# 添加端口
firewall-cmd --zone=public --add-port=3306/tcp --permanent

# 重启防火墙
firewall-cmd --reload

# 查看防火墙端口
firewall-cmd --zone=public --list-ports
```

