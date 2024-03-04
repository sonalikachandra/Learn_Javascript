const score=400
console.log(score);
const balance= new Number(100)
console.log(balance); // return type Number as we declared it as new Number above

//convert to string
console.log(balance.toString()); //output- 100 

//convert to string and take length of string
console.log(balance.toString().length); //output- 3 (length of string 100 = 3)

//SET PRECISION (toFixed())
console.log(balance.toFixed(2));

/*
const otherNum=123.3556
console.log(otherNum.toPrecision(3));//output- 123(set precision till 3 digit length number and approx it)
*/

/*
const otherNum=123.8556
console.log(otherNum.toPrecision(3));//output- 124(set precision till 3 digit length number and approx it)
*/

const otherNum=123.3556
console.log(otherNum.toPrecision(2));//output- 123(set precision till 3 digit length number and approx it)

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'));//to write the number in Indian Format(10,00,000)


//+++++++++++MATHS++++++++++++//
console.log(Math) //output--->Object [Math] {}   //no detailed properties of Math

// console.log(Math.abs(-2));//2
// console.log(Math.round(4.5662)); //5
// console.log(Math.ceil(4.34)); //5
// console.log(Math.floor(4.567)); //4
// console.log(Math.min(-4,5,7,23,12,6)); // -4
// console.log(Math.max(-2,5,78,45,23,56));
console.log(Math.random()); //between 0 to 1 any value
console.log(Math.random()*10); //between 0 to 10 any value
console.log((Math.random()*10)+1); //between 1 to 10 any value

console.log((Math.floor(Math.random()*10)+1)); // integer between 1 to 10 (approx to lowest value)

const min=10
const max= 20



console.log(Math.floor(Math.random()*(max-min+1)+min));  //(max-min+1) to get range between max and min and +min to ensure we want minimum min 

