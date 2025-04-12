//1st promise
const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // now resolve is connected to then 
    } , 1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
} )
//2nd promise
//complete promice(with .then)
new Promise(function(resolve , reject ){
    setTimeout(function(){
        console.log("Async task 2");
    } , 1000)
}).then(function(){
    console.log("Async 2 resolved");
})
//3rd promise
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: "vidhan verma" , email: "vidhanverma2311@gmail.com"});
    } , 1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//4th promise
const promisefour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"vidhan" , password:"123"});
        }
        else{
            reject('ERROR something went wrong');
        }
    } , 1000)
})
//this is not feasiable approch to extract the details
//the appoach which we use here is chaining
// const promise4 = promisefour.then((user) => {    // cant do this !
promisefour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("the promice is either resolved or rejected"))



const promisefive = new Promise(function(resolve , reject){
    setTimeout(function (){
        let error = true;
        if(!error) {
            resolve({username: "vidhan verma" , password : "123"});
        }
        else{
            reject('Error: JS went wrong');
        }
    } , 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promisefive ;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();
//we can consume promise by any of above two method as we do in promise4 and in promise5 !!



//important
// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data); 
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})