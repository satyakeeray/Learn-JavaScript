/**
 * JavaScript Program to Find the Factors of a Number
 */

let number = parseInt( prompt("Enter the number: ") );
let factors = [];
for(let i = 1; i <= number; i++) {
	if( number%i == 0 ) {
		factors.push(i)
	}
}
if( factors.length > 0 ) {
	console.log( `The factor of the number ${number} is ` + factors.join(',') );
	document.write( `The factor of the number ${number} is ` + factors.join(',') );
} else {
	document.write(`There are no factors of the number ${number}`);
}
