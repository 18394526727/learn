/**
 * .    [^\r\n]  除了回车符和换行符之外的所有字符
 * \d   [0-9]    数字字符
 * \D   [^0-9]   非数字字符
 * \s   [\t\n\x0B\f\r]  空白符
 * \S   [^\t\n\x0B\f\r]  非空白符
 * \w   [a-z0-9A-Z_]     单词字符（单词，数字，下划线）
 * \W   [^a-z0-9A-Z_]     非单词字符
 * 
 * \b表示单词边界
 * \B表示不是单词边界，见下面例子
 * ^表示以。。。开头
 * $表示以...结尾
 * 
 */


 /**
  * 一个匹配ab数字，下划线的字符类
  */
 var reg = /[ab0-9_]/;
var str = "this is a boy";
//仅匹配is
var reg = /\bis\b/g;
// 仅匹配this中的is（半个单词）
var reg = /\Bis\b/g;
console.log(str.replace(reg,'好的'))

/**
 * 如@1@a@b@c的三种情况
 * 1.匹配所有的@,好说
 * 2.仅匹配中间的@
 * 3.仅匹配第二个
 * 4.仅匹配第三个
 */
var str2 = "@1@a@b@c";
console.log(str2.replace(/@/g,'W'))
console.log(str2.replace(/^@/g,'W'))
console.log(str2.replace(/\B@\B/g,'W'))//未达到目的
console.log(str2.replace(/@c$/g,'Wc'))

var mstr = `a123
b465
c890
`;//匹配到这个多行字符串的所有字母
console.log(mstr.replace(/^\w\d+/gm,'+'));
console.log(mstr.replace(/\w\d+/g,'+'))
