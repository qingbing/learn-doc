// 强制命名空间, 不太建议用的方式(一旦使用，必须在config.path中配置key相同的命名空间，并指定路径，在require时也必须使用该命名空间来引用)
define("test/hasName", ["app/define-key-value"], function (keyValue) {
    return {
        id: keyValue.id + " - with-name"
    };
});

//
// define("foo/title",
//     ["my/cart", "my/inventory"],
//     function (cart, inventory) {
//         //Define foo/title object in here.
//     }
// );



