# 一、什么是nginx?
是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务

# 二、links
- [下载] http://nginx.org/download/

# 三、 安装
### 1、安装

- 准备安装
```
yum -y install pcre pcre-devel openssl openssl-devel
```

- 下载、复制安装包并解压
```
wget http://nginx.org/download/nginx-1.17.8.tar.gz
cd /usr/local/src
tar -xzvf nginx-1.17.8.tar.gz
cd nginx-1.17.8
```

- 配置参数

```
./configure --prefix=/usr/local/product/nginx-1.17.8 --with-http_ssl_module --with-pcre
```

- 编译并安装
```
make && make install
```

- 进入nginx的sbin目录执行相应操作
```
# 进入目录
cd /usr/local/product/nginx-1.17.8/sbin

# 查看帮助
./nginx -h

# 查看编译时参数
./nginx -V
```

- 配置Nginx开机启动
```
将nginx的启动脚本复制到"/etc/init.d/"下面，命名为 nginx，设置权限：“chmod a+x nginx”
vim /etc/rc.local，在末尾添加 “/etc/init.d/nginx start”

# 检查 /etc/rc.local 和 /etc/rc.d/rc.local ，确保都有执行权限
```

- 配置外网访问（开启防火墙的80端口）
```
开启防火墙端口 22，80
# 查看开放端口
firewall-cmd --zone=public --list-ports

# 没有开放 80 就开放 80 端口
firewall-cmd --zone=public --add-port=80/tcp --permanent    （--permanent永久生效，没有此参数重启后失效）

# 重新加载防火墙
firewall-cmd --reload

# 再次查看开放端口，确保 80 端口开放
firewall-cmd --zone=public --list-ports

```

### 2、nginx 启动脚本
```
#!/bin/bash
### START INIT INFO
# Short-Description: start|stop|status|restart|configtest
### END INIT INFO

# scripts PATH enviroment
export PATH="/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin"

# nginx general config
NAME="nginx"
BASEDIR=/usr/local/product/nginx-1.17.8
DAEMON="${BASEDIR}/sbin/nginx"
CONF="${BASEDIR}/conf/nginx.conf"
PIDFILE="${BASEDIR}/nginx.pid"
LOCKFILE="${BASEDIR}/nginx.lock"

# nginx start timeout milliscond
STARTTIME=10000
# nginx stop timeout milliscond
STOPTIME=10000

# common Function
color_msg(){
    local COLOR=$1
    local MSG=$2
    OFFSET="\033[60G"
    NORMAL="\033[0m"
    case $COLOR in
        red)
            COLOR="\033[1;40;31m"
            ;;
        green)
            COLOR="\033[1;40;32m"
            ;;
        yellow)
            COLOR="\033[1;40;33m"
            ;;
        *)
            COLOR="\033[0m"
            ;;
    esac
    echo -en "$OFFSET [$COLOR $MSG $NORMAL"
    echo     "]"
}

configtest() {
    echo -n "Configtest $NAME : "
    $DAEMON -tq -c $CONF
    if [ $? -eq 0 ] ;then
        color_msg green SUCCESS
    else
        color_msg red FAILED && exit 1
    fi
}

start() {
    echo -n "Starting $NAME : "
    PROC_PID=$(pgrep -P 1 -u root ^$NAME)
    if [ -n "$PROC_PID" ]; then
        echo -n "is already running."
        color_msg yellow WARNING
    else
        $DAEMON -c $CONF >/dev/null 2>&1
        if [  $? -eq 0 ]; then
            color_msg green SUCCESS && touch $LOCKFILE
        else
            color_msg red FAILED && exit 1
        fi
    fi
}

stop() {
    echo -n "Stopping $NAME : "
    PROC_PID=$(pgrep -P 1 -u root ^$NAME)
    if [ -z "$PROC_PID" ]; then
        echo -n "is not running."
        color_msg yellow WARNING
    else
        kill -TERM ${PROC_PID} >/dev/null 2>&1
        while [ "$STOPTIME" -gt 0 ]; do
            kill -0 ${PROC_PID} >/dev/null 2>&1 || break
            STOPTIME=$(($STOPTIME-1))
            echo -n "." && sleep 0.001s
        done
        if [ "$STOPTIME" -le 0 ]; then
            color_msg red TIMEOUT && exit 1
        else
            color_msg green SUCCESS
            rm -f $PIDFILE $LOCKFILE
        fi
    fi
}

restart() {
        echo -n "Restart $NAME : "
        echo
        echo -en "\t" && stop
        echo -en "\t" && start
}

reload() {
    echo -n "Reloading $NAME : "
    PROC_PID=$(pgrep -P 1 -u root ^$NAME)
    if [ -n "$PROC_PID" ]; then
        kill -HUP ${PROC_PID} >/dev/null 2>&1
        if [  $? -eq 0 ]; then
            color_msg green SUCCESS
        else
            color_msg red FAILED && exit 1
        fi
    else
        echo -n "is not running."
        color_msg yellow WARNING
    fi
}

status() {
    PROC_PID=$(pgrep -P 1 -u root ^$NAME)
    if [ -z "$PROC_PID" ];then
        echo "$NAME is stopped"
        exit 3
    else
        echo "$NAME (pid $PROC_PID) is running..."
        exit 0
    fi
}

quit() {
    echo -n "Quit $NAME : "
    PROC_PID=$(pgrep -P 1 -u root ^$NAME)
    if [ -z "$PROC_PID" ]; then
        echo -n "is not running."
        color_msg yellow WARNING
    else
        kill -QUIT ${PROC_PID} >/dev/null 2>&1
        while [ "$STOPTIME" -gt 0 ]; do
            kill -0 ${PROC_PID} >/dev/null 2>&1 || break
            STOPTIME=$(($STOPTIME-1))
            echo -n "." && sleep 0.001s
        done
        if [ "$STOPTIME" -le 0 ]; then
            color_msg red TIMEOUT && exit 1
        else
            color_msg green SUCCESS
            rm -f $PIDFILE $LOCKFILE
        fi
    fi
}

logrotate() {
    echo -n "Re-opening $NAME log file : "
    PROC_PID=$(pgrep -P 1 -u root ^$NAME)
    if [ -z "$PROC_PID" ]; then
        echo -n "is not running."
        color_msg yellow WARNING
    else
        kill -USR1 ${PROC_PID} >/dev/null 2>&1
        if [ $? -eq 0 ]; then
            color_msg green SUCCESS
        else
            color_msg red FAILED && exit 1
        fi
    fi
}

case "$1" in
    configtest)
        configtest
        ;;
    start)
        configtest
        start
        ;;
    stop)
        stop
        ;;
    restart|try-restart)
        configtest
        restart
        ;;
    reload|force-reload)
        configtest
        reload
        ;;
    status)
        status
        ;;
    quit)
        quit
        ;;
    logrotate)
        logrotate
        ;;
    *)
       echo $"Usage: $0 {configtest|start|stop|restart|reload|status|quit|logrotate}"
       exit 1
    ;;
esac
```

### 3、添加一个虚拟主机
```
1、复制一个虚拟主机配置
/usr/local/product/nginx-1.17.8/conf/vhosts/...

2、修改相应的配置

3、在本机添加域名解析配置
/etc/hosts

4、如果需要宿主机访问，在宿主机的hosts同样需要绑定IP
```
