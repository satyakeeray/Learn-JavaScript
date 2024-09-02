/**
 * JavaScript Program to Solve Quadratic Equation
 *  y = ax2 + bx + c = 0
*/

let a = Number( prompt("Enter value of a : ") );
let b = Number( prompt("Enter value of b : ") );
let c = Number( prompt("Enter value of c : ") );
let discriminant = ( Math.pow( b, 2 ) - ( 4 * a *c ) );
let x1 = 0;
let x2 = 0;
if( discriminant == 0 ) {
	x1 = x2 = -b / ( 2 * a );
	console.log( `The values of the roots is : ${x1}` );
	document.write( `The values of the roots is : ${x1}` );
} else if (discriminant > 0) {
	x1 = ( -b + Math.sqrt( discriminant ) ) / ( 2 * a );
	x2 = ( -b - Math.sqrt( discriminant ) ) / ( 2 * a );
	console.log( `The values of the x1 roots is : ${x1}` );
	console.log( `The values of the x2 roots is : ${x2}` );
	document.write( `The values of the x1 roots is : ${x1}` );
	document.write( `The values of the x2 roots is : ${x2}` );
} else {
	console.log("The roots are imaginary");
	document.write("The roots are imaginary");
}
