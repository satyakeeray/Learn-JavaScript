/**
 * JavaScript Program to Check Armstrong Number
 * 
 * 371 = 1^3 + 7^3 + 3^3 = 371
 */

let number = Number( prompt("Enter the number") );
let checkAmstrongNumber = isAmstrongNumber( number );
if( checkAmstrongNumber ) {
	console.log(`Yes! The entered number ${number} is amstromg number.`);
	document.write(`Yes! The entered number ${number} is amstromg number.`);
} else {
	console.log(`No, the entered number ${number} is not an amstromg number.`);
	document.write(`No, the entered number ${number} is not an amstromg number.`);
}

function isAmstrongNumber( number ) {
	let temp 		= number;
	let isAmstrong 	= false;
	let sumOfDigits = 0;
	let noOfDigit 	= countDigits( number );
	while( number != 0 ) {
		let rem = parseInt(number % 10);
		sumOfDigits += Math.pow( rem , noOfDigit );
		number = parseInt(number / 10);
	}
	return isAmstrong =  ( sumOfDigits === temp ) ? true : false;
}


function countDigits( number ) {
	let noOfDigit = 0;
	while( number != 0) {
		number = parseInt(number / 10);
		noOfDigit++;
	}
	return noOfDigit;
}
