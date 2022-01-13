let arr = [
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 12, name: '部门12', pid: 0 },
    { id: 23, name: '部门23', pid: 12 },
]
function arrayToTree(list) {
    let result = [];
    let itemMap = {};

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const { id, pid } = item;

        // ①itemMap上还没有这个属性的话，创建一个👌🏻

        if (!itemMap[id]) {
            itemMap[id] = {
                children: []
            }
        }

        // ②因为id是不会重复的，所以咱们先把这个id的映射挂载到itemMap上去
        // 其children不要手动的去设值空或者怎么样，而是让它从itemMap的引用数形上去取？意义呢？就是自动获取引用！

        itemMap[id] = {
            ...item,
            children: itemMap[id].children
        }

        const treeItem = itemMap[id];

        // ③顶层的item，其parentId值为0，二话不说，放到最外层的数组里面
        if (pid === 0) {
            result.push(treeItem)
        } else {

            // ③如果itemMap映射上暂时还没有某个元素的pid映射的话，先置为空
            
            if (!itemMap[pid]) {
                itemMap[pid] = {
                    children: []
                }
            }

            // ④如果有，则皆大欢喜，直接把这个item放置到他的父元素的children属性里面
            itemMap[pid].children.push(treeItem)
        }
    }
    console.log(itemMap);
    return result;
}

console.log(arrayToTree(arr));