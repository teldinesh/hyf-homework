const today = new Date();
var dateEvent = ['2021-05-24', '2021-05-28',  '2021-05-28', '2021-06-10', '2021-06-18', '2021-06-20', '2021-06-28'];
var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let count = 0;
var date1 = new Date(today);
var date2 = new Date(dateEvent[0]);
var tempDays = dayOfWeek[today.getDay(today)];
var tempDay = Math.ceil((date2-date1)/(1000*60*60*24));
var dateDaysCount = (today.getDay()+tempDay)%7;

console.log(`Today is ${tempDays} and the next event is in ${tempDay} days. Therefore the event will be held on ${dayOfWeek[dateDaysCount]}`);


