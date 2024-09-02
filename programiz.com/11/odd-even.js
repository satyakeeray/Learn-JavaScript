/*
* Javascript Program to Check if a Number is Odd or Even
*/

let number = Number( prompt("Enter the number : ") );
let checkNumber = ( number % 2 == 0 ) ? ` number is even` : ' number is odd';
console.log(`${number}` + checkNumber );
document.write(`${number}` + checkNumber );