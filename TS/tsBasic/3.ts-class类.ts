// 一、我们先来声明一个坐标点-乞丐版
interface IPoint {
    x: number;
    y: number;
    drawPoint: () => void;
    getDistance: (p: IPoint) => number
}

// 接口对于类来讲，就像是一份说明书，但接口中所声明的，都是“公开的（public）”的成员变量和成员方法

class Point implements IPoint {
    x: number;
    y: number;
    drawPoint = () => {
        console.log({
            x: this.x,
            y: this.y
        })
    }
    getDistance = (p: IPoint) => {
        return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
    }
}

// 上述就是classPoint对接口IPoint的基本实现，
// const p1 = new Point();
// p1.drawPoint();
// p1.x = 12;
// p1.drawPoint();
// { x: undefined, y: undefined }
// { x: 12, y: undefined }
// 但这种实现方式缺点有：
// 1、初始化时无法给成员变量赋值
// 2、想指定成员变量的值的的时候只能一个一个赋值，这样不好---我们可以使用constructor(构造函数)

// 二，在ts中，构造函数constructor与ES6中完全兼容
interface IPoint1 {
    // x: number;
    y: number;
    drawPoint: () => void;
    getDistance: (p: IPoint) => number
}

class Point1 implements IPoint1 {
    // 如何生命成员变量呢？
    // 方式一：使用public（可省略）/private修饰词 对成员变量先进行声明，后在构造函数中赋值
    // 例如：
    // private x: number; // Field is assigned only in the constructor and can be made readonly
    // private y: number; // Field is assigned only in the constructor and can be made readonly
    //
    // constructor(x: number, y: number) {
    //     this.x = x;
    //     this.y = y
    // }

    // 方式二：在构造函数中使用关键词修饰参数，---此时会自动声明成员变量并自动赋值
    // 使用public关键词的时候，在外部仍然可以使用 实例.成员变量 来对成员变量进行赋值
    //  而使用private的时候就不可以了（会编译报错）---使用private声明的成员变量，不可以在interface中声明出来
    // ？代表可选参数
    constructor(private x: number, public y: number) {
    }

    drawPoint = () => {
        console.log({
            x: this.x,
            y: this.y
        })
    }
    getDistance = (p: IPoint1) => {
        return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
    }
}

const p1 = new Point1(10, 20);
// p1.drawPoint();


// 三：Access Modifier--访问修饰符：
// public：1、在interface中会有体现，2、可以使用 实例.成员变量名 来访问和赋值
// private：1、在interface中无体现，2、不可以使用 实例.成员变量名 来访问（只能在class内部使用this来访问)），亦不可以这样赋值
// protected

// 四：getter、setter
// 在有的场景下，被private修饰的方法，我们仍然需要对其进行取值和赋值，这个时候应该怎么办呢？
// 还有，比如说我们对private修改的属性x，我们想在赋值的时候对其赋的值进行限制---这个时候就会用到setter

// getter、setter ，提供了一种间接的方法，来对实例中的private、变量进行访问何赋值的方案
interface IPoint2 {
    setX: (number) => void;
    getX: () => number;
    drawPoint: () => void;
    getDistance: (p: IPoint) => number
}

class Point2 implements IPoint2 {
    constructor(private x: number, public y: number) {
    }

    setX = (value: number) => {
        if (value < 0) {
            throw new Error("x不可以为负数")
        }
        this.x = value
    }

    getX = () => {
        return this.x
    }

    drawPoint = () => {
        console.log({
            x: this.x,
            y: this.y
        })
    }

    getDistance = (p: IPoint) => {
        return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
    }
}

// const p2 = new Point2(-10, 20)
// p2.drawPoint()

// 接下来，我们使用set和get，对Point2的对x的赋值取值方法进行一波简化
interface IPoint3 {
    X: number;
    Y: number;
    drawPoint: () => void;
    getDistance: (p: IPoint3) => number
}

class Point3 implements IPoint3 {
    constructor(private x: number, private y: number) {
    }

    set X(value: number) {
        if (value < 0) {
            throw new Error("x不可以为负数")
        }
        this.x = value
    }

    get X() {
        return this.x
    }

    set Y(value: number) {
        if (value < 0) {
            throw new Error("y不可以为负数")
        }
        this.y = value
    }

    get Y() {
        return this.y
    }

    drawPoint = () => {
        console.log({
            x: this.X,
            y: this.Y
        })
    }

    getDistance = (p: IPoint3) => {
        // return Math.pow(p.x - this.X, 2) + Math.pow(p.y - this.y, 2)// 此时使用p.x会显示： Property 'x' does not exist on type 'IPoint3'. Did you mean 'X'?
        return Math.pow(p.X - this.x, 2) + Math.pow(p.Y - this.y, 2)
    }
}

const p3 = new Point3(10, 20)
p3.X = 15 // 会报错
p3.drawPoint()
