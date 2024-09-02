/*
 * JavaScript Program to Check Prime Number
*/

let number = Number( prompt("Enter the number : ") ); 
// if( number == 0 || number == 1 ) {
// 	console.log(`${number} is not a prime number`);
// 	document.write(`${number} is not a prime number`);
// 	return false;
// }
let count = 0;
for( let i = 2; i <= (number - 1); i++ ) {
	let rem = number%i;
	if(rem == 0) {
		count++;
		break;
	}
}
if( count == 1 ) {
	console.log(`${number} is not a prime number`);
	document.write(`${number} is not a prime number`);
} else {
	console.log(`${number} is a prime number`);
	document.write(`${number} is a prime number`);
}