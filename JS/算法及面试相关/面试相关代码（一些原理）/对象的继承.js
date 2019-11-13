/**
 * 1.原型链继承
 *      把属性加在this上面
 *      把方法加在原型上
 */
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.say=function(){
    console.log(this.name)
}

/**
 * 子对象：
 *      方法和属性都加在原型上，
 *      而这个圆形要经过父类的初始化
 */
function Male(){

}
Male.prototype=new Person("erzi",21)
//子类的新属性
Male.prototype.eat=function(food){
    console.log(`吃${food}`)
}

let m = new Male();
// console.log(m.eat('shift'))

/**
 * 2.class继承
 */
class M{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    say(){
        console.log(this.name)
    }
}
class N extends M{
    constructor(name,age,height){
        super(name,age);
        this.height=height;
    }
    //新增的方法：
    cao(){
        console.log(cao)
    }
}

/**
 * call继承
 */
function Aaa(a,b){
    this.a = a;
    this.b = b;
}
Aaa.prototype.eat = ()=>{
    console.log(this.a)
}
function B(a,b){
    Aaa.call(this,a,b)
}
let a = new B('aaa','bbb')
console.log(a)