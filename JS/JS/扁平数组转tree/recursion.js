function findParent({ obj, list }) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      if (obj.pid === item.id) {
        Array.isArray(item['children']) ? item['children'].push(obj) : item['children'] = [obj]
      } else {
        if (item['children'] && item['children'].length) {
          findParent(item['children'], obj)
        }
      }
    }
  }
}

function toTree(arr) {
  arr = arr.sort((a, b) => a.pid - b.pid) // 按照pid排序
  let list = []
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    if (obj.pid == 0) { // 将第一层树插入
      list.push(obj)
    } else {
      findParent({ obj, list }) // 将obj插入到res树中
    }
  }
  return list
}

console.time("使用递归")
toTree([...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,])
// toTree([...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,
//   ...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,...arr,])
console.timeEnd("使用递归")
