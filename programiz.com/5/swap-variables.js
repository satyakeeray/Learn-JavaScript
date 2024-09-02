/*
JavaScript Program to Swap Two Variables
*/

let firstNumber = Number(prompt("Enter first number: "));
let secondNumber = Number(prompt("Enter second number: "));
console.log( "-------- Before ----------", "\n" , `Value of first number : ${firstNumber}` , "\n" , `Value of first number : ${secondNumber}` , "\n" );
document.write( "-------- Before ----------", "</br>" , `Value of first number : ${firstNumber}` , "</br>" , `Value of first number : ${secondNumber}` , "</br>" );

/* Using thrid variables */
let temp = firstNumber;
firstNumber = secondNumber;
secondNumber = temp;

/* Without using third variable */

// firstNumber = firstNumber + secondNumber;
// secondNumber = firstNumber - secondNumber;
// firstNumber = firstNumber - secondNumber;

console.log( "-------- After ----------", "\n" , `Value of first number : ${firstNumber}` , "\n" , `Value of first number : ${secondNumber}` , "\n" );
document.write( "-------- After ----------", "</br>" , `Value of first number : ${firstNumber}` , "</br>" , `Value of first number : ${secondNumber}`, "</br>" );