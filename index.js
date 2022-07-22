const moment = require ("moment");
const lodash = require ("lodash");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));   
console.log(moment().format("MMM Do YY"));   
console.log(moment().add(7, 'days').calendar() );
console.log(moment().add(7, 'months').calendar() );
console.log(moment().add(7, 'years').calendar() );
console.log(moment().subtract(7, 'days').calendar());
console.log(moment().subtract(7, 'months').calendar());
console.log(moment().subtract(7, 'years').calendar());

console.log(moment("20141111", "YYYYMMDD").subtract("20150911", "YYYYMMDD"));
if(moment("2020", "YYYY") % 4 == 0) {
    console.log('its a leap year');
}
if(moment("2019", "YYYY") % 4 == 0) {
    console.log('its a leap year');
}
let arr = [2,1,3,4,5,6,7,8,9,10,];
let odd = ["a", "b", "c", "d"];

console.log(lodash.filter(arr,(i) => arr[i] % 2 == 0 ));
console.log(lodash.map(arr,(i) => arr[i] % 2 !== 0 ));
console.log(lodash.includes("a",1));
console.log(lodash.chunk(odd,2));
console.log(lodash.forEach(arr,(i) => console.log(arr[i])));



