/**
 * 
 * JavaScript Program to Find Sum of Natural Numbers Using Recursion
 */

function sumOfNaturalNumbers( number ) {
	if(number > 0) {
        return number + sumOfNaturalNumbers( number - 1 );
    }
    else {
        return number;
    }
}

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

const result = sumOfNaturalNumbers( number );

// display the result
console.log(`The sum is ${result}`);