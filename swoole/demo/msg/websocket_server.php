<?php
/**
 * Created by PhpStorm.
 * User: charles
 * Date: 2020/3/12
 * Time: 下午7:24
 */
require("vendor/autoload.php");

//创建websocket服务器对象，监听0.0.0.0:9502端口
use Components\FileCache;
use Swoole\Http\Request;
use Swoole\WebSocket\Frame;
use Swoole\WebSocket\Server;

// 指定缓存目录
defined('CONFIG_PATH') or define('CONFIG_PATH', __DIR__ . '/conf');
defined('RUNTIME_PATH') or define('RUNTIME_PATH', __DIR__ . '/runtime');

\Helper\FileManager::rmdir(RUNTIME_PATH . '/pf', true);

$ws = new Server('0.0.0.0', 9502);

//监听WebSocket连接打开事件
$ws->on('open', function (Server $ws, Request $request) {
    $ws->push($request->fd, json_encode([
        'type' => 'connection',
    ]));
});

//监听WebSocket连接关闭事件
$ws->on('close', function (Server $ws, $fd) {
    echo "客户端[{$fd}] : 关闭\n";
});

//监听WebSocket消息事件
$ws->on('message', function (Server $ws, Frame $frame) {
    $data = json_decode($frame->data, true);
    if (!is_array($data)) {
        $ws->push($frame->fd, json_encode([
            'type' => 'error',
            'message' => '数据不能解析',
            'data' => $frame->data,
        ]));
    } elseif (!isset($data['type'])) {
        $ws->push($frame->fd, json_encode([
            'type' => 'error',
            'message' => '数据不带操作类型',
            'data' => $frame->data,
        ]));
    } else {
        // 获取缓存实例
        $cache = FileCache::getInstance('file-cache');
        switch ($data['type']) {
            case 'register':
                $fds = $cache->get($data['myid']);
                if ($fds) {
                    array_push($fds, $frame->fd);
                } else {
                    $fds = [$frame->fd];
                }
                $cache->set($data['myid'], $fds);
                $ws->push($frame->fd, json_encode([
                    'type' => 'register',
                    'myid' => $data['myid'],
                    'fd' => $frame->fd,
                ]));
                break;
            case 'cancel':
                $fds = $cache->get($data['myid']);
                if ($fds) {
                    $fds = array_diff($fds, [$frame->fd]);
                } else {
                    $fds = [];
                }
                $cache->set($data['myid'], $fds);
                $ws->push($frame->fd, json_encode([
                    'type' => 'cancel',
                    'fd' => $frame->fd,
                ]));
                break;
            case 'message':
                $fds = $cache->get($data['toid']);
                if (empty($fds)) {
                    $ws->push($frame->fd, json_encode([
                        'type' => 'error',
                        'message' => '没有接受者',
                        'data' => $frame->data,
                    ]));
                } else {
                    $connectionFds = iterator_to_array($ws->connections);
//                    var_dump($fds);
//                    var_dump($connectionFds);
                    foreach ($fds as $fd) {
                        if (in_array($fd, $connectionFds)) {
                            $ws->push($fd, json_encode([
                                'type' => 'message',
                                'data' => $data,
                            ]));
                        }
                    }
                }

                break;
        }
    }

    echo "收到消息: {$frame->data}\n";
//    foreach ($ws->connections as $fd) {
//        $ws->push($fd, $frame->data);
//    }
});

$ws->start();