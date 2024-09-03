/*
 * JavaScript Program to Print All Prime Numbers in an Interval
*/

let lowerLimit = Number( prompt("Enter the lower limit : ") );
let upperLimit = Number( prompt("Enter the upper limit : ") );

if( lowerLimit < upperLimit ) {
	let countPrimeNo = 0;
	for( let j = lowerLimit; j <= upperLimit; j++ ) {
		let checkPrime  = checkPrimeNumber(j);
		if( checkPrime ) {
			countPrimeNo++;
			console.log(`${j}`);
			document.write(`${j}` + '\t');
		}
	}
	if( countPrimeNo == 0 ) {
		console.log(`There are no prime number exists between ${lowerLimit} and ${upperLimit}`);
		document.write(`There are no prime number exists between ${lowerLimit} and ${upperLimit}`);
	}
} else {
	console.log("Lower limit must me less than the upper limit");
	document.write("Lower limit must me less than the upper limit");
}


function checkPrimeNumber( number ) {
	let count = 0;
	let isPrime = false;
	if( number > 1 ) {
		for( let i = 2; i <= ( number - 1 ); i++ ) {
			let rem = number%i;
			if( rem === 0 ) {
				count++;
				if( count > 0 ) {
					break;
				}				
			}
		}
		isPrime = ( count === 0 ) ? true : false;
	}
	return isPrime;
}