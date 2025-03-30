//singleton: made when we use constructor
//in this file all opertaions are made on singleton !!
const Sym = Symbol("keys");//symbol
//object literals

const Juser = {
    name: "vidhan verma",
    "full name":"VidhanVerma2.0",
    [Sym]:"vv_key",
    age:18,
    location:"Up",
    email:"vidhanverma2311@gmail.com",
    isLoggedin: false,
}
console.log(Juser.name);
console.log(Juser["name"]);//can access with bothn'.' and '[]' 
console.log(Juser["full name"]);//cant do with '.'
console.log(Juser[Sym]);//sumbols can't access with '.'
console.log(typeof Juser[Sym]);
console.log(typeof Sym);
console.log(Juser.email);
Juser.email = "vvverma@gmail.com";
console.log(Juser.email);
//freezing
// Object.freeze(Juser);
// Juser.email = "vvverma@gmail.com";//no change !
console.log(Juser.email);
console.log(Juser);
Juser.greeting = function(){
    console.log("\nhello from vidhan verma");
}
Juser.greeting2 = function(){
    console.log(`\nhello from vidhan verma , ${this.name}`);
}
console.log(Juser.greeting());
console.log(Juser.greeting2());

