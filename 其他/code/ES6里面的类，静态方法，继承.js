class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //实例方法：
    getName(){
        return this.name
    }
    setName(name){
        this.name = name
    }
    //ES6静态方法:(由类名直接调用)
    static say(){
        console.log(this)
    }
}
//静态属性：Db.name(结合静态方法可以实现单例模式，具体实现见单例.js)
var p = new Person('123',123);
console.log(p.getName())
p.setName("滚")
console.log(p.getName())
Person.say()
//ES6继承：extends关键字实现继承
class Male extends Person{
    constructor(name,age,sex){
        super(name,age);
        this.sex=sex;
        //在constructor里面可以初始化地（对象一创建就开始）运行对象的某些方法
        this.run()
    }
    run(){
        console.log("")
    }
}