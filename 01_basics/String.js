const name="sonalika"
const repoCount=50

console.log(name + repoCount+ "Value") //outdated syntax

//use backtick
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

//STRING DECLARATION 
const gameName=new String('sonalika')
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('o'));

const newString= gameName.substring(0,4); //upto index 3 only
console.log(newString);

const anotherString=gameName.slice(0,4);
const anotherString=gameName.slice(-8,4); //starting from end 
console.log(anotherString);

const url="https://sonalika.com/sonalika%20chandra"

console.log(url.replace('%20', '-')); //replace %20 in string with -
console.log(url.includes('sonalika')); //return true if url include that substring

/************/
//if we want to split the url string from where we encounter a similar type of char that we gave 
console.log(url.split('-')); //split the string from - character and insert them all in an array ---- []

