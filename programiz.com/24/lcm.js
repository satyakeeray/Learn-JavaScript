/**
 * JavaScript Program to Find LCM
*/


function getGCD( firstNumber, secondNumber ) {
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
	return gcd;
}

let firstNumber  = parseInt( prompt("Enter the first number") );
let secondNumber = parseInt( prompt("Enter the second number") );
let gcd = getGCD( firstNumber, secondNumber );
let lcm = ( firstNumber * secondNumber ) / gcd;
console.log( `LCM of ${firstNumber} and ${secondNumber} is : ${lcm}` );
document.write( `LCM of ${firstNumber} and ${secondNumber} is : ${lcm}` );