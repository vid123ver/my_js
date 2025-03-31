const user = {
    username:"vidhan verma",
    price:232,
    welcome:function() {
        console.log(`${this.username} , welcome to website`); 
        console.log(this);
    }
}

user.welcome()
user.username = "sam"//change the context of user
user.welcome();
console.log("hello rahul");
console.log(this);
//note:
//this can't be used inside functions


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//if parentesis are used then return keyword must be used 

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
//if rounded brackets are used then no need of return keyword

//returning object
const addTwo = (num1, num2) => ({username: "hitesh"})    // for returning object it should be wrappes inside parenthesis
console.log(addTwo(3, 4))

/*******   Immediately Invoked Function Expressions (IIFE)   **********/

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that execute immediately after their definition. They are primarily used to create a local scope and avoid polluting the global namespace.

const result = (function(a, b) {
    return a + b;
})(5, 10);

console.log(result); // o/p : 15

//example of IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')