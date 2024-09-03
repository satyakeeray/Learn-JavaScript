/**
 * JavaScript Program to Check if the Numbers Have Same Last Digit
 */

let firstNumber 	= Number( prompt("Enter first number: ") );
let secondNumber 	= Number( prompt("Enter second number: ") );
let thirdNumber 	= Number( prompt("Enter third number: ") );


let lastDigitOfFisrtNumber 	= 0;
let lastDigitOfSecondNumber = 0;
let lastDigitOfThirdNumber 	= 0;

function getLastDigit( number ) {
	let lastDigit = 0;
	lastDigit =  parseInt( number % 10 );
	return lastDigit;
}

lastDigitOfFisrtNumber = getLastDigit( firstNumber );
lastDigitOfSecondNumber = getLastDigit( secondNumber );
lastDigitOfThirdNumber = getLastDigit( thirdNumber );

if(lastDigitOfFisrtNumber == lastDigitOfSecondNumber && lastDigitOfFisrtNumber == lastDigitOfThirdNumber) {
	console.log(`${lastDigitOfFisrtNumber} ${lastDigitOfSecondNumber} ${lastDigitOfThirdNumber} have the same last digit.`);
}
else {
	console.log(`${lastDigitOfFisrtNumber} ${lastDigitOfSecondNumber} ${lastDigitOfThirdNumber} have different last digit.`);
}

