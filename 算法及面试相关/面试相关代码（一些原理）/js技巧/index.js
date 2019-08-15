/**
 * 1、使用Boolean过滤数组中的所有假值
 */
let arr = [1, 2, 3, "", null, undefined, 0];
console.log(arr.filter(Boolean))
/**
 * 2、可以使用双位操作符来替代正数的 Math.floor()，替代负数的 Math.ceil()。双否定位操作符的优势在于它执行相同的操作运行速度更快。
 * 3、也可以使用 |0 来实现取整
 */
console.log(~~4.9 === 4);
console.log(~~-4.9 === -4);
console.log(3.3 | 0) //3
console.log(-3.3 | 0) //3
/**
 * 4、判断奇偶数 &1
 */
console.log(7 & 1) //1
console.log(6 & 1) //0
/**
 * 5、函数默认值
 * 为传递的参数井使用默认值
 */
function func(a, b = 2, c = 3) {
  return a * b * c
}

/**
 * 6、强制参数（使用函数默认值和抛错函数）
 */
throwErr = () => {
  throw new Error("缺少参数")
}
foo = (param = throwErr()) => {
  return param
}
// foo()
foo(22)
/**
 * 7、一次性函数
 * 在函数体里覆写当前函数，那么可以创建一个一次性的函数，重新赋值之前的代码相当于只运行了一次，适用于运行一些只需要执行一次的初始化代码
 */
var sca = function () {
  console.log('msg')
  sca = function () {
    console.log('foo')
  }
}
sca() // msg
sca() // foo
sca() // foo
/**
 * 8、字符串比较时间先后
 * 字符串比较大小是按照字符串从左到右每个字符的 charCode来的，但所以特别要注意时间形式注意补0
 */
console.log("21.00" > "22.00")
console.log("21:00" > "22:00")
/*
* 9、统计数组中相同项的个数
* */
let cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
let carsObj = cars.reduce(function (obj, name) {
  obj[name] = obj[name] ? ++obj[name] : 1;
  return obj;
}, {});
carsObj;
/*
* 10、接收函数返回的多个结果
* 在下面的代码中，我们从/post中获取一个帖子，然后在/comments中获取相关评论。由于我们使用的是async/await，函数把返回值放在一个数组中。而我们使用数组解构后就可以把返回值直接赋给相应的变量
* */

/*async function getFullPost(){
  return await Promise.all([
    fetch('/post'),
    fetch('/comments')
  ]);
}
const [post, comments] = getFullPost();*/
/*
* 使用结构删除不必要属性
* 现在想取obj里面除了weight之外的其它苏醒形成新的对象，如何操作？
* */
let obj = {
  name:"张叶磊",
  height:"10000",
  weight:[1,2,4,5,6,7,]
};
//Rest element must be last element
var {weight,...newObj} = obj;
console.log(newObj);
