/* function formatUrlParams(url) {
    if (/\?/.test(url)) {
        let urlObject = {};
        let urlString = url.substring(url.indexOf("?") + 1);
        let urlArray = urlString.split("&");
        for (let i = 0, len = urlArray.length; i < len; i++) {
            let urlItem = urlArray[i];
            let item = urlItem.split("=");
            urlObject[item[0]] = item[1];
        }
        return urlObject;
    }
    return null;
} */
let aaa = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx'
console.log(formatUrlParams(aaa))


function formatUrlParams(url) {
    if (/\?/.test(url)) {
        let str = url.substring(url.indexOf('?') + 1)
        let array = str.split('&');
        let urlObj = {};
        for (let i = 0, l = array.length; i < l; i++) {
            let temArr = array[i].split('=');
            urlObj[temArr[0]] = temArr[1]
        }
        return urlObj;
    }
    return null;
}

console.log(aa)
for(var aa = 0;aa<10;aa++){
    console.log(aa)
}
console.log(aa)