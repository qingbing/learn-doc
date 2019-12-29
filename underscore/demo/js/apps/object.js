define(["require", "underscore"], function (require, _) {
    var s_object = {name: "qingbing", sex: 'nan', age: 33};
    var s_fn = function () {
        this.name = "qingbing";

        this.show = function () {
            console.log(`My name is ${this.name}`);
        }
    };
    /**
     * _.keys(object)
     *      获取object对应的所有key
     */
    // var r_keys = _.keys(s_object);
    // console.log(r_keys); // ["name", "sex", "age"]

    /**
     * _.allKeys(object)
     *      获取object拥有的所有属性名称，对function
     */
    // var r_prop = _.allKeys(new s_fn());
    // console.log(r_prop); // ["name"]
    // s_fn.prototype.sex = 'nan';
    // var r_prop = _.allKeys(new s_fn());
    // console.log(r_prop); // ["name", "sex"]

    /**
     * _.values(object)
     *      返回对象所有的属性值
     */
    // var r_vals = _.values(s_object);
    // console.log(r_vals); // "qingbing", "nan", 33]
    // var r_prop = _.values(new s_fn());
    // console.log(r_prop); // ["qingbing"]

    /**
     * _.mapObject(object, iteratee, [context])
     *      类似 map，作用于对象，转换每个属性的值
     *      返回的是副本
     */
    // var t_object = {start: 3, end: 7};
    // var r_object = _.mapObject(t_object, function (val, key) {
    //     console.log(key, val);
    //     return val + 2;
    // });
    // console.log(t_object); // {start: 3, end: 7}
    // console.log(r_object); // {start: 5, end: 9}

    /**
     * _.pairs(object)
     *      把对象转换成 [key, val] 的形式
     */
    // var r_array = _.pairs(s_object);
    // console.log(r_array); // [["name", "qingbing"], ["sex", "nan"], ["age", 33]]

    /**
     * _.invert(object)
     *      返回一个object副本，使其键（keys）和值（values）对换
     */
    // var r_object = _.invert(s_object);
    // console.log(r_object); // {33: "age", qingbing: "name", nan: "sex"}

    /**
     * 未理解
     * _.create(prototype, props)
     *      创建具有给定原型的新对象， 可选附加props 作为 own的属性。 基本上，和Object.create一样， 但是没有所有的属性描述符
     */
    // var n_fn = _.create(s_fn.prototype, {sex: 'nan'});
    // console.log(s_fn);
    // console.log(n_fn);

    /**
     * _.functions(object)
     *      返回一个对象里所有的方法名
     */
    // var r_fname = _.functions(new s_fn);
    // console.log(r_fname); // ["show"]

    /**
     * _.findKey(object, predicate, [context])
     *      查找对象的key, 检测用 predicate 回调返回true表示找到
     *      找到返回对应的key，找不到返回"undefined"
     */
    var r_exist = _.findKey(s_object, function (val, key, object) {
        return val === 'qingbing';
    });
    console.log(r_exist);

    /**
     * _.extend(destination, *sources)
     *      复制source对象中的所有属性覆盖到destination对象上，并且返回 destination 对象. 复制是按顺序的, 所以后面的对象属性会把前面的对象属性覆盖掉
     *      r_object === s_object
     */
    let r_object =  _.extend(s_object, {qq: 50});
    console.log(r_object); // {name: "qingbing", sex: "nan", age: 33, qq: 50}
    console.log(s_object); // {name: "qingbing", sex: "nan", age: 33, qq: 50}

    return {};
});
































































