var images = [
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=546536165,4125480817&fm=26&gp=0.png',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3394263821,1263517319&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3394263821,1263517319&fm=26&gp=0.png',
    'http://img0.imgtn.bdimg.com/it/u=2460425048,1105923532&fm=26&gp=0.jpg',
    'http://img1.imgtn.bdimg.com/it/u=3623102503,3326492920&fm=26&gp=0.png'
]
console.log(images)
// https:\/\/.+\.png    \用于转义， .匹配所有字符    +表示匹配多个    .png表示匹配.png，起前面的\表示转义    
// https:(\/\/.+\.png)   ()表示分组，分为$1，$2，$3等等，方便后续的处理
var dates = [
    '2006/02/06',
    'a12006/02/062',
    'test/0/sd',
    '1998-03-23',
    '2006:02:06',
]
/**
 * \d{4}[-/]\d{2}[-/]\d{2}
 * d是数字，{}是匹配数量，[]里面放置的，表示是“或”
 */
/**
 * ^\d{4}[-/]\d{2}[-/]\d{2}$
 * ^表示开头，$表示结尾
 */
/**
 * ^(\d{4})[-/](\d{2})[-/](\d{2})$
 * ()表示分组，分组可以干什么？可以执行再排序、替换。。。
 */