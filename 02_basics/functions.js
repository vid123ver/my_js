function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
}
sayMyName();

function addTwoNumbers(number1 , number2){
    // console.log(number1 + number2);//below console gave undefined behavior
    return number1 + number2;
}
const result = addTwoNumbers(3 , 5);
console.log("Result: " , result);

function loginUserMessage(username = "sam"){//gaving a default name
    if(username === undefined){
        console.log("please enter a ");
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("vidhan verma"));

function calculateprice(...num1){
    return num1;
}
console.log(calculateprice(200 , 300 , 400 , 500));


function calculateprice2(val1 , val2 ,  ...num2){//here val1 , val2 consists of 200 , 300 and rest values are in nums2
    return num2;
}
console.log(calculateprice2(200 , 300 , 400 , 500));