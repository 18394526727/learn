console.time()

function feibo(n) {
    var fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib

}
console.log(feibo(10000000))
console.timeEnd()