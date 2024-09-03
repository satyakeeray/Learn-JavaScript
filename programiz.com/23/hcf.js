/**
 * JavaScript Program to Find HCF or GCD
*/

let firstNumber  = parseInt( prompt("Enter the first number") );
let secondNumber = parseInt( prompt("Enter the second number") );
let firstNumberDivisor  = [];
let secondNumberDivisor = [];
for( let i = 1; i <= firstNumber; i++ ) {
	if( firstNumber % i == 0 ) {
		firstNumberDivisor.push(i);
	}
}
for( let j = 1; j <= secondNumber; j++ ) {
	if( secondNumber % j == 0 ) {
		secondNumberDivisor.push(j);
	}
}
const filteredArray  = firstNumberDivisor.filter( value => secondNumberDivisor.includes(value) );
const gcd = Math.max(...filteredArray);
console.log( `GCD of ${firstNumber} and ${secondNumber} is : ${gcd}` );
document.write( `GCD of ${firstNumber} and ${secondNumber} is : ${gcd}` );