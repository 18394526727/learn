/*
* dateFormater：格式化时间
* */

function dateFormater(formater, t){
  let date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formater.replace(/YYYY|yyyy/g,Y)
    .replace(/YY|yy/g,Y.substr(2,2))
    .replace(/MM/g,(M<10?'0':'') + M)
    .replace(/DD/g,(D<10?'0':'') + D)
    .replace(/HH|hh/g,(H<10?'0':'') + H)
    .replace(/mm/g,(m<10?'0':'') + m)
    .replace(/ss/g,(s<10?'0':'') + s)
}
// dateFormater('YYYY-MM-DD HH:mm', t) ==> 2019-06-26 18:30
// dateFormater('YYYYMMDDHHmm', t) ==> 201906261830
/*
* 29、dateStrForma：将指定字符串由一种时间格式转化为另一种
* */
function dateStrForma(str, from, to){
  //'20190626' 'YYYYMMDD' 'YYYY年MM月DD日'
  str += ''
  let Y = ''
  if(~(Y = from.indexOf('YYYY'))){
    Y = str.substr(Y, 4)
    to = to.replace(/YYYY|yyyy/g,Y)
  }else if(~(Y = from.indexOf('YY'))){
    Y = str.substr(Y, 2)
    to = to.replace(/YY|yy/g,Y)
  }

  let k,i
  ['M','D','H','h','m','s'].forEach(s =>{
    i = from.indexOf(s+s)
    k = ~i ? str.substr(i, 2) : ''
    to = to.replace(s+s, k)
  })
  return to
}
// dateStrForma('20190626', 'YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('121220190626', '----YYYYMMDD', 'YYYY年MM月DD日') ==> 2019年06月26日
// dateStrForma('2019年06月26日', 'YYYY年MM月DD日', 'YYYYMMDD') ==> 20190626

// 一般的也可以使用正则来实现
//'2019年06月26日'.replace(/(d{4})年(d{2})月(d{2})日/, '$1-$2-$3') ==> 2019-06-26
