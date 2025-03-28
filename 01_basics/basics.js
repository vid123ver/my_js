//use let and const instead of var becaue of block scope
"use strict"; //use all js code  as newer version
// console.log(3+3);
// console.log("vidhan");
{
let name = "vidhanverma";
let age  = 18;
let isLoggedin = false;
}
{
//data types in javascript : primitive
//1)number
//2)bigInt
//3)string
//4)null:empty value
//5)undefined:no value assigned
//6)symbol:unique
//7)boolean
// console.log(typeof undefined);
// console.log(typeof null);
//ex:
const bignumber = 213456754324356765432n;
//here n specifies the bigint

}
{
    //reference(non-primitive)
    // Array , object , functions
    const heros = ["shaktiman" , "najraj" , "doga"];
    let my_obj = {
        name:"vidhanVerma",
        age:22,
    }
    const myfunction = function(){
        console.log("hello world");
    }
    // console.log(typeof my_obj);
    // console.log(typeof heros);
    // console.log(typeof myfunction);
}
{
    // JavaScript is dynamically typed.
    // This means that variable types are determined at runtime, 
    // and you don’t need to specify a variable’s type when declaring it.
}
{
    //data conversion
    let score = 10;
    // console.log(typeof score);
    // i)string to number
    let num = "123";
    let var_in_num = Number(num);
    // console.log(typeof var_in_num);
    // console.log(var_in_num);
    // ii)num to bool
    let isLogged_in = 1;
    let boolean_var = Boolean(isLogged_in);
    // console.log(boolean_var);
    let num2 = "123abc";
    let conv_num = Number(num2);
    // console.log(conv_num);
    
    let val = 23;
    let negval = -val;
    // console.log(negval);
}
{
    let name_ = "vidhan";
    let surname = "verma";
    let fullname = name_+surname;
    // console.log(fullname);
}
//little complex situations 
{
    // console.log("1" + 2);
    // console.log(1 + "2");
    // console.log("1"+3+4);//not prefered
    // console.log(1+3+"4");//not prefered
    // console.log(+true);
    // console.log(+"");

    let num1 , num2 , num3;
    num1 = num2 = num3 = 2+2;
    // console.log(num1);
    // console.log(num2);

    let gameCounter = 100;
    gameCounter++;
    // console.log(gameCounter);
}
{
    //increment opreator
    let x = 4;
    let y = x++;
    // console.log(`x:${x} y:${y}`);
    let z = ++x;
    // console.log(`x:${x} z:${z}`);

}
{
    //comparision operator

    // console.log(2>1);
    // console.log(2>=2);
    // console.log(2<1);
    // console.log(1!=1);
    // console.log(2!=1);
//Avoid these consoles
    // console.log("2">1);
    // console.log("02">1);

    // console.log(null > 0);
    // console.log(null == 0);
    // console.log(undefined == 0);

    //strict check
    // console.log("2" === 2);
}