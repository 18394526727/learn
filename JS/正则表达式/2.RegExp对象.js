/**
 * 两种定义方式
 */
/**
 * 1.字面量
 */
var str = 'he is a dgo is';
var reg = /\bis\b/g;
console.log(str.replace(reg,'啊啊啊'));//he 啊啊啊 a dgo 啊啊啊
/**
 * /b边界，见6
 * g表示全文匹配
 */
/**
 * 2.构造函数的形式:
 * 在这种形式中，修饰符应该放在第二个字符串中
 */
var reg = new RegExp('\\bis\\b','g');
console.log(str.replace(reg,'啊啊啊'));
/**
 * i表示忽略大小写，如
 */
var str1 = 'he is a boy ,Is He?';
console.log(str1.replace(/\bis\b/gi,'嗯嗯'));//he 嗯嗯 a boy ,嗯嗯 He?