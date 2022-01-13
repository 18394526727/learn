// 接口对于类来讲，就像是一份说明书，但接口中所声明的，都是“公开的（public）”的成员变量和成员方法
class Point {
    constructor() {
        this.drawPoint = () => {
            console.log({
                x: this.x,
                y: this.y
            });
        };
        this.getDistance = (p) => {
            return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
        };
    }
}
class Point1 {
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
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.drawPoint = () => {
            console.log({
                x: this.x,
                y: this.y
            });
        };
        this.getDistance = (p) => {
            return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
        };
    }
}
const p1 = new Point1(10, 20);
class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.setX = (value) => {
            if (value < 0) {
                throw new Error("x不可以为负数");
            }
            this.x = value;
        };
        this.getX = () => {
            return this.x;
        };
        this.drawPoint = () => {
            console.log({
                x: this.x,
                y: this.y
            });
        };
        this.getDistance = (p) => {
            return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
        };
    }
}
class Point3 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.drawPoint = () => {
            console.log({
                x: this.X,
                y: this.Y
            });
        };
        this.getDistance = (p) => {
            return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
        };
    }
    set X(value) {
        if (value < 0) {
            throw new Error("x不可以为负数");
        }
        this.x = value;
    }
    get X() {
        return this.x;
    }
    set Y(value) {
        if (value < 0) {
            throw new Error("y不可以为负数");
        }
        this.y = value;
    }
    get Y() {
        return this.y;
    }
}
const p3 = new Point3(10, 20);
p3.X = 15; // 会报错
p3.drawPoint();
