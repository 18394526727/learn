function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    yield '我好了，你呢';
    // return 'ending';
}

var hw = helloWorldGenerator();
/**
 * 生成器函数每一次执行它的next方法，都会返回一个对象：{value：，done：}
 *      每一次执行它的next方法，会执行一次，直到执行完一个yield
 *      done为false表示遍历还未结束
 * 当所有的yield都执行完毕之后，下一次执行next时done才会返回true
 */
console.log(hw.next())//{value: "hello", done: false}
console.log(hw.next())//{value: "world", done: false}
console.log(hw.next())//{value: "我好了，你呢", done: false}
console.log(hw.next())//{value: "ending", done: true}
console.log(hw.next())//{value: undefined, done: true}


/**
 * generator函数可以不使用yield语句，这时就变成了单纯的暂缓执行函数
 */
function* f(){
    console.log("123");
    return "11"
}

var generator = f();
setTimeout(() => {
    generator.next()
}, 1000);