function arrayToTree(itemArr) {
  const result = [];   // 存放结果集
  const itemMap = {};  //
  for (const item of itemArr) {
    const id = item.id;
    const pid = item.pid;

    // ①如何Map里没有这个item，那么就需要把它挂载到Map上去（顺便也要把它的children挂上去-默认是一个空数组）
    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id].children
    }

    // ③把某个item挂载到Map上之后，取出，命名为treeItem（因为Map终究会变成一个tree）
    const treeItem = itemMap[id];

    // ④父id为0的，它就是最顶级的，因此直接push
    // ⑤父id不为0的，说明它不是最顶级，那么咱们就找到它的父元素，把它给接纳进去
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  // console.log(itemMap);
  return result;
}

console.time("使用地址映射")
arrayToTree([...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,])
// arrayToTree([...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,])
console.timeEnd("使用地址映射")
