const myArray = [0 , 1, ,2, 4, 3];
const myHeroes = ["shatiman" , "naagrat"];

const anothet_array = new Array(1 ,2 ,4 ,3,5, 46);
// console.log(anothet_array);

// console.log(anothet_array[1]);
myArray.push(6);
// console.log(myArray);
myArray.pop();
// console.log(myArray);
//join:bind and convert the type of array
const newArray = myArray.join();
// console.log(newArray);

//splics: a slice is removed from original array 
mynum1 = myArray.splice(1 , 3);
// console.log("splice",mynum1);
//slice: creates a shallow copy
mynum2 = myArray.slice(1 , 3);
// console.log("slice",mynum2);


let arr = ["vv" , "vidhan" , "v verma"];
let arr2 = ["gol" , "golu" , "goli"];

//*********option:1
// arr.push(arr2);
// console.log(arr);


//**********option:2 */
const arr3 = arr.concat(arr2);
// console.log(arr3);


//******** option:3
let arr4 = [...arr , ...arr2];
console.log(arr4);

//another_edege cases
const another_Array = [1,2,3,4,5,[1,2,3,4,5,789,78,342] , 54 ,3,5 [3432 , 435 , 5]];
const real_another_Array = another_Array.flat(Infinity);
console.log(real_another_Array);
console.log(Array.isArray("Vidham verma"));
console.log(Array.from("vidhan"));
console.log(Array({name: "vidhan"}))//special case

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 , score2 , score3));