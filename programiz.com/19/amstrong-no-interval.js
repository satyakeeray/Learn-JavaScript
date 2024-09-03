/**
 * JavaScript Program to Find Armstrong Number in an Interval
 * 
 * 371 = 1^3 + 7^3 + 3^3 = 371
 */


let lowerLimit = Number( prompt("Enter lower limit: ") );
let upperLimit = Number( prompt("Enter upper limit: ") );
let numbers = [];
if( upperLimit > lowerLimit ) {
	for( let i = lowerLimit; i <= upperLimit; i++ ) {
		let checkIsAmstrongNumber = isAmstrongNumber(i);
		if( checkIsAmstrongNumber ) {
			numbers.push(i);
		}		
	}
	if( numbers.length > 0 ) {
		console.log(`The Amstrong numbers between ${lowerLimit} and ${upperLimit} is : ` + numbers.join(',') );
		document.write(`The Amstrong numbers between ${lowerLimit} and ${upperLimit} is : ` + numbers.join(',') );
	} else {
		console.log(`There is no Amstrong numbers between ${lowerLimit} and ${upperLimit}` );
		document.write(`There is no Amstrong numbers between ${lowerLimit} and ${upperLimit}` );
	}
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
