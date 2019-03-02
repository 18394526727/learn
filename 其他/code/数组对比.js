// 你的总的列表数据
var arr1 = [{
        id: '555f4d37-de84-47e3-b427-77c89d289c6d'
    },
    {
        id: '8cdee0f7-a54c-48e4-8fcc-25fc23657195'
    },
    {
        id: '3ca1fb75-ff9d-4fde-bdd1-9f81732ba552'
    },
    {
        id: '7d13242a-3279-4434-a0d4-74e25851c571'
    },
    {
        id: 'd9926422-c901-4cf0-88ef-a1ed85c49f57'
    },
    {
        id: 'c5b4d792-cb58-4440-b51e-76b4f206aa83'
    },
    {
        id: '8d2ed9f3-b472-4aa1-9612-83fd19bd53f7'
    },
    {
        id: 'c4c3eea3-4c43-4098-9af5-c1c239e50ea5'
    },
    {
        id: '0994c204-5e43-424d-a67a-a4fd36453049'
    },
    {
        id: '61b23bb8-925f-41c5-ab68-9e308a68e402'
    },
]

//你的包含已收藏的列表数据
var arr2 = [
    {
        id: '3ca1fb75-ff9d-4fde-bdd1-9f81732ba552'
    },
    {
        id: '7d13242a-3279-4434-a0d4-74e25851c571'
    },
    {
        id: 'd9926422-c901-4cf0-88ef-a1ed85c49f57'
    },
    {
        id: 'c5b4d792-cb58-4440-b51e-76b4f206aa83'
    },
]

function select(arr1,arr2){
    let tempArr = []
    arr2.map((i)=>{
        tempArr.push(i.id)
    });
    arr1.map(i=>{
        console.log()
        if(tempArr.indexOf(i.id)!=-1){
            i.collected = true
        }
    });
}
//你拿着这个被处理过的arr1去渲染页面
select(arr1,arr2)
console.log(arr1)