/**
 * 前瞻：匹配到特定的字符串之后，验证其是否符合（不符合）前瞻里面的断言，分别称为正向前瞻（符合）和负向前瞻（不符合）
 * 正向前瞻：exp(?=assert)
 * 负向前瞻：exp(?!assert)
 */
/**
 * 例如：a1bb4c555,
 * 需求：匹配到前一个是word，后一个是数字的字串，并且把word替换为。
 * 
 */
var str = "a1bb4c555";
var reg = /\w(?=\d)/g;
console.log(str.replace(reg,"。"))//。1b。4。。。5
/**
 * 反之：
 */
var reg = /\w(?!\d)/g;
console.log(str.replace(reg,"*"));//a**b*c55*