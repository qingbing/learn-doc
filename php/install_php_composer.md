# 准备工作
1. 参考网站
```
http://docs.phpcomposer.com/00-intro.html

```
2. 准备PHP的全局环境变量
```
vim /etc/profile
# 末尾添加
export PATH=/usr/local/product/php5.6/bin:$PATH

# 退出后执行
source /etc/profile

```

3. PHP必须支持openssl
```
# curl 扩展在php安装的源码包自带
cd ../src/php-5.6.30
cd ext
cd openssl
cp config0.m4 config.m4(安装时提示没有config.m4)

# 编译安装
/usr/local/product/php5.6/bin/phpize .
./configure --with-php-config=/usr/local/product/php5.6/bin/php-config
make && make install


# 配置php.ini，添加curl扩展
extension=openssl.so

```


## 一、composer 的安装
```
# 下载安装
curl -sS https://getcomposer.org/installer | php
# 使 composer 命令全局化。否则需要使用 php composer.phar ...
mv composer.phar /usr/local/bin/composer
```


## 二、composer 的常用命令
1. composer init
2. composer install
3. composer update
4. composer self-update
5. composer search
6. composer validate
7. composer status
8. composer show



## 三、composer 的配置
composer.json 必须位于根目录

```
{
    "name": "供应商名称/项目名称",
    // 包的名称
    "description": "简短描述",
    /*
library: 这是默认类型，它会简单的将文件复制到 vendor 目录。
project: 这表示当前包是一个项目，而不是一个库。例：框架应用程序 Symfony standard edition，内容管理系统 SilverStripe installer 或者完全成熟的分布式应用程序。使用 IDE 创建一个新的工作区时，这可以为其提供项目列表的初始化。
metapackage: 当一个空的包，包含依赖并且需要触发依赖的安装，这将不会对系统写入额外的文件。因此这种安装类型并不需要一个 dist 或 source。
composer-plugin：一个安装类型为 composer-plugin 的包，它有一个自定义安装类型，可以为其它包提供一个 installler
    */
    "type": "安装类型",
    "keywords": [
        "key",
        "word"
    ],
    // 可无
    "license": "MIT",
    // 许可协议, 配置选项意义多个，直接参考线上文档
    "authors": [
        // 作者
        {
            "name": "姓名",
            "email": "邮箱",
            "homepage": "个人主页",
            "role": "担任角色"
        }
    ],
    "support": { // 可选，强烈建议配置的
        "email": "项目支持 email 地址。",
        "issues": "跟踪问题的 URL 地址。",
        "forum": "论坛地址。",
        "wiki": "Wiki 地址。",
        "irc": "IRC 聊天频道地址，类似于 irc://server/channel。",
        "source": "网址浏览或下载源。"
    },
    "require": { // 必须的软件包列表，除非这些依赖被满足，否则不会完成安装

    },
    "require-dev": { // 列表是为开发或测试等目的，额外列出的依赖

    },
    "mininum-stability": "stable",
    "repositories": {
        "packagist": {
            "type": "composer",
            "url": "https://packagist.phpcomposer.com"
        }
    },
    "autoload": {
        "psr-4": {
            "app\\": "\\"
        },
        "classmap" : [],
        "files" : [],
    }
}


```

```
{
    "name": "qingbing/learn-composer",
    "description": "learn composer",
    "type": "project",
    "license": "MIT",
    "authors": [
        {
            "name": "qingbing",
            "email": "780042175@qq.com"
        }
    ],
    "repositories": {
        "packagist": {
            "type": "composer",
            "url": "https://packagist.phpcomposer.com"
        }
    },
    "require": {
        "houdunwang/framework": "*"
    },
    "mininum-stability": "dev"
}
```
