/**
 * JavaScript Program to Display the Multiplication Table
*/

let number = Number( prompt("Enter the number: ") );
let range = Number( prompt("Enter the range: ") );
if( number > 0 && range > 1 ) {
	for( let i = 1; i <= range; i++ ) {
		let multiplecation = number * i;
		console.log(`${number} X ${i} = ${multiplecation}`);
	}
}