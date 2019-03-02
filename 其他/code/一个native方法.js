String.prototype.repeat = String.prototype.repeat || function (t) { //这样可以防止原油的方法被覆盖掉
    let str = '';
    for (let i = 0; i < t; i++) {
        str += this;
    }
    return str;
}
let abc = ''
console.log('你好你麻痹的'.repeat(2))
Array.prototype.uniq = Array.prototype.uniq || function () {
    return [...new Set(this)]
}
let arr = [1, 1, 2, 2, 3, 4]
console.log(arr.uniq())
/**
 * call改变this指向
 */
let obj = {
    first:{
        name:"狗子",
        say:function(){
            return this.name
        }
    }
}
var name = '张三';
console.log(obj.first.say())
let say=obj.first.say;
//此处通过call改变了this的指向，从而改变了结果
console.log(say.call(obj.first))