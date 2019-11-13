/**
 * 字符类
 * 使用元字符[]来构建一个简单的类
 * 如[abc]表示：one of abc
 * 
 * 使用元字符^创建反向类/负向类
 */
var str = 'a1b2c3';
console.log(str.replace(/[abc]/g,"好的"))
console.log(str.replace(/[^abc]/g,"好的"))