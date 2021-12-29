interface IPoint3 {
    X: number;
    Y: number;
    drawPoint: () => void;
    getDistance: (p: IPoint3) => number
}

export class Point3 implements IPoint3 {
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
