// 一：boolean	string	number
// 手动指定类型，比如
let isTrue: string = "";
// 自动映射类型()
let isTrue1 = false


//二：数组、元祖（特殊数组：长度确定，每个元素的类型确定）

// 这三种 方法完全一样！！！
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]// 泛型写法
let list3 = [1, 2, 3] // 自动推断

let list4 = [1, "2"] // 相当于 let list4: (string | number)[]  这是自动推断的

// 元组: tuple,是一个固定长度，固定元素类型的数组
let person1: [number, string] = [1, "2"] //元祖必须手动指定长度和元素类型
// 注意，下面这个不是元祖(这个只能称之为混合类型数组)
let person2 = [1, "3"] // let person2: (string | number)[]


// 三：联合(Union)与字面量(Literal)类型
// 联合类型
let a: string | number | null; // 所谓联合类型，就是一个变量同时支持多种数据类型（不仅包括基本类型，也可以包含我们自定义的类型）

// 字面量类型,可以称之为枚举类型的变种
let b: 1 | 2 | string;

// 枚举类型
// 自动从0开始映射
enum Color { // { '0': 'red', '1': 'green', '2': 'blue', red: 0, green: 1, blue: 2 }
    red,
    green,
    blue
}

console.log(Color)

// 四，枚举类型
// 手动指定了某一个之后，后面的排着序进行映射
enum Color1 {
    red,
    green = 5,
    blue
}

console.log(Color1)

// 全部手动指定映射---变成对象了艹
enum Color2 { // { red: 'niHao', green: 'gouZei', blue: 'AA' }
    red = "niHao",
    green = "gouZei",
    blue = "AA"
}

console.log(Color2)

// 五、Any 与 unknown
// any，顾名思义，你可以给这个变量赋各种不同的值，以及调用各种方法
let c: any = 1
c = 2
// c()
// c.toString() // 这些都不会有错误提示，因此比较危险
// 而unknown就是来为了解决这个问题
let d: unknown = 1
d = 2
// d() // 这两个都会报错
// d.toUpperCase() // 这两个都会报错
// 因为我们需要手动避免，比如
if (typeof d === "function") {
    d()
}
if (typeof d === "string") {
    d.toUpperCase()
}


// 六、void、undefined 与 Never：这3个主要用在指定函数的返回值的类型的
// ！！！但是你又会发现，这3种函数的返回值都用void来表示也可以
// 例1：这个函数没有返回值，那就指定返回值为void---其实不写也可以，因为ts中有自动类型推断
function fun1(a: string, b: string): void {
    console.log(a + b);
}

// 例2：这个函数有返回值，且实际存在但是类型未定义（undefined-未定义）
function fun2(a: string, b: string): undefined {
    console.log(a + b);
    return
}

// 例3：这种函数永远执行不到头，也就是说，永远（never）不会返回
function throwErrorFn(message: string, code: number): never {
    throw {
        message, code
    } // 在throw这里就抛出了，不会再往下走
    //    xxxxxx throw后面的代码永远不会执行
}

console.log("结果为", throwErrorFn("接口为找到", 404));

function li4(): never {
    while (true) {
        //    xxxx
    }
}

console.log("??")


// 七、类型适配（类型断言） Type Assertions
// 这个实际中用到的会很少
//如：
let aa: any;
aa = "123";
aa.endsWith("1");
// 这一行的时候，在有的编辑器中(webstorm中可以)可能会不能自动带出后面的endsWidth方法
// 因为aa的类型还是any，这一点不会改变。下面我们有两种方法，让它能够“暂时”按照你暂时指定的类型来推断
let aa1 = (aa as string).endsWith("1"); // tsc --target ES6 1.ts数据类型.ts
let aa2 = (<string>aa).endsWith("1"); // tsc --target ES6 1.ts数据类型.ts


// 八：函数类型
// 首先来讲，TS中的函数拥有js中函数的所有特性，但又有主要3个不同点
// 1: 可以设定参数的类型
const func1 = function (num: number) {

}
// 2：可以设定返回值的类型,注意！！ts中的参数都是必传的，不必传的话，可以加?，见例3
const func2 = function (num, b): string {
    return num.toString()
}
func2(100, 2)
// 3：可选参数（注意可选参数必须是从后往前的）
const func3 = function (a: number, b?: string) {
}
// 4.参数默认值，同js
const func4 = function (a: number, b: string = "2") {
}
