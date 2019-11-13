// 1、1、2、3、5、8、13、21、34
// 1、求斐波斐波那契呀数列的数组
let feibo = (n) => {
  //先判断是正整数
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
};
let feiboInnerFn = (n) => {
  let initArr = [1, 1];
  let i = 2;
  do {
    let len = initArr.length;
    initArr.push(initArr[len - 2] + initArr[len - 1]);
    i++;
  } while (i <= n);
  return initArr
};
/*console.time();
console.log(feibo(5000000));
console.timeEnd();*/

// 递归求斐波那契压竖列的第n项
function feibon(n) {
  if (n <= 2) {
    return 1;
  } else {
    return feibon(n - 2) + feibon(n - 1);
  }
}


//循环求斐波那契竖列的第n项

function loopFeiBo(n) {
  let result = 0,
      numben = 1,
      numbenn = 1,
      index = 0;

  do {
    result = numben + numbenn;
    numben = numbenn;
    numbenn = result;
    index++;
  } while (index < n && n > 2);

  return result;
}

console.time();

console.log(loopFeiBo(4));

console.timeEnd();
