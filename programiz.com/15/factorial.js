/**
 * JavaScript Program to Find the Factorial of a Number
*/

let number = Number( prompt("Enter the number: ") );
let factorial = 1;
if( number >= 0 ) {
	for( let i = 1; i <= number; i++) {
		factorial = factorial * i;
	}
	console.log( `Factorial of number ${number} is : ${factorial}` );
	document.write( `Factorial of number ${number} is : ${factorial}` );
} else {
	console.log( `Number should be greater than or equal to zero` );
	document.write( `Number should be greater than or equal to zero` );
}
