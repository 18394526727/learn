// 一：boolean	string	number
// 手动指定类型，比如
let isTrue = "";
// 自动映射类型()
let isTrue1 = false;
//二：数组、元祖（特殊数组：长度确定，每个元素的类型确定）
// 这三种 方法完全一样！！！
let list1 = [1, 2, 3];
let list2 = [1, 2, 3]; // 泛型写法
let list3 = [1, 2, 3]; // 自动推断
let list4 = [1, "2"]; // 相当于 let list4: (string | number)[]  这是自动推断的
// 元组: tuple,是一个固定长度，固定元素类型的数组
let person1 = [1, "2"]; //元祖必须手动指定长度和元素类型
// 注意，下面这个不是元祖(这个只能称之为混合类型数组)
let person2 = [1, "3"]; // let person2: (string | number)[]
// 三：联合(Union)与字面量(Literal)类型
// 联合类型
let a; // 所谓联合类型，就是一个变量同时支持多种数据类型（不仅包括基本类型，也可以包含我们自定义的类型）
// 字面量类型,可以称之为枚举类型的变种
let b;
// 枚举类型
// 自动从0开始映射
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
console.log(Color);
// 四，枚举类型
// 手动指定了某一个之后，后面的排着序进行映射
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 0] = "red";
    Color1[Color1["green"] = 5] = "green";
    Color1[Color1["blue"] = 6] = "blue";
})(Color1 || (Color1 = {}));
console.log(Color1);
// 全部手动指定映射---变成对象了艹
var Color2;
(function (Color2) {
    Color2["red"] = "niHao";
    Color2["green"] = "gouZei";
    Color2["blue"] = "AA";
})(Color2 || (Color2 = {}));
console.log(Color2);
// 五、Any 与 unknown
// any，顾名思义，你可以给这个变量赋各种不同的值，以及调用各种方法
let c = 1;
c = 2;
// c()
// c.toString() // 这些都不会有错误提示，因此比较危险
// 而unknown就是来为了解决这个问题
let d = 1;
d = 2;
// d() // 这两个都会报错
// d.toUpperCase() // 这两个都会报错
// 因为我们需要手动避免，比如
if (typeof d === "function") {
    d();
}
if (typeof d === "string") {
    d.toUpperCase();
}
// 六、void、undefined 与 Never：这3个主要用在指定函数的返回值的类型的
// ！！！但是你又会发现，这3种函数的返回值都用void来表示也可以
// 例1：这个函数没有返回值，那就指定返回值为void---其实不写也可以，因为ts中有自动类型推断
function fun1(a, b) {
    console.log(a + b);
}
// 例2：这个函数有返回值，且实际存在但是类型未定义（undefined-未定义）
function fun2(a, b) {
    console.log(a + b);
    return;
}
// 例3：这种函数永远执行不到头，也就是说，永远（never）不会返回
function throwErrorFn(message, code) {
    throw {
        message, code
    }; // 在throw这里就抛出了，不会再往下走
    //    xxxxxx throw后面的代码永远不会执行
}
console.log("结果为", throwErrorFn("接口为找到", 404));
function li4() {
    while (true) {
        //    xxxx
    }
}
console.log("??");
// 七、类型适配（类型断言） Type Assertions
// 这个实际中用到的会很少
//如：
let aa;
aa = "123";
aa.endsWith("1");
// 这一行的时候，在有的编辑器中(webstorm中可以)可能会不能自动带出后面的endsWidth方法
// 因为aa的类型还是any，这一点不会改变。下面我们有两种方法，让它能够“暂时”按照你暂时指定的类型来推断
let aa1 = aa.endsWith("1");
// let aa2 = (<string>aa).endsWith("1");
