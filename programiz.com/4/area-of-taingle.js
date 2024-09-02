/**
 * JavaScript Program to Calculate the Area of a Triangle
 * 
 */

let sideA = Number(prompt("Enter the value of side A: "));
let sideB = Number(prompt("Enter the value of side B: "));
let sideC = Number(prompt("Enter the value of side C: "));
let semiPerimeter = ( sideA + sideB + sideC ) / 2;
let innerCalculation = semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC);
if( innerCalculation > 0 ) {
	let area = Math.sqrt( innerCalculation );
	document.write(`The area of traingle is : ${area}`);
	console.log(`The area of traingle is : ${area}`);
} else {
	document.write("The traingle can't be formed");
	console.log("The traingle can't be formed");
}
