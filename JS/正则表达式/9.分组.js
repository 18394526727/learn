/**
 * 1.
 * 如：   abc{3}的意义是：c匹配三次，而ab匹配一次
 * 如何实现abc匹配三次呢？  分组，使用()可达到这个功能，即：
 * (abc){3}
 */
//实现匹配到a1b2c3d4;
var str = "a1b2c3d455";
var reg = /[a-z]\d{4}/g;
console.log(str.replace(reg,"哦"));//匹配不到，其匹配到的是一个字母，三个数字
var reg2 = /([a-z]\d){4}/g;
console.log(str.replace(reg2,"哦"));//哦55 匹配到了


/**
 * 2.或，在正则表达式中使用  |  来实现“或”
 * 如匹配  abcde accce  （分组在或之中的使用）
 */
var str2 = "abcdeaccce";
var reg2 = /abcde|accce/g;//写了两个，比较繁琐
var reg3 = /a(bcd|ccc)e/g
console.log(str2.replace(reg2,'。'));//。。
console.log(str2.replace(reg3,'A'))//AA

/**
 * 反向引用
 * 使用 $n 和 ()  实现分组和分组捕获，捕获到的就是()内的内容，调换$n的顺序，实现对所捕获内容的重排序
 * 如：2015-12-23 ==》 12/23/2015
 */
var date = "2015-12-23";
var dateReg = /(\d{4})-(\d{2})-(\d{2})/;
console.log(date.replace(dateReg,"$2/$3/$1"));//12/23/2015,完美实现效果

/**
 * 忽略分组，我们捕获到了分组，但想要忽略有的分组，怎么办呢？   在分组内加 ?: 即可，如下
 */
var dateReg2 = /(?:\d{4})-(\d{2})-(\d{2})/;//第一个分组被忽略之后，我们是即可操作的只有后两个分组
console.log(date.replace(dateReg2,"$2/$1"));//23/12，可见，这种效果用于提取字符串中的某些部分进行重组