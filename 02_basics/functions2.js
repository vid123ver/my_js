const user = {
    username:"vidhan verma",
    price:342
}
function handleuserobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}handleuserobject(user)

handleuserobject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));