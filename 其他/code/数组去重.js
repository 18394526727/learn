let arr = [1, 1, 2, 3, 4]
//方法一：
/**
 * 原理：
 * 弄一个对象，
 *      对象有这个属性，则删除这个元素，同时i--，继续弄这个元素
 *      对象没有这个属性，让它成为对象的属性
 */
function uniq(arr) {
    var obj = {}
    for (var i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = true;
        } else {
            arr.splice(i, 1) //删除当前元素
            i--;
        }
    }
    obj=null;//释放，优化内存
    return arr;
}
console.log(uniq(arr))
//方法二：利用set结构不包含相同元素的原理
function uniq2(arr) {
    return [...new Set(arr)]
}
console.log(uniq2(arr))
//方法三：
/**
 * 借助新数组
 */
function uniq3(arr) {
    let newArr = [];
    arr.forEach(element => {
        if (newArr.indexOf(element) === -1)
            newArr.push(element)
    });
    return newArr
}
console.log(uniq3(arr))
//方法四:原理：indexOf只能返回第一个该元素的下标
function uniq4(arr){
    return arr.filter((element,index)=>{
        return index===arr.indexOf(element)
    })
}
console.log(uniq4(arr))



/**
 * 基于内置类的原型扩展他的实例所可以调用的方法
 * 这样就可以在Array.prototype里面看到这个函数
 */

Array.prototype.myUniq=function(){
    console.log(this)//this就是当前类的实例
    return arr.filter((element,index)=>{
        return index===arr.indexOf(element)
    })
}
console.log(arr.myUniq(),'aaa')