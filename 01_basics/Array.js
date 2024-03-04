const myArray=[1,2,3,4,5];
const myHeroes=["shaktiman","Baalveer"];
const myArr2=new Array(1,2,3,4,5);
console.log(myArray[0]);

//ARRAY METHODS
console.log(myArr2.includes(9));
myArr2.pop()
myArr2.push(6)
myArr2.unshift(9) //insert at first place of array
console.log(myArr2.includes(9));//true or false if element included in array
console.log(myArr2.indexOf(9));

const newArr= myArray.join()
console.log(newArr);

//slice, splice
console.log("A",myArray);
const myn1=myArray.slice(1,3) // 1 to 3-1
console.log(myn1);
console.log("B",myArray);

const myn2=myArray.splice(1,3) // 1 to 3 //also cut down all the other elements from the array
console.log("C", myArray);
console.log(myn2);


