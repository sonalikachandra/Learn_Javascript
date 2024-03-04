/********Date and Time********/

let myDate=new Date()
console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //Date is an object 

let myCreatedDate= new Date(2023,0,23);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now();
console.log(Math.floor(myTimeStamp/1000)); //divide by 1000 to convert from millisec to sec
console.log(myCreatedDate.getTime());
let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

console.log(`date is${newDate.getDate()}and the time is ${newDate.getTime().toString()}`);

console.log(newDate.toLocaleString('default',{weekday:"long",


}));




