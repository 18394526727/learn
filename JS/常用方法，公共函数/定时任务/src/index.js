var schedule = require('node-schedule');
var date = new Date(2019, 7, 26, 20, 6, 0);

var j = schedule.scheduleJob(date, function(){
  console.log('现在时间：',new Date());
});
j();
