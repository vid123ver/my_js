const tinderUser = new Object();
tinderUser.id = "1234abaa";
tinderUser.name = "vv";
tinderUser.isLoggedin = false;
const regularUser = {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"vvverma",
            lastname:"verma"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);
const obj1 = {1:"a" , 2:"b"};
const obj2 = {3:"a" , 4:"b"};
const obj3 = {obj1 , obj2};
// console.log(obj3);

// const obj4 = Object.assign(obj1 , obj2);//obj1:target , obj2:source
// console.log(obj4);
// console.log(obj1);

const obj5 = Object.assign({} , obj1 , obj2);//here target is {}!

//most used syntax
const obj6 = {...obj1 , ...obj2};
console.log(obj6);


//handles values from database:many objects inside a single array
const users_vv = [
    {
         id:1,
         email:"ihghrg"
    },
    {
        id:1,
        email:"ihghrg"
    },
    {
        id:1,
        email:"ihghrg"
    }
   
   
]
// console.log(users_vv[1].email);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));

/* ************************* */
const course = {
    coursename: "js ",
    price: '2l',
    courseinstructor:'rahul'
}

// course.courseinstructor;
// ****************  destructuring a object  ********************************
// console.log(courseinstructor);//-------->> gave error 
const {courseinstructor} = course;
console.log(courseinstructor);//------->>now no error showmn
const {courseinstructor : inst} = course;
console.log(inst);
