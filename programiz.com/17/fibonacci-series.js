/**
 *  JavaScript Program to Print the Fibonacci Sequence
*/

let numberofTerms = Number( prompt("Enter the number: ") );
let sum = 0;
let fistTerm = 0;
let secondTerm = 1;
let allTerms = [];
allTerms.push(fistTerm, secondTerm);
allTerms.push(secondTerm);
for( let i = 1 ; i <= ( numberofTerms - 2 ) ; i++ ) {
	sum  = fistTerm + secondTerm;
	fistTerm = secondTerm;
	secondTerm = sum;
	allTerms.push(sum);
}
console.log(`Fibonaci series of ${numberofTerms} terms  is : ` + allTerms.join(","));
document.write(`Fibonaci series of ${numberofTerms} terms  is : ` + allTerms.join(","));