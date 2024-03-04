"use strict";  //Treat all JS code as newer version
//alert("hello")
//alert(3+3) // we r using node js not browser(so no output here)
//console.log(3+3);
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNum=1397947950757837979995657n

const heroes= ["shaktiman","nagraj", "doga"]
let myObj={
    name: "sonalika",
    age: 22,

}
const myfuntion= function(){
    console.log("Hello");
}

console.log(typeof bigNumber);
//*********************//
//STACK(Primitive)
let myName="Sonalika"
let anotherName=myName
anotherName="chaiaurcode"  //stack me phle myName tha , then anotherName jo ek copy h myName ka wo gya 
console.log(anotherName)

//HEAP(Non-Primitive)*****
let userOne={
    email:"user@gmail.com",
    name:"Yay",
    upiId:"user@ybl"
}

let userTwo=userOne  //here reference to same object as userOne is given to userTwo (in heap)
userTwo.email="user2@gmail.com" //changes for one would make changes to all as all have same reference
console.log(userOne.email);
console.log(userTwo.email);
