// 1、1、2、3、5、8、13、21、34
let feibo = (n) => {
  console.time();
  if ((n & 0) === 0 & n > 0) {
    switch (n) {
      case 1:
        return [1];
        break;
      case 2:
        return [1, 1];
        break;
      default:
        return feiboInnerFn(n);
    }
  } else {
    throwErr("请输入0以上的整数")
  }
  console.timeEnd()
};
let feiboInnerFn = (n) => {
  let initArr = [1, 1];
  let i = 2;
  do {
    let len = initArr.length;
    initArr.push(initArr[len - 2] + initArr[len - 1]);
    i++;
  } while (i <= n) ;
  return initArr
};
console.time();
console.log(feibo(5000000));
console.timeEnd();
