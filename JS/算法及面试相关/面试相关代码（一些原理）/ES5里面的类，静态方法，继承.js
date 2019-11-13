function Person(name,age){
    this.name=name;
    this.age=age;
    this.say=function(){
        console.log(this.name)
    }
}
//原型链上面的属性和方法可以被实例所共享
Person.prototype.sex="男";
Person.prototype.work=function(){
    console.log(this.age)
}
//静态方法！！(静态方法只可以直接被类名调用)
Person.go=function(){
    return Math.pow(12,12)
}
//静态属性！！(静态方法只可以直接被类名调用)
Person.teDian = "狗逼"
console.log(Person.go())