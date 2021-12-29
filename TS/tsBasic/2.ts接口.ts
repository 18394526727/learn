// 一：object类型
// 在js中，声明的对象是键值对，在ts中，可以理解为“键-类型”对
// 1、自动推断 “键-类型”对, 鼠标移上去，可以看到： const obj1: {name: string, age: number}
const obj1 = {
    name: "HonneyHao",
    age: 25
}
obj1.age = "2" // 会有警告
// 2、手动指定 “键-类型”对,这个在对陌生变量解构赋值的时候常会用到
const obj2: {
    name: string,
    age: number
} = {
    name: "HonneyHao",
    age: 25
}
// 例：
const funGetObjValue = (param: { name: string, age: number }) => {
    const {name, age} = param;
    return name + age
}
// 3、手动指定 object类型，属于多此一举，因为相当于指定了一个{}
const obj3: object = {
    name: "HonneyHao",
    age: 25
}
console.log(obj3.name) // 因为相当于指定了一个{}


// 二：interface接口
// 举一个坐标点的例子
interface Point {
    x: number,
    y: number
}
// 显示坐标点
const getLocation = (point: Point) => {
    console.log(point.x, point.y)
}
// 获取两点距离
const getDistance = (point1: Point, point2: Point) => {
//    xxx
}
// 这两个与坐标有关系的函数，明显是可以放到同一个类里面的（这里也涉及到我们的高内聚，低耦合）

// 一个稍微复杂一点的接口: 每一个接口类型呢，他都可以与其他基本ts数据类型一样，被赋给变量（或变量的属性）
interface Tree{
    id: string;
    title: string,
    children: Array<Tree>
}

