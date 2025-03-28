const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));


const other_name = 13234.543; 
console.log(other_name.toPrecision(4));//different from toFixed and should be handle with care

/* *************************************///math///*************************************** */
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));//imp
console.log(Math.ceil(4.2));//um imp
console.log(Math.floor(4.8));//un imp
//similar methods like .max , .min
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

//if having min max constraint
let max = 20;
let min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
