//1.遍历
var arr = [7, -1, 9, 7, -7, -10, 1, -2, 6, 3];
/**
 * forEach(循环)和map（映射（进去几个，出来几个））：
 * 1.可以遍历数组
 * 2.不改变原来的数组
 * 区别：
 * 数组的forEach方法不可以返回一个新的数组，
 * 但map方法可以返回一个新的数组，其元素是原数组的每个元素运算之后的结果
 */
//b的结果是undefined
let b = arr.forEach((v,i,array)=>{
    return v*=2;
})

//c的结果是arr的每一个元素都元素之后返回的结果
let c = arr.map((v,i,array)=>{
   return v*=2;
})
console.log(b,c)
//undefined  [14, -2, 18, 14, -14, -20, 2, -4, 12, 6]


//2.汇总
arr.reduce((a,b)=>{
    // console.log(a+b)//开始：把第一项和第二项进行运算；然后：本上一次的结果和下一项进行运算
    return a+=b
})
//3.数组去重
let arr1 = [...new Set(arr)];
console.log(arr1)

//4.some和every
let a1 = arr.some(i=>{
    return i===-10;
})
let a2 = arr.every(i=>{
    return i===-10;
})
console.log(a1,a2)

//5.在数组中查找某元素
//arr.find()很智障，返回第一个你想要查找的值，不知道有什么卵用，没有返回undefined，用于判断数组中是否存在这个玩意儿
let b1 = arr.find((i)=>{
    return i===3
})
console.log(b1)

//arr.findIndex()返回的是第一个值为7的元素的下标
let b2 = arr.findIndex((i)=>{
    return i===7
})
console.log(b2)
//6.判断数组是否包含某个元素
console.log(arr.includes(3))
//7.参数转化为数组
function silyB(a,s,d,f,g){
    console.log([...arguments])
}
/* silyB(1,2,3,4,5)// [1, 2, 3, 4, 5]
silyB(1,2)//[1,2] */
//8.过滤器
arr.filter((i)=>{
    return i>=5
})
//9.把对象的属性名拆分出来，形成一个数组
var obj = {
    name:"gouZi",
    age:12,
    hobbies:["a","b","c"],
    eat:(a)=>{return Math.pow(100,a)}
}

let cdd = Object.keys(obj);
console.log(cdd)
//把对象的属性值形成一个数组
let aaaa = Object.keys(obj).map(key => obj[key])
console.log(aaaa)