/**
 * 对象：正则表达式这个对象的属性
 * global g  是否全文搜索   默认false
 * ignoreCase i 是否大小写敏感  默认false
 * multiline m 多行搜索  默认false
 * lastIndex 当前表达式所匹配内容的最后一个字符的下一个位置
 * source：正则表达式的文本字符串
 */

var reg1 = /\w\d{3,9}/;
var reg2 = /\w\d{3,9}/gim;
var str = "w1a1234qweqweqwe";
console.log(reg1.global, reg2.global)
console.log(reg1.ignoreCase, reg2.ignoreCase)
console.log(reg1.multiline, reg2.multiline)
console.log(reg1.source, reg2.source)
/**
 * false true
false true
false true
\w\d{3,9} \w\d{3,9}
 */
console.log(str.replace(reg2,"*"))
console.log(reg2.lastIndex)