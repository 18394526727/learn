var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = [0,10,20,30,40,50];
var j = schedule.scheduleJob(rule, function(){
  console.log('现在时间：',new Date());
});
