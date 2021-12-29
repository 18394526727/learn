// 泛型
// 1、解决的问题（意义）：相当于一个数据模板，你往这个模板里面输入什么类型，他就会根据你输入的类型，来推断生成具体的确定的类型
// 2、泛型是一种动态类型
// 最基本的泛型的使用
let n2: (number | string)[];
// 的泛型写法为：
let n1: Array<number | string>;


// 泛型的背景：声明一个数组，我们想获取数组中的最后一个元素
const getLastInArray = (arr: Array<number>) => {
    return arr[arr.length - 1]
}

const a1 = getLastInArray([1, 2, 3]) // ts提示： const a1: number
// 此时如果我们想使用这个方法来获取["1","3"],就会报错了。
// 我们可以：
const getLastInArray1 = (arr: Array<number | string>) => {
    return arr[arr.length - 1]
}

// 但是我们也可以这样：
// 第一个T： <T> 是他吗泛型函数的固定语法
// 第二个T就是我们要动态传入的类型
// 第三个T就是我们要动态返回的类型
// 下面两行写法意义相同
// const getLastInArray3 = <T>(arr: T[]):T => {
const getLastInArray3 = <T>(arr: Array<T>):T => {
    return arr[arr.length - 1]
}
// 此时
const a3 = getLastInArray3([1,"2"])
// 此时a3的类型提示为： const a3: string | number、
// 说明a3的类型是根据我们动态传入的类型，来推断出来的（返回类型）

const a4 = getLastInArray3([1,2,3])
// 我们可以看到：const a4: number
// 此时如果我们手动指定泛型类型，即：
const a41 = getLastInArray3<number>([1,2,3])
// 的意义是不大的，但是：

// 当我们输入的类型没有覆盖我们所希望的类型（期望联合类型，但实际输入的是单一类型）的时候，如
const a42 = getLastInArray3<number | string>([1,2,3]) // 此时的提示为： const a42: string | number
// 这就有意义了！
