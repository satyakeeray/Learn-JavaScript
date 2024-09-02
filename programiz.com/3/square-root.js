/*
 * Calculate square root of the number 
*/
let number = parseInt(prompt("Enter the number: "));
if( number > 0 ) {
	let squareRoot = Math.sqrt(number);
	document.write(`The square root of the number ${number} is : ${squareRoot}`);
	console.log(`The square root of the number ${number} is : ${squareRoot}`);
} else {
	document.write("Square root can't be evaluted, because it imaginary number");
	console.log("Square root can't be evaluted, because it imaginary number");
}
