/*
* JavaScript Program to Find the Largest Among Three Numbers
*/

let number1 = Number(prompt("Enter first number: "));
let number2 = Number(prompt("Enter second number: "));
let number3 = Number(prompt("Enter third number: "));

let largestNumber = number1;

if( number2 > largestNumber ) {
	largestNumber  = number2;
}
if( number3 > largestNumber ) {
	largestNumber  = number3;
}

console.log(`The laragest numbers among ${number1} , ${number2} , ${number3} is ${largestNumber}`);
document.write(`The laragest numbers among ${number1} , ${number2} , ${number3} is ${largestNumber}`);