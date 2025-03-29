let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

let mycreated_date = new Date(2003,10,14);
// console.log(mycreated_date.toDateString());
let mycreated_date2 = new Date("12-01-2024");
// console.log(mycreated_date2.toDateString());

let myTimestamp = Date.now();
console.log(Math.floor(Date.now()/1000));
console.log(Math.floor(myTimestamp/1000));
console.log(Math.floor(Date.now()/1000));
console.log(mydate.getDate());
mydate.toLocaleString('default', {
    weekday:"long",
    timeZone:"Date";
})