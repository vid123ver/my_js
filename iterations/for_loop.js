//for loop:1
for(let index = 0 ; index < 10 ; index++){
    const element = index;
    console.log(element);
}
array = [1 ,3 ,4,3,3,4,3,2,,4,5,6,8,8,8,8,8,]
// console.log(element); //throw an error

for (let i = 0; i < array.length; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j < array.length; j++) {
        console.log(`Inner loop ${j} and outer loop ${i}`);          
    }
}

//continue and break

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


//'for of' loop:2

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}


const word = "Hello"
for (const greet of word) {
    //console.log(`Each char is ${greet}`)
}


//MAP(object): no dublicate value i.e. only unique values(collection of key value pair)
const map = new Map()
map.set('IN' , 'india');
map.set('ch' , 'china');
map.set('SL' , 'lanka');
map.set('Ne' , 'nepal');
console.log(map);//print the map
//o/p
// Map(4) {
//     'IN' => 'india',
//     'ch' => 'china',
//     'SL' => 'lanka',
//     'Ne' => 'nepal'
//   }
for(const key of map){//print map
    console.log(key);
}
//o/p
// [ 'IN', 'india' ]
// [ 'ch', 'china' ]
// [ 'SL', 'lanka' ]
// [ 'Ne', 'nepal' ]

//iterating a map
for(const [key , value] of map){
    console.log(key ,":-" , value);
} 
for(const [key] of map){
    console.log(key);
} 
for(const [,value] of map){
    console.log(value);
} 

//object::
const myObj = {
    'game':'NfS',
    'game2':'spider'
}
//itersting  a object in same manner does not work
// for(const [key , value] of myObj){
//     console.log(key ,":-" , value);
// } 
//forin loop:3
//for iterating a object we use forfin loop
for (const key in myObj) {
    console.log(`${key} is correspoding to ${myObj[key]}`);
}
/* imp note  */
//for in loop in array:gave index
//for of loop in array:gave value


//foreach loop:4//most important

const coding = ["js", "rb", "py", "java", "cpp"];

//method1
// coding.forEach(function (any_val){
//     console.log(any_val);
// })

//method2
// coding.forEach((item) => {
//     console.log(item);
// })

//method3
// function printme(item){
//     console.log(item);
// }
// coding.forEach((printme))

//method4
coding.forEach((item , index , arr) => {
    console.log(item , index , arr);
})

/*important*/
//iterating a array having objecet as values
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

//forEach loop cant return a value
myCoding.forEach( (item) => {
    console.log(item.languageName);
    // return item;//not work
} )
//filter:::
const mynums = [1,2,3,4,5,6,7,8,9,10];
// const newnums = mynums.filter( (num) => num > 4  );//this will gave expected output
const newnums = mynums.filter((num)=>{return num > 4})//here return keyword is mandotary
// console.log(newnums);

//using for each loop
const newNums = []

mynums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )
// console.log(newNums);