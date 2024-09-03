/**
 * JavaScript Program to Find the Sum of Natural Numbers
*/

let number = Number( prompt("Enter the max range : ") );
let sum = 0;
for( let i = 1; i <= number; i++ ) {
	sum += i;	
}
console.log( `Sum of total numbers: ${sum}` );

