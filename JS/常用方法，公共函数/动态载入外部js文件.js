/**
 * 下文实现了载入http://webapi.amap.com/maps?v=1.4.15&key=7b62330aa528ed249dd1e7ce67301d5f&plugin=AMap.CircleEditor且下载完毕之后
 * 再载入本地的外部文件 /start/js/order/carManager/epidemicArea.js 的过程
 */
asyncAddScript('http://webapi.amap.com/maps?v=1.4.15&key=7b62330aa528ed249dd1e7ce67301d5f&plugin=AMap.CircleEditor').onload = function () {
    asyncAddScript("/start/js/order/carManager/epidemicArea.js")
};

function asyncAddScript(url) {
    let jsApi = document.createElement('script');
    jsApi.charset = 'utf-8';
    jsApi.src = url;
    document.body.appendChild(jsApi);
    return jsApi;
}