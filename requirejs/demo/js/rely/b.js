define(["require", "rely/a"], function (require, a) {
    return {
        id: "id_b",
        say: function () {
            // 循环引用（a->b, b->a）需要在被依赖文件中使用require显示引入
            a = require("rely/a");
            console.log("b say : a.id = " + a.id + "; b.id = " + this.id);
        }
    };
});