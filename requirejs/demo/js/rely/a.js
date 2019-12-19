define(["require", "rely/b"], function (require, b) {
    return {
        id: "id_a",
        say: function () {
            console.log("a say : a.id = " + this.id + "; b.id = " + b.id);
            b.say();
        }
    };
});