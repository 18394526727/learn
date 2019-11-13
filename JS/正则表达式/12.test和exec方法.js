/**
 * test和exec方法，是正则表达式对象的方法
 */
var reg = /\w/;
var str = "ab";
console.log(reg.test(str));
/**
 * 上述情况下，永远打印出来的都是true
 */
var reg2 = /\w/g;
var str2 = "ab";
console.log(reg2.test(str2));
console.log(reg2.test(str2));
console.log(reg2.test(str2));
console.log(reg2.test(str2));
console.log(reg2.test(str2));
console.log(reg2.test(str2));
/**
 * true
true
false
true
true
false
 */
/**
 * 在上述情况下，会出现一个长度为三的循环，即：前两次打印true，而第三次打印false，
 * 这是因为：当正则对象的global属性为true时，它的lastIndex属性是变化的，即每次test之后都会加一
 * 下面这个答应会告诉你这个现象
 */
var s = "123";
var r = /\d/g;
while (r.test(s)) {
    console.log(r.lastIndex, "哦")
}
/**
 * 1 '哦'
    2 '哦'
    3 '哦
 */
/**
 * 可见：其lastIndex属性是每次test之后都会递增的
 */
/**
 * ==================================================================================
 */
/**
 * 2.exec方法
 */

var ss = "[]{}12wwe23qwe|\\";
var reg = /(\d{2})(\w{3})/;
// console.log(reg.exec(ss))
/**
 * 结果（非全局搜索）：
 * [ '12wwe',               结果匹配的文本
  '12',                     分组的内容
  'wwe',                    分组的内容（有几个显示几个）
  index: 4,                 结果匹配的文本的第一个字符所对应的的下标
  input: '[]{}12wwe23qwe|\\',
  groups: undefined ]
 */
var r = reg.exec(ss)
var reg2 = /(\d{2})(\w{3})/g;
while (r=reg2.exec(ss)) {
    console.log(reg2.lastIndex + "\t" + r.index + "\t" + r.toString())
}
/**
 * 结果：
 *  9       4       12wwe,12,wwe
    14      9       23qwe,23,qwe
    可见，在全局的情况下，lastIndex和index都是会变化的，但在非全局下，lastIndex始终为0
 */
